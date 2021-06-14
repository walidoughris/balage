<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <router-view v-if="this.$store.state.autheticated" />
    <Login v-else />
  </div>
</template>
<script> 
import Navbar from './components/header.vue'
import Login from './components/login'

export default {
  name:"App",
  components:{
    Navbar,
    Login
  }
}
</script>
<style lang="scss">
  $primary:#9098D8;
  $secondary:#2B335B;
  $ligth:#242A4B;
  $dark:#1C213E;
  body{
    background-color: $ligth;
    color: #fff;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
:root{
 font-size: 16px;
}
*{
  box-sizing: border-box;
}
</style>
