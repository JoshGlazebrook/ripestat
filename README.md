# ripestat  [![Build Status](https://travis-ci.org/JoshGlazebrook/ripestat.svg?branch=master)](https://travis-ci.org/JoshGlazebrook/ripestat)
A fully featured RIPEStat Data API Client for JavaScript (node.js and browser).

## Highlights
- Built in TypeScript (definitions for everything!)
- Documentation for every api method (as of July 2017)
- Documentation for *almost* every api response property
- All RIPEStat API endpoints are covered
- All methods return promises (await/async ready)
- Live API Tests (with mock data for comparison)

## Notes
- Tested with node.js (v6+)
- Tested with webpack v2

## Installing

```javascript
yarn add ripestat
```
```javascript
npm install ripestat --save
```

## Usage

```javascript
// TypeScript/ES6
import { RIPEClient, RipeClientOptions } from 'ripeclient';

// Older JavaScript
var RIPEClient = require('ripestat').RIPEClient;


const client = new RIPEClient();

// All client methods return a promise.
client.asOverview({
  resource: 'AS3333'
})
.then(result => {
  console.log(result.data);

  /**
  {
    "resource": "3333",
    "holder": "RIPE-NCC-AS Reseaux IP Europeens Network Coordination Centre (RIPE NCC), NL",
    "query_starttime": "2017-07-23T00:00:00",
    "announced": true,
    "query_endtime": "2017-07-23T00:00:00",
    "type": "as",
    "block": {
      "resource": "3209-3353",
      "name": "IANA 16-bit Autonomous System (AS) Numbers Registry",
      "desc": "Assigned by RIPE NCC"
    }
}
  **/
});
```

## Usage (await/async)

```javascript
async function getOverview() {
  // All client methods return a promise.
  const result = await client.asOverview({
    resource: 'AS3333'
  });

  console.log(result.data);

  /**
  {
    "resource": "3333",
    "holder": "RIPE-NCC-AS Reseaux IP Europeens Network Coordination Centre (RIPE NCC), NL",
    "query_starttime": "2017-07-23T00:00:00",
    "announced": true,
    "query_endtime": "2017-07-23T00:00:00",
    "type": "as",
    "block": {
      "resource": "3209-3353",
      "name": "IANA 16-bit Autonomous System (AS) Numbers Registry",
      "desc": "Assigned by RIPE NCC"
    }
  }
  **/
}
```
## RIPEClient Options
```javascript
/**
 * Options for creating a RIPEClient.
 */
interface RIPEClientOptions {
  /**
   * If provided, this agent will be used when making https requests.
   */
  agent?: https.Agent;

  /**
   * The length of time (in milliseconds) to wait for a response.
   */
  timeout?: number;

  /**
   * The sourceapp string to pass to all API calls (RIPE Stat asks you to include this if you use more than 1000 queries per day).
   * This is passed in the sourceapp query parameter.
   */
  sourceapp?: string;
}
```

**Example:**
```javascript
const client = new RIPEClient({
  timeout: 60000,
  sourceapp: 'my app'
});
```

## API Documenation

For details on every API endpoint available please reference [https://stat.ripe.net/docs/data_api](https://stat.ripe.net/docs/data_api)


## Globally Available Option Params
- meta - See: [https://stat.ripe.net/docs/data_api#MetaRequest](https://stat.ripe.net/docs/data_api#MetaRequest)

## Bug Reporting
Please feel free to open any issues if you find any problems with the Client or even the documentation.

## Tests
Tests for this module are currently a work in progress. Mock data vs. live data diff comparison is as-is, but will be improved in the future.

## License

This work is licensed under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).