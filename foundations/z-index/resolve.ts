import { zIndexScale, layerToPrimitive } from "./scale"
import { zIndexLayers } from "./semantics"
import type { ZIndexLayer, ZIndexPrimitiveStep } from "./types"
import { zIndexStackOrder } from "./types"

export function resolvePrimitiveZIndex(step: ZIndexPrimitiveStep) {
  return zIndexScale[step]
}

export function resolveZIndexLayer(layer: ZIndexLayer) {
  const token = zIndexLayers[layer]
  const primitive = zIndexScale[token.value]
  return {
    ...token,
    cssVar: `--z-${layer}`,
    ...primitive,
  }
}

export function resolveAllZIndexLayers() {
  return zIndexStackOrder.map(resolveZIndexLayer)
}

/** Compare priority: returns true if `a` stacks above `b` */
export function isAbove(a: ZIndexLayer, b: ZIndexLayer) {
  return zIndexStackOrder.indexOf(a) > zIndexStackOrder.indexOf(b)
}

export { layerToPrimitive }
