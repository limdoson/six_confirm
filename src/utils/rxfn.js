/*
@author：leem【leem.du@ruixunsoft.com】
@param :
@version：0.0.0
@description：用于注入全局方法
 */

export default {
	install (Vue) {
		Vue.prototype.$rxfn = {
			/*
			 打开窗口的方法
			 */
			openWindow (url,width='1300',height='700',left='100',top='0') {
				window.open(url,'_blank',`height=${height}, width=${width} top=${top},left=${left}, toolbar=no, menubar=no, location=no, status=no`)
			},
			/*
			 poenerQuery方法：
				往上级的opener中插入一个query，值为时间轴，用来处理上级opener更新数据
			 */
			openerQuery () {
				window.opener.location.hash = `${window.opener.location.hash}?reload=${new Date().getTime()}`
			},
			
			
			/*
			 工具函数，用来遍历form表单的formData,根据required来生成表单的rules
			 
			 */
			formConfigToRules (form_config) {
				if (typeof form_config != 'object') {
					throw new Error('formDataToRules方法参数需为数组且长度需大于0')
					return;
				}
				if (form_config.length <= 0 ) {
					throw new Error('formDataToRules方法参数需为数组且长度需大于0')
					return;
				}
				let result = {};
				form_config.map(item => {
					if (item.required) {
						result[item['prop']] = [{required: true, message: '该内容必填', trigger: 'blur'}]
					}
				})
				return result;
			},
			/*
			 将逗号分隔的字符串转成数组
			 */
			StringToArray (string, buffer =',') {
				if (typeof string != 'string') {
					throw new Error('StringToArray参数格式错误')
					return;
				}
				return string.split(buffer)
			},
			
		}
	}
}
