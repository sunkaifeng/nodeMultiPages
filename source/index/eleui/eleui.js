import Vue from 'vue';
import vueAxios from 'axios';
import App from './app';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题

Vue.use(ElementUI);
Vue.prototype.$axios = vueAxios

new Vue({
    render: h => h(App)
}).$mount('#vueMountApp');
