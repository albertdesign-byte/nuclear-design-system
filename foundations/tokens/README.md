# Token Aggregation — Public API

**Single entry point** for the Medmo Design System token layer.

```
foundations/tokens/
├── index.ts          ← Default public API (@medmo/tokens)
├── index.css         ← CSS runtime (@medmo/tokens/css)
├── contracts.ts      ← Flat registries (@medmo/tokens/contracts)
├── resolve.ts        ← Resolve helpers (@medmo/tokens/resolve)
├── tooling.ts        ← DS authoring (@medmo/tokens/tooling)
├── package-boundaries.md
├── internal.md
└── public/           ← Implementation (do not import directly)
```

## Consumption

### CSS (runtime)

```css
@import "../../foundations/tokens/index.css";
```

### TypeScript — default entry

```typescript
import { medmoContracts, medmoResolve } from "@medmo/tokens"
import type { SemanticTypographyRole } from "@medmo/tokens"
```

### Subpath entries

```typescript
import { allSemanticSpacingTokens } from "@medmo/tokens/contracts"
import { resolveIconSize } from "@medmo/tokens/resolve"
import { contrastMatrix, lightSemantic } from "@medmo/tokens/tooling"
```

See [`package-boundaries.md`](./package-boundaries.md) for full boundary rules.

## Rule for all consumers

> Import **only** from `@medmo/tokens` and its subpaths.
> Never from `foundations/colors/`, `foundations/spacing/`, etc.

## Documentation

→ [`docs/design-system/foundations/tokens.mdx`](../docs/design-system/foundations/tokens.mdx)

## Next step

**STOP** — review [HARDENING.md](../../HARDENING.md) before Technical Setup (Phase 3).
