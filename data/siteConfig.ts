export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: { title: string; desc: string }[];
  technologies: string[];
}

export interface StepItem {
  num: string;
  title: string;
  desc: string;
  badge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AudienceItem {
  tag: string;
  title: string;
  desc: string;
  highlight: string;
}

export const siteConfig = {
  name: "Pukio Tech",
  shortName: "Pukio",
  legalName: "Pukio Tech SAC",
  domain: "pukio.lat",
  url: "https://pukio.lat",
  email: "contacto.pukio@gmail.com",
  phone: "",
  whatsapp: "",
  headquarters: "Chiclayo, Perú",
  coverage: "Remoto a nivel nacional e internacional",
  slogan: "Ingeniería de software y robustez digital sin intermediarios.",
  originMeaning:
    "Del quechua pukyu: manantial o fuente de agua viva. Simboliza el origen de soluciones fluidas, transparentes y vitales para que las empresas operen y escalen.",
  description:
    "En Pukio Tech transformamos la complejidad técnica en soluciones fluidas y estables. Nos especializamos en desarrollo web, software a medida y administración de infraestructura en la nube, conectando a nuestros clientes directamente con los ingenieros a cargo de sus proyectos.",
  
  stats: [
    { value: "100%", label: "Atención directa con ingenieros", sub: "Sin capas intermedias" },
    { value: "99.9%", label: "Disponibilidad de infraestructura", sub: "Sistemas resistentes a escala" },
    { value: "4", label: "Pasos metodológicos claros", sub: "De la idea a producción" },
    { value: "0", label: "Costos ocultos", sub: "Cotizaciones transparentes" },
  ],

  services: [
    {
      id: "web-ecommerce",
      num: "01",
      title: "Páginas Web y Tiendas Online",
      shortDesc: "Ecosistemas digitales de alta velocidad optimizados para conversión y venta.",
      fullDesc:
        "Diseñamos y desarrollamos sitios corporativos, plataformas y portales de comercio electrónico creados como infraestructura central de negocio, combinando rendimiento extremo, diseño responsivo y optimización técnica para motores de búsqueda (SEO).",
      deliverables: [
        {
          title: "Sitios Web Corporativos",
          desc: "Desarrollo a medida con carga ultrarrápida, experiencia fluida y arquitectura orientada a captar clientes.",
        },
        {
          title: "eCommerce de Alta Conversión",
          desc: "Tiendas conectadas con pasarelas de pago locales e internacionales, sincronización de stock y facturación.",
        },
        {
          title: "Portales y Aplicaciones Web Ligeras",
          desc: "Áreas privadas, portales de clientes y catálogos interactivos con gestión de contenido intuitiva.",
        },
      ],
      technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "Shopify/Stripe"],
    },
    {
      id: "software-medida",
      num: "02",
      title: "Software a la Medida",
      shortDesc: "Aplicaciones web y herramientas internas creadas para tus procesos específicos.",
      fullDesc:
        "Reemplazamos hojas de cálculo dispersas y tareas manuales repetitivas con sistemas a medida diseñados alrededor de tu lógica de negocio. Construimos productos escalables, mantenibles y preparados para crecer con tu organización.",
      deliverables: [
        {
          title: "Sistemas de Gestión Interna",
          desc: "Dashboards, CRM/ERP personalizados, control de almacén, órdenes y trazabilidad operativa.",
        },
        {
          title: "Productos SaaS & MVP",
          desc: "Desde la arquitectura inicial hasta el despliegue comercial con microservicios o monolitos modulares limpios.",
        },
        {
          title: "Integraciones y APIs",
          desc: "Conexión transparente entre tus herramientas existentes para que operen como un único engranaje sincronizado.",
        },
      ],
      technologies: ["Node.js", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker", "REST/GraphQL"],
    },
    {
      id: "mantenimiento-reparacion",
      num: "03",
      title: "Mantenimiento y Reparación",
      shortDesc: "Diagnóstico técnico, corrección de bugs, optimización de velocidad y estabilidad.",
      fullDesc:
        "¿Tu sistema actual es lento, tiene errores o sufre caídas recurrentes? Realizamos auditorías de código e infraestructura para detectar cuellos de botella, corregir fallos críticos y dejar tu plataforma en estándares de rendimiento modernos.",
      deliverables: [
        {
          title: "Diagnóstico y Corrección de Bugs",
          desc: "Identificación precisa de anomalías de software y corrección quirúrgica en backend y frontend.",
        },
        {
          title: "Optimización Core Web Vitals",
          desc: "Aceleración de tiempos de respuesta, reducción de payload y optimización profunda de bases de datos.",
        },
        {
          title: "Actualización de Componentes Críticos",
          desc: "Migración de dependencias obsoletas, parches de seguridad y refactorización orientada a la mantenibilidad.",
        },
      ],
      technologies: ["Auditoría de Rendimiento", "Refactoring", "Clean Code", "Profiling", "Seguridad Web"],
    },
    {
      id: "nube-vps",
      num: "04",
      title: "Nube y VPS",
      shortDesc: "Aprovisionamiento de servidores virtuales, despliegue continuo y optimización de recursos.",
      fullDesc:
        "Te ayudamos a elegir, configurar y administrar la infraestructura adecuada sin pagar de más por nubes infladas. Desplegamos aplicaciones en servidores VPS y proveedores cloud optimizando costes, seguridad y alta disponibilidad.",
      deliverables: [
        {
          title: "Aprovisionamiento de VPS",
          desc: "Configuración inicial, hardening de seguridad, cortafuegos, SSH restringido y balanceo de carga.",
        },
        {
          title: "Pipelines de Despliegue CI/CD",
          desc: "Automatización de entregas de código con pruebas y despliegues sin tiempo de inactividad (zero-downtime).",
        },
        {
          title: "Optimización de Costos Cloud",
          desc: "Ajuste milimétrico de consumo de CPU, RAM y almacenamiento para evitar sorpresas a fin de mes.",
        },
      ],
      technologies: ["Linux VPS", "Docker", "AWS", "DigitalOcean", "Hetzner", "GitHub Actions", "CI/CD"],
    },
    {
      id: "servidores-dns",
      num: "05",
      title: "Servidores y DNS",
      shortDesc: "Administración avanzada de entornos Linux, DNS seguro e infraestructura de red.",
      fullDesc:
        "Gestionamos la capa profunda de tu presencia online: configuraciones de servidores web, certificados SSL/TLS, propagación y protección DNS contra ataques DDoS, y políticas de seguridad para correos corporativos (SPF, DKIM, DMARC).",
      deliverables: [
        {
          title: "SysAdmin Linux Avanzado",
          desc: "Supervisión, parches del kernel, automatización de copias de seguridad y monitorización 24/7.",
        },
        {
          title: "Gestión de Registros DNS & CDN",
          desc: "Enrutamiento ultrarrápido con Cloudflare, mitigación de ataques y cache perimetral en todo el mundo.",
        },
        {
          title: "Seguridad y Correo Corporativo",
          desc: "Implementación estricta de protocolos anti-spoofing para que tus correos nunca caigan en spam.",
        },
      ],
      technologies: ["Nginx", "Apache", "Cloudflare DNS", "Let's Encrypt", "SPF / DKIM / DMARC", "Bash Scripting"],
    },
  ],

  methodology: [
    {
      num: "01",
      title: "Análisis de Requerimientos",
      desc: "Sesiones de consultoría técnica para comprender a fondo la lógica de negocio y los requerimientos funcionales. Evitamos el desarrollo a ciegas con especificaciones claras y viables.",
      badge: "Consultoría sin costo",
    },
    {
      num: "02",
      title: "Cotización Coherente",
      desc: "Entrega de una propuesta técnica desglosada donde cada coste está justificado por una funcionalidad o recurso de infraestructura. Precio cerrado y sin sorpresas.",
      badge: "Transparencia total",
    },
    {
      num: "03",
      title: "Desarrollo y Configuración",
      desc: "Fase de construcción activa bajo estándares de código limpio, control de versiones, revisión de seguridad y pruebas de estrés antes de tocar entornos reales.",
      badge: "Entregas continuas",
    },
    {
      num: "04",
      title: "Despliegue y Soporte Directo",
      desc: "Lanzamiento a producción con acompañamiento técnico continuo. El cliente habla de inmediato con el ingeniero a cargo del proyecto para resolver incidencias o dudas.",
      badge: "Ingeniería directa",
    },
  ],

  audiences: [
    {
      tag: "Crecimiento Digital",
      title: "Pymes y Negocios Emergentes",
      desc: "Empresas que necesitan dar el salto a la digitalización con sistemas sólidos desde el primer día, evitando rehacer la plataforma cuando empiecen a escalar.",
      highlight: "Escalabilidad asegurada desde el día uno",
    },
    {
      tag: "Compromiso Regional",
      title: "Empresarios de Chiclayo y Norte del Perú",
      desc: "Negocios locales que buscan estándares internacionales de ingeniería de software con la cercanía, confianza y soporte personalizado de un socio estratégico regional.",
      highlight: "Ingeniería de clase mundial con cercanía local",
    },
    {
      tag: "Alcance Global",
      title: "Mercado Internacional",
      desc: "Compañías internacionales que valoran la eficiencia técnica, la comunicación directa en la misma franja horaria y la competitividad en costos de ingeniería de alta calidad.",
      highlight: "Eficiencia técnica y alta competitividad",
    },
  ],

  faqs: [
    {
      question: "¿Qué significa el nombre 'Pukio' y qué nos diferencia?",
      answer:
        "Pukio proviene del quechua 'pukyu', que significa manantial o fuente de agua viva. Representa nuestra filosofía: ser la fuente directa de tecnología fluida, cristalina y vital. Nos diferenciamos eliminando la intermediación comercial: cuando trabajas con nosotros, hablas y planificas directamente con los ingenieros que escriben el código y configuran los servidores.",
    },
    {
      question: "¿Cómo garantizan que no habrá costos ocultos?",
      answer:
        "Iniciamos con una fase exhaustiva de análisis de requerimientos. Con base en esto, emitimos una cotización coherente y detallada con precio cerrado y entregables definidos. Cada línea del presupuesto está vinculada a una funcionalidad o recurso técnico específico.",
    },
    {
      question: "¿Qué tecnologías utilizan para desarrollar los proyectos?",
      answer:
        "Seleccionamos la tecnología adecuada para cada caso de uso: Next.js, React y TypeScript para interfaces rápidas y SEO-friendly; Node.js y Python para APIs y servicios backend; PostgreSQL y Redis para datos persistentes y cachés de alta velocidad; y entornos Linux, Docker y VPS gestionados para máxima estabilidad y control de costes.",
    },
    {
      question: "¿Ofrecen soporte y mantenimiento posterior al lanzamiento?",
      answer:
        "Sí. No entregamos código y desaparecemos. Ofrecemos planes de soporte directo, monitoreo preventivo 24/7, copias de seguridad automatizadas, parches de seguridad y mejoras continuas para que tu infraestructura se mantenga siempre disponible.",
    },
    {
      question: "¿Cómo es la modalidad de trabajo si estamos en otra ciudad o país?",
      answer:
        "Nuestra sede central está en Chiclayo, Perú, pero operamos de manera 100% remota y flexible para clientes de todo el Perú y el extranjero. Usamos canales directos de comunicación, tableros de seguimiento transparentes y reuniones periódicas de sincronización.",
    },
    {
      question: "¿Pueden reparar o mejorar un sistema desarrollado por otro proveedor?",
      answer:
        "Absolutamente. A través de nuestro servicio de Mantenimiento y Reparación realizamos una auditoría inicial del código y servidor para diagnosticar fallas, resolver bugs acumulados, optimizar tiempos de carga y estabilizar la plataforma.",
    },
  ],

  marqueeChips: [
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Linux VPS",
    "Nginx",
    "Cloudflare",
    "AWS",
    "Core Web Vitals",
    "REST & GraphQL",
  ],
};
