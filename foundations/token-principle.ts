/**
 * Token creation principle — applies to all Foundations.
 *
 * Before adding a token, ask:
 * "Does this represent a reusable design decision or merely a value?"
 *
 * - Value only → primitive (internal)
 * - Shared intent across many components → semantic token or preset
 *
 * Prefer reducing token count. If two tokens always travel together → preset.
 * If a token would have one consumer → it probably should not exist.
 */

export const tokenCreationPrinciple = {
  question:
    "Does this represent a reusable design decision or merely a value?",
  valueOnly: "Keep as primitive — not exposed in component code",
  sharedIntent: "Semantic token or preset",
  rules: [
    "Try to REDUCE token count before adding new ones",
    "If two tokens always travel together, evaluate merging into a preset",
    "If a token would have only one consumer, it probably should not exist",
    "Simplicity is a quality criterion for the Design System",
  ],
} as const
