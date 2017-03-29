<template>
 <div class="container">
   <el-button type="primary" @click="getData">点击加载echarts数据</el-button>
    <div class="charts-container">
        <BarChart :chartData="test"></BarChart>
    </div>
 </div>
</template>


<script>
    import { mapGetters, mapActions,mapState } from 'vuex'
    import BarChart from "../../components/BarChart"
//var x=;

    export default{
        methods:{
            loadData:function(){
              debugger
          },
            ...mapActions(["getData"])
        },
        computed:{
            test:function(){

                return this.$store.state.echarts.data

            },
            ...mapState([
                'echarts'
            ])
        },
        components:{
            BarChart
        },
        watch:{
            echarts:function(){
                console.log("监测到echarts变化")
            }
        }
    }
</script>

<style lang="sass">
    @import "../../css/common.sass";
</style>
