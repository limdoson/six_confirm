/*
@author：leem【leem.du@ruixunsoft.com】
@param :
@version：0.0.0
@description：需要在新窗口中打开的公共页面
 */
const common_page_router = [
	{
		path : '/sub-operate',
		component : () => import('@v/operate/SubOperate')
	},{
		path : '/add-webside',
		component : () => import('@v/fly/AddWebSide')
	}
	
]
export default common_page_router;