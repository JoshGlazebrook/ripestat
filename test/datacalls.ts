import { RIPEClient } from '../src';
import 'mocha';
import { assert } from 'chai';
import * as deepDiff from 'deep-diff';
import { compareObjects } from './util';

const client = new RIPEClient();
const requestOptions = require('./__mockdata/requestOptions');

/**
 * These tests grab live data from the RIPE Stat API and compares the results to data in __mockdata.
 *
 * If any properties in a response differe from the properties in the mockdata, the test will fail.
 *
 * Note: These do NOT compare values, ONLY property names.
 */
describe('Live API Data Tests', () => {
  describe('abuseContactFinder', () => {
    const mockData = require('./__mockdata/ripeResponses/abuseContactFinder.json');

    it('live data should match mock data object properties', () => {
      return client.abuseContactFinder(requestOptions.abuseContactFinder).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);

        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('addressSpaceHierarchy', () => {
    const mockData = require('./__mockdata/ripeResponses/addressSpaceHierarchy.json');

    it('live data should match mock data object properties', () => {
      return client.addressSpaceHierarchy(requestOptions.addressSpaceHierarchy).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('addressSpaceUsage', () => {
    const mockData = require('./__mockdata/ripeResponses/addressSpaceUsage.json');

    it('live data should match mock data object properties', () => {
      return client.addressSpaceUsage(requestOptions.addressSpaceUsage).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('allocationHistory', () => {
    const mockData = require('./__mockdata/ripeResponses/allocationHistory.json');

    it('live data should match mock data object properties', () => {
      return client.allocationHistory(requestOptions.allocationHistory).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('announcedPrefixes', () => {
    const mockData = require('./__mockdata/ripeResponses/announcedPrefixes.json');

    it('live data should match mock data object properties', () => {
      return client.announcedPrefixes(requestOptions.announcedPrefixes).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('asOverview', () => {
    const mockData = require('./__mockdata/ripeResponses/asOverview.json');

    it('live data should match mock data object properties', () => {
      return client.asOverview(requestOptions.asOverview).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('asPathLength', () => {
    const mockData = require('./__mockdata/ripeResponses/asPathLength.json');

    it('live data should match mock data object properties', () => {
      return client.asPathLength(requestOptions.asPathLength).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('asRoutingConsistency', () => {
    const mockData = require('./__mockdata/ripeResponses/asRoutingConsistency.json');

    it('live data should match mock data object properties', () => {
      return client.asRoutingConsistency(requestOptions.asRoutingConsistency).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('asnNeighbors', () => {
    const mockData = require('./__mockdata/ripeResponses/asnNeighbors.json');

    it('live data should match mock data object properties', () => {
      return client.asnNeighbors(requestOptions.asnNeighbors).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('asnNeighborsHistory', () => {
    const mockData = require('./__mockdata/ripeResponses/asnNeighborsHistory.json');

    it('live data should match mock data object properties', () => {
      return client.asnNeighborsHistory(requestOptions.asnNeighborsHistory).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('atlasProbeDeployment', () => {
    const mockData = require('./__mockdata/ripeResponses/atlasProbeDeployment.json');

    it('live data should match mock data object properties', () => {
      return client.atlasProbeDeployment(requestOptions.atlasProbeDeployment).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('atlasProbes', () => {
    const mockData = require('./__mockdata/ripeResponses/atlasProbes.json');

    it('live data should match mock data object properties', () => {
      return client.atlasProbes(requestOptions.atlasProbes).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('atlasTargets', () => {
    const mockData = require('./__mockdata/ripeResponses/atlasTargets.json');

    it('live data should match mock data object properties', () => {
      return client.atlasTargets(requestOptions.atlasTargets).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('bgPlay', () => {
    const mockData = require('./__mockdata/ripeResponses/bgPlay.json');

    it('live data should match mock data object properties', () => {
      return client.bgPlay(requestOptions.bgPlay).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        console.log(comparisonResult);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('bgpState', () => {
    const mockData = require('./__mockdata/ripeResponses/bgpState.json');

    it('live data should match mock data object properties', () => {
      return client.bgpState(requestOptions.bgpState).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('bgpUpdates', () => {
    const mockData = require('./__mockdata/ripeResponses/bgpUpdates.json');

    it('live data should match mock data object properties', () => {
      return client.bgpUpdates(requestOptions.bgpUpdates).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('bgpUpdateActivity', () => {
    const mockData = require('./__mockdata/ripeResponses/bgpUpdateActivity.json');

    it('live data should match mock data object properties', () => {
      return client.bgpUpdateActivity(requestOptions.bgpUpdateActivity).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('blacklist', () => {
    const mockData = require('./__mockdata/ripeResponses/blacklist.json');

    it('live data should match mock data object properties', () => {
      return client.blacklist(requestOptions.blacklist).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('countryASNS', () => {
    const mockData = require('./__mockdata/ripeResponses/countryASNS.json');

    it('live data should match mock data object properties', () => {
      return client.countryASNS(requestOptions.countryASNS).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('countryResourceStats', () => {
    const mockData = require('./__mockdata/ripeResponses/countryResourceStats.json');

    it('live data should match mock data object properties', () => {
      return client.countryResourceStats(requestOptions.countryResourceStats).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('countryResourceList', () => {
    const mockData = require('./__mockdata/ripeResponses/countryResourceList.json');

    it('live data should match mock data object properties', () => {
      return client.countryResourceList(requestOptions.countryResourceList).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('dnsChain', () => {
    const mockData = require('./__mockdata/ripeResponses/dnsChain.json');

    it('live data should match mock data object properties', () => {
      return client.dnsChain(requestOptions.dnsChain).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('exampleResources', () => {
    const mockData = require('./__mockdata/ripeResponses/exampleResources.json');

    it('live data should match mock data object properties', () => {
      return client.exampleResources().then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('geolocation', () => {
    const mockData = require('./__mockdata/ripeResponses/geolocation.json');

    it('live data should match mock data object properties', () => {
      return client.geolocation(requestOptions.geolocation).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('gelocationHistory', () => {
    const mockData = require('./__mockdata/ripeResponses/gelocationHistory.json');

    it('live data should match mock data object properties', () => {
      return client.gelocationHistory(requestOptions.gelocationHistory).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('ianaRegistryInfo', () => {
    const mockData = require('./__mockdata/ripeResponses/ianaRegistryInfo.json');

    it('live data should match mock data object properties', () => {
      return client.ianaRegistryInfo(requestOptions.ianaRegistryInfo).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('lookingGlass', () => {
    const mockData = require('./__mockdata/ripeResponses/lookingGlass.json');

    it('live data should match mock data object properties', () => {
      return client.lookingGlass(requestOptions.lookingGlass).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('mLabActivityCount', () => {
    const mockData = require('./__mockdata/ripeResponses/mLabActivityCount.json');

    it('live data should match mock data object properties', () => {
      return client.mLabActivityCount(requestOptions.mLabActivityCount).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('mLabBandwidth', () => {
    const mockData = require('./__mockdata/ripeResponses/mLabBandwidth.json');

    it('live data should match mock data object properties', () => {
      return client.mLabBandwidth(requestOptions.mLabBandwidth).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('mLabClients', () => {
    const mockData = require('./__mockdata/ripeResponses/mLabClients.json');

    it('live data should match mock data object properties', () => {
      return client.mLabClients(requestOptions.mLabClients).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('networkInfo', () => {
    const mockData = require('./__mockdata/ripeResponses/networkInfo.json');

    it('live data should match mock data object properties', () => {
      return client.networkInfo(requestOptions.networkInfo).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('prefixCount', () => {
    const mockData = require('./__mockdata/ripeResponses/prefixCount.json');

    it('live data should match mock data object properties', () => {
      return client.prefixCount(requestOptions.prefixCount).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('prefixOverview', () => {
    const mockData = require('./__mockdata/ripeResponses/prefixOverview.json');

    it('live data should match mock data object properties', () => {
      return client.prefixOverview(requestOptions.prefixOverview).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('prefixRoutingConsistency', () => {
    const mockData = require('./__mockdata/ripeResponses/prefixRoutingConsistency.json');

    it('live data should match mock data object properties', () => {
      return client.prefixRoutingConsistency(requestOptions.prefixRoutingConsistency).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('prefixSizeDistribution', () => {
    const mockData = require('./__mockdata/ripeResponses/prefixSizeDistribution.json');

    it('live data should match mock data object properties', () => {
      return client.prefixSizeDistribution(requestOptions.prefixSizeDistribution).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('registryBrowser', () => {
    const mockData = require('./__mockdata/ripeResponses/registryBrowser.json');

    it('live data should match mock data object properties', () => {
      return client.registryBrowser(requestOptions.registryBrowser).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('rir', () => {
    const mockData = require('./__mockdata/ripeResponses/rir.json');

    it('live data should match mock data object properties', () => {
      return client.rir(requestOptions.rir).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('rirPrefixSizeDistribution', () => {
    const mockData = require('./__mockdata/ripeResponses/rirPrefixSizeDistribution.json');

    it('live data should match mock data object properties', () => {
      return client.rirPrefixSizeDistribution(requestOptions.rirPrefixSizeDistribution).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('risASNS', () => {
    const mockData = require('./__mockdata/ripeResponses/risASNS.json');

    it('live data should match mock data object properties', () => {
      return client.risASNS(requestOptions.risASNS).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('risFirstLastSeen', () => {
    const mockData = require('./__mockdata/ripeResponses/risFirstLastSeen.json');

    it('live data should match mock data object properties', () => {
      return client.risFirstLastSeen(requestOptions.risFirstLastSeen).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('risPrefixes', () => {
    const mockData = require('./__mockdata/ripeResponses/risPrefixes.json');

    it('live data should match mock data object properties', () => {
      return client.risPrefixes(requestOptions.risPrefixes).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('risPeerings', () => {
    const mockData = require('./__mockdata/ripeResponses/risPeerings.json');

    it('live data should match mock data object properties', () => {
      return client.risPeerings(requestOptions.risPeerings).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('risPeerCount', () => {
    const mockData = require('./__mockdata/ripeResponses/risPeerCount.json');

    it('live data should match mock data object properties', () => {
      return client.risPeerCount(requestOptions.risPeerCount).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('relatedPrefixes', () => {
    const mockData = require('./__mockdata/ripeResponses/relatedPrefixes.json');

    it('live data should match mock data object properties', () => {
      return client.relatedPrefixes(requestOptions.relatedPrefixes).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('reverseDNS', () => {
    const mockData = require('./__mockdata/ripeResponses/reverseDNS.json');

    it('live data should match mock data object properties', () => {
      return client.reverseDNS(requestOptions.reverseDNS).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('reverseDNSIP', () => {
    const mockData = require('./__mockdata/ripeResponses/reverseDNSIP.json');

    it('live data should match mock data object properties', () => {
      return client.reverseDNSIP(requestOptions.reverseDNSIP).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('reverseDNSConsistency', () => {
    const mockData = require('./__mockdata/ripeResponses/reverseDNSConsistency.json');

    it('live data should match mock data object properties', () => {
      return client.reverseDNSConsistency(requestOptions.reverseDNSConsistency).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('routingHistory', () => {
    const mockData = require('./__mockdata/ripeResponses/routingHistory.json');

    it('live data should match mock data object properties', () => {
      return client.routingHistory(requestOptions.routingHistory).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('routingStatus', () => {
    const mockData = require('./__mockdata/ripeResponses/routingStatus.json');

    it('live data should match mock data object properties', () => {
      return client.routingStatus(requestOptions.routingStatus).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('searchComplete', () => {
    const mockData = require('./__mockdata/ripeResponses/searchComplete.json');

    it('live data should match mock data object properties', () => {
      return client.searchComplete(requestOptions.searchComplete).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);

        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('speedCheckerBandwidthMeasurements', () => {
    const mockData = require('./__mockdata/ripeResponses/speedCheckerBandwidthMeasurements.json');

    it('live data should match mock data object properties', () => {
      return client.speedCheckerBandwidthMeasurements(requestOptions.speedCheckerBandwidthMeasurements).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('visibility', () => {
    const mockData = require('./__mockdata/ripeResponses/visibility.json');

    it('live data should match mock data object properties', () => {
      return client.visibility(requestOptions.visibility).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('whatsMyIp', () => {
    const mockData = require('./__mockdata/ripeResponses/whatsMyIp.json');

    it('live data should match mock data object properties', () => {
      return client.whatsMyIp().then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('whois', () => {
    const mockData = require('./__mockdata/ripeResponses/whois.json');

    it('live data should match mock data object properties', () => {
      return client.whois(requestOptions.whois).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });

  describe('whoisObjectLastUpdated', () => {
    const mockData = require('./__mockdata/ripeResponses/whoisObjectLastUpdated.json');

    it('live data should match mock data object properties', () => {
      return client.whoisObjectLastUpdated(requestOptions.whoisObjectLastUpdated).then(result => {
        const comparisonResult = compareObjects(result.data, mockData);
        assert(comparisonResult.length === 0, `Mock/Live Data Differs: ${comparisonResult}`);
      });
    });
  });
});
