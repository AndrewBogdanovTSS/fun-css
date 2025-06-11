/**
 * Checks if value is an object.
 * @example
 * isObject({ foo: 'bar' })
 * returns false
 * @category Utils
 */
export const isObject = (val: unknown): val is object => toString.call(val) === '[object Object]'
