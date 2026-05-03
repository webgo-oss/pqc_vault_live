"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 3.5;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>?/+=-";

    // Cache textures so the same character is not redrawn 100s of times
    const textureCache = new Map();

    function makeTexture(char) {
      if (textureCache.has(char)) {
        return textureCache.get(char);
      }

      const size = 128;
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d");

      if (!ctx) {
        const fallback = new THREE.CanvasTexture(c);
        textureCache.set(char, fallback);
        return fallback;
      }

      ctx.clearRect(0, 0, size, size);
      ctx.font = "bold 70px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#a78bfa";

      ctx.globalAlpha = 0.15;
      ctx.filter = "blur(8px)";
      ctx.fillText(char, size / 2, size / 2);

      ctx.globalAlpha = 0.3;
      ctx.filter = "blur(4px)";
      ctx.fillText(char, size / 2, size / 2);

      ctx.globalAlpha = 0.9;
      ctx.filter = "none";
      ctx.fillText(char, size / 2, size / 2);

      const texture = new THREE.CanvasTexture(c);
      texture.needsUpdate = true;

      textureCache.set(char, texture);
      return texture;
    }

    const count = 800;
    const group = new THREE.Group();

    const sprites = [];
    const origins = [];

    for (let i = 0; i < count; i++) {
      const ch = chars[Math.floor(Math.random() * chars.length)];

      const material = new THREE.SpriteMaterial({
        map: makeTexture(ch),
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const sprite = new THREE.Sprite(material);

      const x = (Math.random() - 0.5) * 6;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 6;

      sprite.position.set(x, y, z);
      sprite.scale.set(0.2, 0.2, 0.2);

      group.add(sprite);
      sprites.push(sprite);
      origins.push({ x, y, z, phase: i * 0.1 });
    }

    scene.add(group);

    const mouse = new THREE.Vector2(0, 0);

    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    let frameId = 0;
    let t = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      t += 0.01;

      const mx = mouse.x * 3;
      const my = mouse.y * 3;

      for (let i = 0; i < sprites.length; i++) {
        const sp = sprites[i];
        const o = origins[i];

        const ox = o.x + Math.sin(t + o.phase) * 0.02;
        const oy = o.y + Math.cos(t + o.phase) * 0.02;

        const dx = ox - mx;
        const dy = oy - my;

        // same visual feel, but less expensive than sqrt + extra math
        const distSq = dx * dx + dy * dy;
        const force = 0.06 / (Math.sqrt(distSq) + 0.2);

        sp.position.x += dx * force * 0.6;
        sp.position.y += dy * force * 0.6;

        sp.position.x += (ox - sp.position.x) * 0.03;
        sp.position.y += (oy - sp.position.y) * 0.03;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      group.traverse((obj) => {
        if (obj.isSprite) {
          obj.material.map?.dispose();
          obj.material.dispose();
        }
      });

      textureCache.forEach((tex) => tex.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="three-canvas" />;
}