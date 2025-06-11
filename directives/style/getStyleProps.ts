import type { Responsive } from '../../types'
import { getBreakpointMarkers } from '../../utils/getBreakpointMarkers'
import { isObject } from '../../utils/isObject'
import type { StyleProp } from './types'

type ObjectValue = string | number | undefined | Responsive

const [firstBr] = getBreakpointMarkers().all

const getClassValue = (prop: string, br: string) =>
  br === firstBr ? `${prop}-$${prop}` : `${br}:${prop}-$${prop}-${br}`
const getStyleValue = (prop: string, br: string, value: string) =>
  br === firstBr ? [[`--${prop}`], value] : [[`--${prop}-${br}`], value]

/**
 * Composes an object of responsive CSS variables
 * @example
 * getStyleProps('padding', { sm: '1rem', md: '2rem', lg: '3rem' })
 * returns {
 *   styles: { '--padding': '1rem', '--padding-md': '2rem', '--padding-lg': '3rem' },
 *   classList: ['padding-$padding', 'md:padding-$padding-md', 'lg:padding-$padding-lg']
 * }
 */
export const getStyleProps = (prop: StyleProp, obj: ObjectValue) => {
  if (!obj) return {}

  const values = isObject(obj) ? obj : { sm: obj }

  // Remove breakpoint keys that have a duplicated values
  const filteredValues = Object.entries(values).reduce((acc, cur) => {
    if (cur[1] && acc.at(-1)?.[1] !== cur[1]) acc.push(cur)
    return acc
  }, [] as [string, string][])

  return {
    styles: Object.fromEntries(filteredValues.map(v => getStyleValue(prop, ...v))),
    classList: filteredValues.map(([br]) => getClassValue(prop, br)),
  }
}
