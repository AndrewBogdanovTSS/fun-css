import type { Preset } from 'unocss'
import tcm from 'unocss-transformer-classnames-minifier'
import { theme } from './theme'
import { rules } from './rules'
import { shortcuts } from './shortcuts'
import { variants } from './variants'
import { preflights } from './preflights'
import { presets } from './presets'

export const funPreset = (): Preset => ({
  name: 'fun-preset',
  preflights,
  presets,
  rules,
  shortcuts,
  theme,
  variants,
})
