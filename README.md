# ethereum-wallet

> ethereum-wallet

## Run Provate ethereum

```
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
