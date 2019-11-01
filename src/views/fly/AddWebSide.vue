<template>
	<div class="">
		<el-card>
			<div slot='header'>
				新增走飞站点
			</div>
			<rx-form
				v-model='form_data'
				:form-config='form_config'></rx-form>
		</el-card>
		
	</div>
</template>
<script>
	export default {
		data () {
			return {
				form_data : {
					name : null,
					account :null,
					password : null,
					edu : null
				},
				form_config : [
					{
						label : '站点名称',
						prop : 'name',
						type : 'input',
						required :true
					},{
						label : '登录账号',
						prop : 'name',
						type : 'input',
						required :true
					},{
						label : '登录密码',
						prop : 'name',
						type : 'input',
						required :true
					},{
						label : '走飞额度',
						prop : 'name',
						type : 'input',
						required :true
					}
				]
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
