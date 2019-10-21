import * as EthUtil from 'ethereumjs-util';
import * as EthCrypto from 'eth-crypto';
import BigNumber from 'bignumber.js';
let provider = 'http://127.0.0.1:8081';

export function getProvider() {
  return provider;
}

export function setProvider(providerInfo) {
  provider = providerInfo;
}

export async function postToNode(dataToNode) {
  const resp = await fetch(provider, {headers: { "Content-Type": "application/json" }, method: 'POST', body: dataToNode.data});
  if (resp == null) {
    throw 'RPC调用失败：' + dataToNode.data;
  }
  const response = await resp.json();
  if (response.code < 0) {
    throw response.message;
  }
  return response.result;
}

function bytes2Hex(array) {
  let hexStr = '0x';
  array.map((item) => {
    let hex = item.toString(16);
    if (hex.length === 1) {
      hex = '0' + hex;
    }
    hexStr += hex;
    return hex;
  });
  return hexStr;
}

export function hex2Bytes(str) {
  let pos = 0;
  let len = str.length;
  let hexA = new Uint8Array();

  if (len >= 2 && str[0] === '0' && (str[1] === 'x' || str[1] === 'X')) {
    pos = 2;
    len -= 2;
  }
  if (len === 0) {
    return hexA;
  }
  if (len % 2 !== 0) {
    if (pos === 0) {
      str = '0' + str;
    } else {
      str = str.substr(0, pos) + '0' + str.substr(pos);
      len += 1;
    }
  }

  len /= 2;
  hexA = new Uint8Array(len);
  for (let i = 0; i < len; i += 1) {
    const s = str.substr(pos, 2);
    const v = parseInt(s, 16);
    hexA[i] = v;
    pos += 2;
  }
  return hexA;
}
/* funcName: function name
* parameterTypes: all parameter types, eg:  ['uint32', 'bool']
* parameterValues: all parameter values, eg: [99, 1]
*  */
export function getContractPayload(funcName, parameterTypes, parameterValues) {
  return abiUtil.methodID(funcName, parameterTypes).toString('hex') + abiUtil.rawEncode(parameterTypes, parameterValues).toString('hex');
}

export function isValidABI(abiInfo) {
  try {
    if (!Array.isArray(abiInfo)) {
      return false;
    }
    for (const abi of abiInfo) {
      if (abi.type == null) {
        return false;
      }
    }
    return true;
  } catch (error) {
    return false;
  }
}

export function parseContractTxPayload(abiInfo, payload) {
  if (!isValidABI(abiInfo)) {
    return null;
  }
  const retInfo = {};
  let startIndex = 0;
  if (payload.indexOf('0x') == 0) {
    startIndex = 2;
  }
  const encodedFunc = payload.substr(startIndex, 8);
  for (const interfaceInfo of abiInfo) {
    if (interfaceInfo.type === 'function') {
      const funcName = interfaceInfo.name;
      const parameterTypes = [];
      for (const input of interfaceInfo.inputs) {
        parameterTypes.push(input.type);
      }
      const methodId = abiUtil.methodID(funcName, parameterTypes).toString('hex');
      if (methodId == encodedFunc) {
        retInfo.funcName = funcName;
        retInfo.parameterInfos = [];
        const decodedValues = abiUtil.rawDecode(parameterTypes, Buffer.from(payload.substr( 8 + startIndex), 'hex'));
        for (let i = 0; i < decodedValues.length; i++) {
          const parameterInfo = {};
          parameterInfo.name = interfaceInfo.inputs[i].name;
          parameterInfo.type = parameterTypes[i];
          parameterInfo.value = decodedValues[i];
          retInfo.parameterInfos.push(parameterInfo);
        }
        return retInfo;
      }
    }
  }
  return null;
}

export function isEmptyObj(obj) {
  return obj == null || obj == '';
}

function getRSV(signature) {
  const r = signature.slice(0, 66);
  const s = '0x' + signature.slice(66, 130);
  let v = '0x' + signature.slice(130, 132);
  if (chainId !== 0) {
    v = (v === '0x1c') ? 1 : 0;
    v += chainId * 2 + 35;
    v = '0x' + v.toString(16);
  }
  return { r, s, v };
}

export function checkPrefix(origin) {
  return origin.indexOf('0x') == 0 ? origin : '0x' + origin;
}

export function getTimestamp() {
  const timestamp = new Date().getTime();
  return new BigNumber(timestamp).shiftedBy(6).plus(new BigNumber(Math.floor(Math.random() * 1000000)));
}

export function getNonce() {
  let nonceStr = '1';
  for (let i = 0; i < 15; i++) {
    nonceStr += Math.floor(Math.random() * 100) % 9 + '';
  }
  return new BigNumber(nonceStr);
}

export function getTxString(txInfo) {
  let txStr = 'from=' + checkPrefix(txInfo.from.toLowerCase());
  txStr += '&to=' + (!isEmptyObj(txInfo.to) ? checkPrefix(txInfo.to.toLowerCase()) : '0x0');
  const value = isEmptyObj(txInfo.payload) ? txInfo.value : txInfo.payload;
  txStr += '&value=' + checkPrefix(value);
  txStr += '&timestamp=' + checkPrefix(isEmptyObj(txInfo.timestamp) ? getTimestamp().toString(16) : new BigNumber(txInfo.timestamp).toString(16));

  txStr += '&nonce=' + checkPrefix(isEmptyObj(txInfo.nonce) ? getNonce().toString(16) : new BigNumber(txInfo.nonce).toString(16));

  txStr += '&opcode=' + (isEmptyObj(txInfo.opCode) ? 0 : txInfo.opCode);
  txStr += '&extra=' + (isEmptyObj(txInfo.extra) ? '' : txInfo.extra);
  txStr += '&vmtype=' + (isEmptyObj(txInfo.vmType) ? 'EVM' : txInfo.vmType);

  return txStr;
}
/**
 txInfo = {from, to, value, payload, timestamp, nonce, opCode, extra, vmtype}
*/
export async function signTx(txInfo, privateKey) {
  const txStr = getTxString(txInfo);
  const txHashBuf = EthUtil.keccak256(txStr);
  const txHashHex = txHashBuf.toString('hex');

  let signature = EthCrypto.sign(privateKey, txHashHex);
  const sigLength = signature.length;
  const recoverStr = signature.substr(sigLength - 2);
  if (recoverStr == '1c') {
    signature = '00' + signature.substr(2, sigLength - 4) + '01';
  } else {
    signature = '00' + signature.substr(2, sigLength - 4) + '00';
  }
  return signature;
}

export async function recoverSignedTx(txInfo, signature) {
  const actionHashs = [];
  for (const action of txInfo.actions) {
    const { accountName, actionType, nonce, gasLimit, toAccountName, assetId, amount, remark } = action;
    let { payload } = action;
    payload = utils.hex2Bytes(payload);
    const actionHash = EthUtil.rlphash([accountName, actionType, nonce, toAccountName, gasLimit, amount, payload, assetId, remark, txInfo.chainId, 0, 0]);

    actionHashs.push(actionHash);
  }
  const merkleRoot = EthUtil.keccak(actionHashs[0]);

  const txHash = EthUtil.rlphash([merkleRoot, txInfo.gasAssetId, txInfo.gasPrice]).toString('hex');

  const address = EthCrypto.recover(signature, txHash);
  return address;
}

export default { isEmptyObj, hex2Bytes, postToNode, getProvider, setProvider, checkPrefix, getTimestamp, getNonce,
                 getContractPayload, isValidABI, parseContractTxPayload,
                 signTx, recoverSignedTx };