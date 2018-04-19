<template>
    <div>
        <h1>Users</h1>

        <div class="row">
            <div class="col-4">
                <form>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" class="form-control" placeholder="Password" v-model="Password">
                    </div>
                    <button type="button" class="btn btn-primary" @click="createAccount">CreateNewAccount</button>
                </form>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <table class="table">
                    <thead>
                    <tr>
                        <th>Select</th>
                        <th>Account</th>
                        <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    <UserBalance :address="account" :key="account" v-for="account in Accounts"/>
                    </tbody>
                </table>
            </div>
        </div>
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
      web3.eth.getCoinbase().then(val=>{
        console.log(val);
      });
    },
  }
</script>

<style scoped>
    .row{
        margin: 50px 0px;
    }
</style>