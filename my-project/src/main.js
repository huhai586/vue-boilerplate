// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//store
import store from './store'
//router
import router from './router'



//elm
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//css
import './css/common.sass'


// Vue.config.productionTip = false
Vue.use(ElementUI);





/* eslint-disable no-new */
new Vue({
  el: '#app',
    store,
    router,
    data:{
        activeIndex: '1'
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            router.push("huhai")
        }
    },
    mounted:()=>{
        document.getElementById("loading").style.display="none"
    },
    template: require("./template/container.html")
});


