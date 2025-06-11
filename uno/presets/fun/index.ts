import type { Preset } from 'unocss'
import { theme } from './theme'
import { shortcuts } from './shortcuts'
import { preflights } from './preflights'
import { presets } from './presets'
import { safelist } from './safelist'

export const funPreset = (): Preset => ({
  name: 'fun-preset',
  preflights,
  presets,
  safelist,
  shortcuts,
  theme,
})
