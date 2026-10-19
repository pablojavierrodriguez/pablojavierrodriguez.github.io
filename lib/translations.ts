export type Language = 'es' | 'en'

export const translations = {
  es: {
    meta: {
      title: 'Pablo Javier Rodríguez — Solutions Architect & Digital Products Builder',
      description:
        'Diseño sistemas donde la intención de negocio, la solidez técnica y los agentes autónomos convergen en software que sobrevive al sprint en que nació.',
    },
    nav: {
      systems: 'Sistemas',
      chronicle: 'Trayectoria',
      principles: 'Principios',
      contact: 'Contacto',
      langLabel: 'EN',
    },
    status: {
      available: 'Disponible para Advisory',
      location: 'Esquel, ARG · Remoto Global',
    },
    hero: {
      role: 'Solutions Architect & Digital Products Builder',
      thesis:
        'Diseño sistemas donde la intención de negocio, la solidez técnica y los agentes autónomos convergen en software que sobrevive al sprint en que nació.',
      cta_systems: 'Ver mis sistemas',
      cta_contact: 'Hablemos',
      badge: 'Monografía Arquitectónica · Vol. 01',
    },
    systems: {
      title: 'Living System Index',
      subtitle: 'Sistemas concebidos, diseñados y construidos. Seleccioná uno para inspeccionarlo.',
      count: '{{n}} sistemas registrados',
      lens_product: 'Vista de Producto',
      lens_arch: 'Vista de Arquitectura',
      lifecycle: 'Ciclo de vida',
      access: 'Acceso',
      status_label: 'Estado',
      spec_sheet: 'Ficha Técnica del Sistema',
      topology: 'Topología de Arquitectura',
      request_teaser: 'Solicitar Blueprint Técnico →',
      view_github: 'Ver en GitHub',
      launch_demo: 'Ver Demo en Vivo →',
    },
    chronicle: {
      title: 'Crónica Arquitectónica',
      subtitle: 'No una lista de puestos — una historia de sistemas construidos, decisiones tomadas e impacto medible.',
      linkedin_cta: 'Perfil completo en LinkedIn →',
      current: 'Actual',
      former: 'Anterior',
      outcomes_label: 'Resultados:',
    },
    education: {
      title: 'Formación & Credenciales',
      degrees: 'Títulos',
      certs: 'Certificaciones',
      continuous: 'Aprendizaje continuo',
      continuous_text:
        'Arquitectura de sistemas, desarrollo web, agentes autónomos y metodologías de liderazgo — la versatilidad y la curiosidad intelectual son ventajas competitivas reales.',
    },
    principles: {
      title: 'Pilares de Diseño',
      subtitle: 'Los principios que guían cada decisión técnica y de producto.',
    },
    contact: {
      title: '¿Construimos algo juntos?',
      subtitle:
        'Estoy abierto a advisory, arquitectura de soluciones y proyectos estratégicos donde la profundidad técnica y la visión de negocio sean igual de importantes.',
      email_label: 'Email',
      response_time: 'Respondo en 24 hs',
      linkedin_label: 'LinkedIn',
      linkedin_cta: 'Conectemos →',
      location_label: 'Ubicación & Zona Horaria',
      location_detail: 'Esquel, Argentina (ART, UTC-3). Remote-first, async-friendly.',
      looking_for: 'Conversaciones que me interesan',
      items: [
        { title: 'Advisory técnico o de producto', desc: 'Arquitectura de sistemas, estrategia de producto, OKRs' },
        { title: 'Proyectos con impacto real', desc: 'Transformación digital, automatización, IA agentica' },
        { title: 'Co-fundación o construcción conjunta', desc: 'Si tenés una idea ambiciosa y necesitás quien la arquitecte' },
      ],
      closing:
        'No busco cualquier proyecto. Busco problemas donde pueda poner lo técnico, lo estratégico y lo humano al mismo tiempo.',
    },
    footer: {
      role: 'Solutions Architect & Digital Products Builder',
      tagline: 'Construido con propósito. Sin templates, sin relleno.',
      copyright: '© 2026 · Esquel, Argentina · Remote-first',
      lang_note: 'Este sitio también está disponible en inglés.',
    },
  },
  en: {
    meta: {
      title: 'Pablo Javier Rodríguez — Solutions Architect & Digital Products Builder',
      description:
        'I design systems where business intent, technical resilience, and autonomous agents converge into software that outlasts the sprint it was born in.',
    },
    nav: {
      systems: 'Systems',
      chronicle: 'Chronicle',
      principles: 'Principles',
      contact: 'Contact',
      langLabel: 'ES',
    },
    status: {
      available: 'Open for Advisory',
      location: 'Esquel, ARG · Remote Global',
    },
    hero: {
      role: 'Solutions Architect & Digital Products Builder',
      thesis:
        'I design systems where business intent, technical resilience, and autonomous agents converge into software that outlasts the sprint it was born in.',
      cta_systems: 'Explore my systems',
      cta_contact: "Let's talk",
      badge: 'Architectural Monograph · Vol. 01',
    },
    systems: {
      title: 'Living System Index',
      subtitle: 'Systems conceived, designed, and built. Select one to inspect.',
      count: '{{n}} systems recorded',
      lens_product: 'Product View',
      lens_arch: 'Architecture View',
      lifecycle: 'Lifecycle',
      access: 'Access',
      status_label: 'Status',
      spec_sheet: 'System Spec Sheet',
      topology: 'Architecture Topology',
      request_teaser: 'Request Architecture Blueprint →',
      view_github: 'View on GitHub',
      launch_demo: 'Launch Live Demo →',
    },
    chronicle: {
      title: 'Architectural Chronicle',
      subtitle: "Not a list of job titles — a record of systems built, decisions made, and measurable impact.",
      linkedin_cta: 'Full profile on LinkedIn →',
      current: 'Current',
      former: 'Former',
      outcomes_label: 'Outcomes:',
    },
    education: {
      title: 'Education & Credentials',
      degrees: 'Degrees',
      certs: 'Certifications',
      continuous: 'Continuous learning',
      continuous_text:
        'Systems architecture, web development, autonomous agents, and leadership methodologies — versatility and intellectual curiosity are real competitive advantages.',
    },
    principles: {
      title: 'Design Pillars',
      subtitle: 'The principles that guide every technical and product decision.',
    },
    contact: {
      title: "Let's build something together.",
      subtitle:
        "I'm open to advisory work, solutions architecture, and strategic projects where technical depth and business vision matter equally.",
      email_label: 'Email',
      response_time: 'I respond within 24h',
      linkedin_label: 'LinkedIn',
      linkedin_cta: 'Connect →',
      location_label: 'Location & Timezone',
      location_detail: 'Esquel, Argentina (ART, UTC-3). Remote-first, async-friendly.',
      looking_for: "Conversations I'm excited about",
      items: [
        { title: 'Technical or product advisory', desc: 'Systems architecture, product strategy, OKRs' },
        { title: 'Real-impact projects', desc: 'Digital transformation, automation, agentic AI' },
        { title: 'Co-founding or joint ventures', desc: "If you have an ambitious idea that needs an architect" },
      ],
      closing:
        "I'm not looking for just any project. I look for problems where I can bring the technical, strategic, and human together.",
    },
    footer: {
      role: 'Solutions Architect & Digital Products Builder',
      tagline: 'Built with purpose. No templates, no fluff.',
      copyright: '© 2026 · Esquel, Argentina · Remote-first',
      lang_note: 'Este sitio también está disponible en español.',
    },
  },
} as const

export function t(lang: Language, path: string): string {
  const keys = path.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = translations[lang]
  for (const key of keys) {
    if (current === undefined) return path
    current = current[key]
  }
  return typeof current === 'string' ? current : path
}
