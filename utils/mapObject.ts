/**
 * Returns values to the passed function by reducing the array of keys to an object,
 * where the key is the key from the original object, and the value is the result of the function.
 * If byKeys is set to true, it will return keys instead of values to the passed function.
 * @param obj - source object
 * @param fn - callback function which defines the mapped value
 * @param byKeys - if true, returns keys instead of values to the passed function
 * @returns - mapped object
 * @category Utils
 */
export function mapObject<T extends Record<string, unknown>, S>(
  obj: T,
  fn: (value: keyof T | T[keyof T], i: number, arr: Array<keyof T | T[keyof T]>) => S,
  byKeys: boolean = false,
): Record<keyof T, S> {
  return Object.keys(obj).reduce((result, key: keyof T, i, arr) => {
    result[key] = byKeys ? fn(key, i, arr as Array<keyof T>) : fn(obj[key], i, arr as Array<T[keyof T]>)
    return result
  }, {} as Record<keyof T, S>)
}
