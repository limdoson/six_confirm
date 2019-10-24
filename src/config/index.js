const config = {
	//默认table的高度 = 窗口高度 - haader高度 - 操作菜单栏的高度 - 底部栏的高度 - 微调距离
	default_table_height : window.innerHeight  - 50 - 48 - 40 - 70,
	//产品环境的请求域名
	product_api_base_url : 'http://119.23.244.55:8080',//'http://119.23.244.55:8080
	//文件上传路径
	upload_url : '/api/api/v1/file/upload',
	//图片显示doman
	img_doman :'http://119.23.244.55:8080'
}

export default config;