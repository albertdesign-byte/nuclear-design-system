/**
 * Public TypeScript types — re-exported from Foundations.
 * STABLE: type names follow foundation definitions.
 */

export type {
  ColorStep,
  ColorScale,
  ColorPrimitive,
  PrimitiveReference,
  SemanticColorToken,
  FocusTokens,
  FeedbackSemanticGroup,
} from "../../colors/types"

export type {
  SpacingPrimitiveStep,
  InlineSpacingRole,
  StackSpacingRole,
  ContextSpacingRole,
  SemanticSpacingToken,
} from "../../spacing/types"

export type {
  FontSizeStep,
  FontWeightStep,
  LineHeightStep,
  LetterSpacingStep,
  SemanticTypographyRole,
  SemanticTypographyToken,
} from "../../typography/types"

export type {
  BreakpointSemanticName,
  BreakpointTailwindAlias,
  ContainerRole,
  LayoutRole,
  BreakpointPrimitive,
  BreakpointSemanticToken,
  ContainerToken,
  LayoutToken,
} from "../../breakpoints/types"

export type {
  RadiusPrimitiveStep,
  RadiusPrimitiveName,
  RadiusScaleRole,
  RadiusContextRole,
  RadiusPrimitive,
  RadiusScaleToken,
  RadiusContextToken,
} from "../../radius/types"

export type { ShadowScaleRole, ShadowPrimitive, ShadowScaleToken } from "../../shadows/types"

export type {
  MotionDurationMs,
  MotionDurationRole,
  MotionEasingRole,
  MotionPresetRole,
  MotionPreset,
} from "../../motion/types"

export type {
  OpacityPrimitiveStep,
  OpacitySemanticRole,
  OpacityPresetRole,
  OpacityPrimitive,
  OpacitySemanticToken,
  OpacityPreset,
} from "../../opacity/types"

export type {
  ZIndexLayer,
  ZIndexPrimitiveStep,
  ZIndexPrimitive,
  ZIndexSemanticToken,
} from "../../z-index/types"

export type {
  IconSizeRole,
  IconSizePrimitivePx,
  IconContextRole,
  IconSizeSemantic,
  IconContextMapping,
} from "../../iconography/types"
