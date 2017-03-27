// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import PageTwo from './pages/second_page'
import AlertModel from './pages/alert_page'
import FetchData from './pages/fetch_data'
import Form from './pages/form'
import App from './App'
import Vuex from "vuex"
import VueRouter from 'vue-router'


//elm
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//css
import './css/common.sass'



// Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: PageTwo },
        { path: '/home', component: App },
        { path: '/alertModel', component: AlertModel },
        { path: '/fetchData', component: FetchData },
        { path: '/form', component: Form }
    ]
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
    store,
    router,
    data:{
        activeIndex: '1',
        activeIndex2: '1'
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            router.push("huhai")
        }
    },
    template: require("./template/container.html")
});


