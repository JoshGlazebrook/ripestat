export * from './client/RIPEClient';
import { RIPEClient, RIPEClientOptions } from './client/RIPEClient';

const client = new RIPEClient({
  jsonp: true
});

client.asOverview({
  resource: 'AS3333',
  meta: 'hello'
});
