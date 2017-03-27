<template>
  <div id="one">
  this id test.vue

  </div>
</template>

<script>
//import Hello from './components/Hello'
import Test from '../../components/test'


export default {
  name: 'simpleDemo',
  components:{
      Test
  },
    data(){
      return {
          hahaValue:1,
          mm:""
      }
    },
    watch:{
        mm:function(){
            console.log("当前的mm数值为",this.mm)
            debugger
        }
    },
    methods:{
        changeHaha:function(){
            debugger
        },
        whenClildClick:function(){
            debugger
        }
    }
}



</script>

<style>
#one {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
