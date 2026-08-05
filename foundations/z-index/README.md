# Medmo Z-Index System

Interaction priority stack — **not** visual depth. Seven semantic layers (0–60).

## Layers (bottom → top)

```
base → sticky → dropdown → popover → tooltip → toast → modal
  0      10        20         30        40       50      60
```

## Rules

Components consume ONLY `--z-{layer}`. Never numeric z-index.

## Token principle

Less tokens, more intention. Seven layers is the complete API.

## Documentation

`docs/design-system/foundations/z-index.mdx`
