import type { Shortcut } from 'unocss'

export const shortcuts: Shortcut[] = [
  ['i-flex', 'inline-flex'],
  ['f-col', 'flex flex-col'],
  ['center', 'items-center justify-center'],
  [/^hactive:(.*)$/, ([, c]) => `hover:${c} active:${c}`],
  [/^@hactive:(.*)$/, ([, c]) => `@hover:${c} active:${c}`],
  [/^group-@active:(.*)$/, ([, c]) => `[.active_&]:${c}`],
]
