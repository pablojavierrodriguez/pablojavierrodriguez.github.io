/**
 * content.ts — Single source of truth for all professional data.
 * UI components import from here; translations.ts handles display strings.
 */

// ─── PROFILE ─────────────────────────────────────────────────────────────────
export const profile = {
  name: 'Pablo Javier Rodríguez',
  handle: 'pablorodz',          // placeholder until domain/handle is decided
  role: {
    es: 'Solutions Architect & Digital Products Builder',
    en: 'Solutions Architect & Digital Products Builder',
  },
  location: {
    country: 'Argentina',
    timezone: 'ART (UTC-3)',
    remote: true,
  },
  email: 'pabjrodriguez@gmail.com',
  avatar: 'https://avatars.githubusercontent.com/u/36267403?v=4', // GitHub avatar as placeholder
  links: {
    github: 'https://github.com/pablojavierrodriguez',
    linkedin: 'https://linkedin.com/in/pablojavierrodriguez',
    instagram: 'https://instagram.com/pablojvrodriguez',
    x: 'https://x.com/pablitorodz',
  },
}

// ─── THESIS ──────────────────────────────────────────────────────────────────
export const thesis = {
  es: 'Diseño sistemas donde la intención de negocio, la solidez técnica y los agentes autónomos convergen en software que sobrevive al sprint en que nació.',
  en: 'I design systems where business intent, technical resilience, and autonomous agents converge into software that outlasts the sprint it was born in.',
}

// ─── LIVING SYSTEM INDEX (own projects / repos) ───────────────────────────────
export type SystemStatus =
  | 'production'
  | 'active-oss'
  | 'incubating'
  | 'private-teaser'

export interface SystemProject {
  id: string
  index: string          // e.g. "01.01"
  name: string
  tagline: { es: string; en: string }
  domain: { es: string; en: string }
  status: SystemStatus
  visibility: 'open-source' | 'private' | 'private-upcoming-oss'
  lifecycle: { es: string; en: string }
  description: { es: string; en: string }
  topology: string       // ASCII/text architecture diagram
  stack: string[]
  links: {
    github?: string
    demo?: string
    npm?: string
  }
  productView: { es: string; en: string }
  archView: { es: string; en: string }
}

export const systems: SystemProject[] = [
  {
    id: 'gripm',
    index: '01.01',
    name: 'gripm',
    tagline: {
      es: 'Cockpit ágil y soberano para desarrolladores y agentes de IA.',
      en: 'Sovereign agile cockpit for developers and AI agents.',
    },
    domain: {
      es: 'AI & Agentic Workflows · Agile Tooling',
      en: 'AI & Agentic Workflows · Agile Tooling',
    },
    status: 'production',
    visibility: 'open-source',
    lifecycle: { es: 'Producción (v1.7.0)', en: 'Production (v1.7.0)' },
    description: {
      es: 'Workspace local-first para gestionar backlogs de ingeniería y producto, iteraciones y releases directamente en Git. Da a los agentes de IA (Cursor, Claude Code, Antigravity) especificaciones estructuradas y criterios de aceptación verificables sin mover el roadmap a servicios cloud de terceros.',
      en: 'A local-first workspace for managing engineering and product backlogs, iterations, and releases alongside your code in Git. Gives AI agents (Cursor, Claude Code, Antigravity) structured specifications and verifiable acceptance criteria without moving your roadmap to third-party cloud services.',
    },
    topology:
      '[AI Agent / IDE] ⇄ JSON-RPC · stdio (MCP) ⇄ [Gripm CLI Daemon]\n          ↓ FS Watcher & Sync Engine ↓\n[Local Git Repo / .md Backlog] ⇄ [React 18 Web Cockpit :4100]',
    stack: ['TypeScript', 'Model Context Protocol (MCP)', 'React 18', 'Vite', 'Tailwind CSS', 'Node.js CLI', 'npm @gripm/board'],
    links: {
      github: 'https://github.com/pablojavierrodriguez/gripm',
      demo: 'https://gripm.vercel.app',
      npm: 'https://www.npmjs.com/package/@gripm/board',
    },
    productView: {
      es: 'Tu roadmap no debería vivir en servidores ajenos. Gripm mantiene el trabajo de producto e ingeniería junto al código: local-first, versionable con Git, y listo para agentes de IA. Adoptable en menos de 1 minuto vía npx.',
      en: "Your roadmap shouldn't live on someone else's servers. Gripm keeps product and engineering work alongside your code: local-first, versionable with Git, and ready for AI agents. Adoptable in under 1 minute via npx.",
    },
    archView: {
      es: 'Servidor MCP nativo (JSON-RPC sobre stdio) que expone herramientas de lectura/escritura del backlog a cualquier agente compatible. Motor de sincronización reactivo basado en FS watcher. UI React 18 con servidor de desarrollo Vite que persiste en localStorage. Sin base de datos externa, sin red, sin servicios cloud.',
      en: 'Native MCP server (JSON-RPC over stdio) exposing backlog read/write tools to any compatible agent. Reactive sync engine based on FS watcher. React 18 UI with Vite dev server persisting to localStorage. No external database, no network, no cloud services.',
    },
  },
  {
    id: 'gripm-playbook',
    index: '01.02',
    name: 'gripm-playbook',
    tagline: {
      es: 'Framework de ingeniería autónoma multi-agente con roles especializados.',
      en: 'Autonomous multi-agent engineering framework with specialized roles.',
    },
    domain: {
      es: 'Agile Methodology · AI Orchestration · Prompt Engineering',
      en: 'Agile Methodology · AI Orchestration · Prompt Engineering',
    },
    status: 'active-oss',
    visibility: 'open-source',
    lifecycle: { es: 'Activo (v2.5.0 · OSS)', en: 'Active (v2.5.0 · OSS)' },
    description: {
      es: 'Marco de trabajo con roles adaptativos (PM Orchestrator, Principal Engineer, Rigorous QA Auditor, World-class UX Designer) y contratos de handoff verificables para orquestación de subagentes en ciclos de desarrollo acelerados por IA.',
      en: 'An agile framework with adaptive roles (PM Orchestrator, Principal Engineer, Rigorous QA Auditor, World-class UX Designer) and verifiable handoff contracts for orchestrating sub-agents in AI-accelerated development cycles.',
    },
    topology:
      '[PM Orchestrator] → Handoff Contract\n          ↓\n[Principal Engineer] → Audit Gate → [Rigorous QA Auditor]\n          ↓                                    ↓\n[UX Designer Gate] ←──── Review Loop ──────────┘',
    stack: ['Agentic Workflows', 'Dynamic Role Prompting', 'Sub-Agent Lifecycle Management', 'Git Quality Gates', 'Static UX Auditing', 'npm @gripm/playbook'],
    links: {
      github: 'https://github.com/pablojavierrodriguez/gripm-playbook',
      npm: 'https://www.npmjs.com/package/@gripm/playbook',
    },
    productView: {
      es: 'Convierte cualquier IDE con IA en un equipo de ingeniería autónomo con responsabilidades claras, roles adaptativos y puertas de calidad verificables. Sin overhead burocrático, con toda la estructura que necesita un equipo de software de alto rendimiento.',
      en: 'Turns any AI-powered IDE into an autonomous engineering team with clear responsibilities, adaptive roles, and verifiable quality gates. No bureaucratic overhead, all the structure a high-performance software team needs.',
    },
    archView: {
      es: 'Conjunto de prompts de sistema versionados en Markdown que definen contratos de comportamiento para cada rol. El orquestador (PM) divide el trabajo en sub-tareas con criterios de aceptación formales. Cada subagente opera dentro de su dominio con un protocolo de handoff explícito antes de pasar al siguiente rol.',
      en: 'A set of Markdown-versioned system prompts defining behavioral contracts for each role. The PM Orchestrator decomposes work into subtasks with formal acceptance criteria. Each sub-agent operates within its domain with an explicit handoff protocol before passing to the next role.',
    },
  },
  {
    id: 'c3admin',
    index: '01.03',
    name: 'c3admin',
    tagline: {
      es: 'Plataforma operacional empresarial multi-tenant con auditoría de eventos.',
      en: 'Multi-tenant enterprise operations platform with event auditing.',
    },
    domain: {
      es: 'Enterprise SaaS · Multi-Tenant Architecture · Ops Automation',
      en: 'Enterprise SaaS · Multi-Tenant Architecture · Ops Automation',
    },
    status: 'private-teaser',
    visibility: 'private',
    lifecycle: { es: 'En Producción (Propietario)', en: 'Production (Proprietary)' },
    description: {
      es: 'Panel de control administrativo integral con analítica en tiempo real, control de acceso basado en roles (RBAC estricto con aislamiento de tenant), automatización de flujos operativos y registro de auditoría de eventos.',
      en: 'Comprehensive administrative control panel with real-time analytics, strict role-based access control (RBAC with tenant isolation), operational workflow automation, and event audit logging.',
    },
    topology:
      '[Next.js App Router Edge] → [RBAC Middleware / Tenant Isolation Layer]\n          ↓                                    ↓\n[Business Logic API Routes] → [Event Stream / Audit Log]\n          ↓\n[PostgreSQL · Multi-Schema Tenant Model]',
    stack: ['Next.js App Router', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Strict RBAC', 'Event Audit Webhooks'],
    links: {},
    productView: {
      es: 'Una plataforma para centralizar operaciones empresariales sin sacrificar control ni visibilidad. Cada acción queda registrada, cada rol está estrictamente delimitado y los flujos de trabajo se automatizan sin código adicional.',
      en: 'A platform to centralize business operations without sacrificing control or visibility. Every action is logged, every role is strictly scoped, and workflows are automated without extra code.',
    },
    archView: {
      es: 'Modelo de multi-tenancy basado en esquemas de PostgreSQL con middleware de aislamiento en el edge. Control de acceso con RBAC granular a nivel de recurso. Log de auditoría implementado como event stream inmutable con webhooks de salida. Sin ORM — queries con tipado estricto para operaciones críticas.',
      en: 'Multi-tenancy model based on PostgreSQL schemas with edge-layer isolation middleware. Granular resource-level RBAC. Audit log implemented as an immutable event stream with outbound webhooks. No ORM — strictly typed queries for critical operations.',
    },
  },
  {
    id: 'dom',
    index: '01.04',
    name: 'dom-personalfinances',
    tagline: {
      es: 'Motor de finanzas personales zero-knowledge con contabilidad de partida doble.',
      en: 'Zero-knowledge personal finance engine with double-entry bookkeeping.',
    },
    domain: {
      es: 'Fintech · Privacy-First · Local-First Systems',
      en: 'Fintech · Privacy-First · Local-First Systems',
    },
    status: 'incubating',
    visibility: 'private-upcoming-oss',
    lifecycle: { es: 'Incubación · Alfa Privada (OSS próximamente)', en: 'Incubating · Private Alpha (OSS upcoming)' },
    description: {
      es: 'Sistema autónomo de finanzas personales con privacidad absoluta: toda la encriptación ocurre en el cliente (AES-GCM), el servidor nunca ve datos sin cifrar. Motor contable de partida doble con soporte multi-moneda y almacenamiento local-first.',
      en: 'Autonomous personal finance system with absolute privacy: all encryption happens client-side (AES-GCM), the server never sees unencrypted data. Double-entry accounting engine with multi-currency support and local-first storage.',
    },
    topology:
      '[Browser UI] → [Client-Side AES-GCM Crypto Layer] → [Encrypted Payload]\n          ↓                      ↓\n[Local IndexedDB / SQLite]   [Optional Encrypted Cloud Sync]\n          ↓\n[Double-Entry Ledger Engine · Multi-Currency]',
    stack: ['TypeScript', 'Zero-Knowledge Cryptography (AES-GCM)', 'Double-Entry Bookkeeping Engine', 'Local-First DB (IndexedDB)', 'Multi-Currency Support'],
    links: {},
    productView: {
      es: 'Tu situación financiera personal no le pertenece a ninguna app ni servidor en la nube. DOM te devuelve ese control: todo lo que sabés sobre tu patrimonio vive en tu dispositivo, encriptado, sin que ningún tercero pueda acceder.',
      en: 'Your personal financial situation belongs to no app or cloud server. DOM gives that control back to you: everything you know about your finances lives on your device, encrypted, with no third party able to access it.',
    },
    archView: {
      es: 'Motor criptográfico client-side basado en AES-GCM con derivación de clave PBKDF2. Modelo contable de partida doble con validación de integridad de transacciones (suma cero por asiento). Persistencia en IndexedDB con snapshots encriptados opcionales. En fase de auditoría del motor antes de la liberación pública.',
      en: 'Client-side cryptographic engine based on AES-GCM with PBKDF2 key derivation. Double-entry accounting model with transaction integrity validation (zero-sum per entry). IndexedDB persistence with optional encrypted snapshots. Currently in engine audit phase before public release.',
    },
  },
]

// ─── ENTERPRISE IMPACT CASES (Architectural Chronicle) ────────────────────────
export interface EnterpriseCase {
  id: string
  title: { es: string; en: string }
  period: string
  role: { es: string; en: string }
  company: string
  description: { es: string; en: string }
  outcomes: string[]           // Metrics — language-neutral (numbers stay same)
  tags: string[]
}

export const enterpriseCases: EnterpriseCase[] = [
  {
    id: 'netops-migration',
    title: { es: 'Migración NetOps', en: 'NetOps Migration' },
    period: '2025',
    role: { es: 'Technical Product Owner', en: 'Technical Product Owner' },
    company: 'Personal (Telecom)',
    description: {
      es: 'Lideré end-to-end la migración del sistema de tickets OSS a BMC Helix ITSM + NetOps para 3500+ usuarios de operaciones críticas de red.',
      en: 'Led end-to-end migration of the OSS ticketing system to BMC Helix ITSM + NetOps for 3,500+ critical network operations users.',
    },
    outcomes: [
      '130,000+ incidentes gestionados por mes en el nuevo sistema',
      'Implementado en tiempo récord con alta tasa de adopción',
      'Sin interrupción de operaciones críticas durante la migración',
    ],
    tags: ['ITSM', 'Enterprise Migration', 'Change Management', 'OSS'],
  },
  {
    id: 'digital-noc',
    title: { es: 'Digital NOC Initiative', en: 'Digital NOC Initiative' },
    period: '2024 — Presente',
    role: { es: 'Technical Product Owner', en: 'Technical Product Owner' },
    company: 'Personal (Telecom)',
    description: {
      es: 'Arquitecté e implementé la automatización de procesos manuales de gestión de incidentes de red, reduciendo la dependencia de intervención humana en operaciones repetibles.',
      en: 'Architected and implemented automation of manual network incident management processes, reducing dependency on human intervention for repeatable operations.',
    },
    outcomes: [
      '+30% de automatización de procesos → MTTR -25%',
      '-20% de FTE necesarios en operaciones de assurance',
      'Reducción medible de MTTD y mejora de NPS de operaciones',
    ],
    tags: ['Automation', 'AI/ML Integration', 'Operational Excellence', 'NOC'],
  },
  {
    id: 'cross-oss',
    title: { es: 'Convergencia OSS — Proyecto CROSS', en: 'OSS Convergence — CROSS Project' },
    period: '2019 — 2021',
    role: { es: 'Sr. Analista de Mejora Continua', en: 'Sr. Continuous Improvement Analyst' },
    company: 'Telecom Argentina',
    description: {
      es: 'Lideré la unificación del sistema de tickets post-fusión Telecom + Cablevisión. Un solo sistema de gestión de incidentes/problemas/cambios para toda la operación convergente.',
      en: 'Led the unification of the ticketing system post-merger Telecom + Cablevisión. A single incident/problem/change management system for the entire converged operation.',
    },
    outcomes: [
      '+30% de eficiencia en procesos cross-empresa',
      'Implementado en CTO y operaciones regionales sin disrupciones',
      '3,500+ usuarios migrados a sistema unificado',
    ],
    tags: ['Enterprise Integration', 'Post-Merger', 'Process Design', 'ITSM'],
  },
  {
    id: 'usability-transformation',
    title: { es: 'Transformación de Usabilidad OSS', en: 'OSS Usability Transformation' },
    period: '2023',
    role: { es: 'Product Manager & Product Owner', en: 'Product Manager & Product Owner' },
    company: 'Telecom Argentina',
    description: {
      es: 'Lideré el rediseño del producto OSS principal mejorando experiencia de usuario e indicadores operacionales. Transformación agile del equipo completo implementada en paralelo.',
      en: 'Led the redesign of the main OSS product improving user experience and operational indicators. Full-team agile transformation implemented in parallel.',
    },
    outcomes: [
      'KPI de usabilidad clave +25%',
      'Velocidad de sprints del equipo +30% de eficiencia',
      'Transformación agile completa del equipo de producto',
    ],
    tags: ['UX Research', 'Product Design', 'User Advocacy', 'Agile Transformation'],
  },
]

// ─── PROFESSIONAL EXPERIENCE (Chronological roles) ────────────────────────────
export interface Role {
  title: { es: string; en: string }
  company: string
  period: { es: string; en: string }
  isCurrent: boolean
  highlights: { es: string; en: string }[]
}

export const roles: Role[] = [
  {
    title: { es: 'Technical Product Owner — OSS Ecosystem', en: 'Technical Product Owner — OSS Ecosystem' },
    company: 'Personal (Telecom Argentina)',
    period: { es: '2024 – 2026', en: '2024 – 2026' },
    isCurrent: false,
    highlights: [
      {
        es: 'Arquitectura de solución y dueño end-to-end del sistema de tickets y operaciones críticas OSS para 130K+ incidentes/mes.',
        en: 'Solution architecture and end-to-end owner of the critical OSS ticketing and operations platform for 130K+ incidents/month.',
      },
      {
        es: 'Liderazgo en iniciativas de automatización e IA operativa: reducción directa de trabajo manual y detección anticipada.',
        en: 'Led operational automation and AI initiatives: direct reduction in manual toil and proactive incident anticipation.',
      },
      {
        es: 'Articulación transversal entre arquitectura técnica, ingeniería, aseguramiento de calidad y ciberseguridad.',
        en: 'Cross-functional governance spanning technical architecture, engineering, QA assurance, and cybersecurity.',
      },
    ],
  },
  {
    title: { es: 'Product Manager & Product Owner', en: 'Product Manager & Product Owner' },
    company: 'Telecom Argentina',
    period: { es: '2022 – 2025', en: '2022 – 2025' },
    isCurrent: false,
    highlights: [
      {
        es: 'Descubrimiento, arquitectura funcional y entrega continua de soluciones en el ecosistema OSS a través de múltiples squads.',
        en: 'Discovery, functional architecture, and continuous delivery of OSS ecosystem solutions across multiple squads.',
      },
      {
        es: 'Transformación ágil de punta a punta (+30% eficiencia de sprints) y rediseño integral de producto (+25% KPI de usabilidad).',
        en: 'End-to-end agile transformation (+30% sprint efficiency) and comprehensive product redesign (+25% usability KPI).',
      },
      {
        es: 'Liderazgo en el reemplazo y modernización de la aplicación core del ecosistema OSS.',
        en: 'Led the modernization and replacement of the core operational application in the OSS ecosystem.',
      },
    ],
  },
  {
    title: { es: 'Sr. Analista de Mejora Continua', en: 'Sr. Continuous Improvement Analyst' },
    company: 'Telecom Argentina',
    period: { es: '2019 – 2022', en: '2019 – 2022' },
    isCurrent: false,
    highlights: [
      {
        es: 'Arquitectura de procesos y agente de cambio durante la fusión Telecom/Cablevisión para 3500+ usuarios operativos.',
        en: 'Process architecture and change agent during the Telecom/Cablevisión merger for 3,500+ operational users.',
      },
      {
        es: 'Lideré el Proyecto CROSS: unificación e interoperabilidad de sistemas de tickets para CTO y operaciones.',
        en: 'Led Project CROSS: unification and interoperability of ticketing systems for CTO and regional operations.',
      },
    ],
  },
  {
    title: { es: 'Co-fundador', en: 'Co-founder' },
    company: 'Mediavint',
    period: { es: '2020 – 2021', en: '2020 – 2021' },
    isCurrent: false,
    highlights: [
      {
        es: 'Consultoría estratégica en arquitectura digital, posicionamiento de producto y modelos de negocio en etapa temprana.',
        en: 'Strategic consultancy in digital architecture, product positioning, and early-stage business models.',
      },
    ],
  },
]

// ─── EDUCATION & CREDENTIALS ──────────────────────────────────────────────────
export const education = {
  degrees: [
    {
      degree: { es: 'Licenciatura en Publicidad, Comunicación y Marketing', en: 'Bachelor\'s — Advertising, Communication & Marketing' },
      institution: 'Universidad Nacional de Lomas de Zamora (UNLZ)',
      period: '2008 — 2015',
      status: { es: 'Completado', en: 'Completed' },
    },
    {
      degree: { es: 'Ingeniería en Sistemas de Información', en: 'Systems Engineering' },
      institution: 'Universidad Tecnológica Nacional (UTN)',
      period: '2016 — 2017',
      status: { es: 'En Pausa', en: 'On Hold' },
    },
  ],
  certifications: [
    'Atlassian Agile Project Management Professional (2024)',
    'Product Management Fundamentals — Pendo.io (2024)',
    'Data Analytics — Coderhouse (2023)',
    'Product Manager Certification — Coderhouse (2022)',
    'ITIL® Foundation & PPO — Xelere',
    'LeSS (Large-Scale Scrum) Practitioner',
    'Tableau & Excel Data Processing — Coderhouse',
  ],
}

// ─── DESIGN PILLARS (Universal & Agnostic) ───────────────────────────────────
export const principles = [
  {
    id: 'data-autonomy',
    number: '01',
    title: { es: 'Autonomía e Interoperabilidad', en: 'Data Autonomy & Open Interfaces' },
    body: {
      es: 'Los sistemas deben diseñarse minimizando acoplamientos forzados con plataformas propietarias. Estándares abiertos, portabilidad e interfaces limpias garantizan que el valor y los datos pertenezcan al producto, no a la nube de turno.',
      en: 'Systems should be designed minimizing forced vendor lock-in. Open standards, clean interfaces, and portable architectures ensure data and logic belong to the product, not to the hosting vendor.',
    },
  },
  {
    id: 'dual-layer-protocols',
    number: '02',
    title: { es: 'Interfases para Humanos y Máquinas', en: 'Human & Machine Protocol Design' },
    body: {
      es: 'El software moderno no solo es consumido por personas en una interfaz gráfica; es operado por agentes de IA, procesos asíncronos y scripts. Diseñar contratos y protocolos limpios (APIs tipadas, JSON-RPC, MCP, CLI) es un requisito desde el día cero.',
      en: 'Modern software is not just operated by humans through a GUI; it is driven by AI agents, headless pipelines, and scripts. Designing clean contracts and open protocols (typed APIs, JSON-RPC, MCP, CLI) is a day-zero requirement.',
    },
  },
  {
    id: 'resilient-simplicity',
    number: '03',
    title: { es: 'Simplicidad Resiliente', en: 'Resilient Simplicity' },
    body: {
      es: 'La verdadera sofisticación arquitectónica consiste en saber qué NO construir. La complejidad gratuita cobra peaje en velocidad de entrega y fragilidad operativa. Diseñar con modularidad pragmática hoy para poder evolucionar sin reescribir mañana.',
      en: 'True architectural sophistication is knowing what NOT to build. Gratuitous complexity exacts a heavy toll on delivery velocity and operational stability. Design with pragmatic modularity today to evolve without rewrites tomorrow.',
    },
  },
  {
    id: 'systems-thinking',
    number: '04',
    title: { es: 'Integridad de Sistemas de Punta a Punta', en: 'End-to-End System Integrity' },
    body: {
      es: 'Las fallas críticas de producto rara vez ocurren en un componente aislado; ocurren en la fricción entre interfaces: negocio, datos, UX y operaciones. La arquitectura debe gobernar el flujo completo para que el impacto sea real y medible.',
      en: 'Critical product failures rarely happen inside an isolated component; they occur at the seams between business intent, data flow, UX, and operations. Architecture must govern the entire lifecycle to produce measurable impact.',
    },
  },
]
