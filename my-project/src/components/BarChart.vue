<template>
    <div class="hello" :length="chartData.length">
        <div ref="chart" class="line-chart"></div>
    </div>
</template>

<script>
    import { merge ,throttle} from "lodash"
    // 引入 ECharts 主模块
    let echarts = require('echarts/lib/echarts');
    // 引入柱状图
    // require('echarts/lib/chart/pie');
    require('echarts/lib/chart/line');
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');

    export default {
        name: 'barcharts',

        props: {
            'chartData':{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                getDefaultOptions: {
                    backgroundColor: '#fff',

                    tooltip: {
                        show:true,
                        trigger:"axis",
                        axisPointer:{
                            lineStyle:{
                                opacity:0
                            }
                        }
                    },

                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: [],
                        axisLine:{
                            lineStyle:{
                                color:"#e1f7f2"
                            }
                        },
                        axisTick:{
                            alignWithLabel:false,

                        },
                        axisLabel:{
                            show:true,

                            textStyle:{
                                color:"#879aa3"
                            },
                            margin:8
                        }
                    },
                    yAxis: [{
                        show: false,
                        type: 'value',
                        axisTick: {
                            show: false
                        }
                    }],
                    parallelAxis:{
                        boundaryGap:false
                    },
                    grid:{
                        left:"4%",
                        top:"5%",
                        right:"4%"

                    },
                    series: [{
                        name:"使用频次",
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 3,
                        showSymbol: false,
                        showAllSymbol: false,
                        lineStyle: {
                            //修改图标框的宽度
                            normal: {
                                width: 2
                            }
                        },
                        //大片区域的变色
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0.2,
                                    color: 'rgba(160, 232, 216, 1)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(160, 232, 216, 0.1)'
                                }], false),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                                shadowBlur: 10
                            }
                        },
                        //移动到一个顶点，小的图标的颜色
                        itemStyle: {
                            normal: {
                                color: 'rgb(9, 196, 154)',
                                borderColor: 'rgba(9, 196, 154,0.27)',
                                borderWidth: 12
                            }
                        },
                        //峰值数据
                        data: []
                    }
                    ]
                }
            }
        },
        methods: {
            updateDimensions(){
                console.count("count reseize")
                this.chart.resize();
            },
            setOption(option) {
                // 绘制图表
                option = merge({}, this.getDefaultOptions, option);

                this.chart.setOption(option);
            },
            readyRenderLineChart(){
                let chartData=this.$props.chartData;
                let categorys=[],data=[];
                chartData.forEach((obj,index)=>{
                    categorys.push(obj.date)
                    data.push(obj.value)
                });
                this.setOption({
                    xAxis:{
                        data:categorys
                    },
                    series: [{
                        data:data
                    }]
                })
            },
        },
        beforeUpdate: function () {
            let chartData=this.$props.chartData;
            if(chartData){
                this.readyRenderLineChart()
            }

        },
        mounted: function () {
            this.chart = echarts.init(this.$refs.chart);
            window.addEventListener("resize", throttle(this.updateDimensions));


        },
        beforeDestory: function () {
            this.chart.destory();
            window.removeEventListener("resize", throttle(this.updateDimensions));

        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .line-chart{
       width:100%;
       height:200px;
       margin-top: 100px;
   }
</style>
