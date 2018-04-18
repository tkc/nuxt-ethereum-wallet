# ethereum-wallet

> ethereum-wallet

<img width="1278" alt="screen shot 2018-04-19 at 2 33 47" src="https://user-images.githubusercontent.com/181991/38948316-31354494-437a-11e8-93bd-f609902c6a85.png">


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
