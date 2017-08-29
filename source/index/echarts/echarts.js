import Vue from 'vue';
import vueAxios from 'axios';
import App from './app';

Vue.prototype.$axios = vueAxios

new Vue({
    render: h => h(App)
}).$mount('#vueMountApp');
