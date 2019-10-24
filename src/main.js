import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//国际化依赖
// import VueI18n from 'vue-i18n'
//语言包
// import zh from '@/lang/zh'
// import en from '@/lang/en'
Vue.config.productionTip = false

//国际化
// Vue.use(VueI18n)
// const i18n = new VueI18n({
// 	locale : localStorage.getItem('locale') ? localStorage.getItem('locale') : 'zh',
// 	messages : {
// 		zh,
// 		en
// 	},
// 	silentTranslationWarn: true
// })
//样式入口文件
import './assets/css/app.less'

//全局注册组件
import vComponent from '@u/reg-components'
Vue.use(vComponent);

//注入全局方法
import rxfn from '@u/rxfn'
Vue.use(rxfn)

//挂载config
import cfg from '@cfg/index'
Vue.prototype.$cfg = cfg;

//utils
import utils from '@u/index'
Vue.prototype.$utils = utils;

//http
import http from '@u/http'
Vue.prototype.$http = http

new Vue({
	router,
	store,
	// i18n,
	render : h => h(App)
}).$mount('#app')