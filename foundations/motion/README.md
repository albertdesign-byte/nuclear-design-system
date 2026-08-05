# Medmo Motion System

Framework-agnostic motion tokens. Four durations. Three easings. Six presets.

## Scale

| Durations | Easings | Presets |
|-----------|---------|---------|
| 100ms fast | ease-in (exit) | hover |
| 150ms moderate | ease-out (enter) | dropdown |
| 200ms default | ease-in-out (state) | modal |
| 300ms slow | | toast |
| | | accordion |
| | | skeleton (2s cycle) |

## Architecture

```
duration.ts + easing.ts (primitives)  →  presets.ts (semantic)  →  motion.css
```

## Rules

Components consume `--motion-{preset}` transition shorthands. Never raw ms or bezier.

Interaction rules (no bounce, no layout hover) live in rules.md and motion.mdx — not tokens.

## Documentation

- Foundation: `docs/design-system/foundations/motion.mdx`
- Philosophy: `docs/design-system/principles/motion-philosophy.mdx`
