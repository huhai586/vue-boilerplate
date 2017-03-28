<template>
 <div class="container">
   <el-button type="primary" @click="getData">点击加载echarts数据</el-button>

 </div>
</template>


<script>
    import { mapGetters, mapActions } from 'vuex'
//var x=;

    export default{
        methods:{
            loadData:function(){
              debugger
          },
            ...mapActions(["getData"])
        }
    }
</script>
<style lang="sass">
    @import "../../css/common.sass";
</style>
