"use client";

import { useEffect, useRef } from "react";

export const PUR = "#8b5cf6";
export const PL = "#a78bfa";
export const GR = "rgba(139,92,246,0.11)";
export const TX = "rgba(122,114,149,0.9)";

export function setup(id) {
  const c = document.getElementById(id);
  if (!c) return null;

  const dpr = window.devicePixelRatio || 1;
  const w = c.parentElement?.clientWidth || 0;
  const h = c.parentElement?.clientHeight || 0;

  c.width = w * dpr;
  c.height = h * dpr;
  c.style.width = `${w}px`;
  c.style.height = `${h}px`;

  const ctx = c.getContext("2d");
  if (!ctx) return null;

  ctx.scale(dpr, dpr);
  return { ctx, w, h };
}

export function anim(draw, dur = 1100) {
  let s = null;

  function tick(ts) {
    if (!s) s = ts;
    const p = Math.min((ts - s) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    draw(e);
    if (p < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

export function lineChart(id, datasets, labels, ymax) {
  const r = setup(id);
  if (!r) return;

  const { ctx, w, h } = r;
  const pd = { t: 8, r: 6, b: 22, l: 30 };
  const cw = w - pd.l - pd.r;
  const ch = h - pd.t - pd.b;

  anim((p) => {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i <= 4; i++) {
      const y = pd.t + ch - (i / 4) * ch;
      ctx.strokeStyle = GR;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(pd.l, y);
      ctx.lineTo(pd.l + cw, y);
      ctx.stroke();

      ctx.fillStyle = TX;
      ctx.font = "8px monospace";
      ctx.textAlign = "right";
      ctx.fillText(String(Math.round((i / 4) * ymax)), pd.l - 4, y + 3);
    }

    labels.forEach((l, i) => {
      const x = pd.l + (i / (labels.length - 1)) * cw;
      ctx.fillStyle = TX;
      ctx.font = "7px monospace";
      ctx.textAlign = "center";
      ctx.fillText(l, x, h - 4);
    });

    datasets.forEach((ds) => {
      const pts = ds.d.map((v, i) => ({
        x: pd.l + (i / (ds.d.length - 1)) * cw,
        y: pd.t + ch - (v / ymax) * ch,
      }));

      const end = Math.floor(p * (pts.length - 1));
      const frac = p * (pts.length - 1) - end;

      const tip = {
        x: end < pts.length - 1 ? pts[end].x + frac * (pts[end + 1].x - pts[end].x) : pts[end].x,
        y: end < pts.length - 1 ? pts[end].y + frac * (pts[end + 1].y - pts[end].y) : pts[end].y,
      };

      if (ds.fa) {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pd.t + ch);
        for (let i = 0; i <= end; i++) ctx.lineTo(pts[i].x, pts[i].y);
        ctx.lineTo(tip.x, tip.y);
        ctx.lineTo(tip.x, pd.t + ch);
        ctx.closePath();

        const g = ctx.createLinearGradient(0, pd.t, 0, pd.t + ch);
        g.addColorStop(0, ds.fa);
        g.addColorStop(1, "rgba(139,92,246,0)");
        ctx.fillStyle = g;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i <= end; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.lineTo(tip.x, tip.y);
      ctx.strokeStyle = ds.c || PL;
      ctx.lineWidth = 1.8;
      ctx.lineJoin = "round";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(tip.x, tip.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = ds.c || PL;
      ctx.fill();
    });
  });
}

export function barChart(id, labels, vals, colors, ymax) {
  const r = setup(id);
  if (!r) return;

  const { ctx, w, h } = r;
  const pd = { t: 8, r: 6, b: 22, l: 30 };
  const cw = w - pd.l - pd.r;
  const ch = h - pd.t - pd.b;
  const mx = ymax || Math.max(...vals) * 1.2;
  const gap = cw / labels.length;
  const bw = gap * 0.55;

  anim((p) => {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i <= 4; i++) {
      const y = pd.t + ch - (i / 4) * ch;
      ctx.strokeStyle = GR;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(pd.l, y);
      ctx.lineTo(pd.l + cw, y);
      ctx.stroke();

      ctx.fillStyle = TX;
      ctx.font = "8px monospace";
      ctx.textAlign = "right";
      ctx.fillText(String(Math.round((i / 4) * mx)), pd.l - 4, y + 3);
    }

    labels.forEach((l, i) => {
      const x = pd.l + gap * i + gap / 2;
      const bh = (vals[i] / mx) * ch * p;
      const by = pd.t + ch - bh;
      const col = colors ? colors[i] : PUR;

      const g = ctx.createLinearGradient(0, by, 0, pd.t + ch);
      g.addColorStop(0, col);
      g.addColorStop(1, "rgba(91,33,182,0.2)");
      ctx.fillStyle = g;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x - bw / 2, by, bw, bh, [2, 2, 0, 0]);
      else ctx.rect(x - bw / 2, by, bw, bh);
      ctx.fill();

      ctx.fillStyle = TX;
      ctx.font = "7px monospace";
      ctx.textAlign = "center";
      ctx.fillText(l, x, h - 4);
    });
  });
}

export function hBar(id, labels, vals, colors) {
  const r = setup(id);
  if (!r) return;

  const { ctx, w, h } = r;
  const pd = { t: 6, r: 14, b: 6, l: 52 };
  const cw = w - pd.l - pd.r;
  const ch = h - pd.t - pd.b;
  const mx = Math.max(...vals) * 1.15;
  const gap = ch / labels.length;
  const bh = gap * 0.42;

  anim((p) => {
    ctx.clearRect(0, 0, w, h);

    labels.forEach((l, i) => {
      const y = pd.t + gap * i + gap / 2 - bh / 2;
      const bw = (vals[i] / mx) * cw * p;
      const col = colors ? colors[i] : PUR;

      const g = ctx.createLinearGradient(pd.l, 0, pd.l + cw, 0);
      g.addColorStop(0, col);
      g.addColorStop(1, "rgba(91,33,182,0.15)");
      ctx.fillStyle = g;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(pd.l, y, bw, bh, 2);
      else ctx.rect(pd.l, y, bw, bh);
      ctx.fill();

      ctx.fillStyle = TX;
      ctx.font = "8px monospace";
      ctx.textAlign = "right";
      ctx.fillText(l, pd.l - 4, y + bh / 2 + 3);

      ctx.fillStyle = "rgba(255,255,255,0.65)";
      ctx.font = "bold 8px monospace";
      ctx.textAlign = "left";
      ctx.fillText(`${vals[i]}ms`, pd.l + bw + 4, y + bh / 2 + 3);
    });
  });
}

export function radar(id, labels, ds) {
  const r = setup(id);
  if (!r) return;

  const { ctx, w, h } = r;
  const cx = w / 2;
  const cy = h / 2;
  const rad = Math.min(w, h) * 0.36;
  const n = labels.length;
  const ang = (i) => (i / n) * Math.PI * 2 - Math.PI / 2;

  anim((p) => {
    ctx.clearRect(0, 0, w, h);

    for (let ring = 1; ring <= 4; ring++) {
      ctx.beginPath();
      for (let i = 0; i < n; i++) {
        const a = ang(i);
        const rx = cx + Math.cos(a) * (rad * (ring / 4));
        const ry = cy + Math.sin(a) * (rad * (ring / 4));
        i === 0 ? ctx.moveTo(rx, ry) : ctx.lineTo(rx, ry);
      }
      ctx.closePath();
      ctx.strokeStyle = GR;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    labels.forEach((l, i) => {
      const a = ang(i);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad);
      ctx.strokeStyle = GR;
      ctx.lineWidth = 0.5;
      ctx.stroke();

      const lx = cx + Math.cos(a) * (rad + 13);
      const ly = cy + Math.sin(a) * (rad + 13);
      ctx.fillStyle = TX;
      ctx.font = "7px monospace";
      ctx.textAlign = "center";
      ctx.fillText(l, lx, ly + 3);
    });

    ds.forEach((d) => {
      ctx.beginPath();
      d.v.forEach((v, i) => {
        const a = ang(i);
        const rv = rad * (v / 100) * p;
        i === 0 ? ctx.moveTo(cx + Math.cos(a) * rv, cy + Math.sin(a) * rv) : ctx.lineTo(cx + Math.cos(a) * rv, cy + Math.sin(a) * rv);
      });
      ctx.closePath();
      ctx.fillStyle = d.f;
      ctx.fill();
      ctx.strokeStyle = d.s;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  });
}

export function donut(id, slices) {
  const r = setup(id);
  if (!r) return;

  const { ctx, w, h } = r;
  const cx = w / 2;
  const cy = h / 2;
  const ro = Math.min(w, h) * 0.38;
  const ri = ro * 0.56;
  const tot = slices.reduce((a, s) => a + s.v, 0);

  anim((p) => {
    ctx.clearRect(0, 0, w, h);

    let sa = -Math.PI / 2;
    slices.forEach((s) => {
      const sw = (s.v / tot) * Math.PI * 2 * p;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, ro, sa, sa + sw);
      ctx.closePath();
      ctx.fillStyle = s.c;
      ctx.fill();
      sa += sw;
    });

    ctx.beginPath();
    ctx.arc(cx, cy, ri, 0, Math.PI * 2);
    ctx.fillStyle = "#0a0817";
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 12px Syne, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("100%", cx, cy + 4);
  });
}

export function gauge(id, pct, lbl, col) {
  const r = setup(id);
  if (!r) return;

  const { ctx, w, h } = r;
  const cx = w / 2;
  const cy = h * 0.7;
  const rad = Math.min(w, h) * 0.4;

  anim((p) => {
    ctx.clearRect(0, 0, w, h);

    ctx.beginPath();
    ctx.arc(cx, cy, rad, Math.PI, Math.PI * 2);
    ctx.strokeStyle = "rgba(139,92,246,0.1)";
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, rad, Math.PI, Math.PI + Math.PI * (pct / 100) * p);
    ctx.strokeStyle = col || PL;
    ctx.lineWidth = 9;
    ctx.lineCap = "round";
    ctx.stroke();

    ctx.fillStyle = "#fff";
    ctx.font = "bold 16px Syne, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${Math.round(pct * p)}%`, cx, cy - 8);

    ctx.fillStyle = TX;
    ctx.font = "7px monospace";
    ctx.fillText(lbl, cx, cy + 8);
  });
}

export function useRenderGraphs(activeQ) {
  const renderedGraphs = useRef(new Set());

  useEffect(() => {
    const idx = activeQ;
    if (renderedGraphs.current.has(idx)) return;
    renderedGraphs.current.add(idx);

    if (idx === 0) {
      lineChart(
        "g0a",
        [
          { d: [128, 128, 128, 128, 10, 0, 0], c: PUR, fa: "rgba(139,92,246,0.2)" },
          { d: [128, 175, 210, 240, 256, 256, 256], c: "#c084fc", fa: "rgba(192,132,252,0.12)" },
        ],
        ["18", "22", "26", "29", "32", "35", "38"],
        290
      );
      radar("g0b", ["Shor\nAtk", "Side\nChan", "Brute\nForce", "MITM", "HNDL"], [
        { v: [95, 60, 80, 70, 90], s: "#ef4444", f: "rgba(239,68,68,0.12)" },
        { v: [5, 40, 10, 30, 8], s: PL, f: "rgba(167,139,250,0.14)" },
      ]);
    }

    if (idx === 1) {
      lineChart("g1a", [{ d: [20, 45, 90, 160, 230, 295, 360], c: PL, fa: "rgba(167,139,250,0.16)" }], ["64", "128", "256", "512", "768", "1024", "1280"], 400);
      barChart("g1b", ["RSA-2048", "ECC-256", "Kyber-512", "Kyber-768", "Kyber-1024"], [256, 64, 800, 1184, 1568], [PUR, "#6d28d9", PL, PL, "#c084fc"], 1700);
    }

    if (idx === 2) {
      lineChart(
        "g2a",
        [
          { d: [2, 3, 5, 9, 18, 38, 70, 90, 96, 100], c: "#f97316", fa: "rgba(249,115,22,0.15)" },
          { d: [0, 0, 1, 2, 5, 14, 35, 60, 80, 95], c: PL, fa: "rgba(167,139,250,0.1)" },
        ],
        ["24", "25", "26", "27", "28", "29", "30", "32", "35", "40"],
        110
      );
    }

    if (idx === 3) {
      hBar("g3a", ["TLS RSA", "TLS ECDHE", "PQC Kyber", "PQC Hybrid"], [12, 8, 10, 13], [PUR, "#6d28d9", PL, "#c084fc"]);
      donut("g3b", [{ v: 38, c: PL }, { v: 28, c: "#7c3aed" }, { v: 22, c: "#5b21b6" }, { v: 12, c: "#3b0764" }]);
    }

    if (idx === 4) {
      gauge("g4a", 82, "Security score", PL);
      gauge("g4b", 91, "Sign speed", "#c084fc");
      gauge("g4c", 76, "Stateless sig", "#7c3aed");
    }

    if (idx === 5) {
      barChart("g5a", ["Client", "Ciphertext", "Shard", "Decrypt"], [100, 0, 0, 100], [PL, "#2a1060", "#2a1060", PL], 110);
      barChart("g5b", ["Traditional", "ZK Vault"], [100, 6], ["#ef4444", PL], 120);
    }
  }, [activeQ]);
}