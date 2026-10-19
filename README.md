# /pablorodz — Personal Website & Systems Monograph

> **Open-source digital presence, living system index, and architectural chronicle of Pablo Javier Rodríguez (Solutions Architect & Digital Products Builder).**

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

---

## 🏛️ Architectural Overview

This repository hosts the personal website and portfolio for **Pablo Javier Rodríguez**. Unlike conventional developer portfolios or generic landing pages, it is designed as an **Architectural Monograph & Living System Index** that showcases systems thinking, product depth, and engineering leadership.

### Key Capabilities

- **Living System Index:** A curated, interactive index of public open-source tools ([`gripm`](https://github.com/pablojavierrodriguez/gripm), [`gripm-playbook`](https://github.com/pablojavierrodriguez/gripm-playbook)), private enterprise systems (`c3admin`), and incubating projects (`dom-personalfinances`).
- **Dual-Lens Toggle:** Allows visitors to view every system from either a **Product Lens** (value proposition, operational impact, and live demo) or an **Architecture Lens** (system topology schematic, full tech stack, and protocol contracts).
- **Architectural Chronicle:** A career trajectory structured around systems built, transformations led, and measurable operational outcomes (e.g., Telecom / Personal OSS ecosystem serving 130K+ incidents/month, +30% automation, -25% MTTR).
- **Universal Design Pillars:** Four foundational principles for resilient, vendor-independent, human-and-machine-friendly digital products.
- **Native Bilingual i18n (ES / EN):** Automatic browser language detection with persistent client toggle and Spanish fallback.
- **Single Source of Truth (`lib/content.ts`):** All professional data, project specifications, career roles, and credentials are decoupled from the presentation layer.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router with Turbopack) |
| **UI Library** | React 19 + TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Components** | shadcn/ui (Base UI + Lucide) |
| **Typography** | Geist Sans & Geist Mono |
| **i18n** | Custom lightweight React Context with zero SSR flash |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 20.0.0`
- npm (or pnpm / yarn)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pablojavierrodriguez/pablojavierrodriguez.github.io.git
   cd pablojavierrodriguez.github.io
   ```

2. Switch to the development branch (if not on `main`):
   ```bash
   git checkout dev
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the local development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Privacy & Architecture Notes

- **Sovereign Backlog:** The agile backlog managed via [Gripm](https://github.com/pablojavierrodriguez/gripm) is intentionally kept local-first and excluded from version control via `.gitignore` (`/backlog`, `.gripm`).
- **Private Systems:** For proprietary enterprise projects (`c3admin`), the site displays public architectural blueprints, topology schemas, and verified outcomes without exposing proprietary codebases or private APIs.

---

## 👤 Author

**Pablo Javier Rodríguez**  
*Solutions Architect & Digital Products Builder*

- **GitHub:** [@pablojavierrodriguez](https://github.com/pablojavierrodriguez)
- **LinkedIn:** [/in/pablojavierrodriguez](https://www.linkedin.com/in/pablojavierrodriguez)
- **Email:** [pabjrodriguez@gmail.com](mailto:pabjrodriguez@gmail.com)
- **Location:** Argentina (ART, UTC-3)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
