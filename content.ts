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

&nbsp;

It was not a loud disruption. It was a silent one. And in that silence, AI illuminated gaps that creativity, intuition, or campaign volume had been masking for years.

&nbsp;

### 2025 Was the Year of Exposure—not Transformation

&nbsp;

The most important outcome of 2025 was not what AI created. It was what AI exposed:

* **The Ambition–Readiness Gap Became Undeniable:** Organizations rushed toward generative models with speed, but lacked the necessary architecture and data discipline. AI amplified inefficiency and fragmentation rather than repairing it.

* **The Fall of “Experimentation AI”:** The era of endless pilots ended abruptly. CEOs stopped asking “What are we testing?” and began asking “What are we executing?”

* **AI Pressure:** AI made performance, content velocity, and strategic coherence radically visible. This transparency created an escalating form of competitive pressure: **AI Pressure**. Quiet, cumulative, and increasingly unforgiving.

&nbsp;

### Marketing as Infrastructure: The Silent Lesson

&nbsp;

Perhaps the most consequential realization of 2025 is that marketing is no longer a collection of initiatives; it is an **operational infrastructure**. 

&nbsp;

The teams that thrived treated marketing as:
* **1.- A system**, not a calendar.
* **2.- An infrastructure**, not a department.
* **3.- A capability**, not a set of deliverables.

&nbsp;

### The Marketing Spine: The Framework That Defined the Winners

&nbsp;

The **Marketing Spine** is the organization’s operational backbone, composed of:
* **Integrated architecture.
* **Clean and accessible data.
* **Coherent processes.
* **Cross-functional governance.
* **Standardized execution.

&nbsp;

When the Marketing Spine is strong, AI becomes leverage. When it is weak, AI becomes noise.

&nbsp;

### What 2026 Will Demand from Marketing Leadership

&nbsp;

If 2025 exposed, then 2026 will demand. It will do so through five executive imperatives:

* **Operational AI Readiness:** Not as a project, but a standard baseline expectation.
* **Integrated Architecture Over Tool Accumulation:** Edge will come from orchestration, not tech stacks.
* **Precision Over Volume:** Data-informed, purpose-driven content strategies.
* **Radical Accountability:** Metrics tied directly to acquisition, efficiency, and growth.
* **Hybrid Leadership:** CMOs fluent in both the language of technology and people.

&nbsp;

### Conclusion

&nbsp;

AI did not transform marketing from the outside; it revealed what marketing already was on the inside. The organizations that enter 2026 with a strong Marketing Spine will build a meaningful competitive edge. 

&nbsp;

AI will not replace marketing leadership. But it will amplify, relentlessly, the clarity, discipline, and strategic rigor of the leaders who embrace it.
          `
        },
        {
          id: 'strategic-ai-marketing-2025',
          title: '2025: The Year of Strategic Deciding',
          excerpt: 'True sophistication is not found in what you build, but in what you consciously choose not to build. A reflection on shifting from technical volume to strategic judgment.',
          date: 'Dec 30, 2025',
          readTime: '6 min read',
          image: '/postimgs/Stopped_Optimizing.png',
          fullContent:`

For years, I measured progress by volume: more projects, more tools, more ideas running in parallel. **2025 was the year I realized that wasn’t progress.** It was well-organized noise.

&nbsp;

It wasn’t a year of public announcements or headline metrics. From the outside, it may have looked quiet. Internally, it was a year of decisions, simplification, and judgment.

&nbsp;

> Not everything that is possible deserves to be built.

&nbsp;

### From Technological Fascination to Strategic Clarity
Artificial intelligence stopped being a promise in 2025; it became infrastructure. That shift changed the conversation entirely. It’s no longer about which tool to use, but about **which problem is worth solving**. 

&nbsp;

I saw too many teams stuck in endless pilots and dashboards without decisions. The difference between success and stagnation wasn't technical—it was strategic.

&nbsp;

### Fewer Frameworks, More Judgment
This year reinforced an uncomfortable truth: frameworks help until they become a refuge from making decisions. 2025 forced me back to fundamentals:

&nbsp;
1. **What problem actually matters?**
2. **Who owns the decision?**
3. **What happens if we do nothing?**

&nbsp;

When those questions are clear, technology stops being the center and becomes what it was always meant to be: a means, not an end.

&nbsp;

### The Discipline of Stopping
One of the most valuable lessons this year was learning to stop projects at the right time. Stopping something that is well-designed but poorly prioritized is also a form of leadership. 

&nbsp;

Strategic discipline isn’t just about starting things, but about sustaining and ending them properly. Shutting down a flow that works but doesn’t "move the needle" is a form of respect for the team and the business.

&nbsp;

### The New Competitive Advantage: Calm Thinking

&nbsp;

In a world accelerated by AI, the advantage wasn’t moving faster. <b>It was thinking better</b>. 

&nbsp;

* Thinking with context.
* Thinking in terms of impact.
* Thinking long-term when everything pushes toward the short term.

&nbsp;

The best outcomes didn't come from the newest tool, but from leaders who reduced complexity and aligned teams with focus.

&nbsp;

### Looking Toward 2026
I don’t expect 2026 to be bigger. I expect it to be **clearer**. 

&nbsp;

True sophistication is not found in what you build, but in what you consciously choose not to build. That is the standard I’m carrying into the year ahead.
          `
        },
        {
          id: 'ai-competitive-edge-marketing-2025',
          title: 'From Toy to Competitive Edge: Reshaping Marketing',
          excerpt: 'The gap between experimenting with AI and integrating it strategically is widening. A framework for moving from simple prompting to building core organizational capabilities.',
          date: 'Nov 25, 2025',
          readTime: '3 min read',
          image: '/postimgs/ia-curve_202511.png',
          fullContent: `

For the last two years, companies treated AI as a toy—something to test, play with, and explore. By 2025, the gap between those who experiment and those who integrate strategically has become impossible to ignore. 

&nbsp;

**The winners aren’t the ones using prompts; they’re the ones building capabilities.**

&nbsp;

### The Limits of "AI Experimentation"
Most marketing teams are stuck in a loop of isolated use cases and one-off prompts. This leads to efficiency gains without a true competitive advantage. AI might help them work faster, but it doesn’t necessarily help them win. 

&nbsp;

To break this cycle, we must understand the **AI Maturity Curve**:

1.  **Phase 1 - Toy:** Prompting and curiosity. Fun, but limited.
2.  **Phase 2 - Process:** Workflows and SOPs. AI becomes reliable.
3.  **Phase 3 - Intelligence:** Integration with CRM, CMS, and internal data. The model becomes accurate and context-aware.
4.  **Phase 4 - Infrastructure:** AI as a core layer of the operating model. Everything is connected and improving over time.

&nbsp;
> Competitive advantage appears only in phases 3 and 4.

&nbsp;
---

### Strategic AI in Action: Real-World Patterns

Across the market, leaders are moving away from "using" tools toward building **adaptive systems**:

&nbsp;

#### 1. Market Intelligence Pipelines

&nbsp;

Leaders no longer just consume data; they ingest and enrich it at scale.
* **Example:** Companies like **IBM Watson** or **Amazon** unify signals from logistics, CRM, and customer behavior. 
* **The Pattern:** The advantage isn't the algorithm; it's the integration layer that turns noise into intelligence.

&nbsp;

#### 2. Adaptive Customer Experiences
Value lies in continuous intelligence, not just creative assets.
* **Example:** **Mercado Libre** and **Spotify** use trillions of behavioral datapoints to adjust pricing and experiences in real-time.
* **The Pattern:** Leaders don't create more content; they build systems that adapt continuously.

&nbsp;

#### 3. Content & Knowledge Operations
Moving from manual editing to editorial engines.
* **Example:** **Atlassian** and **Nubank** utilize AI for unified intelligence layers across support, documentation, and risk scoring.
* **The Pattern:** Leaders don't write faster; they build content infrastructures.

---

### The Framework: Four Layers of Strategic AI

&nbsp;

To evaluate where your organization stands, consider these four layers:

&nbsp;

| Layer | Action | Result |
| :--- | :--- | :--- |
| **1. Tools** | Drafting emails, basic copy. | Temporary productivity boost. |
| **2. Automations** | Workflows via Zapier/Make. | Consistency in tasks. |
| **3. Intelligence** | Connecting AI to CRM/Analytics. | Context-aware, accurate output. |
| **4. Product & IP** | Proprietary data into insights engines. | Long-term differentiation (The OS). |

&nbsp;

### The Critical Question for 2026
It is no longer enough to ask how you are experimenting with AI. The real question is: 

&nbsp;

**"What AI capabilities are you building that your competitors won’t have?"**

&nbsp;

Those treating AI as infrastructure are not just saving time—they are pulling away. The gap is no longer just about speed; it's about the foundation you choose to build upon.
          `

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
