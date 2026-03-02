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
      { name: "Conclusiones", cls: "client-btn-conclusiones",   slide: 12  }
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
    estadoActual: [
      {
        badge: "Especialista",
        title: "PERCIBIDOS COMO ESPECIALISTA",
        body: "Aunque concentrada la expertise entre Ingeniería CIB, Riesgos Global y Finanzas.",
        impact: "high"
      },
      {
        badge: "Posicionamiento",
        title: "BUEN POSICIONAMIENTO PARA ESCALAR",
        body: "Firmado contrato POST 2.0 para la práctica en Ingeniería Global, FARO para Riesgos y abiertos todos los necesarios para Geografías.",
        impact: "high"
      },
      {
        badge: "Personas",
        title: "BUENA ESTRUCTURA INICIAL DE PERSONAS",
        body: "Con Conocimiento y Expertise para ir asumiendo nuevas responsabilidades en el crecimiento y nueva posición a coger.",
        impact: "medium"
      }
    ],
    retos: [
      {
        badge: "Ingeniería Global",
        title: "LIDERAR INGENIERÍA DE MANERA GLOBAL",
        body: "Llegar a ser proveedor en Ingeniería con relevancia de manera Global, sin perder la Esencia de Especialistas en CIB y manteniendo su liderazgo.",
        impact: "high"
      },
      {
        badge: "Geografías",
        title: "SER RELEVANTES EN LAS GEOGRAFÍAS",
        body: "Desde el Escalado en México a estar en Perú y Colombia, acompañando la apertura de Brasil.",
        impact: "high"
      },
      {
        badge: "Diversificación",
        title: "DIVERSIFICAR RESPECTO DE CIB",
        body: "Pasar del 80% a 60% sin dejar de crecer en CIB.",
        impact: "medium"
      }
    ],
    // Índice de secciones — slide: índice 0-based del destino (null = próximamente)
    sections: [
      { label: "CIB",          slide: 3 },    // → slide-4 (BBVA CIB Contexto)
      { label: "CF & Banking", slide: 6 }    // → slide-7 (BBVA CF&B Contexto)
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
      { label: "CIB",          slide: 10 },    // → slide-11 (SAN CIB)
      { label: "CF & Banking", slide: 11 }   // → slide-12 (SAN CF&B)
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
    },

    // ── Situación Actual (pestaña 1 — datos nuevos) ───────────
    situacionActual: {
      fteDistribution: {
        tec: 260,
        neg: 40,
        geo: { total: 60, detail: "Mex, Brl" }
      },
      keyPoints: [
        { icon: "engineering", text: "CONSIDERADO PROVEEDOR DE PREFERENCIA EN INGENIERÍA", body: "Actualmente más de 300 FTEs ejecutando y #1 sobre resto Tier 1 en las encuestas." },
        { icon: "business",    text: "LLEGADA AL NEGOCIO CON POSIBILIDAD DE ESCALADO",     body: "Posición en GM y Riesgos, contactos y posibilidades en GTB, IBF, Finance y Compliance." },
        { icon: "geo",         text: "BASE SÓLIDA EN MÉXICO PARA ESCALAR Y EMPEZANDO A CREAR LA ESTRUCTURA EN BRASIL", body: "Uno de los proveedores principales en Mex CIB e inicio de Brasil con buena llegada." }
      ]
    },

    // ── Retos (pestaña 2) ─────────────────────────────────────
    retosCIB: [
      { num: "01", title: "SER PERCIBIDOS COMO PROVEEDOR GLOBAL",           body: "Liderar las iniciativas por ámbito de Expertise, sin gestión diferenciada por Geografía." },
      { num: "02", title: "ESCALAR EN NEGOCIO",                              body: "Nuevos ámbitos aparte de Global Markets y Riesgos, como GTB/IBF o Finanzas." },
      { num: "03", title: "MANTENER LA ESPECIALIZACIÓN EN INGENIERÍA CIB",  body: "Asegurando el foco y entrando en ámbitos como Data Engineering." }
    ],

    // ── Equipo (pestaña 3 — organigrama) ──────────────────────
    equipo: {
      partner: {
        name: "ÁNGEL RODRÍGUEZ",
        initials: "AR",
        role: "Partner",
        before: "Liderar CIB España.",
        after: "Asegurar que seguimos siendo percibidos especialistas CIB y foco en todas las geografías CIB."
      },
      directivos: [
        { name: "José Magarzo",   initials: "JM", role: "SrMgr", before: "Área BO en SW Delivery España.",                              after: "Foco en BackOffice (y Calypso) de manera global asumiendo la vertical de México." },
        { name: "Manuel Mendoza", initials: "MM", role: "SrMgr", before: "Liderar la parte de Negocio Global Markets en España.",        after: "Incorporar el control centralizado (México y España) de Front Office + Murex." },
        { name: "Manuel Ranea*",  initials: "MR", role: "Dir",   before: "Visión Tecnología global de BBVA.",                           after: "Centrar la asignación de CIB en liderar la práctica de CTO (Arquitectura), escalando nuestra posición." },
        { name: "Andrés Perozo",  initials: "AP", role: "SrMgr", before: "Líder Integraciones en SW Delivery.",                         after: "Incorporar la gestión de equipos de Integraciones Tec. en CTO y escalado." },
        { name: "David Fuente*",  initials: "DF", role: "Dir",   before: "Líder práctica Data.",                                        after: "Continuar Liderazgo de la práctica de Data asumiendo el reto de entrada y escalado en Data Eng. + Liderar Adopción de IA en los equipos." },
        { name: "Carlos Soto*",   initials: "CS", role: "SrMgr", before: "Liderar Riesgos y Regulatorio en CIB Engineering.",           after: "Liderar la creación de Equipo en Brasil + Liderar llegada y escalado en Ingeniería fuera de CIB." }
      ],
      apoyos: [
        { name: "Antonio Díaz",       initials: "AD", mission: "Capacidades GTB/IBF para escalado en Negocio." },
        { name: "José Manuel Bruzos", initials: "JB", mission: "Tecnología Global y Posicionamiento IA." }
      ],
      nota: "*Capacidad compartida CIB/CF&B"
    }
  },

  /* ========================================================
     PANTALLA 09 — BBVA · CF & BANKING  (pendiente)
  ======================================================== */
  bbvaCFB: {
    label: "BBVA · CF & Banking",
    color: "#004481",

    contexto: {
      objetivo: {
        rev:    "13",
        ftes:   "186",
        growth: "+96% desde FY25",
        desglose: [
          { ftes: "160", label: "España" },
          { ftes: "26",  label: "Geografías" }
        ]
      }
    },

    situacionActual: {
      fteDistribution: {
        tec: 9,
        neg: 88,
        geo: { total: 10, detail: "Mex" }
      },
      keyPoints: [
        { icon: "engineering", text: "CONCENTRADOS Y CON POSICIÓN CONSOLIDADA EN F&R", body: "Considerados expertos en F&R, ha sido el motor de llegada a otras áreas." },
        { icon: "business",    text: "POSICIÓN MUY INICIAL EN BANKING", body: "Llegada inicial en ESG, Data y Consumer pero con todo por explorar y escalar." },
        { icon: "geo",         text: "PREPARADOS PARA ESCALAR CON LAS PALANCAS PRINCIPALES INGENIERÍA Y GEOGRAFÍAS", body: "Abiertos todos los marcos tarifarios." }
      ]
    },

    retosCFB: [
      { num: "01", title: "ESTABLECERSE COMO PROVEEDOR IMPORTANTE EN INGENIERÍA",  body: "Apoyándose en las capacidades de Ingeniería CIB, asegurando que se aprovecha el contrato de POST." },
      { num: "02", title: "ESCALAR EN GEOGRAFÍAS",                                  body: "Escalar en México con las posiciones iniciales y pensar la estrategia de Perú y Colombia." },
      { num: "03", title: "EMPEZAR A SER RELEVANTES EN BANKING",                    body: "Estudiar ámbitos y posibilidades para derivar la posición de Data o Consumer al resto de áreas." }
    ],

    equipo: {
      partner: {
        name: "DIEGO DÍAZ",
        initials: "DD",
        role: "Partner",
        after: "Asegurar la entrada de nuevas áreas y escalado de Ingeniería, manteniendo la visión global con geografías."
      },
      directivos: [
        { name: "Beatriz Delgado", initials: "BD", role: "SrMgr", before: "Ejecución proyectos F&R.",                          after: "Liderar práctica F&R en BBVA y apoyo a entrada Finance CIB." },
        { name: "Borja Alfaro",    initials: "BA", role: "SrMgr", before: "Proyectos GRM Enterprise.",                          after: "Asumir escalado en CS Enterprise de manera global." },
        { name: "Manuel Ranea*",   initials: "MR", role: "SrMgr", before: "Apoyo Data y Tec en CFE.",                           after: "Responsable global Tecnología para asegurar capacidad (ftes Nter y Formacion)." },
        { name: "David Fuente*",   initials: "DF", role: "Dir",   before: "Liderar inicio Data.",                               after: "Escalado CoEs, Data global y Data Eng Holding." },
        { name: "Carlos Soto*",    initials: "CS", role: "SrMgr", before: "Liderar Riesgos y Regulatorio en CIB Engineering.",  after: "Liderar llegada y escalado en Ingeniería fuera de CIB." }
      ],
      apoyos: [
        { name: "Antonio Díaz", initials: "AD", mission: "Apoyo entrada CS Enterprise." },
        { name: "Martín Sanz",  initials: "MS", mission: "Posición y Escalado en CS Retail." }
      ],
      nota: "*Capacidad compartida CIB/CF&B"
    }
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
      { num: "01", title: "BBVA Y SANTANDER SIGUEN SIENDO MOTOR DE CRECIMIENTO", body: "Hay mucho por explorar." },
      { num: "02", title: "NUEVOS ROLES PARA NUESTRA GENTE", body: "Provocar la transición de capacidades entre áreas llevando experiencia y lecciones aprendidas." },
      { num: "03", title: "GEOGRAFÍAS TIENE QUE SER UN FOCO DE VERDAD", body: "México como unidad principal sin perder foco en el resto." },
      { num: "04", title: "LA IA COMO GENERADOR DE OPORTUNIDADES", body: "Nuestra Esencia, el perfil Mixto, es clave en este momento." }
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
