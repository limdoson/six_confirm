<!-- 主题色按钮 -->
<template>
	<el-button type='primary' size='mini' :disabled='disabled' :icon='icon'>
		<slot></slot>
	</el-button>
</template>

<script>
	export default {
		props :{
			//是否禁用，false-否，true-是
			disabled : {
				type :Boolean,
				default : false
			},
			//icon
			icon : {
				type : String,
				default : null
			}
		},
		components: {},
		data () {
			return {
				
			}
		},
		created () {
			
		},
		
		methods : {
			
		},
	}
</script>
