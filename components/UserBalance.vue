<template>
    <div>
        <label>Address</label>
        <p v-text="address"/>
        <label>Balance</label>
        <p v-text="Balance"/>
    </div>
</template>

<script>
  import web3 from '../helper/web3';
  export default {
    props: ['address'],
    data() {
      return {
        Balance: 0,
      }
    },
    beforeMount(){
      web3.eth.getBalance(this.address).then(val=>this.Balance=val);
    },
  }
</script>
