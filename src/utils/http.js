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

后端返回code说明 : 
	200 -正常
	400 -输入错误
	401 -需要登录
	403 -无访问权限/无操作权限
	500 -系统错误 
 */

import axios from 'axios'  
import Vue from 'vue';
import Router from '@/router'
import config from '@cfg/index'
import Store from '@/store'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


let http = axios.create({
    withCredentials: true,//跨域
})

// http.interceptors.response.use((response) => {
// 	return response;
// }, function (error) {
// 	if (302 === error.response.status) {
// 		window.location = 'http://192.168.1.105:8080/pub/need_login';
// 	} else {
// 		return Promise.reject(error);
// 	}
// });


class Http extends Vue {
	// process.env.NODE_ENV == 'development' ? `/api${arg.url}` : config.product_api_base_url + arg.url,
	request (arg) {
		//显示loading动画
		let loading = this.$loading({
			lock: true,
			text: '数据处理中，请稍后...',
			spinner: 'el-icon-loading',
			background: 'rgba(0, 0, 0, 0.7)'
		});
		return new Promise( (resolve,reject) => {
			http({
				headers : arg.headers || {
					"token": Store.state.token  ? Store.state.token : '',
					'content-type': arg.content_type || 'application/json',
				},
				method : arg.method || 'post',
				url : process.env.NODE_ENV == 'development' ? `/api${arg.url}` : config.product_api_base_url + arg.url,
				params : arg.params,
				data : arg.data
			}).then(res => {
				if (res.data) {
					let code = res.data.code;
					//判断code状态，做相应处理
					switch (code){
						case 200:
							if (res.data.msg == 'success') {
								resolve(res.data)
							} else {
								this.$utils.rxAlert(res.data.msg)
							}
							break;
						case 400:
							this.$utils.rxAlert(res.data.msg)
							break;
						case 401:
							this.$utils.rxAlert(res.data.msg,()=>{
								Router.replace('/')
							})
							break;	
						case 403:
							this.$utils.rxAlert(res.data.msg)
							break;
						case 500:
							this.$utils.rxAlert(res.data.msg)
							break;
						case 999:
							this.$utils.rxAlert(res.data.msg)
							break;
						default:
							break;
					}
					//关闭动画
					loading.close()
				} else {
					reject()
				}
			}).catch(err => {
				console.log(err)
				//关闭动画
				loading.close()
				this.$utils.rxAlert(err)
				throw new Error(err)
			})
		})
	}
}
export default new Http;