<template>
    <tr>
        <td><button type="button" class="btn btn-outline-primary" @click="select">Select</button></td>
        <td><p v-text="address"/></td>
        <td><p v-text="Balance"/></td>
    </tr>
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
    methods: {
      select(){
        web3.eth.personal.newAccount(this.Password).then(()=>{
          this.Password = "";
          web3.eth.getAccounts().then(val=>this.Accounts=val);
        });
      },
    },
    beforeMount(){
      web3.eth.getBalance(this.address).then(val=>this.Balance=val);
    },
  }
</script>
