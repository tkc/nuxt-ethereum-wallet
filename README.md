# ethereum-wallet

> ethereum-wallet

<img width="1307" alt="screen shot 2018-04-19 at 2 36 00" src="https://user-images.githubusercontent.com/181991/38948402-76c7aaa6-437a-11e8-940f-96551d70bb51.png">


## Run Private Ethereum

```
$ cd eth_private
$ geth --networkid "10"  \
     --nodiscover  \
     --datadir `pwd`   \
     --rpc   \
     --rpcaddr "localhost"   \
     --rpcport "8545"   \
     --rpccorsdomain "*"  \
     --rpcapi "eth,net,web3,personal,accounts" \
     console 2>> `pwd`/geth_err.log
```

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
