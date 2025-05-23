import type { Shortcut } from 'unocss'

export const shortcuts: Shortcut[] = [
  ['i-flex', 'inline-flex'],
  ['f-col', 'flex flex-col'],
  ['center', 'items-center justify-center'],
  ['duration', 'duration-250'],
  [/^🐌(.*)$/, ([, c]) => `motion-safe:${c}`],
  // [/^@duration(.*)$/, ([, c]) => `motion-safe:duration${c}`],
  // [/^@transition(.*)$/, ([, c]) => `motion-safe:transition${c}`],
  [/^hactive:(.*)$/, ([, c]) => `hover:${c} active:${c}`],
  [/^@hactive:(.*)$/, ([, c]) => `@hover:${c} active:${c}`],
  [/^group-@active:(.*)$/, ([, c]) => `[.active_&]:${c}`],
  [/^\|(.*)$/, ([, c]) => `uno-layer-override:${c}`],
]
