<template>
  <div class="container-fluid wrapper">
    <div class="row">
      <div class="col-2">
        <Nav/>
      </div>
      <div class="col-10">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from '../components/Nav.vue';
  export default {
    components: {
      Nav
    },
  }
</script>

<style scoped>
  .wrapper{
    padding: 50px;
  }
</style>