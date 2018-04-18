<template>
    <div class="container-fluid">
        <form>
            <div class="form-group">
                <label>Password</label>
                <input type="text" class="form-control" placeholder="Password" v-model="Password">
            </div>
        </form>
        <button type="button" class="btn btn-primary" @click="createAccount">CreateNewAccount</button>
        <ul>
            <li :key="account" v-for="account in Accounts">
                <UserBalance :address="account"/>
            </li>
        </ul>
    </div>
</template>

<script>

  import web3 from '../helper/web3';
  import UserBalance from '../components/UserBalance.vue';

  export default {
    components: {
      UserBalance,
    },
    data() {
      return {
        Accounts:[],
        Password:"",
      }
    },
    methods: {
      createAccount(){
        web3.eth.personal.newAccount(this.Password).then(()=>{
          this.Password = "";
          web3.eth.getAccounts().then(val=>this.Accounts=val);
        });
      },
    },
    beforeMount(){
      web3.eth.getAccounts().then(val=>this.Accounts=val);
    },
  }
</script>