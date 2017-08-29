<style>

</style>

<template>
  <div>
    <h1 class="title">Echarts调用</h1>
    <div style="width:600px;height:500px;" id="echartsBox"></div>
  </div>
</template>

<script>
var echarts = require('echarts');
export default {
    data () {
        return {
           
        }

    },
    mounted(){
       this.getEchart();
    },
    methods:{
        getEchart(){
           var myChart = echarts.init(document.getElementById('echartsBox'));
            // 绘制图表
            myChart.setOption({
                title: { text: 'ECharts 入门示例' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }); 
        }
    }
}
</script>
