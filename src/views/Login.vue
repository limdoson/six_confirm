<template>
	<div class="login">
		<div class="login-box" style="text-align: center;">
			<img src="../assets/img/timg.jpg" alt="" style='width: 120px;margin-bottom: 20px;'>
			<el-form label-width='100px' >
				<el-form-item label='登录账号'>
					<el-input></el-input>
				</el-form-item>
				<el-form-item label='登录密码'>
					<el-input></el-input>
				</el-form-item>
			</el-form>
			<div class="center">
				<el-button type='primary' @click='login'>登 录</el-button>
			</div>
			<ul class="search-list clearfix">
				<li>
					<a href="http://www.baidu.com" target="_blank">百度</a>
				</li>
				<li>
					<a href="https://www.so.com/">360搜索</a>
				</li>
				<li>
					<a href="https://www.sogou.com/">搜狗</a>
				</li>
				<li>
					<a href="http://www.google.cn">google</a>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
	export default {
		data () {
			return {
				form_data : {
					username : null,
					password : null
				},
				form_config : [
					{
						label : '登录账号',
						prop : 'username'
					},{
						label : '登录密码',
						prop : 'password'
					}
				]
			}
		},
		created () {},
		methods : {
			login () {
				this.$router.push('/index')
			}
		}
	}
</script>
