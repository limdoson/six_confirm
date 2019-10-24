# 深圳红警集团项目

#### 介绍
vue(cdn import) + element-ui(cdn import) + vue-router + vuex + axios(cdn import) + less + other

#### 软件架构
@vue-cli3.0脚手架搭建，
vue.config.js配置说明：
1、关闭了生产环境下的sourceMap
2、做了项目部分文件夹的前置引入
3、webpack部分 ： 
	3-1：打包在文件名上加入了时间戳，避免出现浏览器缓存，无法更新状态
	3-2：对于cdn引入的资源，做了externals配置


#### 安装
npm install / npm i

#### 运行
npm run serve

#### 项目描述
类OA内部管理系统
项目开始：2019-09-10
预计结束：2019-11-20


#### 版权所有
@厦门睿迅网络科技有限公司
任何个人或组织，未经公司授权，泄露或抄袭代码，本公司将保留追究其法律责任权利