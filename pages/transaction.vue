<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col-8">
                <table class="table">
                    <tbody>
                    <tr>
                        <th>blockHash</th>
                        <td>{{transaction.blockHash}}</td>
                    </tr>
                    <tr>
                        <th>blockNumber</th>
                        <td>{{transaction.blockNumber}}</td>
                    </tr>
                    <tr>
                        <th>from</th>
                        <td>{{transaction.from}}</td>
                    </tr>
                    <tr>
                        <th>to</th>
                        <td>{{transaction.to}}</td>
                    </tr>
                    <tr>
                        <th>value</th>
                        <td>{{transaction.value}}</td>
                    </tr>
                    <tr>
                        <th>gas</th>
                        <td>{{transaction.gas}}</td>
                    </tr>
                    <tr>
                        <th>gasPrice</th>
                        <td>{{transaction.gasPrice}}</td>
                    </tr>
                    <tr>
                        <th>hash</th>
                        <td>{{transaction.hash}}</td>
                    </tr>
                    <tr>
                        <th>input</th>
                        <td>{{transaction.input}}</td>
                    </tr>
                    <tr>
                        <th>nonce</th>
                        <td>{{transaction.nonce}}</td>
                    </tr>
                    <tr>
                        <th>transactionIndex</th>
                        <td>{{transaction.transactionIndex}}</td>
                    </tr>
                    <tr>
                        <th>v</th>
                        <td>{{transaction.v}}</td>
                    </tr>
                    <tr>
                        <th>r</th>
                        <td>{{transaction.r}}</td>
                    </tr>
                    <tr>
                        <th>s</th>
                        <td>{{transaction.s}}</td>
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
        transaction:{},
      }
    },
    beforeMount(){
      web3.eth.getBlock(4148).then(val=>{
//        console.log(val);
      });
      const hash='0xedb61395c61f82449ff6c8a961f4bf8dea17f95b71dd93f4ae45001db5c0534a';
      web3.eth.getTransaction(hash).then(val=>this.transaction=val);
      web3.eth.getTransactionReceipt(hash).then(val=>{
        console.log(val);
      });
    },
  }
</script>