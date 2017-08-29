import Vue from 'vue';
import vueAxios from 'axios';
import App from './app';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(iView);
Vue.prototype.$axios = vueAxios

new Vue({
    render: h => h(App)
}).$mount('#vueMountApp');