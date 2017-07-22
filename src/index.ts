import { RIPEClient } from './client/RIPEClient';

const client = new RIPEClient();

async function testClient() {
  /*const data = await client.RIRASNs({
        list_asns: true
    });*/

  try {
    const response = await client.announcedPrefixes({
      resource: 167
    });

    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

// o - 58751
// t - 9554
// - 59029

testClient();
