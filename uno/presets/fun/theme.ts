import type { Theme } from 'unocss/preset-mini'
import bps from '#root/design-system/breakpoints.json'
import { mapObject } from '#root/utils/mapObject'

export const theme: Theme = {
  breakpoints: mapObject(bps, (bp: string) => `${bp}px`),
}
