<template>
  <div class="container-fluid">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Value</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>CoinBase</td>
        <td>{{CoinBase}}</td>
      </tr>
      <tr>
        <td>Balance</td>
        <td>{{Balance}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import web3 from '../helper/web3';

  export default {
    data() {
      return {
        CoinBase:"",
        Balance: 0,
      }
    },
    beforeMount(){

//      web3.eth.getBalance().then(val=>{
//        console.log(val);
//        this.HashRate=val
//      });

      web3.eth.getCoinbase().then(val=>{
        this.CoinBase = val;
        web3.eth.getBalance(val).then(val=>this.Balance=val);
      });

//      web3.eth.getHashrate().then(val=>this.HashRate=val);
//      web3.eth.isMining().then(val=>this.IsMining=val);
//      web3.eth.net.getPeerCount().then(val=>this.PeerCount=val);
//      web3.eth.getGasPrice().then(val=>this.GasPrice=val);
//      web3.eth.getBlockNumber().then(val=>this.BlockNumber=val);

    },
  }
</script>