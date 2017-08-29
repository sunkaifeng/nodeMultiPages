<style>
body{color:#f00;}
</style>

<template>
  <div>
    <h1>首页--导航与API接口测试</h1>
    <h2 class="basecolor">引入样式</h2>
    <h3>API接口数据</h3>
    <pre v-if="getData!=null">
        {{getData}}
    </pre>
    <ul>
        <li><a href="index.html">首页</a></li>
        <li><a href="echarts.html">引入echarts图表</a></li>
        <li><a href="eleui.html">引入Element UI</a></li>
        <li><a href="iviewui.html">引入iView UI</a></li>
    </ul>
    <aaa-a></aaa-a>
  </div>
</template>

<script>
require('../../statics/css/base.css');
import aaaA from '../../components/A/A.vue'
export default {
    data () {
        return {
            getData:null
        }
    },
    components:{
        aaaA
    },
    created(){
        var _this=this;
        this.$axios({
            method: 'get',
            url: '/testApi'
         }).then(function(result){
            _this.getData=result.data;
            console.log(JSON.stringify(result))
         });
    }
}
</script>
