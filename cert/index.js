import * as utils from '../utils';

export function getTCert(pubkey) {
  const dataToSrv = JSON.stringify({ jsonrpc: '2.0',
    namespace: 'global',
    method: 'cert_getTCert',
    params: [pubkey],
    id: 1 });
  return utils.postToNode({
    data: dataToSrv,
  });
}
export default { getTCert }