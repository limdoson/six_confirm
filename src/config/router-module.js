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
		component : () => import('@v/fly/Fly'),
		children : [
			{
				path : '',
				component : () => import('@v/fly/Index'),
				children : [
					{
						path : '',
						component : () => import('@v/fly/Tema')
					},{
						path : 'hexiao',
						component : () => import('@v/fly/Hexiao')
					}
				]
			},{
				path : 'fly-webside',
				component : () => import('@v/fly/WebSide'),
			},{
				path : 'fly-report',
				component : () => import('@v/fly/FlyReport'),
			}
		]
	},
	// {//走飞报表
	// 	path : 'fly-report',
	// 	component : () => import('@v/fly/FlyReport')
	// },
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
		component : () => import('@v/in-time/InTime'),
		children : [
			{
				path : '',
				component : () => import('@v/in-time/Tema'),
			},{
				path : 'hexiao',
				component : () => import('@v/in-time/Hexiao'),
			},{
				path : 'zhengma',
				component : () => import('@v/in-time/Zhengma'),
			},{
				path : 'zhengmate',
				component : () => import('@v/in-time/Zhengmate'),
			},{
				path : 'yixiaoweishu',
				component : () => import('@v/in-time/Yixiaoweishu'),
			},{
				path : 'lianma',
				component : () => import('@v/in-time/Lianma'),
			},{
				path : 'zixuanbuzhong',
				component : () => import('@v/in-time/Zixuanbuzhong'),
				children : [
					{
						path : '',
						component : () => import('@v/in-time/zixuanbuzhong/Top20'),
					},{
						path : 'wubuzhong',
						component : () => import('@v/in-time/zixuanbuzhong/Wubuzhong'),
					}
				] 
			},{
				path : 'lianxiao',
				component : () => import('@v/in-time/Lianxiao'),
			},{
				path : 'lianwei',
				component : () => import('@v/in-time/Lianwei'),
			},{
				path : 'all',
				component : () => import('@v/in-time/All'),
			}
		]
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
		component : () => import('@v/system/System'),
		children : [
			{
				path : '',
				component : () => import('@v/system/Index')
			},{
				path : 'inline-person',
				component : () => import('@v/system/InlinePerson')
			},{
				path : 'change-record',
				component : () => import('@v/system/ChangeRecord')
			},{//占城额度记录
				path : 'quota-record',
				component : () => import('@v/system/QuoatRecord')
			},{//ip搜索
				path : 'ip-search',
				component : () => import('@v/system/IpSearch')
			},{//自动赔率设定
				path : 'auto-peilv',
				component : () => import('@v/system/AutoPeilv')
			}
		]
	}
]
export default route_module;