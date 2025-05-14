import type { Rule } from 'unocss'
import type { Theme } from 'unocss/preset-wind3'

export const rules: Rule[] = [
  [/^duration$/, (_, { theme }: { theme: Theme }) =>
    ({ 'transition-duration': theme.duration?.DEFAULT })],
]
