import type { Rule } from 'unocss'

export const rules: Rule[] = [
  [
    /^@duration(?:-(.+))?$/, ([, d], { symbols }) =>
      ({
        [symbols.parent]: '@media (prefers-reduced-motion: no-preference)',
        'transition-duration': d ? `${d}ms` : '250ms',
      }),
  ],
]
