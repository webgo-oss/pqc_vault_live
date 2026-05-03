"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./download.css";

type OSKey = "win" | "mac" | "lin";

export default function DownloadPage() {
  const [activeOS, setActiveOS] = useState<OSKey>("win");
  const downloadlink="https://github.com/webgo-oss/pqc_vault_exe/releases/download/v1.5/PQC_Vault.exe";
  const osMap = {
    win: {
      name: "PQC_Vault.exe",
      desc: "Windows x64 installer",
      size: "568 MB",
      available: true,
    },
    mac: {
      name: "Coming Soon",
      desc: "macOS support is in development",
      size: "--",
      available: false,
    },
    lin: {
      name: "Coming Soon",
      desc: "Linux support is in development",
      size: "--",
      available: false,
    },
  };

  const current = osMap[activeOS];

  return (
    <div className="download-page">
      <Navbar
        links={[
          { label: "Home", href: "/" },
          { label: "Docs", href: "/docs" },
        ]}
      />

      <div className="page-wrap">
        <div className="hero">
          <div className="hero-eyebrow">
            post-quantum cryptography · terminal vault
          </div>

          <h1>
            Download <em>PQC Vault</em>
          </h1>

          <p className="hero-sub">
            Signed, verified, and ready to install. A terminal-first file vault
            that generates local quantum-safe keys and keeps your data
            protected.
          </p>

          <div className="hero-badges">
            <span className="hero-badge">
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Cryptographically signed
            </span>

            <span className="hero-badge">
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              SHA-256 verified
            </span>

            <span className="hero-badge">
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Open source · MIT
            </span>

            <span className="hero-badge">
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              PQC key generation
            </span>
          </div>
        </div>

        <div className="dl-section">
          <div>
            <div className="os-tabs">
              <button
                className={`os-tab ${activeOS === "win" ? "on" : ""}`}
                onClick={() => setActiveOS("win")}
                type="button"
              >
                <span className="os-tab-sym">
                  <i className="bi bi-windows"></i>
                </span>
                <div>
                  <span className="os-tab-name">Windows</span>
                  <span className="os-tab-meta">x64 · Win 10+</span>
                </div>
              </button>

              <button
                className={`os-tab ${activeOS === "mac" ? "on" : ""}`}
                onClick={() => setActiveOS("mac")}
                type="button"
              >
                <span className="os-tab-sym">
                  <i className="bi bi-apple"></i>
                </span>
                <div>
                  <span className="os-tab-name">macOS</span>
                  <span className="os-tab-meta">Coming Soon</span>
                </div>
              </button>

              <button
                className={`os-tab ${activeOS === "lin" ? "on" : ""}`}
                onClick={() => setActiveOS("lin")}
                type="button"
              >
                <span className="os-tab-sym">
                  <i className="devicon-linux-plain"></i>
                </span>
                <div>
                  <span className="os-tab-name">Linux</span>
                  <span className="os-tab-meta">Coming Soon</span>
                </div>
              </button>
            </div>

            <div className="file-card">
              <div className="fc-top">
                <div className="file-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <div className="fc-name" id="dl-fname">
                    {current.name}
                  </div>
                  <div className="fc-desc" id="dl-fdesc">
                    {current.desc}
                  </div>
                </div>
              </div>

              <div className="fc-chips">
                <span className="fc-chip" id="dl-fsize">
                  {current.size}
                </span>
                <span className="fc-chip">v1.0.0</span>
                <span className="fc-chip">SHA-256 verified</span>
                <span className="fc-chip">code-signed</span>
              </div>

              <div className="fc-hash">
                <b>SHA-256:</b> a3f8c2e19d4b0fe72c1b6d3a...d94b7f02
              </div>

              <div className="fc-actions">
               <button
  className="btn-primary"
  type="button"
  disabled={!current.available}
  onClick={() => {
    if (activeOS === "win") {
      window.location.href = downloadlink;
    }
  }}
>
                  <svg
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  {current.available ? "Download" : "Coming Soon"}
                </button>

              </div>
            </div>
          </div>

          <div className="quickstart-panel">
            <div className="qs-header">Quick start</div>

            <div className="qs-step">
              <div className="qs-num">01</div>
              <div className="qs-content">
                <strong>Download &amp; install</strong>
                <span>Run the installer and launch the app. It opens in a terminal environment.</span>
              </div>
            </div>

            <div className="qs-step">
              <div className="qs-num">02</div>
              <div className="qs-content">
                <strong>Configure account</strong>
                <span>Enter your email and password when prompted. Password input is masked for security.</span>
              </div>
            </div>

            <div className="qs-step">
              <div className="qs-num">03</div>
              <div className="qs-content">
                <strong>
                  Run <span className="kbd">init</span>
                </strong>
                <span>
                  Generates your local PQC keys and completes the secure vault setup.
                </span>
              </div>
            </div>

            <div className="qs-step">
              <div className="qs-num">04</div>
              <div className="qs-content">
                <strong>Set trigger</strong>
                <span>Define your master password trigger to protect all vault actions.</span>
              </div>
            </div>

            <div className="qs-step">
              <div className="qs-num">05</div>
              <div className="qs-content">
                <strong>
                  Use <span className="kbd">add</span> to secure files
                </strong>
                <span>
                  Your vault is ready. Use <span className="kbd">help</span> anytime to see all commands.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="req-strip">
          <div className="req-header">
            <span>System requirements</span>
          </div>

          <div className="req-row">
            <div className="req-cell">
              <div className="req-label">Platform</div>
              <div className="req-val">Windows</div>
              <div className="req-note">macOS &amp; Linux coming soon</div>
            </div>

            <div className="req-cell">
              <div className="req-label">OS version</div>
              <div className="req-val">Win 10 / 11</div>
              <div className="req-note">x64 architecture</div>
            </div>

            <div className="req-cell">
              <div className="req-label">Storage</div>
              <div className="req-val">~600 MB</div>
              <div className="req-note">Plus vault storage space</div>
            </div>

            <div className="req-cell">
              <div className="req-label">License</div>
              <div className="req-val">HUNEX.inc</div>
              <div className="req-note">Free &amp; open source</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}