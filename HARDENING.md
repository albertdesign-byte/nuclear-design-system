# Hardening Report — Medmo Design System

**Fecha:** 2026-07-17  
**Fase:** 2b — Hardening (post Foundation Audit)  
**Objetivo:** Resolver hallazgos del audit sin agregar features.

---

## 1. Resumen de cambios

### Eliminado

| Item | Ubicación | Razón |
|------|-----------|-------|
| `spacing.ts` | `src/lib/design-system/tokens/` | Legacy Tailwind scale incompatible con foundations |
| `elevation.ts` | `src/lib/design-system/tokens/` | Violaba política no-elevation |
| `motion.ts` | `src/lib/design-system/tokens/` | Superseded por `foundations/motion/` |
| `--opacity-40/50/80` | `opacity.css` | Primitivos CSS sin mapping semántico |
| Pasos 40/50/80 | `opacity/scale.ts`, `types.ts` | Alineado con CSS mínimo |
| `focusCssVariables` duplicado | `tokens/public/contracts.ts` | Ya en `colors/contract` |
| `--radius` literal duplicado | `tokens/public/contracts.ts` | Ya en `allSemanticRadiusTokens` |
| `contextSpacingExtended` | `spacing/semantic/` | Merge en `contextSpacing` unificado |
| ~50 exports redundantes | `tokens/index.ts` | Movidos a subpaths |

### Simplificado

| Área | Cambio |
|------|--------|
| **API pública default** | `index.ts` exporta solo: `medmoContracts`, `allPublicCssVariables`, `medmoResolve`, types, essentials, architecture metadata |
| **Subpath exports** | `contracts.ts`, `resolve.ts`, `tooling.ts` + `package.json` `exports` field |
| **Spacing types** | `ContextSpacingRole` incluye `form-label`, `form-group`, `card-gap` |
| **Opacity** | 2 primitivos CSS (20, 60) — alineado con API pública |
| **Path aliases** | `@medmo/tokens`, `@medmo/tokens/{contracts,resolve,tooling}` en `tsconfig.json` |
| **Documentación** | Roadmap, blueprint, inventory, tokens.mdx sincronizados |

### Mantenido (sin cambios filosóficos)

- 11 Foundations — sin tokens nuevos, sin renombres de tokens CSS
- `--space-*` / `--spacing-*` split intencional
- `allColorTokenNames` alias (sin rename — requiere semver major)
- `medmoResolve` como API preferida; flat resolve en subpath `/resolve`
- Motion contract completo (22 vars) — secondary API documentada
- Estructura flat en motion/opacity/z-index/iconography
- `FOUNDATION_AUDIT.md` — referencia histórica del pre-hardening

---

## 2. Hardening Score

| Dimensión | Antes (Audit) | Después (Hardening) |
|-----------|---------------|-------------------|
| Legacy cleanup | 2/10 | **10/10** |
| Public API clarity | 6/10 | **8.5/10** |
| Registry integrity | 5/10 | **9/10** |
| Package boundaries | 3/10 | **8/10** |
| Documentation accuracy | 5/10 | **8.5/10** |
| Cross-foundation consistency | 7.5/10 | **8.5/10** |
| **Global** | **7.6/10** | **8.7/10** |

---

## 3. Nueva recomendación

### ¿Publicarías hoy esta arquitectura como librería open source?

**Casi — pero aún no.**

**Argumentos a favor (nuevo estado):**

- Legacy eliminado — sin conflictos de escala
- API segmentada en entry + 3 subpaths — tree-shaking viable para consumidores disciplinados
- `package.json` `exports` field definido
- Registry deduplicado (~203 vars únicas)
- Type/contract alignment en spacing
- Documentación sincronizada con estado real

**Lo que aún falta para OSS publish:**

| Blocker | Tipo | Fase |
|---------|------|------|
| ESLint `no-restricted-imports` boundary | Enforcement | Phase 3 |
| `globals.css` wired to `index.css` | Runtime proof | Phase 3 |
| Tailwind `@theme` mapping | Framework integration | Phase 3 |
| Migración a `packages/foundations` workspace | Packaging | Cuando 2+ apps |
| CI: `tsc` + contract validation test | Quality gate | Phase 3 |
| README del repo (root) aún es create-next-app boilerplate | DX | Phase 3 |
| `allColorTokenNames` naming inconsistency | Semver cosmetic | Optional major |

**Veredicto:** La arquitectura está **lista para Phase 3 (Technical Setup)**. Para **publicación OSS**, falta demostrar consumo end-to-end (CSS wired + al menos 1 componente usando tokens) y enforcement automatizado.

---

*STOP — revisar Hardening antes de iniciar Technical Setup.*
