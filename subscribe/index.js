export function newBlockSubscription(isFull) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'sub_newBlockSubscription',
    params: [isFull],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function newEventSubscription(fromBlock, toBlock, addresses, topics) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'sub_newEventSubscription',
    params: [{fromBlock, toBlock, addresses, topics}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getLogs(fromBlock, toBlock, addresses, topics) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'sub_getLogs',
    params: [{fromBlock, toBlock, addresses, topics}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function newSystemStatusSubscription(modules, modules_exclude, subtypes, subtypes_exclude, error_codes, error_codes_exclude) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'sub_newSystemStatusSubscription',
    params: [{modules, modules_exclude, subtypes, subtypes_exclude, error_codes, error_codes_exclude}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getSubscriptionChanges(subId) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'sub_getSubscriptionChanges',
    params: [subId],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function unSubscription(subId) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'sub_unSubscription',
    params: [subId],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}
export default { newBlockSubscription, newEventSubscription, getLogs, newSystemStatusSubscription, getSubscriptionChanges, unSubscription }