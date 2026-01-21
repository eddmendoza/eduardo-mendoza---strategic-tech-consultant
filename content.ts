import { Pillar, BlogPost } from './types';

export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      territory: 'Territory',
      about: 'About',
      writings: 'Writings',
      aiDemo: 'AI Demo',
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
          id: '1',
          title: 'Why your "Digital Transformation" is failing',
          excerpt: 'You are digitizing chaos instead of redesigning the workflow. Automation without simplification is just faster confusion.',
          date: 'Oct 12, 2023',
          readTime: '4 min read',
          link: '#',
        },
        {
          id: '2',
          title: 'The AI Paradox: More Content, Less Meaning',
          excerpt: 'In an age of infinite generation, curation becomes the ultimate skill. How to structure your organization for decision-making, not just creation.',
          date: 'Sep 28, 2023',
          readTime: '6 min read',
          link: '#',
        },
        {
          id: '3',
          title: 'Clarity is an expensive asset',
          excerpt: 'Speed is cheap. Direction is expensive. Why the most successful tech companies slow down before they scale up.',
          date: 'Aug 15, 2023',
          readTime: '3 min read',
          link: '#',
        },
      ] as BlogPost[],
    },
    aiInsight: {
      label: "Live Demonstration",
      heading: "Applied Strategic Intelligence",
      description: "Experience the philosophy. Tell me a complex challenge you are facing, and I will generate a strategic reframe using my digital twin (Powered by Gemini).",
      placeholder: "e.g., 'My team is shipping fast but churn is high'",
      buttonLoading: "Analyzing...",
      buttonDefault: "Generate Insight",
      error: "An error occurred while synthesizing the strategy.",
    },
    contact: {
      heading: "Ready to reduce the noise?",
      description: "I accept a limited number of strategic engagements per quarter. Let's determine if we are a match.",
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
      aiDemo: 'Demo IA',
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
          description: 'Más allá del hype: implementamos modelos de lenguaje y sistemas predictivos que resuelven ineficiencias reales del negocio, no imaginarias.',
          icon: 'brain',
        },
        {
          id: 'automation',
          title: 'Automatización Inteligente',
          description: 'Diseño de flujos de trabajo autocorrectivos. No se trata de reemplazar humanos, sino de eliminar la fricción en la toma de decisiones de alto valor.',
          icon: 'workflow',
        },
        {
          id: 'strategy',
          title: 'Estrategia Digital de Negocio',
          description: 'La tecnología sirve al P&L, no al revés. Priorizamos sistemas sostenibles sobre victorias tácticas efímeras.',
          icon: 'chess',
        },
      ] as Pillar[],
    },
    about: {
      label: "Sobre Mí",
      heading: "Sistemas sobre tácticas.",
      p1: "En un mundo obsesionado con la velocidad, elijo la precisión. Soy un consultor obsesionado con convertir la complejidad en decisiones accionables.",
      p2: "Mi trabajo no es agregar más herramientas a tu stack. Es sustraer el ruido. Conecto la tecnología con las realidades del negocio, asegurando que cada línea de código o pivote estratégico sirva a un resultado medible.",
      p3: "Creo en la colaboración sincera. Sin promesas vacías, sin exageraciones—solo análisis riguroso y ejecución elegante.",
      quote: "La claridad es la única métrica que importa cuando el mercado es caótico.",
      cta: "Discutir su estrategia",
    },
    writings: {
      label: "Artículos",
      heading: "Reflexiones de campo",
      viewLinkedIn: "Ver LinkedIn",
      readArticle: "Leer Artículo",
      items: [
        {
          id: '1',
          title: 'Por qué tu "Transformación Digital" está fallando',
          excerpt: 'Estás digitalizando el caos en lugar de rediseñar el flujo de trabajo. La automatización sin simplificación es solo confusión acelerada.',
          date: '12 Oct, 2023',
          readTime: '4 min lectura',
          link: '#',
        },
        {
          id: '2',
          title: 'La Paradoja de IA: Más Contenido, Menos Sentido',
          excerpt: 'En una era de generación infinita, la curaduría es la habilidad definitiva. Cómo estructurar tu organización para decidir, no solo para crear.',
          date: '28 Sep, 2023',
          readTime: '6 min lectura',
          link: '#',
        },
        {
          id: '3',
          title: 'La claridad es un activo costoso',
          excerpt: 'La velocidad es barata. La dirección es costosa. Por qué las empresas tecnológicas más exitosas desaceleran antes de escalar.',
          date: '15 Ago, 2023',
          readTime: '3 min lectura',
          link: '#',
        },
      ] as BlogPost[],
    },
    aiInsight: {
      label: "Demostración en Vivo",
      heading: "Inteligencia Estratégica Aplicada",
      description: "Experimenta la filosofía. Cuéntame un desafío complejo que enfrentes y generaré un reencuadre estratégico usando mi gemelo digital (Potenciado por Gemini).",
      placeholder: "ej., 'Mi equipo envía código rápido pero la rotación es alta'",
      buttonLoading: "Analizando...",
      buttonDefault: "Generar Insight",
      error: "Ocurrió un error al sintetizar la estrategia.",
    },
    contact: {
      heading: "¿Listo para reducir el ruido?",
      description: "Acepto un número limitado de compromisos estratégicos por trimestre. Determinemos si somos compatibles.",
      button: "Iniciar Contacto",
    },
    footer: {
      copyright: "Sistemas sobre tácticas.",
    }
  }
};