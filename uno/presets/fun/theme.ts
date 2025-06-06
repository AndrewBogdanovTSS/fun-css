import type { Theme } from 'unocss/preset-wind3'
import bps from '#root/design-system/breakpoints.json'
import { mapObject } from '#root/utils/mapObject'

export const theme: Theme = {
  breakpoints: mapObject(bps, (bp: string) => `${bp}px`),
  colors: {
    'brand-1': '#a5ceff',
    'brand-2': '#abffad',
  },
}
