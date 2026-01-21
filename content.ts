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
          id: 'ai-exposed-2026',
          title: '2025: The Year AI Exposed the Foundations',
          excerpt: 'In hindsight, 2025 will be remembered as the year AI became infrastructure, exposing the operational foundations of marketing leadership.',
          date: 'Dec 16, 2025',
          readTime: '5 min read',
          image: '/postimgs/leadetship_outlook_2025.png',
          fullContent: `
In hindsight, 2025 will be remembered as the year artificial intelligence stopped being a feature and became infrastructure. A year when AI no longer waited for organizations to be ready, and by doing so, exposed something deeper than technological capability: it revealed the operational foundations, the invisible processes, and the structural health of marketing itself.


It was not a loud disruption. It was a silent one. And in that silence, AI illuminated gaps that creativity, intuition, or campaign volume had been masking for years.


### 2025 Was the Year of Exposure—not Transformation


The most important outcome of 2025 was not what AI created. It was what AI exposed:

* **The Ambition–Readiness Gap Became Undeniable:** Organizations rushed toward generative models with speed, but lacked the necessary architecture and data discipline. AI amplified inefficiency and fragmentation rather than repairing it.
* **The Fall of “Experimentation AI”:** The era of endless pilots ended abruptly. CEOs stopped asking “What are we testing?” and began asking “What are we executing?”
* **AI Pressure:** AI made performance, content velocity, and strategic coherence radically visible. This transparency created an escalating form of competitive pressure: **AI Pressure**. Quiet, cumulative, and increasingly unforgiving.

### Marketing as Infrastructure: The Silent Lesson

Perhaps the most consequential realization of 2025 is that marketing is no longer a collection of initiatives; it is an **operational infrastructure**. 

The teams that thrived treated marketing as:
1.  **A system**, not a calendar.
2.  **An infrastructure**, not a department.
3.  **A capability**, not a set of deliverables.

### The Marketing Spine: The Framework That Defined the Winners

The **Marketing Spine** is the organization’s operational backbone, composed of:
* Integrated architecture.
* Clean and accessible data.
* Coherent processes.
* Cross-functional governance.
* Standardized execution.

When the Marketing Spine is strong, AI becomes leverage. When it is weak, AI becomes noise.

### What 2026 Will Demand from Marketing Leadership

If 2025 exposed, then 2026 will demand. It will do so through five executive imperatives:

1.  **Operational AI Readiness:** Not as a project, but a standard baseline expectation.
2.  **Integrated Architecture Over Tool Accumulation:** Edge will come from orchestration, not tech stacks.
3.  **Precision Over Volume:** Data-informed, purpose-driven content strategies.
4.  **Radical Accountability:** Metrics tied directly to acquisition, efficiency, and growth.
5.  **Hybrid Leadership:** CMOs fluent in both the language of technology and people.

### Conclusion

AI did not transform marketing from the outside; it revealed what marketing already was on the inside. The organizations that enter 2026 with a strong Marketing Spine will build a meaningful competitive edge. 

AI will not replace marketing leadership. But it will amplify, relentlessly, the clarity, discipline, and strategic rigor of the leaders who embrace it.
          `
        },
        {
          id: '2',
          title: 'The AI Paradox: More Content, Less Meaning',
          excerpt: 'In an age of infinite generation, curation becomes the ultimate skill.',
          date: 'Sep 28, 2023',
          readTime: '6 min read',
        },
        {
          id: '3',
          title: 'Clarity is an expensive asset',
          excerpt: 'Speed is cheap. Direction is expensive. Why companies slow down before they scale.',
          date: 'Aug 15, 2023',
          readTime: '3 min read',
        },
      ] as any[], 
    },
    aiInsight: {
      label: "Live Demonstration",
      heading: "Applied Strategic Intelligence",
      description: "Experience the philosophy. Tell me a complex challenge you are facing, and I will generate a strategic reframe using my digital twin.",
      placeholder: "e.g., 'My team is shipping fast but churn is high'",
      buttonLoading: "Analyzing...",
      buttonDefault: "Generate Insight",
      error: "An error occurred while synthesizing the strategy.",
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
          excerpt: 'La IA dejó de ser una función para convertirse en infraestructura, revelando la salud estructural del marketing.',
          date: '16 Dic, 2025',
          readTime: '5 min lectura',
          image: '/postimgs/leadetship_outlook_2025.png',
          fullContent: `
En retrospectiva, 2025 será recordado como el año en que la inteligencia artificial dejó de ser una "función" para convertirse en infraestructura. Un año en el que la IA no esperó a que las organizaciones estuvieran listas y, al hacerlo, expuso algo más profundo que la capacidad tecnológica: reveló los cimientos operativos, los procesos invisibles y la salud estructural del marketing mismo.

No fue una disrupción estrepitosa. Fue silenciosa. Y en ese silencio, la IA iluminó brechas que la creatividad, la intuición o el volumen de campañas habían estado enmascarando durante años.

### 2025: El Año de la Exposición, no de la Transformación

El resultado más importante de 2025 no fue lo que la IA creó, sino lo que expuso:

* **La brecha entre ambición y preparación se hizo innegable:** Las organizaciones corrieron hacia modelos generativos con velocidad, pero carecían de la arquitectura y la disciplina de datos necesaria. La IA amplificó la ineficiencia en lugar de repararla.
* **El fin de la "IA de experimentación":** La era de los pilotos interminables terminó abruptamente. Los CEOs dejaron de preguntar "¿Qué estamos probando?" para preguntar "¿Qué estamos ejecutando?".
* **Presión de IA (AI Pressure):** La IA hizo que el rendimiento, la velocidad de contenido y la coherencia estratégica fueran radicalmente visibles. Esta transparencia creó una presión competitiva escalable: la **Presión de IA**. Silenciosa, acumulativa y cada vez más implacable.

### Marketing como Infraestructura: La Lección Silenciosa

Quizás la conclusión más importante de 2025 es que el marketing ya no es una colección de iniciativas; es una **infraestructura operativa**. 

Los equipos que prosperaron trataron al marketing como:
1.  **Un sistema**, no un calendario.
2.  **Una infraestructura**, no un departamento.
3.  **Una capacidad**, no un conjunto de entregables.

### La Columna del Marketing (Marketing Spine): El Marco del Éxito

La **Columna del Marketing** es el núcleo operativo de la organización, compuesto por:
* Arquitectura integrada.
* Datos limpios y accesibles.
* Procesos coherentes.
* Gobernanza multifuncional.
* Ejecución estandarizada.

Cuando la Columna del Marketing es fuerte, la IA se convierte en palanca. Cuando es débil, la IA es solo ruido.

### Lo que 2026 Exigirá del Liderazgo de Marketing

Si 2025 expuso las debilidades, 2026 exigirá soluciones a través de cinco imperativos ejecutivos:

1.  **Madurez Operativa de IA:** No como un proyecto, sino como un estándar base de operación.
2.  **Arquitectura Integrada sobre Acumulación de Herramientas:** La ventaja vendrá de la orquestación, no del tamaño del stack tecnológico.
3.  **Precisión sobre Volumen:** Estrategias de contenido informadas por datos y con un propósito claro.
4.  **Responsabilidad Radical:** Métricas vinculadas directamente a la adquisición, la eficiencia y el crecimiento.
5.  **Liderazgo Híbrido:** CMOs fluidos tanto en el lenguaje de la tecnología como en el de las personas.

### Conclusión

La IA no transformó el marketing desde fuera; reveló lo que el marketing ya era por dentro. Las organizaciones que entren en 2026 con una Columna de Marketing sólida construirán una ventaja competitiva significativa.

La IA no reemplazará el liderazgo de marketing. Pero amplificará, implacablemente, la claridad, la disciplina y el rigor estratégico de los líderes que decidan abrazarla.
          `
        },
        {
          id: '2',
          title: 'La Paradoja de IA: Más Contenido, Menos Sentido',
          excerpt: 'En una era de generación infinita, la curaduría es la habilidad definitiva.',
          date: '28 Sep, 2023',
          readTime: '6 min lectura',
        },
        {
          id: '3',
          title: 'La claridad es un activo costoso',
          excerpt: 'La velocidad es barata. La dirección es costosa.',
          date: '15 Ago, 2023',
          readTime: '3 min lectura',
        },
      ] as any[],
    },
    aiInsight: {
      label: "Demostración en Vivo",
      heading: "Inteligencia Estratégica Aplicada",
      description: "Experimenta la filosofía. Cuéntame un desafío complejo y generaré un reencuadre estratégico.",
      placeholder: "ej., 'Mi equipo envía código rápido pero la rotación es alta'",
      buttonLoading: "Analizando...",
      buttonDefault: "Generar Insight",
      error: "Ocurrió un error al sintetizar la estrategia.",
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
