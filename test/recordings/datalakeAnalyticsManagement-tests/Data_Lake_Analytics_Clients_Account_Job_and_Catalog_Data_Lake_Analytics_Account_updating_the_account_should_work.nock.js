// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1139?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls9074\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls9074\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1139.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-07T22:28:11.5890319Z\",\"lastModifiedTime\":\"2016-03-07T22:31:29.1809196Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1139\",\"name\":\"xplattestadla1139\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '770',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3752ba45-f1f8-40ee-b510-b715532898b8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f97c08a8-b1c6-4431-94ec-0d3b052a5aa1',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160307T223130Z:f97c08a8-b1c6-4431-94ec-0d3b052a5aa1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:31:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1139?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls9074\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls9074\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla1139.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-07T22:28:11.5890319Z\",\"lastModifiedTime\":\"2016-03-07T22:31:29.1809196Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla1139\",\"name\":\"xplattestadla1139\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '770',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3752ba45-f1f8-40ee-b510-b715532898b8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f97c08a8-b1c6-4431-94ec-0d3b052a5aa1',
  'x-ms-routing-request-id': 'SOUTHCENTRALUS:20160307T223130Z:f97c08a8-b1c6-4431-94ec-0d3b052a5aa1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:31:29 GMT',
  connection: 'close' });
 return result; }]];