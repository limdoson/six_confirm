const route_module = [
	{
		path : '',
		component : () => import('@v/index/Index')
	},
	{//开奖结果
		path : 'result',
		component : () => import('@v/result/Result')
	},
	{//规则说明
		path : 'rules',
		component : () => import('@v/rules/Rules')
	},
	{//警示
		path : 'warning',
		component : () => import('@v/warning/Warning')
	}
]
export default route_module;