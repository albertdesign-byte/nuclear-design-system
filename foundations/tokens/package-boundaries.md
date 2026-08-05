# Package Boundaries

Prepared for future `@medmo/tokens` npm package. Not published yet.

## Entry points

| Subpath | File | Purpose |
|---------|------|---------|
| `@medmo/tokens` | `index.ts` | Default — contracts, resolve namespace, types, essentials |
| `@medmo/tokens/css` | `index.css` | CSS runtime (all custom properties) |
| `@medmo/tokens/contracts` | `contracts.ts` | Flat contract registries, allowlists |
| `@medmo/tokens/resolve` | `resolve.ts` | Flat + namespaced resolve helpers |
| `@medmo/tokens/tooling` | `tooling.ts` | DS authors — semantics, contrast, rejected intents |

## Import rules

```typescript
// ✅ Apps & components
import { medmoContracts, medmoResolve } from "@medmo/tokens"
import type { SemanticTypographyRole } from "@medmo/tokens"

// ✅ Lint / Storybook / docs generators
import { allSemanticSpacingTokens } from "@medmo/tokens/contracts"
import { resolveIconSize } from "@medmo/tokens/resolve"
import { contrastMatrix, lightSemantic } from "@medmo/tokens/tooling"

// ❌ Never
import { semanticSpacing } from "../../foundations/spacing/semantic"
import "../../foundations/colors/colors.css"
```

## Internal (not exported)

- `foundations/{name}/primitives/`
- `foundations/{name}/tokens.ts` (foundation-local barrels)
- `foundations/tokens/public/*` (implementation — use entry points above)

## Future `package.json` exports

```json
{
  "exports": {
    ".": "./foundations/tokens/index.ts",
    "./css": "./foundations/tokens/index.css",
    "./contracts": "./foundations/tokens/contracts.ts",
    "./resolve": "./foundations/tokens/resolve.ts",
    "./tooling": "./foundations/tokens/tooling.ts"
  }
}
```
