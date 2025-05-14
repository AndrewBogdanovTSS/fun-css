import type { Preset } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export const presets: Preset[] = [
  presetWebFonts({
    provider: 'google',
    fonts: {
      sans: 'Roboto',
    },
  }),
]
