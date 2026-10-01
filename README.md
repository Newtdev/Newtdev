# Thomas Ejembi

I build mobile apps for banks — payments, cards, and the identity checks that
have to pass before any of it works. Six years of it now, mostly React Native
with Swift and Kotlin underneath. I'm also studying mobile security, because
that's where the interesting bugs live.

[Portfolio](https://newtdev.vercel.app) ·
[LinkedIn](https://linkedin.com/in/thomas-ejembi-690843101) ·
[Writing](https://hashnode.com/@Newtdev) ·
[ejembithomas61@gmail.com](mailto:ejembithomas61@gmail.com)

> **Open to senior and lead mobile roles — remote, anywhere.**
> I've done this from Lagos for a UK team before, and I'm doing it now for a
> licensed bank.

---

## blynk-deferlink — open-source deferred deep linking

**[github.com/Newtdev/blynk-deferlink](https://github.com/Newtdev/blynk-deferlink)** ·
[live demo](https://referral-web-demo.vercel.app/demo) · MIT

Firebase Dynamic Links shut down on 25 August 2025 and took deferred deep
linking with it. Every replacement on the market — Branch, AppsFlyer,
HopLinks, ChottuLink — is paid, hosted SaaS. `blynk-deferlink` is the
self-hosted one.

- **Android** — Play Install Referrer, deterministic
- **iOS** — clipboard handoff via `UIPasteControl`, deterministic, with no
  "pasted from Safari" banner and no network round-trip
- **Fallback** — probabilistic device-fingerprint matching
- Four packages, interchangeable **PHP** and **Node** backends, runnable
  examples, architecture-decision log

Running on production referral traffic at a licensed Nigerian microfinance
bank. The README carries an unedited 35-second capture of a real App Store
install carrying a referral code through to signup.

→ Background and design notes:
[*Firebase Dynamic Links is gone — how a referral code survives the App Store*](https://thomasejembi.hashnode.dev/firebase-dynamic-links-is-gone-how-a-referral-code-survives-the-app-store)

---

## Experience

**Deputy Lead / Senior Mobile Engineer — Sparkle Nigeria (licensed bank), Lagos**
*March 2025 – present*
Mobile platform for a licensed microfinance bank: payments, card issuance,
identity verification, and release engineering across both stores.

**Lead Mobile Engineer (Contract) — Wish To Wear, United Kingdom**
*July 2025 – February 2026*
Led mobile delivery for a UK product team, remote.

Earlier work spans fintech, transportation, medical, fashion and travel —
React Native, Kotlin, Java and Expo.

---

## Selected engineering work

- **Native KYC modules.** Wrapped the SmileID identity SDKs in custom Swift
  and Kotlin modules, moving verification off the JavaScript bridge and
  cutting identity-verification latency.
- **Transaction-critical banking engines.** Architected a BulkPayment system
  executing complex multi-beneficiary cases asynchronously without blocking
  the UI thread.
- **99.99% crash-free sessions** across a growing production user base —
  error boundaries, payment-payload encryption, native exception handling.
- **Release and supply-chain automation.** CI/CD with Snyk vulnerability
  scanning, SonarQube static analysis and automated tests; ~60% less manual
  release overhead. Play Console policy remediation, signing, staged rollout
  and OTA updates.
- **Deferred attribution built from scratch** — see `blynk-deferlink` above.

---

## Tech

**Mobile** React Native · Swift · Kotlin · Java · Expo · native modules ·
New Architecture
**Languages** TypeScript · JavaScript · PHP
**Web** React · Next.js · Tailwind
**State & data** Redux Toolkit · React Query · MMKV · Socket.IO
**Platform** Firebase · Supabase · CodePush/OTA · Snyk · SonarQube ·
Play Console & App Store Connect release engineering
**Security** Mobile application security, identity verification flows,
payment-data handling

---

## Other projects

- **Blink Pay & Merchant** — contactless payment platforms, NFC integration
- **Dryve** — e-hailing platform with real-time tracking
- **Rencoin** — crypto investment platform
- **Durham Public Schools Portal** — document management system

---

I write up what I learn at [hashnode.com/@Newtdev](https://hashnode.com/@Newtdev).
