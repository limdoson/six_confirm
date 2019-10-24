<template>
	<div class="login">
		<div class="login-box">
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
