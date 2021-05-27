<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <router-view/>
  </div>
</template>
<script> 
import Navbar from './components/header.vue'

export default {
  components:{
    Navbar,
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
:root{
 font-size: 16px;
}
*{
  box-sizing: border-box;
}
</style>
