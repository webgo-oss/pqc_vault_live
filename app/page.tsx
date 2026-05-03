"use client";

import { useEffect, useRef, useState } from "react";
import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/navbar";
import { useRenderGraphs } from "@/components/graph";
import Footer from "@/components/footer";



export default function Page() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeQ, setActiveQ] = useState(0);
  const [sliderIdx, setSliderIdx] = useState(0);

  useRenderGraphs(activeQ);

  const move = (step: number) => {
    setSliderIdx((prev) => Math.max(0, Math.min(prev + step, 3)));
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${sliderIdx * 354}px)`;
    }
  }, [sliderIdx]);

  return (
    <>
      <ThreeBackground />
<Navbar
  links={[
    { label: "Docs", href: "/docs" },
    { label: "Download", href: "/download" },
  ]}
/>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Secure <span className="gradient">Beyond</span>
            <br />
            The Quantum
            <br />
            Horizon
          </h1>
          <p>
            Protect your data against next-generation threats using advanced
            lattice-based encryption. Built for systems that can't afford to be
            wrong.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary"  onClick={() => window.location.href = "/download"}>Download Now</button>
            <button className="btn btn-outline"  onClick={() => window.location.href = "/docs"}>View Docs</button>
          </div>
        </div>
        <div className="scroll-cue">
          <p>EXPLORE</p>
          <span>
            <i className="bi bi-arrow-down" />
          </span>
        </div>
      </section>

      <section className="qa-section">
        <div className="qa-label-row">
          <span className="eyebrow">// Knowledge Base</span>
          <span className="line" />
          <span className="eyebrow">06 entries</span>
        </div>
        <div className="qa-heading">
          <h2>
            Questions &<br />
            Solutions
          </h2>
        </div>
        <div className="qa-container">
          <div className="qa-tabs">
            {[
              "What is Post-Quantum Cryptography?",
              "How does lattice-based encryption work?",
              "When will quantum computers break encryption?",
              "Is PQC Vault compatible with my stack?",
              "What NIST standards are implemented?",
              "How does zero-knowledge vaulting work?",
            ].map((q, i) => (
              <div
                key={q}
                className={`qa-tab ${activeQ === i ? "active" : ""}`}
                onClick={() => setActiveQ(i)}
              >
                <span className="tab-num">0{i + 1}</span>
                <span className="tab-text">{q}</span>
                <span className="tab-arrow">
                  <i className="bi bi-arrow-right" />
                </span>
              </div>
            ))}
          </div>

          <div className="qa-panel">
            <div className={`qa-answer ${activeQ === 0 ? "active" : ""}`} id="ans-0">
              <div className="ans-eyebrow">// CONCEPT OVERVIEW</div>
              <div className="ans-title">
                Post-Quantum Cryptography is <span className="hl">the next security layer.</span>
              </div>
              <p className="ans-body">
                Classical encryption like RSA and ECC relies on problems a quantum
                computer solves trivially using Shor&apos;s algorithm. PQC replaces
                these with problems that remain exponentially hard on any known
                hardware — classical or quantum.
              </p>
              <div className="graph-area">
                <div className="graph-card">
                  <div className="gc-label">Security Strength — Classical vs Quantum Era</div>
                  <div className="gc-canvas"><canvas id="g0a" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">256</div><div className="gc-stat-lbl">PQC bit security</div></div>
                    <div><div className="gc-stat-val">~0</div><div className="gc-stat-lbl">RSA bits post-quantum</div></div>
                  </div>
                </div>
                <div className="graph-card">
                  <div className="gc-label">Algorithm Vulnerability Radar</div>
                  <div className="gc-canvas"><canvas id="g0b" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">3×</div><div className="gc-stat-lbl">Faster key exchange</div></div>
                  </div>
                </div>
              </div>
              <div className="ans-pills">
                <span className="pill">RSA-successor</span>
                <span className="pill">ECC-resistant</span>
                <span className="pill">Quantum-safe</span>
                <span className="pill">NIST approved</span>
              </div>
            </div>

            <div className={`qa-answer ${activeQ === 1 ? "active" : ""}`} id="ans-1">
              <div className="ans-eyebrow">// TECHNICAL DEEP DIVE</div>
              <div className="ans-title">
                Lattice problems are <span className="hl">computationally intractable.</span>
              </div>
              <p className="ans-body">
                Security is built on Learning With Errors (LWE) — finding short
                vectors in high-dimensional grids. No known quantum algorithm offers
                meaningful speedup against this problem, making it the gold standard
                for key encapsulation.
              </p>
              <div className="graph-area">
                <div className="graph-card">
                  <div className="gc-label">Attack complexity vs. lattice dimension</div>
                  <div className="gc-canvas"><canvas id="g1a" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">2²⁵⁶</div><div className="gc-stat-lbl">Attack floor</div></div>
                    <div><div className="gc-stat-val">0%</div><div className="gc-stat-lbl">Quantum speedup</div></div>
                  </div>
                </div>
                <div className="graph-card">
                  <div className="gc-label">Public key size — algorithm comparison (bytes)</div>
                  <div className="gc-canvas"><canvas id="g1b" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">800B</div><div className="gc-stat-lbl">Kyber-512 key</div></div>
                    <div><div className="gc-stat-val">256B</div><div className="gc-stat-lbl">RSA-2048 key</div></div>
                  </div>
                </div>
              </div>
              <div className="ans-pills">
                <span className="pill">LWE hardness</span>
                <span className="pill">NTRU lattice</span>
                <span className="pill">CRYSTALS-Kyber</span>
              </div>
            </div>

            <div className={`qa-answer ${activeQ === 2 ? "active" : ""}`} id="ans-2">
              <div className="ans-eyebrow">// THREAT TIMELINE</div>
              <div className="ans-title">
                The threat is <span className="hl">sooner than you think.</span>
              </div>
              <p className="ans-body">
                Cryptographically relevant quantum computers are projected between
                2030–2035. &quot;Harvest Now, Decrypt Later&quot; (HNDL) means
                adversaries are recording encrypted traffic today. Any data with a
                10+ year sensitivity window is already at risk.
              </p>
              <div className="graph-area single">
                <div className="graph-card">
                  <div className="gc-label">Quantum threat probability — 2024 to 2040</div>
                  <div className="gc-canvas" style={{ height: 140 }}>
                    <canvas id="g2a" />
                  </div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">~8yr</div><div className="gc-stat-lbl">Estimated horizon</div></div>
                    <div><div className="gc-stat-val">Now</div><div className="gc-stat-lbl">Start migration</div></div>
                    <div><div className="gc-stat-val">72%</div><div className="gc-stat-lbl">Orgs not PQC-ready</div></div>
                  </div>
                </div>
              </div>
              <div className="ans-pills">
                <span className="pill">2030–2035 estimate</span>
                <span className="pill">HNDL threat</span>
                <span className="pill">Migrate now</span>
              </div>
            </div>

            <div className={`qa-answer ${activeQ === 3 ? "active" : ""}`} id="ans-3">
              <div className="ans-eyebrow">// INTEGRATION</div>
              <div className="ans-title">
                Drop-in deployment — <span className="hl">zero downtime.</span>
              </div>
              <p className="ans-body">
                PQC Vault operates in hybrid mode — running classical and
                post-quantum algorithms simultaneously during migration. It
                integrates natively with TLS 1.3, OpenSSL, and all major clouds via
                a single SDK layer with under 2ms handshake overhead.
              </p>
              <div className="graph-area">
                <div className="graph-card">
                  <div className="gc-label">Handshake latency comparison (ms)</div>
                  <div className="gc-canvas"><canvas id="g3a" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">&lt;2ms</div><div className="gc-stat-lbl">PQC overhead</div></div>
                    <div><div className="gc-stat-val">99.9%</div><div className="gc-stat-lbl">Uptime SLA</div></div>
                  </div>
                </div>
                <div className="graph-card">
                  <div className="gc-label">Cloud provider compatibility</div>
                  <div className="gc-canvas"><canvas id="g3b" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">100%</div><div className="gc-stat-lbl">Coverage</div></div>
                  </div>
                </div>
              </div>
              <div className="ans-pills">
                <span className="pill">TLS 1.3</span>
                <span className="pill">OpenSSL plugin</span>
                <span className="pill">Docker-native</span>
                <span className="pill">AWS / GCP / Azure</span>
              </div>
            </div>

            <div className={`qa-answer ${activeQ === 4 ? "active" : ""}`} id="ans-4">
              <div className="ans-eyebrow">// STANDARDS</div>
              <div className="ans-title">
                Fully aligned with <span className="hl">NIST PQC standards.</span>
              </div>
              <p className="ans-body">
                PQC Vault implements all three NIST-standardised algorithms from
                2024: CRYSTALS-Kyber (ML-KEM) for key encapsulation,
                CRYSTALS-Dilithium (ML-DSA) for signatures, and SPHINCS+ for
                hash-based stateless signatures. All formally verified.
              </p>
              <div className="graph-area triple">
                <div className="graph-card">
                  <div className="gc-label">ML-KEM — Kyber (FIPS-203)</div>
                  <div className="gc-canvas"><canvas id="g4a" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">KEM</div><div className="gc-stat-lbl">Key encapsulation</div></div>
                  </div>
                </div>
                <div className="graph-card">
                  <div className="gc-label">ML-DSA — Dilithium (FIPS-204)</div>
                  <div className="gc-canvas"><canvas id="g4b" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">DSA</div><div className="gc-stat-lbl">Digital signature</div></div>
                  </div>
                </div>
                <div className="graph-card">
                  <div className="gc-label">SPHINCS+ (FIPS-205)</div>
                  <div className="gc-canvas"><canvas id="g4c" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">SIG</div><div className="gc-stat-lbl">Hash-based sig</div></div>
                  </div>
                </div>
              </div>
              <div className="ans-pills">
                <span className="pill">ML-KEM</span>
                <span className="pill">ML-DSA</span>
                <span className="pill">SPHINCS+</span>
                <span className="pill">Annual audit</span>
              </div>
            </div>

            <div className={`qa-answer ${activeQ === 5 ? "active" : ""}`} id="ans-5">
              <div className="ans-eyebrow">// PRIVACY ARCHITECTURE</div>
              <div className="ans-title">
                Your data is sealed — <span className="hl">even we can't read it.</span>
              </div>
              <p className="ans-body">
                Zero-knowledge vaulting ensures plaintext and private keys never
                leave your device. Encryption and decryption are client-side only.
                Even a full server compromise exposes nothing — multi-party key
                shares require a 5-of-9 threshold to reconstruct.
              </p>
              <div className="graph-area">
                <div className="graph-card">
                  <div className="gc-label">Plaintext access — by layer</div>
                  <div className="gc-canvas"><canvas id="g5a" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">0</div><div className="gc-stat-lbl">Server plaintext access</div></div>
                    <div><div className="gc-stat-val">5-of-9</div><div className="gc-stat-lbl">Key threshold</div></div>
                  </div>
                </div>
                <div className="graph-card">
                  <div className="gc-label">Attack surface — ZK vs traditional</div>
                  <div className="gc-canvas"><canvas id="g5b" /></div>
                  <div className="gc-stat">
                    <div><div className="gc-stat-val">94%</div><div className="gc-stat-lbl">Attack surface reduction</div></div>
                  </div>
                </div>
              </div>
              <div className="ans-pills">
                <span className="pill">Client-side keys</span>
                <span className="pill">ZK proofs</span>
                <span className="pill">MPC threshold</span>
                <span className="pill">No backdoors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="section-header">
          <h2>Quantum System Features</h2>
          <div className="header-bar" />
        </div>
        <div className="viewport">
          <button className="nav-btn prev" onClick={() => move(-1)}>
            &#8592;
          </button>
          <button className="nav-btn next" onClick={() => move(1)}>
            &#8594;
          </button>
          <div className="slider-window">
            <div className="slider-track" id="track" ref={trackRef}>
              <div className="card">
                <div className="art-box"><div className="art-inner p1" /></div>
                <div className="content">
                  <p className="card-tag">01 — Quantum + AES Security</p>
                 <h2>Hybrid Encryption System</h2>
<p>Combines Post-Quantum Cryptography with AES encryption to ensure maximum data security. Files are encrypted using high-speed AES algorithms, while encryption keys are secured using quantum-resistant methods.</p>
<p>This approach delivers both performance and future-proof protection against quantum-based attacks, aligning with modern industry security standards.</p>
                </div>
              </div>
              <div className="card">
                <div className="art-box"><div className="art-inner p2" /></div>
                <div className="content">
                  <p className="card-tag">02 — Encrypted Storage</p>
                 <h2>Secure File Vault</h2>
<p>Store and manage files in an encrypted digital vault with structured folders and seamless upload capabilities. Designed for privacy-first storage without exposing raw data.</p>
<p>Supports drag-and-drop uploads and efficient organization, providing a smooth and secure user experience.</p>
                </div>
              </div>
              <div className="card">
                <div className="art-box"><div className="art-inner p3" /></div>
                <div className="content">
                  <p className="card-tag">03 — Zero Data Exposure</p>
                 <h2>End-to-End Encryption</h2>
<p>Ensures that files are encrypted directly on the client side before being transmitted. No unencrypted data is ever exposed to the server.</p>
<p>Only authorized users with the correct keys can decrypt and access the data, maintaining strict confidentiality.</p>
                </div>
              </div>
              <div className="card">
                <div className="art-box"><div className="art-inner p4" /></div>
                <div className="content">
                  <p className="card-tag">04 — Protected Access</p>
                 <h2>Secure File Sharing</h2>
<p>Share files using protected links with optional password security and expiration controls. Designed to prevent unauthorized access.</p>
<p>Allows controlled distribution of sensitive data while maintaining encryption and access limitations.</p>
                </div>
              </div>
              <div className="card">
                <div className="art-box"><div className="art-inner p5" /></div>
                <div className="content">
                  <p className="card-tag">05 — Audit & Tracking</p>
                 <h2>Activity Monitoring</h2>
<p>Track all vault interactions including uploads, downloads, and login activity. Provides transparency and auditability for users.</p>
<p>Helps detect suspicious behavior and ensures accountability across all system operations.</p>
                </div>
              </div>
              <div className="card">
                <div className="art-box"><div className="art-inner p6" /></div>
                <div className="content">
                  <p className="card-tag">06 — Full Key Control</p>
                <h2>Key Management System</h2>
<p>Generate, store, and manage cryptographic keys securely within the system. Supports key rotation and backup for enhanced safety.</p>
<p>Empowers users with full control over their encryption keys, strengthening overall data protection strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="architecture-section" id="howitwork">
        <div className="arch-wrap">
          <div className="arch-heading">
            <h2>PQC Vault Architecture</h2>
            <p>How it works — a post-quantum secure data pipeline with ingest, storage, and recovery built into one flow.</p>
          </div>
          <div className="arch-spine" />
          <div className="arch-module arch-left">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="win-btn-group"><div className="win-btn" /><div className="win-btn" /><div className="win-btn" /></div>
                <div className="terminal-title">INGEST_CORE.EXE</div>
              </div>
              <div className="terminal-body">
                <span className="step-id" style={{ color: "var(--cyan)" }}>01 // ENCRYPTION</span>
                <h3>Secure Ingest</h3>
                <p className="arch-text">Files are hashed and wrapped with <b>ML-KEM</b> post-quantum encryption before entering the vault pipeline.</p>
                <div className="command-line">&gt; add [location of file]</div>
              </div>
            </div>
          </div>
          <div className="dot" style={{ background: "var(--cyan)", top: 180, left: "50%", transform: "translateX(-50%)" }} />
          <div className="arch-module arch-right">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="win-btn-group"><div className="win-btn" /><div className="win-btn" /><div className="win-btn" /></div>
                <div className="terminal-title">STORAGE_HUB.SYS</div>
              </div>
              <div className="terminal-body">
                <span className="step-id" style={{ color: "var(--purple-lt)" }}>02 // PERSISTENCE</span>
                <h3>Quantum Store</h3>
                <p className="arch-text">Encrypted data is mounted with automated mirror backup, sync, and resilient storage routing.</p>
                <div className="command-line">&gt; restore [file name]</div>
              </div>
            </div>
          </div>
          <div className="dot" style={{ background: "var(--purple)", top: 600, left: "50%", transform: "translateX(-50%)" }} />
          <div className="arch-module arch-left" style={{ marginBottom: 0 }}>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="win-btn-group"><div className="win-btn" /><div className="win-btn" /><div className="win-btn" /></div>
                <div className="terminal-title">RECOVERY_ENGINE.EXE</div>
              </div>
              <div className="terminal-body">
                <span className="step-id" style={{ color: "var(--cyan)" }}>03 // RECOVERY</span>
                <h3>Extraction &amp; Self-Healing</h3>
                <p className="arch-text">Secure retrieval happens through a master key flow with automatic healing from backup replicas.</p>
                <div className="command-line">&gt; extract [file name]</div>
              </div>
            </div>
          </div>
          <div className="dot" style={{ background: "var(--cyan)", top: 910, left: "50%", transform: "translateX(-50%)" }} />
        </div>
      </section>

      <section className="algo-section">
        <div className="algo-wrap">
          <div className="algo-header-row">
            <div className="algo-header-left">
              <div className="algo-head">
                <div className="eyebrow">// Algorithm Stack</div>
                <h2>Cryptographic Stack<br />in Action</h2>
              </div>
            </div>
          </div>
          <div className="algo-stat-strip">
            <div className="algo-stat-item"><div className="algo-stat-val">3</div><div className="algo-stat-lbl">NIST-standardised algorithms</div></div>
            <div className="algo-stat-item"><div className="algo-stat-val">256-bit</div><div className="algo-stat-lbl">Quantum security level</div></div>
            <div className="algo-stat-item"><div className="algo-stat-val">Hybrid</div><div className="algo-stat-lbl">Classical + PQ mode</div></div>
            <div className="algo-stat-item"><div className="algo-stat-val">Annual</div><div className="algo-stat-lbl">Third-party audit cycle</div></div>
            <div className="algo-stat-item"><div className="algo-stat-val">&lt;2ms</div><div className="algo-stat-lbl">Key exchange overhead</div></div>
          </div>
          <div className="algo-grid">
            <div className="algo-card ac-cyan">
              <span className="algo-card-idx">01</span>
              <div className="algo-icon"><i className="bi bi-key-fill" /></div>
              <div className="algo-tag">Key Exchange</div>
              <div className="algo-title">CRYSTALS-Kyber<br />/ ML-KEM</div>
              <div className="algo-desc">Securely wraps session keys and protects against quantum-enabled key recovery attacks during transport and storage. The primary key encapsulation mechanism for all vault operations.</div>
              <div className="algo-meta"><span className="algo-pill">FIPS 203</span><span className="algo-pill">NIST Standard</span><span className="algo-pill">Lattice-based</span><span className="algo-pill">KEM</span></div>
            </div>
            <div className="algo-card ac-purple">
              <span className="algo-card-idx">02</span>
              <div className="algo-icon"><i className="bi bi-pen-fill" /></div>
              <div className="algo-tag">Digital Signature</div>
              <div className="algo-title">Dilithium<br />/ ML-DSA</div>
              <div className="algo-desc">Verifies vault integrity, authenticates operations, and signs secure metadata with post-quantum assurance. Fast verification ensures signing never becomes a bottleneck.</div>
              <div className="algo-meta"><span className="algo-pill">FIPS 204</span><span className="algo-pill">Signature</span><span className="algo-pill">Fast verify</span><span className="algo-pill">Lattice-based</span></div>
            </div>
            <div className="algo-card ac-green">
              <span className="algo-card-idx">03</span>
              <div className="algo-icon"><i className="bi bi-shield-check" /></div>
              <div className="algo-tag">Hash-Based Signature</div>
              <div className="algo-title">SPHINCS+</div>
              <div className="algo-desc">Used for high-assurance backup signing and fallback verification. Stateless by design — no private key state to manage or lose, providing long-term post-quantum resilience.</div>
              <div className="algo-meta"><span className="algo-pill">FIPS 205</span><span className="algo-pill">Stateless</span><span className="algo-pill">Long-term</span><span className="algo-pill">Hash-based</span></div>
            </div>
            <div className="algo-card ac-pink">
              <span className="algo-card-idx">04</span>
              <div className="algo-icon"><i className="bi bi-lightning-charge-fill" /></div>
              <div className="algo-tag">Symmetric Encryption</div>
              <div className="algo-title">AES-256-GCM</div>
              <div className="algo-desc">Fast, authenticated encryption for file payloads inside the vault pipeline. Combines 256-bit security with Galois/Counter Mode for simultaneous encryption and integrity protection.</div>
              <div className="algo-meta"><span className="algo-pill">High speed</span><span className="algo-pill">AEAD</span><span className="algo-pill">Storage core</span><span className="algo-pill">AES-NI</span></div>
            </div>
            <div className="algo-card ac-orange">
              <span className="algo-card-idx">05</span>
              <div className="algo-icon"><i className="bi bi-arrow-left-right" /></div>
              <div className="algo-tag">Legacy Compatibility</div>
              <div className="algo-title">Ed25519 / NaCl</div>
              <div className="algo-desc">Supports existing systems and preserves compatibility during the hybrid migration phase. Ensures PQC Vault integrates cleanly with any infrastructure running today's classical stack.</div>
              <div className="algo-meta"><span className="algo-pill">Legacy auth</span><span className="algo-pill">Fast sign</span><span className="algo-pill">Hybrid mode</span><span className="algo-pill">ECC</span></div>
            </div>
            <div className="algo-card ac-sky">
              <span className="algo-card-idx">06</span>
              <div className="algo-icon"><i className="bi bi-layers-fill" /></div>
              <div className="algo-tag">Security Model</div>
              <div className="algo-title">Hybrid Security<br />Layer</div>
              <div className="algo-desc">Combines classical and post-quantum algorithms in tandem — neither alone can compromise the system. Keeps you protected today and fully resilient as quantum hardware matures.</div>
              <div className="algo-meta"><span className="algo-pill">Migration-safe</span><span className="algo-pill">Quantum-safe</span><span className="algo-pill">Zero trust</span><span className="algo-pill">Dual-layer</span></div>
            </div>
          </div>
        </div>
      </section>

     <Footer />
    </>
  );
}