import { RIPEClient } from '../src/';
import * as deepDiff from 'deep-diff';
import * as fs from 'fs';
const requestOptions = require('./__mockdata/requestOptions');

/**
 * This generates json snapshots of example api responses from every available api.
 *
 * Note: This should never really need to be used again.
 */
export function generateOriginMockDataPayloads() {
  const client: any = new RIPEClient();

  const endpointMethods: string[] = Object.getOwnPropertyNames(Object.getPrototypeOf(client)).filter((item: string) => item !== 'constructor');

  for (const endpoint of endpointMethods) {
    console.log(`Processing: ${endpoint}`);
    client
      [endpoint](requestOptions[endpoint])
      .then((result: any) => {
        fs.writeFileSync(`./__mockdata/ripeResponses/${endpoint}.json`, JSON.stringify(result.data, null, 2), 'utf8');
        console.log(`Processed: ${endpoint}`);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }
}

/**
 * Compares two objects with deep-diff and returns an array of additions/removals of properties between the two objects.
 * @param obj1 The new object to compare.
 * @param obj2 The reference object to compare.
 */
export function compareObjects(obj1: object, obj2: object) {
  const result = deepDiff.diff(obj1, obj2) || [];
  return result.filter(diff => diff.kind === 'D' || diff.kind === 'N');
}
