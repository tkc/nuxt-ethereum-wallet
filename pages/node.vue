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
        <td>Host</td>
        <td>{{Host}}</td>
      </tr>
      <tr>
        <td>HashRate</td>
        <td>{{HashRate}}</td>
      </tr>
      <tr>
        <td>IsMining</td>
        <td>{{IsMining}}</td>
      </tr>
      <tr>
        <td>PeerCount</td>
        <td>{{PeerCount}}</td>
      </tr>
      <tr>
        <td>GasPrice</td>
        <td>{{GasPrice}}</td>
      </tr>
      <tr>
        <td>BlockNumber</td>
        <td>{{BlockNumber}}</td>
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
        Host: "",
        HashRate: "",
        IsMining: false,
        PeerCount:0,
        GasPrice:0,
        BlockNumber:0,
      }
    },
    beforeMount(){
      this.Host = web3.currentProvider.host;
      web3.eth.isMining().then(val=>this.IsMining=val);
      web3.eth.getHashrate().then(val=>this.HashRate=val);
      web3.eth.getGasPrice().then(val=>this.GasPrice=val);
      web3.eth.getBlockNumber().then(val=>this.BlockNumber=val);
      web3.eth.getBlockNumber().then(val=>this.BlockNumber=val);
      web3.eth.net.getPeerCount().then(val=>this.PeerCount=val);
    },
  }
</script>
