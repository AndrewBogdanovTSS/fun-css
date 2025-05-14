import { defineConfig, presetWind3 } from 'unocss'
import { funPreset } from './uno/presets/fun'

export default defineConfig({
  presets: [
    presetWind3(),
    funPreset(),
  ],
})
