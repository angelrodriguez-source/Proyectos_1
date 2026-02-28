/**
 * content.js — Contenido de "Plan Estratégico Neg Maduro FY27"
 *
 * EDITA ESTE ARCHIVO para cambiar textos y datos de la presentación.
 * El HTML (presentacion-negocio-maduro.html) contiene solo el layout y estilos.
 * El archivo estrategia-clientes.md es la referencia editorial de planificación.
 *
 * Estructura: DECK[slide] → campos de texto, datos numéricos y mensajes.
 */

const DECK = {

  /* ========================================================
     PANTALLA 01 — PORTADA
  ======================================================== */
  cover: {
    confidential: "Confidencial · Uso interno",
    eyebrow:      "Revisión FY26 · Planificación FY27",
    title: {
      line1: "Plan Estratégico",
      line2: "Neg Maduro FY27"      // se muestra en gradiente de color
    },
    subtitle: {
      bold: "Negocio Maduro",
      rest: " · BBVA & Santander"
    },
    date: "[05/03/2026]",
    kpis: [
      { value: "€97",   unit: "MM", label: "Objetivo FY27",  trend: "↑ +45% desde FY25" },
      { value: "1.438", unit: "",   label: "Ftes objetivo",   trend: "↑ +57% desde FY25" }
    ]
  },

  /* ========================================================
     PANTALLA 02 — VISIÓN GENERAL
  ======================================================== */
  vision: {
    label:   "Visión General",
    heading: {
      line1: "Motor de la compañía.",
      line2: "Con menos concentración."    // se muestra en gradiente de color
    },
    subtitle: "Apuesta por seguir creciendo y ser motor de la compañía, pero reduciendo la concentración respecto al resto de Nfq.",

    // Datos por año fiscal — edita rev, ftes, badge y conc para cada FY
    fy: [
      {
        cls:   "fy-25",
        year:  "FY25",
        rev:   "66",
        ftes:  "917",
        badge: "Año base",
        conc:  "~65% concentración vs Nfq",
        back:  {                          // reverso flip — desagregado por cliente
          bbva: { rev: "29", ftes: "400" },
          sant: { rev: "37", ftes: "517" }
        }
      },
      {
        cls:   "fy-26",
        year:  "FY26",
        rev:   "81",
        ftes:  "1.182",
        badge: "↑ +22% rev · +29% ftes",
        conc:  "~57% concentración vs Nfq",
        back:  {
          bbva: { rev: "38", ftes: "548" },
          sant: { rev: "43", ftes: "634" }
        }
      },
      {
        cls:   "fy-27",
        year:  "FY27",
        rev:   "97",
        ftes:  "1.438",
        badge: "↑ +20% rev · +22% ftes",
        conc:  "~50% concentración vs Nfq",
        obj:   true,                      // añade etiqueta "obj." junto al año
        back:  {
          bbva: { rev: "47", ftes: "685" },
          sant: { rev: "50", ftes: "754" }
        }
      }
    ],

    // Estadísticas resumen (bloque inferior)
    stats: [
      {
        type:  "conc",
        val:   "65% → 50%",
        label: "reducción de concentración\nvs Nfq (FY25 → FY27)"
      },
      {
        type:  "growth",
        val:   "+45%",
        label: "crecimiento acumulado\nen revenue (FY25 → FY27)"
      }
    ],

    // Botones de navegación — panelKey abre el panel deslizante de visión global
    clients: [
      { name: "BBVA",         cls: "client-btn-bbva",          panelKey: "bbva" },
      { name: "Santander",    cls: "client-btn-sant",           panelKey: "sant" },
      { name: "Conclusiones", cls: "client-btn-conclusiones",   slide: 10  }
    ]
  },

  /* ========================================================
     PANEL — VISIÓN GLOBAL BBVA
     Editar en: DECK.bbvaPanel
  ======================================================== */
  bbvaPanel: {
    name:    "BBVA",
    color:   "#004481",
    tagline: "CIB · CF&Banking · Geografías",
    evolution: [
      { fy: "FY25", rev: "29", ftes: "400" },
      { fy: "FY26", rev: "38", ftes: "548" },
      { fy: "FY27", rev: "47", ftes: "685", obj: true, growth: "↑ +60% acumulado" }
    ],
    messages: [
      { title: "Desconcentrar CIB",       body: "Del 80% actual al 60%. Crecer en CF&Banking y Geografías." },
      { title: "Sinergias Globales",       body: "Palanca Ingeniería CIB + Expertise Riesgos y Finanzas." },
      { title: "Geografías como palanca", body: "25% del Revenue en FY27. México como foco principal." },
      { title: "IA for All",              body: "Acompañar en los proyectos de IA y ser partner para la adopcion de IA en Proyeccto" }
    ],
    // Índice de secciones — slide: índice 0-based del destino (null = próximamente)
    sections: [
      { label: "CIB",          slide: 4 },    // → slide-5
      { label: "CF & Banking", slide: 8 }    // → slide-9
    ]
  },

  /* ========================================================
     PANEL — VISIÓN GLOBAL SANTANDER
     Editar en: DECK.santPanel
  ======================================================== */
  santPanel: {
    name:    "Santander",
    color:   "#EC0000",
    tagline: "CIB · CF&Banking · Geografías",
    evolution: [
      { fy: "FY25", rev: "37", ftes: "517" },
      { fy: "FY26", rev: "43", ftes: "634" },
      { fy: "FY27", rev: "50", ftes: "754", obj: true, growth: "↑ +35% acumulado" }
    ],
    messages: [
      { title: "Nuevos ámbitos",          body: "Contexto reducción costes 25-30%. Priorizar llegada a nuevos ambitos." },
      { title: "Desarrollo Tecnología",   body: "Perfiles con expertise en Negocio que pilotan tecnología." },
      { title: "Geografías como palanca", body: "30% del Revenue en FY27. México como foco principal." },
      { title: "Foco en IA",              body: "IA como premisa de partida en todos los proyectos." }
    ],
    sections: [
      { label: "CIB",          slide: 6 },     // → slide-7 (SAN CIB)
      { label: "CF & Banking", slide: 9 }    // → slide-10
    ]
  },

  /* ========================================================
     PANTALLA 05 — BBVA · CIB
     Estructura: Contexto · Negocio/Tecnología (flip) · Geografías (flip)
     Editar en: DECK.bbvaCIB
  ======================================================== */
  bbvaCIB: {
    label: "BBVA · CIB",
    color: "#004481",

    // ── Contexto ───────────────────────────────────────────
    contexto: {
      heading: "Contexto del Plan",
      objetivo: {
        rev:    "31,5",
        ftes:   "440",
        growth: "+40% desde FY25",
        desglose: [
          { ftes: "340", label: "España" },
          { ftes: "100", label: "Geografías" }
        ]
      },
      posicion: [
        { badge: "Tier 1 en Engineering", area: "", tier: "top" },
        { badge: "Challenger en Negocio", area: "", tier: "mid" }
      ],
      valor: "Generador de talento para el crecimiento de Nfq fuera de CIB en BBVA."
    },

    // ── Negocio / Tecnología — flip independiente por columna ────
    negocioTech: {
      negocio: {
        heading: "Negocio",
        ftes: "40",
        situacionLabel: "Situación Actual",
        retosLabel: "Retos",
        accionesTag: "· Acciones",
        accionesHeading: "ACCIONES FY26-FY27",
        situacion: [
          "Concentrado en Global Markets y Riesgos, con posición secundaria frente a Tecnología.",
          "Foco principal de la práctica Data CIB Nfq en los CoE de Negocio (Riesgos, Finanzas y GM)."
        ],
        retos: [
          "Proyectos principales de IA para gestión del Negocio (robots de negocio).",
          "Llegada a los ámbitos de Negocio: GTB, IB&F y Finanzas.",
          "Consolidar presencia en Sala de Tesorería y liderar en Riesgos CIB."
        ],
        acciones: [
          { label: "IA en Negocio · CoE",  text: "Proyectar la posición en los CoE de Data hacia los proyectos de IA de Negocio CIB, contando con David F. para liderar la iniciativa." },
          { label: "GTB / IB&F",           text: "Abrir posición en GTB e IB&F desde Ingeniería, contando con Antonio D. para impulsar la llegada con respaldo Nfq." },
          { label: "Finance",              text: "Penetrar en Finance desde la expertise de CF&Banking, contando con Beatriz D. para liderar el acceso." },
          { label: "Sala Tesorería",       text: "Transformar el equipo de Tesorería y consolidar el liderazgo en Riesgos bajo el nuevo marco FARO." }
        ]
      },
      tecnologia: {
        heading: "Tecnología & Ops",
        ftes: "300",
        situacionLabel: "Situación Actual",
        retosLabel: "Retos",
        accionesTag: "· Acciones",
        accionesHeading: "ACCIONES FY26-FY27",
        situacion: [
          "Presencia principal y core del cliente para Nfq en España.",
          "Concentrado en SW Delivery, consolidando posición en CTO."
        ],
        retos: [
          "Integrar IA en el ciclo completo de Engineering y escalar en Data Engineering.",
          "Ganar relevancia estratégica en CTO y abrir el ámbito de Operaciones con BPO IA."
        ],
        acciones: [
          { label: "Palanca IA",       text: "Activar el respaldo de Tecnología Global para posicionar propuestas de IA donde ya lideramos." },
          { label: "Data Engineering", text: "Incorporar perfiles Data en SW Delivery y proyectarlos hacia Data Engineering de CIB." },
          { label: "BPE México",       text: "Trasladar la experiencia y activos del modelo BPE México al contexto CIB España." },
        ]
      }
    },

    // ── Geografías — grupo flip (frente: situación + retos / reverso: acciones) ──
    geografias: {
      heading: "Geografías",
      ftes: "70",
      situacionLabel: "Situación Actual",
      retosLabel: "Retos",
      accionesTag: "· Acciones",
      hint: "Pulsa para ver acciones",
      situacion: [
        "Posición consolidada en CIB México, con base sólida y capacidad real de escalar.",
        "Presencia activa en Brasil con equipo local y gobierno centralizado desde España."
      ],
      retos: [
        "Verticalizar por ámbito de expertise replicando el modelo CIB España, con visión y control unificados.",
        "Consolidar el equipo emergente en Brasil como núcleo estratégico de referencia para BBVA."
      ],
      acciones: [
        {
          label: "México · Verticalización por Expertise",
          text: "Dedicación directa del equipo de Senior Manager España a México para liderar la verticalización por ámbito y transformar el modelo de gestión de líneas."
        },
        {
          label: "Brasil · Estructura de Referencia CIB",
          text: "Apuesta ejecutiva plena: dedicación del ED a Brasil y movilización de talento CIB senior clave para construir el equipo núcleo de la cuenta."
        }
      ]
    }
  },

  /* ========================================================
     PANTALLA 09 — BBVA · CF & BANKING  (pendiente)
  ======================================================== */
  bbvaCFB: {
    label: "BBVA · CF & Banking",
    color: "#004481",
    pending: true
  },

  /* ========================================================
     PANTALLA 10 — SANTANDER · CF & BANKING  (pendiente)
  ======================================================== */
  santCFB: {
    label: "Santander · CF & Banking",
    color: "#EC0000",
    pending: true
  },

  /* ========================================================
     PANTALLA 07 — SANTANDER · CIB
     Editar en: DECK.santCIB
  ======================================================== */
  /* ========================================================
     PANTALLA 11 — CONCLUSIONES
     Editar en: DECK.conclusiones
  ======================================================== */
  conclusiones: {
    label: "Conclusiones",
    messages: [
      { num: "Mensaje 1", body: "Pendiente de completar." },
      { num: "Mensaje 2", body: "Pendiente de completar." },
      { num: "Mensaje 3", body: "Pendiente de completar." },
      { num: "Mensaje 4", body: "Pendiente de completar." },
      { num: "Mensaje 5", body: "Pendiente de completar." }
    ]
  },

  santCIB: {
    label: "Santander · CIB",
    color: "#EC0000",

    // ── Contexto ───────────────────────────────────────────
    contexto: {
      heading: "Contexto del Plan",
      objetivo: {
        rev:    "26",
        ftes:   "350",
        growth: "×2 desde FY25",
        desglose: [
          { ftes: "250", label: "España" },
          { ftes: "100", label: "Geografías" }
        ]
      },
      posicion: [
        { badge: "1er proveedor en Negocio", area: "",            tier: "top" },
        { badge: "2º en Tecnología & Ops",   area: "→ obj. E2E", tier: "mid" }
      ],
      valor: "Generador de talento para la apertura de nuevos clientes de Nfq."
    },

    // ── Negocio / Tecnología — flip independiente por columna ────
    negocioTech: {
      negocio: {
        heading: "Negocio",
        ftes: "150",
        situacionLabel: "Situación Actual",
        retosLabel: "Retos",
        accionesTag: "· Acciones",
        accionesHeading: "ACCIONES FY26-FY27",
        situacion: [
          "Concentración en ámbitos de negocio maduros: Riesgos, US y GTB.",
          "Estancamiento en ámbitos sin presencia relevante: FinCrime y Finance.",
          "Buen avance de los HUBs en Europa: Málaga y Polonia."
        ],
        retos: [
          "Contexto de reducción de costes del 25-30%.",
          "Plan de adopción de IA y búsqueda de eficiencia.",
          "Conseguir ser el primer proveedor en todos los dominios vs concentración global."
        ],
        acciones: [
          { label: "FinCrime · GDF · Finance · Accounting", text: "Plan de impulso en FinCrime, GDF, Finance y Accounting." },
          { label: "Branches",                              text: "Planes para retomar senda alcista en Branches." }
        ]
      },
      tecnologia: {
        heading: "Tecnología & Ops",
        ftes: "100",
        situacionLabel: "Situación Actual",
        retosLabel: "Retos",
        accionesTag: "· Acciones",
        accionesHeading: "ACCIONES FY26-FY27",
        situacion: [
          "Avance en tecnología en algunos ámbitos maduros: Risk y GTB.",
          "Primeros pasos en ámbitos como Markets y GDF.",
          "Entrada en ámbito de CDAIO en roles de BP y ejecución."
        ],
        retos: [
          "Contexto de reducción de costes del 25-30%.",
          "IA: se exige contabilizar la eficiencia en los desarrollos.",
          "Convertirnos en proveedor de referencia en el área de tecnología.",
          "Conjugar la aplicación de IA con la externalización de servicios de Operaciones."
        ],
        acciones: [
          { label: "Ingeniería CIB", text: "Traer la experiencia de BBVA CIB Eng al cliente, con apoyo de Antonio y liderazgo de la nueva etapa de Daniel L." },
          { label: "CDAIO",         text: "Plan CDAIO: conseguir ser agente de cambio en el plan de adopción de IA, en conjunción con Negocio." },
          { label: "DataLakes",     text: "Planes de Data para los DataLakes (CoE BigData + BDH)." },
          { label: "SDS",           text: "Plan de posicionamiento en la primera línea de SDS." }
        ]
      }
    },

    // ── Geografías — pendiente de datos ──
    geografias: {
      heading: "Geografías",
      ftes: "—",
      situacionLabel: "Situación Actual",
      retosLabel: "Retos",
      accionesTag: "",
      hint: "",
      situacion: [
        "Datos pendientes de completar."
      ],
      retos: [
        "Datos pendientes de completar."
      ],
      acciones: [
        {
          label: "Pendiente",
          text: "Datos de Geografías Santander CIB pendientes de completar."
        }
      ]
    }
  }

};
