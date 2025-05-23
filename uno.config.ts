import { defineConfig } from 'unocss'
import { presetWind4 } from '@unocss/preset-wind4'
import { funPreset } from './uno/presets/fun'

export default defineConfig({
  presets: [
    presetWind4(),
    funPreset(),
  ],
})
