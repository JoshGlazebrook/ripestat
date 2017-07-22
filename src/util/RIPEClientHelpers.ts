/**
 * Converts any Date objects in an object to a unix timestamp representation.
 *
 * Note: The RIPE Stat api does not seem to handle periods in query parameters correct.
 *       Otherwise .toISOString() would be used.
 * @param { Object } obj
 */
export function convertDatesToStrings(obj: { [index: string]: any }): object {
  for (let key in obj) {
    if (obj[key] instanceof Date) {
      obj[key] = Math.round(obj[key].valueOf() / 1000);
    }
  }

  return obj;
}
