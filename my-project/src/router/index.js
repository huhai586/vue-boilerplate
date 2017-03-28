import Vue from 'vue'

import PageTwo from '../pages/second_page'
import AlertModel from '../pages/alert_page'
import FetchData from '../pages/fetch_data'
import Form from '../pages/form'
import App from '../pages/first_page/App'
import Echarts from '../pages/echarts'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: PageTwo },
        { path: '/home', component: App },
        { path: '/alertModel', component: AlertModel },
        { path: '/fetchData', component: FetchData },
        { path: '/form', component: Form },
        { path: '/echarts', component: Echarts }
    ]
});
