import * as utils from '../utils';
export function latestBlock() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_latestBlock',
    params: [],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getBlocks(from, to, isPlain) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getBlocks',
    params: [{from, to, isPlain}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getBlockByHash(blockHash, isPlain) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getBlockByHash',
    params: [blockHash, isPlain],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getBlockByNumber(blockNum, isPlain) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getBlockByNumber',
    params: [blockNum, isPlain],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getAvgGenerateTimeByBlockNumber(from, to) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getAvgGenerateTimeByBlockNumber',
    params: [{from, to}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getBlocksByTime(startTime, endTime) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getBlocksByTime',
    params: [{startTime, endTime}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getGenesisBlock() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getGenesisBlock',
    params: [],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}
export function getChainHeight() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getChainHeight',
    params: [],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getBatchBlocksByHash(hashes, isPlain) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getBatchBlocksByHash',
    params: [{hashes, isPlain}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}
export function getBatchBlocksByNumber(numbers, isPlain) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getBatchBlocksByNumber',
    params: [{numbers, isPlain}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}
export default { latestBlock, getBlocks, getBlockByHash, getBlockByNumber, getAvgGenerateTimeByBlockNumber,
  getBlocksByTime, getGenesisBlock, getChainHeight, getBatchBlocksByHash, getBatchBlocksByNumber }