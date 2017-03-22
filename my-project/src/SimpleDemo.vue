<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{job}}
  </div>
</template>

<script>
//import Hello from './components/Hello'
//import Test from './components/test'

export default {
  name: 'app',
  data(){
      return {
          job:"web front"
      }
  }
}



</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
