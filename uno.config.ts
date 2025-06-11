import { defineConfig, presetMini } from 'unocss'
import { funPreset } from './uno/presets/fun'

export default defineConfig({
  presets: [
    presetMini(),
    funPreset(),
  ],
})
