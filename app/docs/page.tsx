"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import "./docs.css";

type SectionId =
  | "overview"
  | "install"
  | "config"
  | "init"
  | "commands"
  | "protocols"
  | "shortcuts"
  | "help"
  | "workflow";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");

  const showSec = (id: SectionId) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar
  links={[
    { label: "Home", href: "/" },
    { label: "Download", href: "/download" },
  ]}
/>

      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-group">
            <span className="sidebar-label">Getting started</span>
            <button
              className={`nav-btn ${activeSection === "overview" ? "on" : ""}`}
              onClick={() => showSec("overview")}
              type="button"
            >
              <span className="btn-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </span>
              Overview
            </button>

            <button
              className={`nav-btn ${activeSection === "install" ? "on" : ""}`}
              onClick={() => showSec("install")}
              type="button"
            >
              <span className="btn-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
              Installation
            </button>

            <button
              className={`nav-btn ${activeSection === "config" ? "on" : ""}`}
              onClick={() => showSec("config")}
              type="button"
            >
              <span className="btn-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                </svg>
              </span>
              Configuration
            </button>

            <button
              className={`nav-btn ${activeSection === "init" ? "on" : ""}`}
              onClick={() => showSec("init")}
              type="button"
            >
              <span className="btn-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              INIT & Setup
            </button>
          </div>

          <div className="sidebar-group">
            <span className="sidebar-label">Command manual</span>

            <button
              className={`nav-btn ${activeSection === "commands" ? "on" : ""}`}
              onClick={() => showSec("commands")}
              type="button"
            >
              <span className="btn-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </span>
              Command Reference
            </button>

            <button
              className={`nav-btn ${activeSection === "protocols" ? "on" : ""}`}
              onClick={() => showSec("protocols")}
              type="button"
            >
              <span className="btn-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </span>
              Protocols
            </button>

            <button
              className={`nav-btn ${activeSection === "shortcuts" ? "on" : ""}`}
              onClick={() => showSec("shortcuts")}
              type="button"
            >
              <span className="btn-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 2l-4 5-4-5" />
                </svg>
              </span>
              Shortcuts
            </button>

            <button
              className={`nav-btn ${activeSection === "help" ? "on" : ""}`}
              onClick={() => showSec("help")}
              type="button"
            >
              <span className="btn-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </span>
              Help Command
            </button>

            <button
              className={`nav-btn ${activeSection === "workflow" ? "on" : ""}`}
              onClick={() => showSec("workflow")}
              type="button"
            >
              <span className="btn-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </span>
              Recommended Workflow
            </button>
          </div>
        </aside>

        <main className="content">
          <section id="overview" className={`section ${activeSection === "overview" ? "on" : ""}`}>
            <div className="hero-banner">
              <h1>
                PQC <em>Vault</em> Documentation
              </h1>
              <p>
                Complete terminal workflow — installation, configuration, key generation, and all vault commands
                for securing, recovering, auditing, and managing files.
              </p>
              <div className="pill-row">
                <span className="pill">Windows EXE installer</span>
                <span className="pill">Terminal workflow</span>
                <span className="pill">PQC key generation</span>
                <span className="pill">Encrypted backups</span>
                <span className="pill">Recovery commands</span>
              </div>
            </div>

            <div className="section-header">
              <div className="eyebrow">Getting started</div>
              <h2>Overview</h2>
              <p className="section-lead">
                PQC Vault is a terminal-based secure vault application designed to protect files, generate local
                quantum-safe keys, maintain backups, and provide controlled recovery and extraction actions.
              </p>
            </div>

            <div className="callout info">
              <div className="callout-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <div className="callout-body">
                <span className="callout-tag">Terminal-first</span>
                <p>
                  The app is not a graphical click-only tool. Main interactions happen through typed commands —
                  making the workflow fast, scriptable, and easy to secure.
                </p>
              </div>
            </div>

            <div className="card-grid">
              <div className="card">
                <h4>
                  <svg className="card-ic" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  What it stores
                </h4>
                <p>Files added into the vault are encrypted and secured. A backup is saved automatically so recovery is possible later.</p>
              </div>
              <div className="card">
                <h4>
                  <svg className="card-ic" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  What it protects
                </h4>
                <p>Your keys, recovered folders, and vault content are managed through controlled commands instead of direct file access.</p>
              </div>
            </div>

            <div className="sub-heading">Key features</div>
            <div className="step-list">
              <div className="step-item">
                <div className="step-num">01</div>
                <div className="step-content">
                  <strong>Terminal-first design</strong>
                  <span>Everything is typed through commands. The interface is lightweight and focused on security.</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">02</div>
                <div className="step-content">
                  <strong>Secure setup sequence</strong>
                  <span>
                    Install the app, configure email and password, then run <span className="kbd">init</span> to
                    generate local PQC keys and complete setup.
                  </span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">03</div>
                <div className="step-content">
                  <strong>Recovery-friendly</strong>
                  <span>
                    Whenever you add a file, a backup is saved automatically so the <span className="kbd">restore</span>{" "}
                    command can recover it later.
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section id="install" className={`section ${activeSection === "install" ? "on" : ""}`}>
            <div className="section-header">
              <div className="eyebrow">Getting started</div>
              <h2>Installation</h2>
              <p className="section-lead">
                Download the Windows EXE installer and install the app locally. After that, the terminal interface is
                used for all setup and subsequent commands.
              </p>
            </div>

            <div className="step-list">
              <div className="step-item">
                <div className="step-num">01</div>
                <div className="step-content">
                  <strong>Download the installer</strong>
                  <span>Download the <span className="kbd">.exe</span> file from the download page.</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">02</div>
                <div className="step-content">
                  <strong>Run the installer</strong>
                  <span>Execute the installer and complete the installation on your Windows system.</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">03</div>
                <div className="step-content">
                  <strong>Launch the application</strong>
                  <span>The application opens in a terminal-based environment automatically.</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">04</div>
                <div className="step-content">
                  <strong>Continue to configuration</strong>
                  <span>Configure your account, then generate keys using the <span className="kbd">init</span> command.</span>
                </div>
              </div>
            </div>

            <div className="callout warn">
              <div className="callout-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="callout-body">
                <span className="callout-tag">Important</span>
                <p>The installation step only prepares the app. The vault is not fully ready until configuration and initialization are both completed.</p>
              </div>
            </div>
          </section>

          <section id="config" className={`section ${activeSection === "config" ? "on" : ""}`}>
            <div className="section-header">
              <div className="eyebrow">Getting started</div>
              <h2>Configuration</h2>
              <p className="section-lead">
                After installation, the application prompts for your email and password. The password is handled
                securely and is never shown back on screen.
              </p>
            </div>

            <div className="callout warn">
              <div className="callout-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="callout-body">
                <span className="callout-tag">Secure input</span>
                <p>The password is masked while typing. Characters are not displayed on screen, keeping the entry private during setup.</p>
              </div>
            </div>

            <div className="sub-heading">Required fields</div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Purpose</th>
                    <th>Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>Identifies the account</td>
                    <td>Used for account-level setup and mapping the vault to the user</td>
                  </tr>
                  <tr>
                    <td>Password</td>
                    <td>Secure credential</td>
                    <td>Masked during typing and stored securely as part of vault setup</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mini-grid">
              <div className="mini-box">
                <h5>Why email is needed</h5>
                <p>The email identifies which user profile the vault belongs to, especially when keys and recovery information are linked to a user.</p>
              </div>
              <div className="mini-box">
                <h5>Why password is masked</h5>
                <p>The password should never be visible while entering it, as it is part of the protected setup flow.</p>
              </div>
            </div>
          </section>

          <section id="init" className={`section ${activeSection === "init" ? "on" : ""}`}>
            <div className="section-header">
              <div className="eyebrow">Getting started</div>
              <h2>INIT & Setup Flow</h2>
              <p className="section-lead">
                The <span className="kbd">init</span> command is the final setup step after configuration. It creates
                the local PQC keys and prepares the vault for use.
              </p>
            </div>

            <div className="codeblock">
              <div className="cb-head">
                <span className="cb-lang">terminal</span>
                <div className="cb-dots">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="cb-body">
                <span className="k">init</span>
                {"\n"}
                <span className="c"># Generate local PQC keys and finalize the secure setup</span>
              </div>
            </div>

            <div className="callout ok">
              <div className="callout-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="callout-body">
                <span className="callout-tag">Result</span>
                <p>Once <span className="kbd">init</span> completes, the system generates the key material needed for the vault and moves the application into a ready state.</p>
              </div>
            </div>

            <div className="sub-heading">After INIT — set the trigger</div>
            <p className="prose">
              After the key generation step, you must set the <span className="kbd">trigger</span> option to define
              the master password trigger. This acts as the activation path for protected vault actions.
            </p>

            <div className="callout danger">
              <div className="callout-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <div className="callout-body">
                <span className="callout-tag">Read this</span>
                <p>The app is only considered fully ready after configuration is complete, <span className="kbd">init</span> has generated the keys, and the trigger has been set.</p>
              </div>
            </div>
          </section>

          <section id="commands" className={`section ${activeSection === "commands" ? "on" : ""}`}>
            <div className="section-header">
              <div className="eyebrow">Command manual</div>
              <h2>Command Reference</h2>
              <p className="section-lead">The main terminal commands available in the vault application. Each has a specific role in the file security workflow.</p>
            </div>

            <div className="cmd-block">
              <div className="cmd-head">
                <span className="cmd-name">ADD</span>
                <span className="cmd-syntax">add &lt;file_location&gt;</span>
              </div>
              <div className="cmd-body">
                <p className="prose">Brings a file into the vault. The application encrypts the file and secures it. A backup is automatically created at the same time, so the original protected version can be restored later. This is the starting point for most vault operations — it turns a normal file into a secured asset.</p>
                <div className="codeblock">
                  <div className="cb-head"><span className="cb-lang">example</span><div className="cb-dots"><span /><span /><span /></div></div>
                  <div className="cb-body"><span className="k">add</span> <span className="s">C:\Users\Admin\Desktop\report.pdf</span></div>
                </div>
              </div>
            </div>

            <div className="cmd-block">
              <div className="cmd-head">
                <span className="cmd-name">AUDIT</span>
                <span className="cmd-syntax">audit</span>
              </div>
              <div className="cmd-body">
                <p className="prose">Checks the current status of the vault and the database. Useful for verifying whether the vault is healthy, synchronized, and operating correctly. Reviews the internal state of stored records and checks if secure storage is behaving as expected. This is the integrity-check command.</p>
                <div className="codeblock">
                  <div className="cb-head"><span className="cb-lang">example</span><div className="cb-dots"><span /><span /><span /></div></div>
                  <div className="cb-body"><span className="k">audit</span></div>
                </div>
              </div>
            </div>

            <div className="cmd-block">
              <div className="cmd-head">
                <span className="cmd-name">RESTORE</span>
                <span className="cmd-syntax">restore &lt;filename&gt;</span>
              </div>
              <div className="cmd-body">
                <p className="prose">Recovers a file from the backup system. Since backups are saved automatically when files are added, restore brings back that saved version using the file name. Essential after deletion, corruption, or accidental removal — your emergency recovery command for returning a file to a usable state.</p>
                <div className="codeblock">
                  <div className="cb-head"><span className="cb-lang">example</span><div className="cb-dots"><span /><span /><span /></div></div>
                  <div className="cb-body"><span className="k">restore</span> <span className="s">project_notes.txt</span></div>
                </div>
              </div>
            </div>

            <div className="cmd-block">
              <div className="cmd-head">
                <span className="cmd-name">DELETE</span>
                <span className="cmd-syntax">delete &lt;filename&gt;</span>
              </div>
              <div className="cmd-body">
                <p className="prose">Removes a particular file from the vault. Used when you no longer need an item secured in active storage. Even after deletion, the system keeps the backup so recovery is still possible through the restore flow — making delete safer than a permanent destructive wipe.</p>
                <div className="codeblock">
                  <div className="cb-head"><span className="cb-lang">example</span><div className="cb-dots"><span /><span /><span /></div></div>
                  <div className="cb-body"><span className="k">delete</span> <span className="s">old_invoice.pdf</span></div>
                </div>
              </div>
            </div>

            <div className="cmd-block">
              <div className="cmd-head">
                <span className="cmd-name">INFO</span>
                <span className="cmd-syntax">info</span>
              </div>
              <div className="cmd-body">
                <p className="prose">Displays the current vault state. Shows the status of the recovered folder and key-related locations associated with the app. Helps confirm whether the recovery folder exists, key material has been generated correctly, and the secure setup is healthy.</p>
                <div className="codeblock">
                  <div className="cb-head"><span className="cb-lang">example</span><div className="cb-dots"><span /><span /><span /></div></div>
                  <div className="cb-body"><span className="k">info</span></div>
                </div>
              </div>
            </div>

            <div className="cmd-block">
              <div className="cmd-head">
                <span className="cmd-name">EXTRACT</span>
                <span className="cmd-syntax">extract &lt;filename&gt;</span>
              </div>
              <div className="cmd-body">
                <p className="prose">Pulls a file out of the vault and restores it for use. Decrypts the selected file and removes the protected version from cloud-based storage when required by the workflow. The opposite of <span className="kbd">add</span> — it makes a secured file available again in a normal, usable form.</p>
                <div className="codeblock">
                  <div className="cb-head"><span className="cb-lang">example</span><div className="cb-dots"><span /><span /><span /></div></div>
                  <div className="cb-body"><span className="k">extract</span> <span className="s">design_assets.zip</span></div>
                </div>
              </div>
            </div>

            <div className="cmd-block">
              <div className="cmd-head">
                <span className="cmd-name">HELP</span>
                <span className="cmd-syntax">help</span>
              </div>
              <div className="cmd-body">
                <p className="prose">Prints the command list and key usage information inside the terminal. The easiest way to recall available commands, their purpose, and basic syntax. Whenever you are unsure what the app supports, help should be your first stop — the built-in command guide for beginners and regular users alike.</p>
                <div className="codeblock">
                  <div className="cb-head"><span className="cb-lang">example</span><div className="cb-dots"><span /><span /><span /></div></div>
                  <div className="cb-body"><span className="k">help</span></div>
                </div>
              </div>
            </div>
          </section>

          <section id="protocols" className={`section ${activeSection === "protocols" ? "on" : ""}`}>
            <div className="section-header">
              <div className="eyebrow">Command manual</div>
              <h2>Protocols</h2>
              <p className="section-lead">Protocols describe the internal meaning of key system actions. Useful for documentation and implementation mapping.</p>
            </div>

            <div className="codeblock">
              <div className="cb-head"><span className="cb-lang">protocol map</span><div className="cb-dots"><span /><span /><span /></div></div>
              <div className="cb-body">
                <span className="k">INIT</span>     → <span className="s">Generate local PQC keys</span>
                {"\n"}
                <span className="k">ADD</span>      → <span className="s">Encrypt & secure asset to vault</span>
                {"\n"}
                <span className="k">EXTRACT</span>  → <span className="s">Decrypt asset & purge cloud</span>
                {"\n"}
                <span className="k">RESTORE</span>  → <span className="s">Emergency cloud recovery</span>
                {"\n"}
                <span className="k">AUDIT</span>    → <span className="s">Verify vault integrity logs</span>
                {"\n"}
                <span className="k">DELETE</span>   → <span className="s">De-index asset (retains backup)</span>
                {"\n"}
                <span className="k">QUIT</span>     → <span className="s">Terminate session & lock</span>
                {"\n"}
                <span className="k">INFO</span>     → <span className="s">Show current keys & recovered folders status</span>
              </div>
            </div>

            <div className="sub-heading">Protocol definitions</div>
            <div className="proto-grid">
              <div className="proto-item"><span className="proto-key">INIT</span><span className="proto-arrow">→</span><span className="proto-val">Starts secure local key generation and creates the base vault identity.</span></div>
              <div className="proto-item"><span className="proto-key">ADD</span><span className="proto-arrow">→</span><span className="proto-val">Encrypts a file and places it into protected storage.</span></div>
              <div className="proto-item"><span className="proto-key">EXTRACT</span><span className="proto-arrow">→</span><span className="proto-val">Returns a vault item back into normal file form.</span></div>
              <div className="proto-item"><span className="proto-key">RESTORE</span><span className="proto-arrow">→</span><span className="proto-val">Recovers a file from the automatically saved backup.</span></div>
              <div className="proto-item"><span className="proto-key">AUDIT</span><span className="proto-arrow">→</span><span className="proto-val">Checks integrity and status of vault records.</span></div>
              <div className="proto-item"><span className="proto-key">DELETE</span><span className="proto-arrow">→</span><span className="proto-val">Removes a file from the vault index while preserving backup access.</span></div>
              <div className="proto-item"><span className="proto-key">QUIT</span><span className="proto-arrow">→</span><span className="proto-val">Ends the session and locks the application.</span></div>
              <div className="proto-item"><span className="proto-key">INFO</span><span className="proto-arrow">→</span><span className="proto-val">Shows the vault and recovery folder status.</span></div>
            </div>
          </section>

          <section id="shortcuts" className={`section ${activeSection === "shortcuts" ? "on" : ""}`}>
            <div className="section-header">
              <div className="eyebrow">Command manual</div>
              <h2>Shortcuts</h2>
              <p className="section-lead">Keyboard shortcuts make the terminal workflow faster and more efficient to use day-to-day.</p>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Shortcut</th>
                    <th>Action</th>
                    <th>Use case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><span className="skey">CTRL + O</span></td><td>Launch File Explorer</td><td>Open a file picker quickly when selecting a path</td></tr>
                  <tr><td><span className="skey">CTRL + A</span></td><td>Select all text in buffer</td><td>Useful for editing or replacing a full command line</td></tr>
                  <tr><td><span className="skey">CTRL + V</span></td><td>Paste from clipboard</td><td>Paste file paths, names, or copied commands</td></tr>
                  <tr><td><span className="skey">CTRL + C</span></td><td>Copy / Exit prompt</td><td>Copies selected text or exits the current input prompt</td></tr>
                  <tr><td><span className="skey">BACKSPACE</span></td><td>Delete character</td><td>Remove the last typed character or clear a selection</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="help" className={`section ${activeSection === "help" ? "on" : ""}`}>
            <div className="section-header">
              <div className="eyebrow">Command manual</div>
              <h2>Help Command</h2>
              <p className="section-lead">The built-in command reference visible inside the terminal. Designed for quick recall and beginner guidance.</p>
            </div>

            <div className="callout info">
              <div className="callout-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" y1="19" x2="20" y2="19" />
                </svg>
              </div>
              <div className="callout-body">
                <span className="callout-tag">Usage</span>
                <p>Type <span className="kbd">help</span> to print the available commands and their purpose directly inside the terminal application.</p>
              </div>
            </div>

            <div className="codeblock">
              <div className="cb-head"><span className="cb-lang">terminal</span><div className="cb-dots"><span /><span /><span /></div></div>
              <div className="cb-body"><span className="k">help</span></div>
            </div>

            <div className="mini-grid">
              <div className="mini-box">
                <h5>Best time to use</h5>
                <p>Use <span className="kbd">help</span> whenever you forget the syntax for <span className="kbd">add</span>, <span className="kbd">restore</span>, or any other command.</p>
              </div>
              <div className="mini-box">
                <h5>What it shows</h5>
                <p>Command names, syntax patterns, and brief descriptions of what each command does.</p>
              </div>
            </div>
          </section>

          <section id="workflow" className={`section ${activeSection === "workflow" ? "on" : ""}`}>
            <div className="section-header">
              <div className="eyebrow">Command manual</div>
              <h2>Recommended Workflow</h2>
              <p className="section-lead">The full order a user should follow from first launch to regular file management. Install first, configure second, initialize third, then manage files through commands.</p>
            </div>

            <div className="step-list">
              <div className="step-item">
                <div className="step-num">01</div>
                <div className="step-content">
                  <strong>Install the app</strong>
                  <span>Download the Windows EXE installer and install the application on the system.</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">02</div>
                <div className="step-content">
                  <strong>Configure account</strong>
                  <span>Enter your email and password when the app prompts for setup information.</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">03</div>
                <div className="step-content">
                  <strong>Run INIT</strong>
                  <span>Generate local PQC keys and complete the secure setup stage using the <span className="kbd">init</span> command.</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">04</div>
                <div className="step-content">
                  <strong>Set trigger</strong>
                  <span>Define the master password trigger so all secure vault actions are properly protected.</span>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">05</div>
                <div className="step-content">
                  <strong>Start using commands</strong>
                  <span>Use <span className="kbd">add</span>, <span className="kbd">audit</span>, <span className="kbd">extract</span>, <span className="kbd">restore</span>, <span className="kbd">delete</span>, <span className="kbd">info</span>, and <span className="kbd">help</span> as needed.</span>
                </div>
              </div>
            </div>

            <div className="callout ok">
              <div className="callout-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="callout-body">
                <span className="callout-tag">You're ready</span>
                <p>Once you've completed all five steps, your vault is fully initialized and ready for secure file management.</p>
              </div>
            </div>
          </section>

          <div className="doc-footer">
            <p>PQC Vault Documentation · Terminal workflow reference</p>
            <span className="version">v1.0 · Windows</span>
          </div>
        </main>
      </div>
    </>
  );
}