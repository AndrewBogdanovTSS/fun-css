import type { Preset } from 'unocss'
import { theme } from './theme'
import { shortcuts } from './shortcuts'
import { preflights } from './preflights'
import { presets } from './presets'

export const funPreset = (): Preset => ({
  name: 'fun-preset',
  preflights,
  presets,
  shortcuts,
  theme,
})
