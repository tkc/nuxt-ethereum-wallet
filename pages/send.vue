<template>
  <div class="container-fluid">
    <form>
      <div class="form-group">
        <label>CoinBase</label>
        <input type="text" class="form-control" placeholder="CoinBase" v-model="CoinBase" disabled>
      </div>
      <div class="form-group">
        <label>Balance</label>
        <input type="text" class="form-control" placeholder="Balance" v-model="Balance" disabled>
      </div>
      <div class="form-group">
        <label>SendValue</label>
        <input type="text" class="form-control" placeholder="Balance" v-model="SendValue">
      </div>
      <div class="form-group">
        <label>To</label>
        <select v-model="To" class="form-control">
          <option :key="account" v-for="account in Accounts">{{account}}</option>
        </select>
      </div>
      <p> estimateGas : {{EstimateGas}}</p>
      <button type="button" class="btn btn-primary" @click="send">Send</button>
      <p v-if="TransactionHash"><span>TransactionHash</span><br/>{{TransactionHash}}</p>
    </form>
  </div>
</template>

<script>

  import web3 from '../helper/web3';

  export default {
    data() {
      return {
        CoinBase:"",
        Balance: 0,
        SendValue:1,
        TransactionHash:"",
        Accounts: [],
        To: "",
        EstimateGas:0,
      }
    },
    watch:{
      SendValue(){
        this.estimateGas();
      },
      To(){
        this.estimateGas();
      }
    },
    methods: {
      estimateGas(){
        web3.eth.estimateGas(
            {from: this.CoinBase,
              to: this.To,
              value: this.SendValue,
            }).then(val=>this.EstimateGas=val)
      },
      send(){
        web3.eth.sendTransaction({
          from: this.CoinBase,
          to: this.To,
          value: this.SendValue
        }, (error, txHash) => {
          console.log("Transaction Hash:", txHash, error);
          this.TransactionHash = txHash;
          if(!error) {
            web3.eth.getBalance(this.CoinBase).then(val=>this.Balance=val);
          } else {
            alert("Ether Transfer Failed");
          }
        });
      }
    },
    beforeMount(){
      web3.eth.getCoinbase().then(val=>{
        this.CoinBase = val;
        web3.eth.getBalance(val).then(val=>this.Balance=val);
      });
      web3.eth.getAccounts().then(val=>this.Accounts=val);
    },
  }
</script>