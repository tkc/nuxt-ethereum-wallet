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
        <td>Accounts</td>
        <td>
          <ul>
            <li :key="account" v-for="account in Accounts">{{account}}</li>
          </ul>
        </td>
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
        Accounts: [],
      }
    },
    beforeMount(){
      web3.eth.getAccounts().then(val=>this.Accounts=val);
    },
  }
</script>
