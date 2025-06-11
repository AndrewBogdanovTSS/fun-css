import type { Preset } from 'unocss'
import { theme } from './theme'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { variants } from './variants'
import { preflights } from './preflights'
import { presets } from './presets'
import { safelist } from './safelist'

export const funPreset = (): Preset => ({
  name: 'fun-preset',
  preflights,
  presets,
  rules,
  safelist,
  shortcuts,
  theme,
  variants,
})
