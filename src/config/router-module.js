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
	},
	{//操盘
		path : 'operate',
		component : () => import('@v/operate/Operate')
	},
	{//走飞
		path : 'fly',
		component : () => import('@v/fly/Fly')
	},
	{//账号管理
		path : 'account',
		component : () => import('@v/account/Account')
	},
	{//参考
		path : 'reference',
		component : () => import('@v/reference/Reference')
	},
	{//清除
		path : 'clear',
		component : () => import('@v/clear/Clear')
	},
	{//即时注单
		path : 'in-time',
		component : () => import('@v/in-time/InTime')
	},
	{//公司
		path : 'company',
		component : () => import('@v/company/Company')
	},
	{//报表
		path : 'report',
		component : () => import('@v/report/Report')
	},
	{//开奖
		path : 'open',
		component : () => import('@v/open/Open')
	},
	{//系统
		path : 'system',
		component : () => import('@v/system/System')
	}
]
export default route_module;