# ripestat  [![Build Status](https://travis-ci.org/JoshGlazebrook/smart-buffer.svg?branch=master)](https://travis-ci.org/JoshGlazebrook/smart-buffer)
A fully featured RIPEStat Data API Client for JavaScript (node.js and browsers).

## Highlights
- Built in TypeScript (definitions for everything!)
- Documentation for every api method
- Documentation for *almost* every api response property
- All RIPEStat API endpoints are covered
- All methods returns promises (await/async ready)
- Live API Tests (with mock data for comparison)


## Installing

```javascript
yarn add ripestat -S
```
```javascript
npm install ripestat --save
```

## Usage

```typescript
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

```typescript
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

## API Documenation

For details on every API endpoint available please reference [https://stat.ripe.net/docs/data_api](https://stat.ripe.net/docs/data_api)

## License

This work is licensed under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).