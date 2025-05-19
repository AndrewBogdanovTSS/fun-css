import { defineConfig, presetWind4 } from 'unocss'
import { funPreset } from './uno/presets/fun'

export default defineConfig({
  presets: [
    presetWind4(),
    funPreset(),
  ],
})
