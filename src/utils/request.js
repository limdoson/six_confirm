/*
@author：leem【leem.du@ruixunsoft.com】
@param :
@version：0.0.0
@description：封装axios
	前端使用注意事项：
	-post方法：用来处理需要向后台处理提交数据的接口
	-put方法：用来处理更新数据的接口
	-get方法：用来处理只需向后台请求数据的接口
	-delete方法：用来处理需要执行删除逻辑的方法
 */
import axios from 'axios'
import Vue from 'vue'
import {getToken} from '@u/auth'

let request = axios.create({
	withCredentials: true,//跨域
	timeout :5000
})

//request interceptor
request.interceptors.request.use(
	config => {
		config.headers['authorization'] = getToken()
		return config;
	},
	error => {
		console.log(error)
		return Promise.reject(error)
	}
)

//response interceptor
/* 
code : 
	200 -正常
	400 -输入错误
	401 -需要登录
	403 -无访问权限/无操作权限
	500 -系统错误
	
 */
request.interceptors.response.use(
	response => {
		console.log(response)
	}
)



export default request;