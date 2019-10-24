const webpack = require('webpack')
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV;
const Timestamp = new Date().getTime();

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV == 'development' ? './' : './',
  //   devServer: {
  //       port: 8888,
  //       open: true,
		// proxy :  process.env.NODE_ENV == 'development' ? {
		// 	'/api' : {
		// 		target : 'http://192.168.1.105:8080',
		// 		changeOrigin : true,
		// 		ws : true,
		// 		pathRewrite : {
		// 			"^/api" : 'http://192.168.1.105:8080'
		// 		}
		// 	} 
		// } : null
  //   },
    configureWebpack: {
//      plugins: [
//          new webpack.ProvidePlugin({
//              jQuery: 'jquery',
//              $: 'jquery'
//          })
//      ]
    },
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@c', resolve('src/components'))
            .set('@ast', resolve('src/assets'))
            .set('@u',resolve('src/utils'))
            .set('@v',resolve('src/views'))
            .set('@cfg',resolve('src/config'))
    },
	//webpack配置
	configureWebpack : (config) => {
		//配置cnd引入的资源
		config.externals = {
			'vue' : 'Vue',
			'element-ui': 'ELEMENT'
		}
		//生成环境去除console信息
		if (env == 'production') {
			let optimization = {
				minimizer : [new UglifyJsPlugin({
					uglifyOptions: {
						warnings: false,
						compress: {
							drop_debugger: true, // 注释console
							drop_console: true,
							pure_funcs:['console.log','console.info'] // 移除console
						},
					},
				})]
			}
			Object.assign(config, {
				optimization
			})
		}
	}
	// configureWebpack:  {
	// 	output : {
	// 		filename : `js/[name].${Timestamp}.js`,
	// 		chunkFilename : `js/[name].${Timestamp}.js`
	// 	},
	// 	externals : {
	// 		'vue' : 'Vue',
	// 		'element-ui': 'ELEMENT'
	// 	},
	// 	//生成环境去调控制台信息
	// 	optimization : {
	// 		minimizer : [
	// 			new UglifyJsPlugin({
	// 				uglifyOptions : {
	// 					compress : {
	// 						warnings: false,
	// 						drop_console: true,//console
	// 						drop_debugger: false,
	// 						pure_funcs: ['console.log']//移除console
	// 					}
	// 				}
	// 			})
	// 		]
	// 	}
	// },
	
}