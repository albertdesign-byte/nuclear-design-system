/**
 * Motion presets — primary public API for components.
 *
 * Each preset bundles duration + easing + allowed properties.
 * Interaction rules are enforced in documentation and rules.md — not extra tokens.
 */

import type { MotionPreset, MotionPresetRole } from "./types"

function preset(
  durationMs: MotionPreset["durationMs"],
  easing: MotionPreset["easing"],
  properties: string[],
  rules: string[],
  purpose: string,
  usage: string,
  doNot: string
): MotionPreset {
  return { durationMs, easing, properties, rules, purpose, usage, doNot }
}

export const motionPresets: Record<MotionPresetRole, MotionPreset> = {
  hover: preset(
    100,
    "in-out",
    ["color", "background-color", "border-color", "opacity", "box-shadow"],
    [
      "Never transform or layout properties",
      "Never translate, scale, or width/height",
    ],
    "Interactive surface feedback",
    "Button, link, card hover, icon button, clickable row highlight",
    "Moving elements on hover, scale effects, padding changes"
  ),

  dropdown: preset(
    150,
    "out",
    ["opacity", "transform"],
    [
      "Enter: fade + translateY 4px → 0",
      "Exit: ease-in, reverse translate",
      "Max travel 4px — not 8px or more",
    ],
    "Floating menu appear",
    "Select content, DropdownMenu, Popover enter",
    "Bounce, scale from 0, slide from far off-screen"
  ),

  modal: preset(
    200,
    "out",
    ["opacity", "transform"],
    [
      "Enter: fade + scale 0.98 → 1",
      "Exit: ease-in, fade out",
      "Never bounce or overshoot",
    ],
    "Dialog layer appear",
    "Dialog, Sheet, AlertDialog content enter/exit",
    "Slide from bottom, rotate, elastic scale"
  ),

  toast: preset(
    150,
    "out",
    ["opacity", "transform"],
    [
      "Enter: slide + fade (typically from edge)",
      "Exit: ease-in slide out",
    ],
    "Toast notification appear",
    "Sonner toast enter/exit",
    "Bounce, long travel, scale effects"
  ),

  accordion: preset(
    300,
    "in-out",
    ["height", "grid-template-rows"],
    [
      "Animate height only — not opacity of children separately",
      "No bounce on expand/collapse",
    ],
    "Collapsible section expand",
    "Accordion, Collapsible, expandable table rows",
    "Max-height hacks with wrong easing, spring physics"
  ),

  skeleton: preset(
    2000,
    "in-out",
    ["opacity"],
    [
      "Slow breathing pulse — only infinite animation allowed in Medmo",
      "Never aggressive shimmer or moving gradient",
      "Stops immediately when content loads",
    ],
    "Loading placeholder pulse",
    "Skeleton component pulse while data fetches",
    "Shimmer, wave, spin on skeleton, infinite non-loading animations"
  ),
}

/** Dropdown/modal transform constants — referenced in CSS, not magic numbers in components */
export const motionTransformTokens = {
  dropdownOffsetY: "4px",
  modalScaleFrom: "0.98",
  modalScaleTo: "1",
} as const
