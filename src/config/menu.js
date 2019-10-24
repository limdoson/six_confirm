/*
@author：leem【leem.du@ruixunsoft.com】
@param :
@version：0.0.0
@description：生成菜单的数据结构
 */
const menu = [
	{
		title : '系统管理',
		id : '1',
		children : [
			{
				title : '系统参数设置',
				id : '1-4',
				path : '/index/system/parameter-config'
			},{
				title : '菜单管理',
				id : '1-1',
				path : '/index/system/menu-config'
			},{
				title : '字典管理',
				id : '1-2',
				path : '/index/system/dict-config'
			},{
				title : '角色管理',
				id : '1-3',
				path : '/index/system/role'
			}
		]
	},
	{
		title : '组织架构',
		id : '3',
		children : [
			{
				title : '组织架构管理',
				id : '3-1',
				path : '/index/org/config'
			},{
				title : '分公司一览',
				id : '3-2',
				path : '/index/org/branch-list'
			},{
				title : '门店一览',
				id : '3-3',
				path : '/index/org/store-list'
			},{
				title : '员工一览',
				id : '3-4',
				path : '/index/org/staff-list'
			},{
				title : '工程师一览',
				id : '4-4',
				path : '/index/org/engineer-list'
			}
		]
	},
	{
		title : '商品管理',
		id :'10',
		children : [
			{
				title : '成品商品一览',
				path : '/index/product/products'
			},
			{
				title : '成本商品分类管理',
				path : '/index/product/products-cla'
			},
			{
				title :'配件一览',
				path : '/index/product/parts'
			},
			{
				title : '配件分类管理',
				path : '/index/product/parts-cla'
			}
		]
	},
	{
		title : '合作方管理',
		id : '4',
		children : [
			{
				title : '品牌方管理',
				id : '4-1',
				path : '/index/supplier/supplier-list'
			},
			{
				title : '电商管理',
				id : '4-2',
				path : '/index/supplier/supplier-payment-detail'
			}
		]
	},{
		title : '客户管理',
		id :'2',
		children : [
			{
				title :'客户一览',
				id : '2-1',
				path : '/index/customer/list'
			},{
				title : '客户池',
				id : '2-3',
				path : '/index/customer/pool'
			},{
				title : '客户分配记录',
				id : '2-4',
				path : '/index/customer/dis-record'
			}
		]
	},{
		title : '业务单据管理',
		id : '6',
		children : [
			{
				title : '采购单一览',
				id : '6-1',
				path : '/index/purchase/list'
			},{
				title : '入库单一览',
				id : '6-2',
				path : '/index/purchase/list'
			},{
				title : '报修单一览',
				id : '6-2',
				path : '/index/purchase/list'
			}
		]
	},{
		title : '入库管理',
		id : '7',
		children : [
			{
				title : '入库单一览',
				id : '7-1',
				path : '/index/warehousing/list'
			}
		]
	},
	{
		title :'仓库管理',
		id : '12',
		children : [
			{
				title : '仓库一览',
				id : '12-1',
				path : '/index/'
			}
		]
	},{
		title : '财务管理',
		id : '11',
		children : [
			{
				title : ''
			}
		]
	}
]
export default menu;