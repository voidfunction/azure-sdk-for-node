// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobs\",\"value\":[\r\n    {\r\n      \"id\":\"HelloWorldJobNodeSDKTest\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest\",\"eTag\":\"0x8D3510B3ACC7871\",\"lastModified\":\"2016-03-20T22:01:46.2340721Z\",\"creationTime\":\"2016-03-20T22:01:44.7922978Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T22:01:44.8105538Z\",\"priority\":500,\"usesTaskDependencies\":false,\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"poolInfo\":{\r\n        \"poolId\":\"nodesdktestpool1\"\r\n      },\"executionInfo\":{\r\n        \"startTime\":\"2016-03-20T22:01:44.8105538Z\",\"poolId\":\"nodesdktestpool1\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '50306648-5eb4-41ce-9ecb-4a531bede0b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:05:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/jobs?api-version=2015-12-01.2.2')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobs\",\"value\":[\r\n    {\r\n      \"id\":\"HelloWorldJobNodeSDKTest\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/jobs/HelloWorldJobNodeSDKTest\",\"eTag\":\"0x8D3510B3ACC7871\",\"lastModified\":\"2016-03-20T22:01:46.2340721Z\",\"creationTime\":\"2016-03-20T22:01:44.7922978Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-03-20T22:01:44.8105538Z\",\"priority\":500,\"usesTaskDependencies\":false,\"constraints\":{\r\n        \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":3\r\n      },\"poolInfo\":{\r\n        \"poolId\":\"nodesdktestpool1\"\r\n      },\"executionInfo\":{\r\n        \"startTime\":\"2016-03-20T22:01:44.8105538Z\",\"poolId\":\"nodesdktestpool1\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '50306648-5eb4-41ce-9ecb-4a531bede0b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Sun, 20 Mar 2016 22:05:22 GMT',
  connection: 'close' });
 return result; }]];