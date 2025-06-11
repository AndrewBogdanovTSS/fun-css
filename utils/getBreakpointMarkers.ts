import breakpoints from '#root/design-system/breakpoints.json'

/**
 * Generates an object containing arrays of breakpoint markers for responsive design.
 * `processable` array includes the keys from the `breakpoints` object that have truthy values,
 * indicating they are active or relevant breakpoints. The `postfix` array builds upon
 * `processable`, starting with an empty string and appending each breakpoint with a colon suffix,
 * useful for naming conventions or class modifiers in responsive styles.
 * @returns An object with 3 properties: `processable` and `postfix`.
 *          `all` is an array of keys from the `breakpoints` object.
 *          `processable` is an array of keys from the `breakpoints` object that have truthy values.
 *          `postfix` is an array that includes an empty string and the items from `processable`,
 *          each followed by a colon.
 * @example
 * const { all, processable, postfix } = getBreakpointMarkers();
 * console.log(all); // ['sm', 'md', 'lg', 'xl']
 * console.log(processable); // ['md', 'lg', 'xl']
 * console.log(postfix); // ['', 'md:', 'lg:', 'xl:']
 * @category Utils
 */
export const getBreakpointMarkers = () => {
  const all = Object.keys(breakpoints)
  const processable = all.filter(i => breakpoints[i])

  return {
    all,
    processable,
    postfix: ['', ...processable.map(i => `${i}:`)],
  }
}
