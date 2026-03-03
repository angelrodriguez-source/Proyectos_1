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
      { value: "€93,4", unit: "MM", label: "Objetivo FY27",  trend: "↑ +42% desde FY25" },
      { value: "1.353", unit: "",   label: "Ftes objetivo",   trend: "↑ +50% desde FY25" }
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
        rev:   "65,9",
        ftes:  "902",
        badge: "Año base",
        conc:  "~65% concentración vs Nfq",
        back:  {
          bbva: { rev: "28,7", ftes: "385" },
          sant: { rev: "37,2", ftes: "517" }
        }
      },
      {
        cls:   "fy-26",
        year:  "FY26",
        rev:   "79",
        ftes:  "1.136",
        badge: "↑ +20% rev · +26% ftes",
        conc:  "~57% concentración vs Nfq",
        fc26:  { rev: "77,9", ftes: "1.084" },   // Forecast — se compara con FY26
        back:  {
          bbva: { rev: "36", ftes: "502" },
          sant: { rev: "43", ftes: "634" }
        }
      },
      {
        cls:   "fy-27",
        year:  "FY27",
        rev:   "93,4",
        ftes:  "1.353",
        badge: "↑ +18% rev · +19% ftes",
        conc:  "~50% concentración vs Nfq",
        obj:   true,
        back:  {
          bbva: { rev: "43,5", ftes: "599" },
          sant: { rev: "49,9", ftes: "754" }
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
        val:   "+42%",
        label: "crecimiento acumulado\nen revenue (FY25 → FY27)"
      }
    ],

    // Botones de navegación — panelKey abre el panel deslizante de visión global
    clients: [
      { name: "BBVA",         cls: "client-btn-bbva",          panelKey: "bbva" },
      { name: "Santander",    cls: "client-btn-sant",           panelKey: "sant" },
      { name: "Conclusiones", cls: "client-btn-conclusiones",   slide: 17  }
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
      { fy: "FY25", rev: "28,7", ftes: "385" },
      { fy: "FY26", rev: "36", ftes: "502", fc26: { rev: "36,6", ftes: "504" } },
      { fy: "FY27", rev: "43,5", ftes: "599", obj: true, growth: "↑ +52% acumulado" }
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
        title: "PERCIBIDOS COMO ESPECIALISTAS",
        body: "Aunque concentrada la expertise entre Ingeniería CIB, Finanzas y Riesgos.",
        impact: "high"
      },
      {
        badge: "Posicionamiento",
        title: "BUEN POSICIONAMIENTO PARA ESCALAR",
        body: "Firmado contrato POST 2.0: Tier 1 para la práctica en Ingeniería CIB Esp y Holding/España, FARO para Riesgos y abiertos todos los necesarios para Geografías.",
        impact: "high"
      },
      {
        badge: "Personas",
        title: "BUENA ESTRUCTURA INICIAL DE PERSONAS",
        body: "Con Conocimiento y Expertise para ir asumiendo nuevas responsabilidades en el crecimiento y nueva posición a coger, buscando las sinergias de nuestra especialización para llevarlo a otros ámbitos (Ingeniería fuera de CIB, Finanzas y Riesgos para Negocio CIB).",
        impact: "medium"
      }
    ],
    retos: [
      {
        badge: "Engineering Global",
        title: "POSICIONARNOS COMO PROVEEDOR REFERENTE EN ENGINEERING GLOBAL",
        body: "Llegar a ser proveedor en Ingeniería con relevancia de manera global, sin perder la Esencia de Especialistas en CIB y manteniendo su liderazgo.",
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
      { fy: "FY25", rev: "37,2", ftes: "517" },
      { fy: "FY26", rev: "43", ftes: "634", fc26: { rev: "41,3", ftes: "580" } },
      { fy: "FY27", rev: "49,9", ftes: "754", obj: true, growth: "↑ +34% acumulado" }
    ],
    messages: [
      { title: "Nuevos ámbitos",          body: "Contexto reducción costes 25-30%. Priorizar llegada a nuevos ambitos." },
      { title: "Desarrollo Tecnología",   body: "Perfiles con expertise en Negocio que pilotan tecnología." },
      { title: "Geografías como palanca", body: "30% del Revenue en FY27. México como foco principal." },
      { title: "Foco en IA",              body: "IA como premisa de partida en todos los proyectos." }
    ],
    estadoActual: [
      {
        badge: "Reducción Costes",
        title: "ESCENARIO GLOBAL ANUNCIADO DE REDUCCIÓN DE COSTES 25-30%",
        body: "Priorización en la apertura y posicionamiento de nuevos ámbitos.",
        impact: "high"
      },
      {
        badge: "Tecnología & Data",
        title: "AMPLIO RECORRIDO EN TECNOLOGÍA Y DATA",
        body: "Algo de más posición en Banking, más recorrido en CIB y foco en CDAIO.",
        impact: "high"
      },
      {
        badge: "Geografías",
        title: "POSICIÓN EN GEOGRAFÍAS APALANCADAS EN USA Y UK",
        body: "Necesario foco en México y Brasil.",
        impact: "medium"
      }
    ],
    retos: [
      {
        badge: "Tecnología / CDAIO",
        title: "ASEGURAR CRECIMIENTO EN TECNOLOGÍA / CDAIO",
        body: "Apostando por el conocimiento de la arquitectura y priorizando la ejecución de proyectos E2E, sabiendo de nuestras Expertise en Ingeniería CIB en otros clientes.",
        impact: "high"
      },
      {
        badge: "Retail Locales",
        title: "LLEGADA Y FOCO EN LOS RETAIL LOCALES Y UNIDADES CIB",
        body: "Brasil, US, México y Geografías Consumer. Asegurando que conocemos las particularidades locales.",
        impact: "high"
      },
      {
        badge: "Nuevas Líneas",
        title: "POSICIONAMIENTO LÍNEAS DE NEGOCIO POR ABRIR",
        body: "Retail & Commercial + Wealth. Llevando la Expertise necesaria y asegurando el éxito de la ejecución.",
        impact: "medium"
      }
    ],
    sections: [
      { label: "CIB",          slide: 10 },    // → slide-11 (SAN CIB)
      { label: "CF & Banking", slide: 13 }   // → slide-14 (SAN CF&B)
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
        ftes:   "439",
        growth: "+46% desde FY25",
        desglose: [
          { ftes: "335", label: "España" },
          { ftes: "104", label: "Geografías" }
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
        { name: "Carlos Soto*",   initials: "CS", role: "SrMgr", before: "Liderar Riesgos y Regulatorio en CIB Engineering.",           after: "Liderar la creación de Equipo en Brasil + Liderar llegada y escalado en Ingeniería fuera de CIB." },
        { name: "Sergio Tremari", initials: "ST", role: "SrMgr", before: "Control Cuenta BBVA CIB Mex (Gestión y Ejecución).",          after: "Foco en el Escalado de BBVA CIB Mex & Other Latam aprovechando la verticalización." }
      ],
      apoyos: [
        { name: "Juan Blanco",        initials: "JB", mission: "Apoyo para la gestión de BBVA CIB USA." },
        { name: "Antonio Díaz",       initials: "AD", mission: "Capacidades GTB/IBF para escalado en Negocio." },
        { name: "José Manuel Bruzos", initials: "JMB", mission: "Tecnología Global y Posicionamiento IA." }
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
        rev:    "12",
        ftes:   "160",
        growth: "+88% desde FY25",
        desglose: [
          { ftes: "160", label: "España" }
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
      { num: "01", title: "ESTABLECERSE COMO PROVEEDOR RELEVANTE EN INGENIERÍA",  body: "Apoyándose en las capacidades de Ingeniería CIB, asegurando que se aprovecha el contrato de POST." },
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

    contexto: {
      objetivo: {
        rev:    "24,9",
        ftes:   "397",
        growth: "+40% desde FY25",
        desglose: [
          { ftes: "280", label: "España" },
          { ftes: "117", label: "Geografías" }
        ]
      }
    },

    situacionActual: {
      fteDistribution: {
        tec: 113,
        neg: 110,
        ops: 67
      },
      keyPoints: [
        { icon: "vendor",   text: "TOP VENDOR EN HQ, DIGITAL Y UK",                                        body: "Alto potencial de desarrollo en el resto de geografías (México, Brasil, Europa)." },
        { icon: "focus",    text: "CONCENTRACIÓN EN CORPORATE FUNCTIONS",                                   body: "Con recorrido en Riesgos, Finanzas, Capital, Fincrime, Procurement, RRHH." },
        { icon: "service",  text: "TRANSICIÓN PAULATINA A COLABORACIONES EN MODALIDAD DE SERVICIO",         body: "Como por ejemplo: RFP Data, Hub APIs, Crédito Corporación, Servicios gestionados Ops, etc." }
      ]
    },

    retosCFB: [
      { num: "01", title: "MODELO AI FIRST",                             body: "Transformar propuesta de valor y servicios." },
      { num: "02", title: "NECESARIO LLEGAR A NUEVAS ÁREAS",              body: "Cross (CDAIO) y Dominios de Negocio (Retail & Commercial)." },
      { num: "03", title: "ESCALAR EL NEGOCIO EN OTRAS GEOGRAFÍAS",      body: "Desde nuestra experiencia y especialización en HQ." }
    ],

    equipo: {
      columnas: [
        {
          region: "UK",
          color: "#1a237e",
          leader: { name: "CARLOS MORA", initials: "CM", role: "SrMgr", before: "Liderar Santander España.", after: "Liderar gestión de la cuenta y desarrollo de negocio en UK." },
          members: [
            { name: "Jose Souto", initials: "JS", role: "Mgr", before: "Liderar equipos de ejecución de proyectos.", after: "Coordinación y gestión operativo del equipo en España para SAN UK." }
          ]
        },
        {
          region: "ESP",
          color: "#EC0000",
          leader: { name: "ANTONIO GdC", initials: "AG", role: "SrMgr", before: "Supervisión operativa y de ejecución de la cuenta.", after: "Liderar visión y entrada en nuevas áreas en Santander Corporación y Digital." },
          members: [
            { name: "Diego Labeaga", initials: "DL", role: "Mgr", before: "Foco Riesgos Tyo Corporativo.", after: "Visión integral Santander Banking Corporación." },
            { name: "Marta González", initials: "MG", role: "Mgr", before: "Foco en Openbank.", after: "Gestión completa Openbank + Santander Consumer Finance acompañando su fusión." }
          ]
        },
        {
          region: "W&AM",
          color: "#00695c",
          leader: { name: "JORGE ROMANO", initials: "JR", role: "Partner", before: "", after: "" },
          members: [
            { name: "Juan Manuel Nievas", initials: "JN", role: "SrSup", before: "", after: "" }
          ]
        }
      ],
      apoyos: [
        { name: "Nacho Alvaro", initials: "NA", role: "Partner", mission: "Foco en CDAIO." }
      ]
    }
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

  /* ========================================================
     PANTALLA 13 — VISIÓN GLOBAL CIFRAS
     Dashboard jerárquico con datos de CIFRAS_CLIENTES.md
  ======================================================== */
  cifras: {
    columns: ["FY25", "FC26", "FY26", "FY27"],
    total: {
      ftes: [902, 1084, 1136, 1353],
      rev:  [65.9, 77.9, 79.09, 93.44]
    },
    clients: [
      {
        name: "BBVA", color: "#004481",
        ftes: [385, 504, 502, 599],
        rev:  [28.7, 36.6, 36, 43.5],
        ambitos: [
          {
            name: "CIB", margen: "20%",
            riesgos: ["Escenarios de reducción por la IA", "Pérdida de Imagen por posicionamiento global"],
            ftes: [300, 384, 382, 439],
            rev:  [22, 27.6, 27, 31.5],
            sub: [
              { name: "España",       ftes: [247, 305, 302, 335], rev: [19.4, 23.5, 23.1, 25.4] },
              { name: "México",       ftes: [51, 65, 66, 81],     rev: [2.3, 3.1, 3.1, 4.1] },
              { name: "Brasil & USA", ftes: [2, 14, 14, 23],      rev: [0.3, 1, 0.8, 2] }
            ]
          },
          {
            name: "CF & Banking", margen: "20%",
            riesgos: ["Recorrido de Alquid en Finanzas (Posicionamiento y exito PoCs)", "No conseguir la posicion y escalado en Ingenieria. (Oportunidades y Ftes preparados)"],
            ftes: [85, 120, 120, 160],
            rev:  [6.7, 9, 9, 12],
            sub: [
              { name: "ex México", ftes: [85, 120, 120, 160], rev: [6.7, 9, 9, 12] }
            ]
          }
        ]
      },
      {
        name: "Santander", color: "#EC0000",
        ftes: [517, 580, 634, 754],
        rev:  [37.2, 41.3, 43.09, 49.94],
        ambitos: [
          {
            name: "CIB", margen: "17%",
            riesgos: ["Escenario reducción de Costes 20/30%", "No expansión a nuevos ámbitos que permitan distribuir volatilidad"],
            ftes: [240, 280, 294, 371],
            rev:  [19.5, 20.8, 21.7, 25.6],
            sub: [
              { name: "HQ",          ftes: [171, 186, 195, 237], rev: [14.2, 14.5, 15, 16.4] },
              { name: "México",      ftes: [16, 24, 24, 30],     rev: [1.3, 1.4, 1.5, 2] },
              { name: "Brasil & USA", ftes: [53, 70, 75, 104],   rev: [4, 4.9, 5.2, 7.2] }
            ]
          },
          {
            name: "CF & Banking", margen: "20%",
            riesgos: ["Impacto eficiencias", "Crecimiento en LATAM "],
            ftes: [277, 300, 340, 383],
            rev:  [17.7, 20.5, 21.39, 24.34],
            sub: [
              { name: "HQ",     ftes: [228, 240, 255, 280], rev: [14, 16, 16, 18] },
              { name: "UK",     ftes: [49, 60, 60, 65],     rev: [3.7, 4.5, 4.5, 5] },
              { name: "México", ftes: [0, 0, 25, 38],       rev: [0, 0, 0.89, 1.34] }
            ]
          }
        ]
      }
    ]
  },

  santCIB: {
    label: "Santander · CIB",
    color: "#EC0000",

    contexto: {
      objetivo: {
        rev:    "31,5",
        ftes:   "440",
        growth: "+40% desde FY25",
        desglose: [
          { ftes: "340", label: "España" },
          { ftes: "100", label: "Geografías" }
        ]
      }
    },

    situacionActual: {
      fteDistribution: {
        tec: 260,
        neg: 40,
        geo: { total: 60, detail: "Mex, Brl" }
      },
      keyPoints: [
        { icon: "top",  text: "PROVEEDOR #1 EN CIB",                   body: "Actualmente más de 300 Ftes ejecutando y #1 sobre resto Tier 1 en las encuestas." },
        { icon: "area", text: "PRESENCIA EN ÁMBITOS CLAVE",            body: "Posición en GM y Riesgos, contactos y posibilidades en GTB, IBF, Finance y Compliance." },
        { icon: "geo",  text: "INICIO EN GEOGRAFÍAS CIB",              body: "Uno de los proveedores principales en Mex CIB e inicio de Brasil con buena llegada." }
      ]
    },

    retosCIB: [
      { num: "01", title: "SER PERCIBIDOS COMO PROVEEDOR GLOBAL",      body: "Liderar las iniciativas por ámbito de Expertise, sin gestión diferenciada por Geografía." },
      { num: "02", title: "ESCALAR EN NUEVOS ÁMBITOS",                 body: "Nuevos ámbitos aparte de Global Markets y Riesgos, como GTB/IBF o Finanzas." },
      { num: "03", title: "POSICIONAMIENTO EN TECNOLOGÍA",             body: "Asegurando el foco y entrando en ámbitos como Data Engineering." }
    ],

    equipo: {
      partner: {
        name: "ROBERTO GARCÍA",
        initials: "RG",
        role: "Partner",
        before: "Liderar CIB España.",
        after: "Asegurar que seguimos siendo percibidos especialistas CIB y foco en todas las geografías CIB."
      },
      directivos: [
        { name: "Jose Magarzo",   initials: "JM", role: "SrMgr", before: "Área BO en SW Delivery España.",                        after: "Foco en BackOffice (y Calypso) de manera global asumiendo la vertical de México." },
        { name: "Manuel Mendoza", initials: "MM", role: "SrMgr", before: "Liderar la parte de Negocio Global Markets en España.", after: "Incorporar el control centralizado (México y España) de Front Office + Murex." },
        { name: "Manuel Ranea*",  initials: "MR", role: "Dir",   before: "Visión Tecnología global de BBVA.",                     after: "Centrar la asignación de CIB en liderar la práctica de CTO (Arquitectura), escalando nuestra posición." },
        { name: "Andrés Perozo",  initials: "AP", role: "SrMgr", before: "Líder Integraciones en SW Delivery.",                   after: "Incorporar la gestión de equipos de Integraciones Tec. en CTO y escalado." },
        { name: "David Fuente*",  initials: "DF", role: "Dir",   before: "Líder práctica Data.",                                  after: "Continuar Liderazgo de la práctica de Data asumiendo el reto de entrada y escalado en Data Eng. + Liderar Adopción de IA en los equipos." },
        { name: "Carlos Soto*",   initials: "CS", role: "SrMgr", before: "Liderar Riesgos y Regulatorio en CIB Engineering.",     after: "Liderar la creación de Equipo en Brasil + Liderar llegada y escalado en Ingeniería fuera de CIB." }
      ],
      apoyos: [
        { name: "Antonio Díaz",       initials: "AD", mission: "Capacidades GTB/IBF para escalado en Negocio." },
        { name: "Jose Manuel Bruzos", initials: "JB", mission: "Tecnología Global y Posicionamiento IA." }
      ],
      nota: "*Capacidad compartida CIB/CF&B"
    }
  }

};
