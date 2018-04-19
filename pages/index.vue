<template>
  <div>
    <h1>Node</h1>
    <div class="row">
      <div class="col-12">

        <div v-if="!NetId" class="alert alert-danger fade show" role="alert">
          <p><span>can't connect ...</span></p>
        </div>

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
            <td><p class="badge" :class="[IsMining ? 'badge-success' : 'badge-danger']">{{IsMining}}</p></td>
          </tr>
          <tr>
            <td>GasPrice</td>
            <td>{{GasPrice}}</td>
          </tr>
          <tr>
            <td>BlockNumber</td>
            <td>{{BlockNumber}}</td>
          </tr>
          <tr>
            <td>NetId</td>
            <td>{{NetId}}</td>
          </tr>
          <tr>
            <td>PeerCount</td>
            <td>{{PeerCount}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

  import web3 from '../helper/web3';

  export default {
    data() {
      return {
        Host: "",
        IsMining: false,
        HashRate: 0,
        BlockNumber:0,
        GasPrice:0,
        NetId:0,
        PeerCount:0,
      }
    },
    beforeMount(){
      this.Host = web3.currentProvider.host;
      web3.eth.isMining().then(val=>this.IsMining=val);
      web3.eth.getHashrate().then(val=>this.HashRate=val);
      web3.eth.getGasPrice().then(val=>this.GasPrice=val);
      web3.eth.getBlockNumber().then(val=>this.BlockNumber=val);
      web3.eth.net.getId().then(val=>this.NetId=val);
      web3.eth.net.getPeerCount().then(val=>this.PeerCount=val);
    },
  }
</script>

<style scoped>
  .row{
    margin: 20px 0px;
  }
  .badge{
    font-size: 15px;
    padding: 5px 25px;
    margin: 0px;
  }
</style>