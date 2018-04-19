<template>
    <tr :class="[$store.getters.CurrentAddress === address? 'active' : '']">
        <td>
            <button v-if="$store.getters.CurrentAddress !== address"
                    type="button"
                    class="btn btn-outline-primary"
                    @click="select(address)">Select</button>
        </td>
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
      select(address){
        this.$store.dispatch('setCurrentAddress', address);
      },
    },
    beforeMount(){
      web3.eth.getBalance(this.address).then(val=>this.Balance=val);
    },
  }
</script>

<style scoped>
    .active{
        color : #007bff;
    }
</style>