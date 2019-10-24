/*
@author：leem【leem.du@ruixunsoft.com】
@param :
@version：0.0.0
@description：路由文件
 */
import Vue from 'vue'
import Router from 'vue-router'

import route_module from '@cfg/router-module'
import common_page_router from '@cfg/common-page-rouer'

Vue.use(Router)

let router = new Router({
    base : process.env.NODE_ENV == 'development' ? './' : './',
    mode : 'hash',
	activeClass : 'active',
    routes : [
        {//模拟搜索页面
			path : '/',
			component: () => import('@v/Search')
		},
		{//模拟搜索结果
			path : '/search-result',
			component: () => import('@v/SearchResult')
		},
		{//登录页面
			path : '/login',
			component: () => import('@v/Login')
		},
		{
			path : '/index',
			component : () => import('@v/Layout'),
			children : [
				...route_module
			]
		},
		...common_page_router
    ]
})

export default router;