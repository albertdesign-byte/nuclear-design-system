import { breakpointSemanticNames } from "./contract"
import { breakpointScale, containerMaxScale } from "./primitives/scale"
import { semanticBreakpoints } from "./semantic"
import type {
  BreakpointSemanticName,
  ContainerRole,
  LayoutRole,
} from "./types"

export function resolvePrimitiveBreakpoint(name: BreakpointSemanticName) {
  return breakpointScale[name]
}

export function resolveViewportBreakpoint(name: BreakpointSemanticName) {
  const token = semanticBreakpoints.viewport[name]
  const primitive = breakpointScale[name]
  return { ...token, ...primitive }
}

export function resolveContainerToken(role: ContainerRole) {
  const token = semanticBreakpoints.container[role]
  const max = containerMaxScale[role]
  return { ...token, ...max }
}

export function resolveLayoutToken(role: LayoutRole) {
  return semanticBreakpoints.layout[role]
}

/** All viewport tiers with resolved px/rem for docs and tooling */
export function resolveAllViewportBreakpoints() {
  return breakpointSemanticNames.map((name) => resolveViewportBreakpoint(name))
}
