<template>
  <div id="one">
    点击选项卡，观看例子
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

<style lang="sass">
#one
    padding:  20px
    text-align: center

</style>
