import { Pillar, BlogPost } from './types';

export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      territory: 'Territory',
      about: 'About',
      writings: 'Writings',
      aiDemo: 'n8n Templates', // Actualizado
      contact: 'Contact',
    },
    hero: {
      headlineStart: "I won't give you more noise.",
      headlineHighlight: "I will help you think better",
      headlineEnd: "about what you are already building.",
      subhead: "Applied strategic thinking at the intersection of business, technology, and AI.",
      cta: "Explore Philosophy",
    },
    pillars: {
      label: "Intellectual Territory",
      heading: "The Foundation of Clarity",
      items: [
        {
          id: 'ai',
          title: 'Applied AI',
          description: 'Moving beyond the hype to implement Large Language Models and predictive systems that solve actual business inefficiencies, not just imaginary ones.',
          icon: 'brain',
        },
        {
          id: 'automation',
          title: 'Intelligent Automation',
          description: 'Designing self-correcting workflows. It is not about replacing humans, but about removing friction from high-value decision making processes.',
          icon: 'workflow',
        },
        {
          id: 'strategy',
          title: 'Business-Driven Digital Strategy',
          description: 'Technology serves the P&L, not the other way around. We prioritize sustainable systems over fleeting tactical wins.',
          icon: 'chess',
        },
      ] as Pillar[],
    },
    n8nLib: {
      tag: "Automation Blueprints",
      title: "Solutions ready to scale your operation.",
      items: [
        {
          title: "Intelligent Lead Scoring",
          desc: "Classifies leads from forms using AI and distributes them directly into your CRM.",
          tools: ["n8n", "OpenAI", "HubSpot"]
        },
        {
          title: "Inventory & ERP Sync",
          desc: "Two-way synchronization between e-commerce platforms and Google Sheets with Slack alerts.",
          tools: ["n8n", "Shopify", "Slack"]
        },
        {
          title: "Autonomous Support Agent",
          desc: "Sentiment analysis on incoming emails and automatic generation of response drafts.",
          tools: ["n8n", "Gmail", "Claude 3.5"]
        }
      ]
    },
    about: {
      label: "About Me",
      heading: "Systems over tactics.",
      p1: "In a world obsessed with speed, I choose precision. I am a consultant obsessed with turning complexity into actionable decisions.",
      p2: "My work is not about adding more tools to your stack. It is about subtracting the noise. I connect technology with business realities, ensuring that every line of code or strategic pivot serves a measurable outcome.",
      p3: "I believe in sincere partnership. No hype, no empty promises—just rigorous analysis and elegant execution.",
      quote: "Clarity is the only metric that matters when the market is chaotic.",
      cta: "Discuss your strategy",
    },
    writings: {
      label: "Writings",
      heading: "Reflections from the field",
      viewLinkedIn: "View LinkedIn",
      readArticle: "Read Article",
      items: [
        {
          id: 'ai-exposed-2026',
          title: '2025: The Year AI Exposed the Foundations',
          excerpt: 'In hindsight, 2025 will be remembered as the year AI became infrastructure, exposing the operational foundations of marketing leadership.',
          date: 'Dec 16, 2025',
          readTime: '5 min read',
          image: '/postimgs/leadetship_outlook_2025.png',
          fullContent: `(Contenido omitido para brevedad, mantener el original)`
        },
        {
          id: 'strategic-ai-marketing-2025',
          title: '2025: The Year of Strategic Deciding',
          excerpt: 'True sophistication is not found in what you build, but in what you consciously choose not to build.',
          date: 'Dec 30, 2025',
          readTime: '6 min read',
          image: '/postimgs/Stopped_Optimizing.png',
          fullContent:`(Contenido omitido para brevedad, mantener el original)`
        },
        {
          id: 'ai-competitive-edge-marketing-2025',
          title: 'From Toy to Competitive Edge: Reshaping Marketing',
          excerpt: 'The gap between experimenting with AI and integrating it strategically is widening.',
          date: 'Nov 25, 2025',
          readTime: '3 min read',
          image: '/postimgs/ia-curve_202511.png',
          fullContent: `(Contenido omitido para brevedad, mantener el original)`
        },
      ] as any[], 
    },
    contact: {
      heading: "Ready to reduce the noise?",
      description: "I accept a limited number of strategic engagements per quarter.",
      button: "Initiate Contact",
    },
    footer: {
      copyright: "Systems over tactics.",
    }
  },
  es: {
    nav: {
      territory: 'Territorio',
      about: 'Sobre Mí',
      writings: 'Artículos',
      aiDemo: 'Templates n8n', // Actualizado
      contact: 'Contacto',
    },
    hero: {
      headlineStart: "No voy a darte más ruido.",
      headlineHighlight: "Te ayudaré a pensar mejor",
      headlineEnd: "sobre lo que ya estás construyendo.",
      subhead: "Pensamiento estratégico aplicado en la intersección de negocios, tecnología e IA.",
      cta: "Explorar Filosofía",
    },
    pillars: {
      label: "Territorio Intelectual",
      heading: "La Base de la Claridad",
      items: [
        {
          id: 'ai',
          title: 'IA Aplicada',
          description: 'Implementamos sistemas predictivos que resuelven ineficiencias reales del negocio.',
          icon: 'brain',
        },
        {
          id: 'automation',
          title: 'Automatización Inteligente',
          description: 'Eliminamos la fricción en la toma de decisiones de alto valor.',
          icon: 'workflow',
        },
        {
          id: 'strategy',
          title: 'Estrategia Digital de Negocio',
          description: 'La tecnología sirve al P&L, no al revés.',
          icon: 'chess',
        },
      ] as Pillar[],
    },
    n8nLib: {
      tag: "Blueprints de Automatización",
      title: "Soluciones listas para escalar tu operación.",
      items: [
        {
          title: "Lead Scoring Inteligente",
          desc: "Clasifica leads de formularios usando IA y los distribuye directamente en tu CRM.",
          tools: ["n8n", "OpenAI", "HubSpot"]
        },
        {
          title: "Sincronizador de Inventario",
          desc: "Sincronización bidireccional entre plataformas de e-commerce y Google Sheets con alertas en Slack.",
          tools: ["n8n", "Shopify", "Slack"]
        },
        {
          title: "Agente de Soporte Autónomo",
          desc: "Análisis de sentimiento en correos entrantes y generación automática de borradores de respuesta.",
          tools: ["n8n", "Gmail", "Claude 3.5"]
        }
      ]
    },
    about: {
      label: "Sobre Mí",
      heading: "Sistemas sobre tácticas.",
      p1: "En un mundo obsesionado con la velocidad, elijo la precisión.",
      p2: "Conecto la tecnología con las realidades del negocio.",
      p3: "Análisis riguroso y ejecución elegante.",
      quote: "La claridad es la única métrica que importa.",
      cta: "Discutir su estrategia",
    },
    writings: {
      label: "Artículos",
      heading: "Reflexiones de campo",
      viewLinkedIn: "Ver LinkedIn",
      readArticle: "Leer Artículo",
      items: [
        {
          id: 'ai-exposed-2026',
          title: '2025: El año en que la IA expuso los cimientos',
          excerpt: 'La IA dejó de ser una función para convertirse en infraestructura.',
          date: '16 Dic, 2025',
          readTime: '5 min lectura',
          image: '/postimgs/leadetship_outlook_2025.png',
          fullContent: `(Contenido omitido para brevedad, mantener el original)`
        },
        {
          id: 'strategic-ai-marketing-2025',
          title: 'El año en que dejé de optimizar y empecé a decidir',
          excerpt: 'La verdadera sofisticación no se encuentra en lo que construyes, sino en lo que eliges conscientemente no construir.',
          date: '30 Dic, 2025',
          readTime: '6 min lectura',
          image: '/postimgs/Stopped_Optimizing.png',
          fullContent:`(Contenido omitido para brevedad, mantener el original)`
        },
        {
          id: 'ai-competitive-edge-marketing-2025',
          title: 'De juguete a ventaja competitiva: El nuevo marketing con IA',
          excerpt: 'Un marco para pasar de simples prompts a capacidades core.',
          date: '25 Nov, 2025',
          readTime: '3 min lectura',
          image: '/postimgs/ia-curve_202511.png',
          fullContent:`(Contenido omitido para brevedad, mantener el original)`
        },
      ] as any[],
    },
    contact: {
      heading: "¿Listo para reducir el ruido?",
      description: "Acepto un número limitado de compromisos estratégicos.",
      button: "Iniciar Contacto",
    },
    footer: {
      copyright: "Sistemas sobre tácticas.",
    }
  }
};
