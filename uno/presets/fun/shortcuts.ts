import type { Shortcut } from 'unocss'

export const shortcuts: Shortcut[] = [
  ['f-col', 'flex flex-col'],
  ['center', 'items-center justify-center'],
  ['duration', 'duration-250'],
  [/^ga-(.*)$/, ([, c]) => `grid-area-${c}`],
  [/^\|(.*)$/, ([, c]) => `uno-layer-override:${c}`],
]
