# ESTRATEGIA DE CLIENTES — NEGOCIO MADURO FY27
## Nfq · Revisión FY26 → Planificación FY27

> **Documento de trabajo — referencia editorial sincronizada con `content.js`**
>
> **FLUJO DE TRABAJO:**
> 1. Edita textos y datos en `content.js` (única fuente de verdad)
> 2. El HTML (`presentacion-negocio-maduro.html`) carga `content.js` y renderiza vía `hydrate()`
> 3. Este MD es la referencia editorial — mantenlo sincronizado con `content.js`
>
> **ARCHIVOS:**
> - `presentacion-negocio-maduro.html` — layout, estilos, lógica de navegación
> - `content.js` — todos los textos y datos (edita aquí)
> - `estrategia-clientes.md` — este archivo, referencia editorial
>
> **NAVEGACIÓN EN LA PRESENTACIÓN:**
> - Teclado: `→` / `↓` / `Espacio` = siguiente · `←` / `↑` = anterior
> - Ratón: barra inferior fija con botones **Home · ← · 1/N · →**
> - Touch: swipe izquierda/derecha

---

## ÍNDICE DE PANTALLAS

| # | Sección | Estado | Clave content.js |
|---|---|---|---|
| 01 | Portada | ✅ | `DECK.cover` |
| 02 | Visión General Nfq | ✅ | `DECK.vision` |
| 03 | Visión General + panel BBVA (auto) | ✅ | `DECK.bbvaPanel` |
| 04 | Visión General + panel Santander (auto) | ✅ | `DECK.santPanel` |
| 05 | BBVA · CIB — Situación + Retos (cards flip) | ✅ | `DECK.bbvaCIB` |
| 06 | BBVA · CIB — Acciones (misma pantalla, cards pre-giradas) | ✅ | `DECK.bbvaCIB` (clonado) |
| — | BBVA · CF & Banking | ⚠️ Pendiente | — |
| — | Santander · CIB | 📋 Datos listos, pantalla por construir | `DECK.santCIB` (pendiente) |
| — | Santander · CF & Banking | ⚠️ Pendiente | — |
| — | Conclusiones | ⚠️ Pendiente | — |

---

<!-- ============================================================ -->
<!-- PANTALLA 01 — PORTADA                                        -->
<!-- Editar en: content.js → DECK.cover                          -->
<!-- ============================================================ -->

# Pantalla 01 — Portada

| Campo | Valor | Clave |
|---|---|---|
| Eyebrow | Revisión FY26 · Planificación FY27 | `cover.eyebrow` |
| Título línea 1 | Plan Estratégico | `cover.title.line1` |
| Título línea 2 (gradiente) | Neg Maduro FY27 | `cover.title.line2` |
| Subtítulo negrita | Negocio Maduro | `cover.subtitle.bold` |
| Subtítulo resto | · BBVA & Santander | `cover.subtitle.rest` |
| Fecha | [Fecha de la reunión] | `cover.date` |
| KPI 1 | €97MM · Objetivo FY27 · ↑ +45% desde FY25 | `cover.kpis[0]` |
| KPI 2 | 1.438 Ftes · ↑ +57% desde FY25 | `cover.kpis[1]` |
| Confidencial | Confidencial · Uso interno | `cover.confidential` |

---

<!-- ============================================================ -->
<!-- PANTALLA 02 — VISIÓN GENERAL                                 -->
<!-- Editar en: content.js → DECK.vision                         -->
<!-- ============================================================ -->

# Pantalla 02 — Visión General

**Heading:** Motor de la compañía. / Con menos concentración. → `vision.heading`
**Subtítulo:** Apuesta por seguir creciendo y ser motor de la compañía, pero reduciendo la concentración respecto al resto de Nfq. → `vision.subtitle`

### Tarjetas FY (`vision.fy`) — frente y reverso (flip 3D)

|  | FY25 | FY26 | FY27 (obj.) |
|---|---|---|---|
| **Revenue (€MM)** | 66 | 81 | 97 |
| **Ftes** | 917 | 1.182 | 1.438 |
| **Badge** | Año base | ↑ +22% rev · +29% ftes | ↑ +20% rev · +22% ftes |
| **Concentración vs Nfq** | ~65% | ~57% | ~50% |
| **BBVA Rev / Ftes** | 29 / 400 | 38 / 548 | 47 / 685 |
| **SAN Rev / Ftes** | 37 / 517 | 43 / 634 | 50 / 754 |

### Estadísticas resumen (`vision.stats`)

| Tipo | Valor | Descripción |
|---|---|---|
| `conc` | 65% → 50% | reducción de concentración vs Nfq (FY25 → FY27) |
| `growth` | +45% | crecimiento acumulado en revenue (FY25 → FY27) |

### Botones de navegación (`vision.clients`)

| Nombre | Color | Acción | Estado |
|---|---|---|---|
| BBVA | #004481 | Abre panel deslizante BBVA | ✅ Activo |
| Santander | #EC0000 | Abre panel deslizante Santander | ✅ Activo |
| Conclusiones | #EC683E (naranja Nfq) | — | ⚠️ Desactivado (`disabled: true`) |

> Las pantallas 03 y 04 son clones de la 02 con el panel BBVA / Santander auto-desplegado (`data-auto-panel`).

---

<!-- ============================================================ -->
<!-- PANELES DESLIZANTES — VISIÓN GLOBAL CLIENTE                  -->
<!-- ============================================================ -->

# Paneles — Visión Global Cliente

> Al pulsar BBVA o Santander sube un panel desde el fondo (74% altura). Se cierra con ✕ o pulsando el scrim.
> Estructura: cabecera color de marca · evolución FY · mensajes estratégicos · accesos a secciones.

### Panel BBVA (`DECK.bbvaPanel`)

| FY | Revenue (€MM) | Ftes | Nota |
|---|---|---|---|
| FY25 | 29 | 400 | — |
| FY26 | 38 | 548 | — |
| FY27 obj. | 47 | 685 | ↑ +60% acumulado |

**Mensajes:**
1. **Desconcentrar CIB** — Del 80% actual al 60%. Crecer en CF&Banking y Geografías.
2. **Sinergias Globales** — Palanca Ingeniería CIB + Expertise Riesgos y Finanzas.
3. **Geografías como palanca** — 25% del Revenue en FY27. México como foco principal.
4. **IA for All** — Acompañar en los proyectos de IA y ser partner para la adopción de IA.

**Secciones (`bbvaPanel.sections`):**
- CIB → slide 5 (`slide: 4`)
- CF & Banking → próximamente (`slide: null`)

### Panel Santander (`DECK.santPanel`)

| FY | Revenue (€MM) | Ftes | Nota |
|---|---|---|---|
| FY25 | 37 | 517 | — |
| FY26 | 43 | 634 | — |
| FY27 obj. | 50 | 754 | ↑ +35% acumulado |

**Mensajes:**
1. **Nuevos ámbitos** — Contexto reducción costes 25-30%. Priorizar llegada a nuevos ámbitos.
2. **Desarrollo Tecnología** — Perfiles con expertise en Negocio que pilotan tecnología.
3. **Geografías como palanca** — 30% del Revenue en FY27. México como foco principal.
4. **Foco en IA** — IA como premisa de partida en todos los proyectos.

**Secciones (`santPanel.sections`):** CIB y CF&Banking → próximamente (`slide: null`)

---

<!-- ============================================================ -->
<!-- PANTALLA 05 — BBVA · CIB                                     -->
<!-- Editar en: content.js → DECK.bbvaCIB                        -->
<!-- ============================================================ -->

# Pantalla 05 — BBVA · CIB

> Pantalla única. Tres secciones apiladas verticalmente:
> **Contexto** (tira 1/6 superior) · **Negocio / Tecnología** (flip independiente por columna) · **Geografías** (grupo flip)
> Botón "← BBVA Global" navega de vuelta a pantalla 03 (`goTo(2)`).

---

### Sección 1 — Contexto (`bbvaCIB.contexto`)

**Objetivo FY27:** 31,5 €MM · 440 Ftes · +40% desde FY25
- Desglose: 340 Ftes España · 100 Ftes Geografías

**Posición Actual:**
- Tier 1 en Engineering
- Challenger en Negocio

**Valor Añadido:** Generador de talento para el crecimiento de Nfq fuera de CIB en BBVA.

---

### Sección 2 — Negocio (`bbvaCIB.negocioTech.negocio`) · 40 Ftes

**Situación Actual:**
- Concentrado en Global Markets y Riesgos, con posición secundaria frente a Tecnología.
- Foco principal de la práctica Data CIB Nfq en los CoE de Negocio (Riesgos, Finanzas y GM).

**Retos:**
- Proyectos principales de IA para gestión del Negocio (robots de negocio).
- Llegada a los ámbitos de Negocio: GTB, IB&F y Finanzas.
- Consolidar presencia en Sala de Tesorería y liderar en Riesgos CIB.

**Acciones FY26-FY27:**
- **IA en Negocio · CoE** — Proyectar la posición en los CoE de Data hacia los proyectos de IA de Negocio CIB, contando con David F. para liderar la iniciativa.
- **GTB / IB&F** — Abrir posición en GTB e IB&F desde Ingeniería, contando con Antonio D. para impulsar la llegada con respaldo Nfq.
- **Finance** — Penetrar en Finance desde la expertise de CF&Banking, contando con Beatriz D. para liderar el acceso.
- **Sala Tesorería** — Transformar el equipo de Tesorería y consolidar el liderazgo en Riesgos bajo el nuevo marco FARO.

---

### Sección 3 — Tecnología & Ops (`bbvaCIB.negocioTech.tecnologia`) · 300 Ftes

**Situación Actual:**
- Presencia principal y core del cliente para Nfq en España.
- Concentrado en SW Delivery, consolidando posición en CTO.

**Retos:**
- Integrar IA en el ciclo completo de Engineering y escalar en Data Engineering.
- Ganar relevancia estratégica en CTO y abrir el ámbito de Operaciones con BPO IA.

**Acciones FY26-FY27:**
- **Palanca IA** — Activar el respaldo de Tecnología Global para posicionar propuestas de IA donde ya lideramos.
- **Data Engineering** — Incorporar perfiles Data en SW Delivery y proyectarlos hacia Data Engineering de CIB.
- **BPE México** — Trasladar la experiencia y activos del modelo BPE México al contexto CIB España.
- **Operaciones** — Prospección activa en Operaciones con BPO IA como palanca de transformación diferencial.

---

### Sección 4 — Geografías (`bbvaCIB.geografias`) · 70 Ftes

> Grupo flip: frente muestra Situación Actual + Retos · reverso muestra Acciones.

**Situación Actual:**
- Posición consolidada en CIB México, con base sólida y capacidad real de escalar.
- Presencia activa en Brasil con equipo local y gobierno centralizado desde España.

**Retos:**
- Verticalizar por ámbito de expertise replicando el modelo CIB España, con visión y control unificados.
- Consolidar el equipo emergente en Brasil como núcleo estratégico de referencia para BBVA.

**Acciones:**
- **México · Verticalización por Expertise** — Dedicación directa del equipo de Senior Manager España a México para liderar la verticalización por ámbito y transformar el modelo de gestión de líneas.
- **Brasil · Estructura de Referencia CIB** — Apuesta ejecutiva plena: dedicación del ED a Brasil y movilización de talento CIB senior clave para construir el equipo núcleo de la cuenta.

---

<!-- ============================================================ -->
<!-- PANTALLA 06 — BBVA · CIB · ACCIONES                         -->
<!-- ============================================================ -->

# Pantalla 06 — BBVA · CIB · Acciones

> Clon de pantalla 05 generado en tiempo de carga (`cloneCIB()`).
> Todas las cards arrancan en el lado de Acciones (clase `flipped` añadida por JS).
> Son **completamente interactivas**: se pueden girar de vuelta al frente y volver a las acciones.
> Cualquier cambio en `content.js` se refleja automáticamente en ambas pantallas (05 y 06).

---

<!-- ============================================================ -->
<!-- SANTANDER · CIB                                              -->
<!-- Referencia para la pantalla a construir                      -->
<!-- Editar en: content.js → DECK.santCIB (pendiente de crear)   -->
<!-- ============================================================ -->

# Santander · CIB ⚠️ Pantalla pendiente de desarrollo

> Misma estructura que BBVA CIB: Contexto (tira superior) · Negocio / Tecnología & Ops (flip independiente) · Geografías (flip grupo).
> Datos extraídos del Excel "Negocio Maduro FY27.xlsx" · pestaña SAN CIB.

---

### Contexto del Plan

**Objetivo FY27:** 26 €MM y +350 Ftes — supone ×2 desde FY25 (CIB + Geografías)

**Posición Actual:**
- Primer proveedor de Negocio en CIB
- 2º proveedor en Tecnología & Operaciones → objetivo: convertirnos en primer proveedor E2E

**Valor Añadido:** Generador de talento para la apertura de nuevos clientes de Nfq.

---

### Negocio · 150 Ftes

**Situación Actual:**
- Concentración en ámbitos de negocio maduros: Riesgos, US y GTB.
- Estancamiento en ámbitos sin presencia relevante: FinCrime y Finance.
- Buen avance de los HUBs en Europa: Málaga y Polonia.

**Retos:**
- Contexto de reducción de costes del cliente del 25-30%.
- Plan de adopción de IA y búsqueda de eficiencia en todos los ámbitos.
- Conseguir ser el primer proveedor en todos los dominios frente a la concentración actual.

**Acciones FY26-FY27:**
- **FinCrime** — Plan de impulso específico para ganar presencia relevante.
- **GDF / BDH** — Plan de impulso en GDF y su derivada en Base de Datos Histórica.
- **Finance** — Plan de impulso para entrar en el ámbito de Finanzas.
- **Accounting** — Plan de impulso en Accounting.
- **Branches** — Planes para retomar la senda alcista tras el estancamiento.

---

### Tecnología & Operaciones · 100 Ftes

**Situación Actual:**
- Avance en tecnología en ámbitos maduros: Risk y GTB.
- Primeros pasos en Markets y GDF.
- Entrada en CDAIO en roles de Business Partner y ejecución.

**Retos:**
- Reducción de costes aplica también a T&O; ya se exige contabilizar la eficiencia generada por IA.
- Convertirnos en proveedor de referencia en el área de Tecnología.
- Conjugar la aplicación de IA con la externalización de servicios de Operaciones.

**Acciones FY26-FY27:**
- **CDAIO** — Ser agente de cambio en el plan de adopción de IA, en conjunción con Negocio.
- **Data / DataLakes** — Planes de Data para los DataLakes (CoE BigData + BDH).
- **SDS** — Plan de posicionamiento en la primera línea de SDS.
- **Crecimiento** — Priorización de ámbitos de crecimiento y establecimiento de aceleradores de capacidad.

---

### Geografías

> ⚠️ Datos pendientes de completar. Objetivo implícito: la diferencia entre 350 Ftes totales y los 250 actuales (Negocio + T&O).

---

<!-- ============================================================ -->
<!-- SECCIONES PENDIENTES                                          -->
<!-- ============================================================ -->

> ⚠️ **PENDIENTE de desarrollo:**
> - BBVA · CF & Banking
> - Santander · CF & Banking
> - Santander · Geografías (datos)
> - Conclusiones / Resumen Ejecutivo
