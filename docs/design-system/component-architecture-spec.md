# Component Architecture Specification

**Medmo Design System · Component Library**

| Field | Value |
|-------|-------|
| Status | Approved standard — mandatory for all components |
| Version | 1.0.0 |
| Last updated | 2026-07-17 |
| Scope | Primitives, Composites, Patterns, Templates |
| Out of scope | Foundations, Principles, Technical Setup |
| Related | [Blueprint](./blueprint.mdx) · [Roadmap](./000-roadmap.mdx) · [Design Principles](./principles/design-principles.mdx) · [Accessibility](./principles/accessibility.mdx) |

---

> **Contrato arquitectónico**
>
> Este documento define **cómo** se construye cualquier componente del Medmo Design System.
> No describe un componente concreto. Es el estándar obligatorio antes de escribir código,
> antes de abrir un PR, y antes de publicar documentación.
>
> Si un componente no cumple esta especificación, **no pertenece al Design System**.

---

## Purpose

### Qué es este documento

La **Component Architecture Specification** es el marco de gobernanza, proceso y calidad que rige la Component Library de Medmo. Establece el ciclo de vida completo de un componente — desde la investigación hasta el release — y define las reglas de API, tokens, accesibilidad, documentación y validación.

Es el equivalente interno de los system guidelines de IBM Carbon, Material Design, y Shopify Polaris: un contrato que alinea a diseño, ingeniería y producto sobre **una sola forma de construir UI**.

### Por qué existe

Medmo opera en contexto **enterprise healthcare**. Los equipos trabajan jornadas largas, procesan datos clínicos críticos, y dependen de interfaces predecibles. Un Design System profesional no es una colección de widgets copiados de terceros; es un **producto con contratos estables**, trazabilidad de decisiones, y cumplimiento de accesibilidad by default.

Este documento existe para:

- Convertir cada componente en un **artefacto publicable de forma independiente**
- Eliminar improvisación, duplicación y drift visual entre equipos
- Separar decisiones de diseño (Foundations) de implementación técnica (`src/`)
- Garantizar que toda UI consuma **exclusivamente** Foundation tokens
- Establecer un proceso repetible que escale a decenas de componentes durante años

### Qué problemas evita

| Problema | Cómo lo previene esta spec |
|----------|----------------------------|
| Valores hardcodeados en componentes | Token Consumption Rules |
| APIs inconsistentes entre primitivos | API Design Principles + Variant Model |
| Variants que mezclan apariencia y semántica | Naming Conventions + ejes ortogonales |
| Accesibilidad como afterthought | Accessibility Requirements + Validation Checklist |
| Documentación incompleta o desactualizada | Mandatory Specification Structure |
| Cambios breaking sin gobernanza | Governance + versionado |
| Componentes monolíticos imposibles de componer | Composition Principles |
| Tokens nuevos sin justificación | Token proposal process |
| shadcn/Radix copiados sin análisis | Component Lifecycle — Research obligatorio |

### Qué componentes deben seguirlo

**Todos** los artefactos publicados bajo la Component Library:

| Capa | Ejemplos | Obligatorio |
|------|----------|-------------|
| **Primitives** | Input, Select, Dialog, Checkbox | Sí |
| **Composites** | FormField, InputGroup, IconButton | Sí |
| **Patterns** | DataTable, PageHeader, EmptyState | Sí |
| **Templates** | DashboardLayout, ListPageLayout | Sí |
| **Domain** (apps) | PatientCard, OrderStatusChip | Recomendado — extiende Patterns |

**Excluidos:** Foundations (`foundations/`), Principles (`docs/design-system/principles/`), Technical Setup (`src/app/`, providers, theme bridge). Esos tienen sus propios contratos.

**Regla:** Un componente en `src/components/` que no cumple esta spec es **deuda técnica provisional**, no parte del Design System oficial.

---

## Design Philosophy

Los principios universales que gobiernan **cada** componente. Cuando haya conflicto entre conveniencia de implementación y estos principios, **ganan los principios**.

### Accessibility first

Los componentes nacen accesibles. WCAG 2.1 AA es el mínimo. Semántica nativa, teclado completo, focus visible, y soporte de lectores de pantalla no son opciones ni fases posteriores. Un componente que falla accesibilidad **no se publica**.

### Foundation first

Foundations definen **todos** los valores visuales. Los componentes **consumen**; nunca inventan paleta, spacing, radius, motion, o tipografía. Si un valor no existe en Foundation, el componente no lo crea silenciosamente — propone un token con justificación documentada.

### No hardcoded values

Prohibido en estilos de componente: hex, rgb literal, px/rem arbitrarios, z-index numérico suelto, duraciones ms sueltas, font-family literal. Todo resuelve a `--color-*`, `--space-*`, `--radius-*`, `--motion-*`, `--text-*`, `--z-*`, u otros tokens públicos de Foundation.

### Composition over inheritance

Preferir componentes pequeños que se combinan sobre monolitos configurables con decenas de props. Un `FormField` compone `Label` + `Input` + `HelperText`; no un `Input` con 40 flags. La flexibilidad emerge de **composición**, no de API inflada.

### Predictable APIs

Misma forma mental en todo el sistema: nombres consistentes, defaults sensatos, props mínimas, comportamiento predecible entre componentes similares. Si `size="sm"` significa compacto en un primitivo, significa lo mismo en todos.

### Native HTML whenever possible

Usar elementos nativos (`button`, `input`, `dialog`, `nav`) antes que divs genéricos. Los primitivos headless (Base UI) proveen comportamiento; Medmo provee semántica, estilo, y contrato. Reimplementar interacción nativa solo cuando el estándar HTML no cubre el caso — y documentar por qué.

### Enterprise consistency over flexibility

Medmo prioriza **consistencia predecible** sobre personalización libre. `className` para casos excepcionales está permitido; variantes ad-hoc por producto no. Las apps consumen el DS; no lo redefinen.

### Tokens are the single source of truth

Un token Foundation es la única autoridad para un valor visual. Tailwind utilities (`bg-primary`, `rounded-lg`) son **aliases de consumo** hacia Foundation vía `theme.css` — no una segunda capa semántica. Los componentes documentan qué tokens consumen; no qué clases Tailwind usan internamente.

### Calm by design

Cada componente reduce ruido visual. Sin animaciones decorativas, sin colores alarmantes innecesarios, sin chrome excesivo. Coherente con Brand Language: la interfaz desaparece detrás de la información.

### Data first

En contexto clínico, los datos son protagonistas. Los componentes de UI ocupan el mínimo espacio visual funcional. Patterns como DataTable tienen prioridad arquitectónica sobre componentes decorativos.

---

## Component Lifecycle

Ningún componente entra en implementación sin completar las fases anteriores. Cada fase produce un artefacto revisable. **Saltar fases está prohibido.**

```
Research
   ↓
Intent
   ↓
Architecture
   ↓
API
   ↓
Tokens
   ↓
Accessibility
   ↓
Composition
   ↓
Documentation
   ↓
Playground
   ↓
Implementation
   ↓
Validation
   ↓
Release
```

### Research

**Objetivo:** Entender el problema real antes de diseñar solución.

**Entregables:**
- Análisis comparativo de sistemas de referencia (Material, Carbon, Polaris, Base UI, HIG cuando aplique)
- Inventario de casos de uso en productos Medmo
- Identificación de composites/patterns relacionados existentes o planificados
- Lista de anti-patrones observados en implementaciones actuales

**Criterio de salida:** Equipo alineado sobre qué problema resuelve el componente y qué **no** resuelve.

---

### Intent

**Objetivo:** Definir el propósito del componente en una oración clara.

**Entregables:**
- Statement de intent (qué acción o información habilita)
- Boundaries explícitos (qué otros componentes cubren casos adyacentes)
- Contextos de uso Medmo (clinical workflows, admin, settings)

**Criterio de salida:** Intent aprobado por diseño + ingeniería. Sin ambigüedad con otro componente.

---

### Architecture

**Objetivo:** Decidir capa, primitivo base, y relaciones de composición.

**Entregables:**
- Clasificación: Primitive / Composite / Pattern / Template
- Primitivo headless seleccionado (Base UI) o justificación de HTML nativo
- Diagrama de anatomy (partes del componente)
- Dependencias hacia abajo (qué componentes importa)

**Criterio de salida:** Arquitectura aprobada. Sin dependencias circulares. Sin violación de capas.

---

### API

**Objetivo:** Diseñar la API pública mínima y estable.

**Entregables:**
- Props públicas con types, defaults, y descripción
- Ejes ortogonales definidos (variant, intent, size, state)
- Ejemplos de uso principales (pseudocódigo o descripción — no implementación)
- Lista explícita de props **no** expuestas (implementación interna)

**Criterio de salida:** API review completada. Sin props redundantes ni nombres ambiguos.

---

### Tokens

**Objetivo:** Mapear cada decisión visual a tokens Foundation existentes.

**Entregables:**
- Tabla `Tokens consumed` completa por variant, state, y size
- Identificación de gaps (tokens faltantes) con propuesta justificada o alternativa con tokens existentes
- Confirmación: cero valores hardcodeados planificados

**Criterio de salida:** 100% cobertura con tokens existentes, o propuesta de token aprobada por gobernanza.

---

### Accessibility

**Objetivo:** Definir requisitos ARIA, teclado, focus, contraste, y touch antes de implementar.

**Entregables:**
- Matriz de estados × comportamiento accesible
- Roles ARIA requeridos (o confirmación de semántica nativa)
- Keyboard interaction spec
- Touch target mínimos
- Reduced motion behavior

**Criterio de salida:** Checklist de accesibilidad preliminar completada y revisada.

---

### Composition

**Objetivo:** Documentar cómo el componente se combina con otros.

**Entregables:**
- Patrones de composición válidos
- Composites que lo extienden
- Patterns que lo consumen
- Límites (cuándo **no** usar este componente)

**Criterio de salida:** Sin solapamiento no documentado con otros componentes.

---

### Documentation

**Objetivo:** Redactar MDX completo según Mandatory Specification Structure.

**Entregables:**
- Archivo MDX en `docs/design-system/components/{name}.mdx`
- Do / Don't, Examples, Anti-patterns, Migration Guide (si aplica)

**Criterio de salida:** Documentación revisable por diseño y producto sin ver código.

---

### Playground

**Objetivo:** Entorno interactivo para explorar variantes, estados, y contextos.

**Entregables:**
- Playground funcional con controles obligatorios (ver Playground Requirements)
- Integrado en docs site o Storybook (cuando esté disponible)

**Criterio de salida:** Todos los ejes de la API son explorables interactivamente.

---

### Implementation

**Objetivo:** Escribir código cumpliendo spec aprobada.

**Entregables:**
- Módulo en `src/components/{name}/` (estructura publicable)
- Types exportados
- Barrel export (`index.ts`)
- Sin desviaciones de API aprobada sin re-review

**Criterio de salida:** Implementación completa según spec. PR abierto.

---

### Validation

**Objetivo:** Verificar cumplimiento antes de merge.

**Entregables:**
- Validation Checklist completada (sección dedicada)
- `npm run build` exitoso
- Validaciones de tokens y runtime CSS sin regresiones

**Criterio de salida:** Todos los ítems del checklist en verde.

---

### Release

**Objetivo:** Publicar componente como parte oficial del DS.

**Entregables:**
- MDX publicado
- Playground accesible
- Entrada en inventario / roadmap actualizada
- Versionado semántico si aplica (package futuro)
- Comunicación de breaking changes (si reemplaza componente legacy)

**Criterio de salida:** Definition of Done cumplida. Componente listado como **Completado** en roadmap.

---

## Mandatory Specification Structure

Todo componente **debe** tener un documento de especificación (MDX o spec adjunta) con estas secciones antes de implementación. La implementación no puede desviarse de la spec aprobada sin nuevo ciclo de review.

| Sección | Objetivo |
|---------|----------|
| **Purpose** | Qué es el componente y qué problema resuelve en productos Medmo. Diferencia entre propósito del componente y propósito del documento de arquitectura global. |
| **Intent** | Una declaración clara de intent. Qué habilita al usuario. Qué queda **fuera** de scope. |
| **Research** | Evidencia de investigación: referentes, casos de uso Medmo, decisiones de descarte. |
| **Comparative Analysis** | Tabla comparativa con Material, Carbon, Polaris, Base UI, HIG. Qué adoptamos, qué rechazamos, por qué. |
| **Anatomy** | Partes del componente con nombres canónicos. Qué es obligatorio vs opcional. Diagrama recomendado. |
| **Variants** | Ejes de apariencia visual (`variant`). Matriz de cuándo usar cada uno. |
| **States** | Estados interactivos y de datos: rest, hover, focus, active, disabled, loading, invalid, expanded, selected, etc. Comportamiento por estado. |
| **Sizes** | Escala dimensional. Qué tokens definen altura, padding, tipografía, iconografía por size. |
| **Tokens consumed** | Inventario exhaustivo de tokens Foundation por variant × state × size. **Obligatorio.** |
| **Accessibility** | Requisitos ARIA, teclado, focus, contraste, touch, screen readers, reduced motion. |
| **Composition** | Cómo combinar con otros componentes. Composites y patterns relacionados. |
| **Public API** | Props, defaults, types, eventos. Contrato estable. Sin detalle de implementación. |
| **Examples** | Casos de uso reales Medmo (forms, tables, dialogs, clinical workflows). |
| **Best Practices** | Guía positiva para consumidores del componente en producto. |
| **Anti-patterns** | Errores comunes explícitos. Qué nunca hacer. |
| **Migration Guide** | Cómo migrar desde implementaciones legacy, shadcn genérico, o API anterior. Solo si aplica. |
| **Playground** | Referencia al entorno interactivo y controles disponibles. |
| **Definition of Done** | Checklist específica del componente además de la global de esta spec. |

**Regla:** Un PR de componente sin spec completa **no se revisa**.

---

## Naming Conventions

### Componentes

| Regla | Correcto | Incorrecto |
|-------|----------|------------|
| PascalCase, sustantivo o compound claro | `Button`, `DataTable`, `PageHeader` | `Btn`, `PrimaryButton`, `MedmoButton` |
| Composites describen composición | `ButtonGroup`, `SplitButton`, `IconButton` | `Buttons`, `GroupButton` |
| Patterns describen escenario UX | `EmptyState`, `FormLayout` | `NoData`, `FormWrapper` |
| Sin prefijo de marca en nombre | `Dialog` | `MedmoDialog` |
| Sin sufijos de implementación | `Select` | `SelectBaseUI`, `SelectV2` |

### Cuándo crear un componente nuevo vs extender

Crear **nuevo componente** cuando:
- Resuelve un intent distinto
- Tiene anatomy distinta
- Requiere API pública distinta

Crear **variant / intent / composite** cuando:
- Misma anatomy, diferente apariencia → `variant`
- Misma apariencia, diferente semántica → `intent`
- Misma pieza atómica, diferente escala → `size`
- Combinación de primitivos existentes → **Composite** (`IconButton`, no `Button` con flag `iconOnly`)

### Variant, Intent, Size, State — cuándo usar cada uno

| Eje | Pregunta que responde | Ejemplos de valores | No usar para |
|-----|----------------------|---------------------|--------------|
| **variant** | ¿Qué **énfasis visual** tiene? | primary, secondary, outline, ghost | Semántica danger/success |
| **intent** | ¿Qué **significado** tiene la acción? | default, danger, success, warning | Tamaño o layout |
| **size** | ¿Qué **escala** ocupa? | sm, md, lg, icon-md | Apariencia filled vs outline |
| **state** | ¿En qué **condición** está? | disabled, loading, invalid | Variantes permanentes de diseño |

**Regla de oro:** No mezclar semántica con apariencia en un solo prop. `destructive` como variant name está **prohibido** — usar `intent="danger"`. `primary` como color name en variant está **permitido** porque describe énfasis visual, no semántica clínica.

### Props

| Regla | Ejemplo |
|-------|---------|
| camelCase | `fullWidth`, `loadingLabel` |
| Booleanos afirmativos | `loading`, `disabled` — no `isNotReady` |
| Eventos `on` + PascalCase | `onClick`, `onValueChange` |
| Evitar negaciones | `disabled` — no `enabled={false}` |
| Children para composición | Icon + label via children, no `iconLeft={ReactNode}` salvo API muy justificada |

---

## API Design Principles

### Defaults sensatos

El 80% de los casos de uso debe funcionar sin props. Defaults documentados explícitamente. Cambiar un default es **breaking change**.

### Props mínimas

Cada prop debe justificar su existencia. Si una prop solo se usa en un producto, pertenece a Domain layer, no al DS. Preferir composición sobre props de configuración.

### No exponer implementación

No exportar detalles de Base UI, class names internos, data attributes de implementación, o utilidades CVA salvo decisión explícita de gobernanza para composites internos. La API pública es el contrato; el interior es privado.

### No duplicar responsabilidades

Un prop no debe controlar dos dimensiones ortogonales. `variant="danger-outline"` está prohibido — usar `variant="outline"` + `intent="danger"`.

### Separar ejes ortogonales

Modelar apariencia, semántica, escala, y estado como ejes independientes. Permite combinatoria controlada sin explosión de variants planas (Carbon y Material convergen en este modelo).

### Prefer composition

Exponer subcomponentes cuando la composición es más clara que props:

- `Dialog`, `DialogHeader`, `DialogBody`, `DialogFooter` — no `Dialog` con 12 props de layout
- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell`

### Polimorfismo restringido

Polimorfismo (`render`, `asChild`) solo cuando HTML nativo no cubre el caso o integración semántica lo exige. Default siempre elemento nativo correcto. Documentar casos permitidos.

### Controlled vs uncontrolled

Seguir convención React estándar: `value` + `onValueChange` para controlled; default interno para uncontrolled. Documentar cuál es el default. Misma convención en todos los inputs.

### Forwarding refs

Primitivos interactivos exponen ref al elemento DOM nativo. Requerido para focus management en forms y patterns.

### Stable API

Una vez publicado en v1, la API pública es contrato. Deprecations con periodo de migración documentado. Breaking changes requieren major version bump (cuando exista versionado de package).

---

## Variant Model

Medmo utiliza **ejes ortogonales** para evitar la proliferación de variants planas y la mezcla de semántica con apariencia.

```
variant  →  apariencia visual (énfasis)
intent   →  semántica (significado)
state    →  condición interactiva o de datos
size     →  escala dimensional
```

### variant — apariencia visual

Responde: *¿Qué tan prominente es este elemento en la jerarquía visual?*

Valores típicos en primitivos de acción: `primary`, `secondary`, `outline`, `ghost`.

No implica significado clínico. Un `outline` puede ser Cancel (neutral) o Delete (con `intent="danger"`).

### intent — semántica

Responde: *¿Qué tipo de significado tiene esta interacción?*

Valores típicos: `default`, `danger`, `success`, `warning`.

Afecta tokens de color semánticos (`--color-error-*`, `--color-success-*`). No afecta layout ni tamaño.

**Contexto Medmo:** `danger` usa rojo desaturado (alarm fatigue prevention). `success` no sustituye feedback de `Alert` — intent en botones es para acciones, no para status display.

### state — condición

Responde: *¿En qué condición está el componente ahora?*

Implementado via props (`disabled`, `loading`), pseudo-classes (`:hover`, `:focus-visible`), o ARIA (`aria-invalid`, `aria-expanded`).

States consumen tokens distintos: `--color-disabled-*` para disabled, no opacity global.

### size — escala

Responde: *¿Qué espacio físico ocupa?*

Valores típicos: `sm`, `md`, `lg`. Icon-only: `icon-sm`, `icon-md`, `icon-lg`.

Sizes mapean a `--spacing-*`, `--space-inline-*`, `--text-*` roles, e iconografía contextual.

### Comparación con Carbon y Material

| Sistema | Modelo | Medmo alignment |
|---------|--------|-----------------|
| **IBM Carbon** | `kind` (primary/secondary/tertiary/ghost/danger) + size | Medmo separa danger como `intent`, no kind |
| **Material 3** | Emphasis (filled/outlined/text/tonal) + color roles | Medmo `variant` ≈ emphasis; `intent` ≈ color role |
| **Medmo** | `variant` × `intent` × `size` × `state` | Máxima claridad; evita kinds compuestos |

**Por qué ejes ortogonales:** Una matriz `4 variant × 4 intent` produce 16 combinaciones teóricas, pero solo ~8–10 son válidas en producto. Documentar combinaciones válidas es más mantenible que 16 variants planas con nombres ambiguos (`destructiveOutline`, `primaryDanger`, etc.).

---

## Token Consumption Rules

### Reglas absolutas

| Regla | Detalle |
|-------|---------|
| **Nunca hardcodear** | No valores literales de color, spacing, radius, shadow, z-index, duration en estilos de componente |
| **Nunca usar hex** | Ni en estilos, ni en docs de componente como valor de referencia — citar token |
| **Nunca usar spacing primitivo directo** | No `--spacing-16` en componentes — usar `--space-inline-md`, `--space-stack-sm`, etc. |
| **Consumir exclusivamente Foundation** | Tokens públicos de `foundations/tokens/index.css` y contratos `@medmo/tokens` |
| **No crear tokens nuevos** | Salvo aprobación explícita via proceso de gobernanza |
| **No modificar Foundations** | Durante Component Library phase — proponer, no editar |
| **Documentar consumo** | Tabla `Tokens consumed` obligatoria en spec de cada componente |

### Jerarquía de preferencia al consumir tokens

```
1. Context tokens     →  --radius-button, --radius-input
2. Semantic tokens    →  --color-action-primary, --space-inline-sm
3. Tailwind utilities →  bg-primary, rounded-lg (aliases via theme.css)
4. Primitive tokens   →  PROHIBIDO en componentes
```

### Tailwind en componentes

Permitido como **mecanismo de authoring** siempre que cada utility resuelva a Foundation via `theme.css`. En documentación del componente, referenciar **tokens**, no clases Tailwind, como fuente de verdad.

Prohibido: valores arbitrarios Tailwind (`bg-[#242F50]`, `p-[13px]`, `rounded-[10px]`).

### Cuándo un componente puede proponer nuevos tokens

Solo cuando se demuestra **necesidad sistémica**, no conveniencia local:

| Criterio | Requerido |
|----------|-----------|
| Mínimo 3 componentes consumirían el token | Sí |
| Tokens Foundation existentes no cubren el caso con composición razonable | Sí |
| Propuesta documentada con nombre, valor derivado, y capa (Component / Interaction) | Sí |
| Aprobación diseño + arquitectura DS | Sí |
| No se modifica Foundation durante la PR del componente | Sí — token se agenda en Foundation release separado |

**Ejemplo válido (futuro):** `--button-height-md` cuando Density Foundation requiera escala unificada.

**Ejemplo inválido:** `--button-blue-hover` porque un componente necesita un hover ligeramente distinto.

### Dark mode

Consumir tokens que ya tienen override `.dark` en Foundation. Los componentes **no** definen paletas dark propias.

---

## Accessibility Requirements

Todo componente publicado cumple **todos** los requisitos siguientes. Sin excepciones por prisa de delivery.

### Native semantics

Usar el elemento HTML correcto. `button` para acciones, `a` + href para navegación, `input` para datos, `dialog` para modales. No simular roles con divs salvo limitación documentada del primitivo.

### Keyboard navigation

Toda interacción disponible via mouse debe ser alcanzable y operable via teclado. Tab order lógico. Shortcuts documentados si existen. No trampas de focus excepto en modals (donde focus trap es obligatorio).

### Focus visible

Focus nunca invisible. Usar tokens Foundation: `--color-focus-ring`, `--focus-ring-width`, `--focus-ring-offset`. `:focus-visible` — no suprimir outline en interactivos.

### ARIA correcta

ARIA solo cuando HTML nativo es insuficiente. No redundancia (`role="button"` en `<button>`). Labels obligatorios para controles sin texto visible. `aria-expanded`, `aria-busy`, `aria-invalid`, `aria-describedby` según state model del componente.

### Reduced motion

Respetar `prefers-reduced-motion: reduce`. Animaciones deben degradar a instantáneo via tokens `--motion-*` y utilities Foundation. Ningún componente introduce animación infinite excepto skeleton (Foundation rule).

### Touch targets

Mínimo **44×44 CSS pixels** para targets táctiles en contexts mobile. Documentar qué size cumple. Icon-only controls requieren hit area explícita, no solo tamaño del icono.

### Screen readers

Nombre accesible (`aria-label`, `aria-labelledby`) en todo control. Estados anunciados (`aria-busy` en loading, `aria-invalid` en error). Live regions solo cuando el cambio de estado lo requiere — no over-announce.

### Color contrast

WCAG 2.1 AA mínimo para todo par texto/fondo y componente UI. Validar en light **y** dark. Disabled states usan tokens `--color-disabled-*` con contraste verificable — no opacity como único indicador.

### Form accessibility

Inputs vinculados a labels. Error messages via `aria-describedby`. Required fields indicados por texto, no solo color. Agrupación semántica (`fieldset` + `legend` cuando aplique).

---

## Composition Principles

El Design System organiza UI en cuatro capas compositivas. Cada capa tiene reglas de dependencia estrictas.

```
Primitive  →  Composite  →  Pattern  →  Template
   (átomo)      (molécula)    (organismo)   (página)
```

### Primitive

**Qué es:** Pieza atómica indivisible en el DS. Una responsabilidad clara.

**Ejemplos:** Input, Checkbox, Badge, Dialog, Tooltip.

**Reglas:**
- Importa solo Foundations (via tokens) y primitivos headless (Base UI)
- No importa otros primitivos salvo dependencia mínima justificada (ej. Dialog usa Portal)
- API pública estable y documentada
- Publicable de forma independiente

### Composite

**Qué es:** Combinación de primitivos con lógica de composición encapsulada.

**Ejemplos:** FormField (Label + Input + HelperText), InputGroup (Input + icons + buttons), IconButton (Button + aria enforcement).

**Reglas:**
- Compone primitivos — no duplica estilos de primitivos
- Puede añadir props de conveniencia que internamente mapean a primitivos
- No introduce tokens propios — hereda consumo de primitivos
- Documenta composición explícita

### Pattern

**Qué es:** Solución UX recurrente para escenarios de producto.

**Ejemplos:** DataTable, PageHeader, EmptyState, FormLayout, FilterBar.

**Reglas:**
- Compone primitivos y composites
- Puede tener opiniones de layout (grid, spacing de pattern)
- Orientado a casos de uso Medmo documentados
- Menor garantía de API frozen que primitivos — evoluciona con producto

### Template

**Qué es:** Estructura de página reutilizable.

**Ejemplos:** DashboardLayout, ListPageLayout, DetailPageLayout, SettingsLayout.

**Reglas:**
- Compone patterns y composites
- Define regions (header, sidebar, content, footer)
- Apps insertan domain content en slots
- Máxima flexibilidad de contenido, mínima flexibilidad de chrome

### Regla de dependencia

```
Template  →  Pattern  →  Composite  →  Primitive  →  Foundation
```

**Prohibido:** Primitive importa Composite. Pattern importa Template. Cualquier import hacia arriba en la jerarquía.

---

## Documentation Requirements

Todo componente publicado incluye documentación MDX completa. La documentación es **parte del producto**, no un adjunto.

### Obligatorio en MDX

| Artefacto | Contenido |
|-----------|-----------|
| **MDX page** | Todas las secciones de Mandatory Specification Structure |
| **Playground** | Interactivo, controles completos |
| **Do / Don't** | Tabla visual o lista clara |
| **API Reference** | Props, types, defaults — generada o mantenida manualmente, siempre sincronizada |
| **Accessibility** | Sección dedicada con requisitos del componente |
| **Examples** | Mínimo 3: básico, compuesto, edge case |
| **Migration** | Si reemplaza componente legacy |
| **Definition of Done** | Checklist específica firmada en review |

### Calidad de documentación

- Lenguaje claro, enterprise, sin jerga de implementación en secciones de diseño
- Ejemplos reflejan **contexto Medmo** (clinical admin, patient records, orders) — no lorem ipsum genérico
- Screenshots estáticos **no sustituyen** playground interactivo
- Cada cambio de API actualiza MDX en el mismo PR

### Ubicación

```
docs/design-system/components/{component-name}.mdx
```

Cross-link desde inventario, roadmap, y blueprint cuando el componente alcanza status Completado.

---

## Playground Requirements

Cada playground es el entorno de validación visual y de API. Debe permitir explorar el componente en condiciones reales de producto.

### Controles obligatorios

| Control | Por qué |
|---------|---------|
| **Theme** | Verificar light/dark via Foundation tokens |
| **Variant** | Explorar ejes de apariencia |
| **Intent** | Verificar semántica danger/success/warning |
| **State** | disabled, loading, invalid, expanded, selected |
| **Size** | Validar escala y touch targets |
| **Density** | Preparado para Density Foundation futuro — placeholder aceptable hasta implementación |
| **RTL** | Preparado para i18n — verificar que layout no depende de direccionalidad hardcodeada |
| **Reduced Motion** | Verificar degradación de animaciones |
| **Dark Mode** | Explícito además de theme — validar pares de contraste |

### Requisitos de calidad

- Default state al abrir refleja uso más común en Medmo
- Combinaciones inválidas documentadas (ej. ghost + danger en contextos no permitidos)
- Code snippet sincronizado con controles activos
- Accesible via teclado dentro del playground mismo

### Cuándo el playground es suficiente

El playground sustituye la necesidad de demos ad-hoc en páginas de producto. Ningún equipo debe crear páginas temporales para probar variants — usar playground oficial.

---

## Validation Checklist

Completar **antes de aprobar** merge a main. Todo ítem debe estar en verde.

| # | Área | Verificación |
|---|------|--------------|
| ✓ | **Tokens** | Tabla `Tokens consumed` completa. Cero hardcoded values. |
| ✓ | **Accessibility** | Keyboard, focus, ARIA, contrast, touch targets verificados. |
| ✓ | **Responsive** | Comportamiento en breakpoints Foundation (sm → 2xl). |
| ✓ | **Keyboard** | Tab, Enter, Space, Escape según componente. |
| ✓ | **Dark mode** | Todos variants/states en `.dark`. |
| ✓ | **Reduced Motion** | Animaciones degradan correctamente. |
| ✓ | **Foundation compliance** | Sin modificar `foundations/`. Sin tokens nuevos no aprobados. |
| ✓ | **No hardcoded values** | Lint/review manual confirma. |
| ✓ | **TypeScript** | Types públicos exportados. Strict mode sin errores. |
| ✓ | **Build** | `npm run build` exitoso. |
| ✓ | **MDX** | Documentación completa y revisada. |
| ✓ | **Playground** | Controles obligatorios funcionales. |
| ✓ | **API** | Coincide con spec aprobada. Sin props no documentadas. |

### Validaciones automatizables (pipeline futuro)

- `npm run validate:css` — sin regresiones runtime CSS
- `npm run validate:theme` — bridge Tailwind intacto
- ESLint boundaries — sin imports directos a `foundations/*` internals
- a11y lint (axe) en playground stories

---

## Definition of Done

Un componente **no está terminado** hasta cumplir **todos** los criterios. Parcialmente hecho = no publicado.

| Criterio | Requerido |
|----------|-----------|
| Research aprobado | Comparativa y casos de uso documentados |
| Intent documentado | Boundaries claros |
| Arquitectura aprobada | Capa, primitivo, dependencias definidas |
| API estable | Review completada, defaults documentados |
| Tokens definidos | 100% Foundation, tabla completa |
| Estados completos | Todos los states implementados y documentados |
| Accesibilidad validada | Checklist accessibility cumplida |
| Playground funcional | Controles obligatorios operativos |
| MDX terminado | Mandatory Specification Structure completa |
| Tests | Unit/integration según criticidad del primitivo |
| Build exitoso | CI green |
| Sin valores hardcoded | Verificado en review |
| Sin crear tokens nuevos | O propuesta aprobada y scheduled |
| Documentación publicada | MDX mergeado, inventario actualizado |

**Status en roadmap:** solo pasa a **Completado** cuando Definition of Done global + específica están firmadas.

---

## Governance

### Quién puede modificar qué

| Artefacto | Owner | Proceso de cambio |
|-----------|-------|-------------------|
| **Principles** | Design + Product leadership | RFC documentado, review cross-funcional |
| **Foundations** | Design System team + Design | RFC, impact analysis en todos los componentes, release Foundation versionado |
| **Tokens públicos** | Design System team | Mismo proceso que Foundations — tokens son contrato |
| **Componentes (API pública)** | Design System team | Spec update + review + semver |
| **Patterns / Templates** | DS team + Product | Review con stakeholders de producto |
| **Domain components** | Product teams | Siguen Composition Principles; no modifican primitivos |

### Breaking changes

| Tipo | Proceso |
|------|---------|
| Prop rename / removal | Deprecation period documentado en Migration Guide. Mínimo 1 release cycle. |
| Visual change (tokens) | Foundation changelog. Regresión visual test en playground. |
| Behavior change | Major version bump cuando exista package semver. |
| Foundation token removal | **Prohibido** sin major Foundation version y migration path. |

### Versionado (visión)

| Package (futuro) | Versionado |
|------------------|------------|
| `@medmo/tokens` | Semver — Foundation releases |
| `@medmo/react` (futuro) | Semver — Component Library releases |
| Documentación MDX | Version field en frontmatter, changelog por componente |

### RFC mínimo para cambios significativos

1. Problema y contexto
2. Propuesta con alternativas rechazadas
3. Impacto en componentes existentes
4. Plan de migración
5. Aprobación diseño + ingeniería DS

### Pull request requirements

- Spec MDX linkada o actualizada
- Validation Checklist en descripción del PR
- Review obligatorio: 1 ingeniería DS + 1 diseño (primitivos)
- No merge Friday without playground verification (recomendación operativa)

---

## Future Evolution

Esta spec es v1. El sistema evolucionará sin invalidar principios core. Las siguientes capacidades están planificadas e integrarán **proceso adicional**, no excepciones ad-hoc.

### Density

Foundation futura que modifica spacing y typography scales sin cambiar APIs de componentes. Playgrounds deben preparar control Density. Componentes consumen tokens semánticos — Density cambia valores subyacentes.

### Motion

Interaction Tokens (blueprint) compondrán motion + color para estados hover/pressed. Componentes seguirán consumiendo presets `--motion-*` hasta entonces. Nunca introducir duraciones custom por componente.

### Internationalization (i18n)

Textos via props/children — nunca hardcoded en componentes. Strings de ejemplo en docs en español e inglés cuando aplique. RTL requiere logical properties (`inline-start`, no `left`).

### RTL

Playground control RTL obligatorio cuando i18n phase inicie. Componentes no asumen dirección LTR en padding/asymmetric icons sin mirror logic documentada.

### Mobile

Touch targets, responsive breakpoints Foundation, patterns mobile-first para workflows clínicos en campo. Templates adaptativos — no componentes mobile separados salvo justificación.

### Composites

Mayoría del valor del DS emerge en composites y patterns. Lifecycle idéntico a primitivos. Spec Mandatory Structure aplican igual.

### Charts & Data Visualization

Capa paralela con Data Visualization Tokens (blueprint). No reutilizar tokens de feedback (`--color-success-*`) para series de charts. Componentes de viz siguen esta spec + extensión viz-specific.

### AI Components

Componentes asistidos por IA (suggestions, summaries) seguirán Intent → API → Tokens → Accessibility. Contenido generado requiere estados de loading/error/confidence documentados. Sin tokens nuevos para "AI purple" — usar semantic tokens existentes hasta brand decision explícita.

---

## Appendix — Quick Reference

### Capas y dependencias

```
Principles → Foundations → Tokens → Primitives → Composites → Patterns → Templates → Domain
```

### Ejes de API

```
variant (apariencia) × intent (semántica) × size (escala) × state (condición)
```

### Prohibiciones absolutas

- Hardcoded visual values
- Hex / raw px en componentes
- `--spacing-*` primitivos en componentes
- Modificar Foundations durante Component Library
- Tokens nuevos sin RFC aprobado
- Publicar sin MDX + Playground + Accessibility
- Mezclar semántica en variant names
- Opacity-only disabled states
- Saltar fases del Component Lifecycle

### Documentos relacionados

| Documento | Relación |
|-----------|----------|
| [Blueprint](./blueprint.mdx) | Arquitectura global del DS |
| [Roadmap](./000-roadmap.mdx) | Estado y fases |
| [Design Principles](./principles/design-principles.mdx) | Filosofía de diseño |
| [Accessibility](./principles/accessibility.mdx) | Estándar WCAG Medmo |
| [Brand Language](./principles/brand-language.mdx) | Identidad visual |
| [Runtime CSS](./technical-setup/runtime-css.mdx) | Flujo CSS Technical Setup |
| [Package Boundaries](../../foundations/tokens/package-boundaries.md) | Imports `@medmo/tokens` |

---

*Medmo Design System · Component Architecture Specification v1.0.0*
*Este documento es el estándar obligatorio para toda la Component Library.*
