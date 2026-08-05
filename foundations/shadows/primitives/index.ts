export {
  shadowDefinitions,
  shadowDefinitionsDark,
  shadowScaleRoles,
} from "./definitions"

import { shadowDefinitions } from "./definitions"

/** Primitive shadow definitions — internal use only. Components must NOT import this. */
export const primitives = {
  shadow: shadowDefinitions,
} as const
