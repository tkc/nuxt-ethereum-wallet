geth --networkid "10"  \
     --nodiscover  \
     --datadir `pwd`   \
     --rpc   \
     --rpcaddr "localhost"   \
     --rpcport "8545"   \
     --rpccorsdomain "*"  \
     --rpcapi "eth,net,web3,personal,accounts" \
     console 2>> `pwd`/geth_err.log
