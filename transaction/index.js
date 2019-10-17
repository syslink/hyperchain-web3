
export function getTransactions(fromBlock, toBlock) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getTransactions',
    params: [{fromBlock, toBlock}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getDiscardTransactions() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getDiscardTransactions',
    params: [],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getTransactionByHash(txHash) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'block_getBlockByHash',
    params: [txHash],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getTransactionByBlockHashAndIndex(blockHash, index) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getTransactionByBlockHashAndIndex',
    params: [blockHash, index],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getTransactionByBlockNumberAndIndex(blockNumber, index) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getTransactionByBlockNumberAndIndex',
    params: [{blockNumber, index}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getTransactionsCount() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getTransactionsCount',
    params: [],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getTxAvgTimeByBlockNumber(fromBlock, toBlock) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getTxAvgTimeByBlockNumber',
    params: [{fromBlock, toBlock}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}
export function getTransactionReceipt(txHash) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getTransactionReceipt',
    params: [txHash],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getBlockTransactionCountByHash(blockHash) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getBlockTransactionCountByHash',
    params: [blockHash],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getSignHash(from, to, nonce, extra, value, payload, timestamp) {
  let signInfo = {from, to, nonce, extra, value, timestamp};
  if (value == null) {
    signInfo = {from, to, nonce, extra, payload, timestamp};
  }
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getSignHash',
    params: [signInfo],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getTransactionsByTime(startTime, endTime) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getTransactionsByTime',
    params: [{startTime, endTime}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getDiscardTransactionsByTime(startTime, endTime) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getDiscardTransactionsByTime',
    params: [{startTime, endTime}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getBatchTransactions(hashes) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getBatchTransactions',
    params: [{hashes}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getBatchReceipt(hashes) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'tx_getBatchReceipt',
    params: [{hashes}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export default { getTransactions, getDiscardTransactions, getTransactionByHash, getTransactionByBlockHashAndIndex, 
  getTransactionByBlockNumberAndIndex, getTransactionsCount, getTxAvgTimeByBlockNumber, getTransactionReceipt, getBlockTransactionCountByHash, 
  getSignHash, getTransactionsByTime, getDiscardTransactionsByTime, getBatchTransactions, getBatchReceipt }