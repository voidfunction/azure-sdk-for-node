// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3177.azuredatalakestore.net:443')
  .post('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?sources=adlssdkfolder01%2Femptyfile.txt%2Cadlssdkfolder01%2Fcontentfile.txt&op=CONCAT&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'a578a63a-2f8b-4eef-982b-3bb241e500c5',
  'set-cookie': [ 'UserPrincipalSession=5ce87448-b5ed-4723-976c-32e8487aca45; path=/; secure; HttpOnly' ],
  'server-perf': '[a578a63a2f8b4eef982b3bb241e500c5][ AuthTime::1767.23632808323::PostAuthTime::32124.1821399641 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:241 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsMultiModifyStream :: 00:00:763 ms]%0a[CONCAT :: 00:01:011 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:38 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3177.azuredatalakestore.net:443')
  .post('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?sources=adlssdkfolder01%2Femptyfile.txt%2Cadlssdkfolder01%2Fcontentfile.txt&op=CONCAT&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'a578a63a-2f8b-4eef-982b-3bb241e500c5',
  'set-cookie': [ 'UserPrincipalSession=5ce87448-b5ed-4723-976c-32e8487aca45; path=/; secure; HttpOnly' ],
  'server-perf': '[a578a63a2f8b4eef982b3bb241e500c5][ AuthTime::1767.23632808323::PostAuthTime::32124.1821399641 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:241 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsMultiModifyStream :: 00:00:763 ms]%0a[CONCAT :: 00:01:011 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:38 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1457390499113,\"modificationTime\":1457390499190,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ea8ada25-4ba0-4d5e-8086-562a039c3db9',
  'server-perf': '[ea8ada254ba04d5e8086562a039c3db9][ AuthTime::756.165011629031::PostAuthTime::178.348874349155 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:040 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:040 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:40 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3177.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlssdkfolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1457390499113,\"modificationTime\":1457390499190,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ea8ada25-4ba0-4d5e-8086-562a039c3db9',
  'server-perf': '[ea8ada254ba04d5e8086562a039c3db9][ AuthTime::756.165011629031::PostAuthTime::178.348874349155 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:040 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:040 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 07 Mar 2016 22:41:40 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; }]];