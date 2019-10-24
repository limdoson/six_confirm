/*
@author：leem【leem.du@ruixunsoft.com】
@param :
@version：0.0.0
@description：用来处理token的存储及获取，储存方式前后端协议
 */

const token_key = 'token';
//设置token
export function setToken (value) {
	return localStorage.setItem(token_key,value)
}
//获取token
export function getToken () {
	return localStorage.getItem(token_key)
}

//移除token
export function removeToken () {
	return localStorage.removeItem(token_key)
}
