import type { StyleProp } from '#root/directives/style/types'
import { getBreakpointMarkers } from '#root/utils/getBreakpointMarkers'

const { processable: brs } = getBreakpointMarkers()

/**
 * Composes responsive classes.
 * @param prop Base property of the iteration
 * @param isOverride Whether to move generated classes to override Uno layer by adding a special | operator
 * @example
 * getVarsClasses('c')
 * returns '|c-$c |md:c-$c-md |lg:c-$c-lg'
 * @example
 * getVarsClasses('c', false)
 * returns 'c-$c md:c-$c-md lg:c-$c-lg'
 * @category Utils
 */
export const getVarsClasses = (prop: StyleProp, isOverride?: boolean): string =>
  ['', ...brs].flatMap((bp) => {
    const prefix = bp ? `${bp}:` : ''
    const postfix = bp ? `-${bp}` : ''
    return `${isOverride ? '|' : ''}${prefix}${prop}-$${prop}${postfix}`
  }).join(' ')
