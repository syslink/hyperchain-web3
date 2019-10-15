export function getNodes() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'node_getNodes',
    params: [],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getNodeHash() {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'node_getNodeHash',
    params: [],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function deleteVP(nodehash) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'node_deleteVP',
    params: [{nodehash}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function deleteNVP(nodehash) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'node_deleteNVP',
    params: [{nodehash}],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}
export default { getNodes, getNodeHash, deleteVP, deleteNVP }