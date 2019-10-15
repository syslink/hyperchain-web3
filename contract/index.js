import utils from '../utils';

export function compileContract(contractCode) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_compileContract',
    params: [contractCode],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function deployContract(txInfo, privateKey) {
  txInfo.nonce = utils.getNonce().toNumber();
  txInfo.timestamp = utils.getTimestamp().toNumber();
  const signature = utils.signTx(txInfo, privateKey);
  txInfo.signature = signature;
  
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_deployContract',
    params: [txInfo],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function invokeContract(txInfo, privateKey) {
  txInfo.nonce = utils.getNonce().toNumber();
  txInfo.timestamp = utils.getTimestamp().toNumber();
  const signature = utils.signTx(txInfo, privateKey);
  txInfo.signature = signature;

  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_invokeContract',
    params: [txInfo],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function maintainContract(txInfo, privateKey) {
  txInfo.nonce = utils.getNonce().toNumber();
  txInfo.timestamp = utils.getTimestamp().toNumber();
  const signature = utils.signTx(txInfo, privateKey);
  txInfo.signature = signature;

  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_maintainContract',
    params: [txInfo],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getCode(contractAddr) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_getCode',
    params: [contractAddr],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getContractCountByAddr(contractAddr) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_getContractCountByAddr',
    params: [contractAddr],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getStatus(contractAddr) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_getStatus',
    params: [contractAddr],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getCreator(contractAddr) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_getCreator',
    params: [contractAddr],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getCreateTime(contractAddr) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_getCreateTime',
    params: [contractAddr],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}

export function getDeployedList(accountAddr) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'contract_getDeployedList',
    params: [accountAddr],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}
export default { compileContract, deployContract, invokeContract, maintainContract, 
                 getCode, getContractCountByAddr, getStatus, getCreator, getCreateTime, getDeployedList }