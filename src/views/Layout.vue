<template>
	<div class="layout">
		<header class='clearfix'>
			<div class="fl clearfix">
				<img src="../assets/img/timg.jpg" class="logo fl" alt="" >
				<el-menu
					:default-active="active"
					class="el-menu-demo fl"
					mode="horizontal"
					background-color="#545c64"
					text-color="#fff"
					router
					active-text-color="#ffd04b">
					<el-menu-item index="/index">首页</el-menu-item>
					<el-menu-item index="/index/result">开奖结果</el-menu-item>
					<el-menu-item index="/index/rules">规则说明</el-menu-item>
					<el-menu-item index="4">参考</el-menu-item>
					<el-menu-item index="5">清除快取</el-menu-item>
					<el-menu-item index="6">即时注单</el-menu-item>
					<el-menu-item index="7">操盘</el-menu-item>
					<el-menu-item index="8">走飞</el-menu-item>
					<el-menu-item index="9">公司</el-menu-item>
					<el-menu-item index="10">报表</el-menu-item>
					<el-menu-item index="/index/warning">警示</el-menu-item>
					<el-menu-item index="12">开奖</el-menu-item>
					<el-menu-item index="13">系统</el-menu-item>
				</el-menu>
			</div>
			<div class="fr clearfix" style="margin-top: 15px;">
				<img src="../assets/img/tx.png" alt="" class="tx fl">
				<el-dropdown class='fl'>
					<span class="el-dropdown-link">
						管理员<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>修改密码</el-dropdown-item>
						<el-dropdown-item>退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</header>
		<router-view class='main-view-container'></router-view>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				active : this.$route.path,
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
