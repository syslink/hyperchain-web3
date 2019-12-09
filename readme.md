安装及引用：

```
npm i hyperchain-web3 -S

import * as hyperchain from 'hyperchain-web3'; 
```

根据rpc功能划分了不同的域：
- hyperchain.block.*
- hyperchain.cert.*
- hyperchain.contract.*
- hyperchain.node.*
- hyperchain.subscribe.*
- hyperchain.transaction.*
- hyperchain.utils.*：包含交易签名功能

> rpc文档：https://github.com/hyperchain/hyperchain/blob/master/docs/zh_CN/JSON-RPC_manual.rst