<template>
	<div class="">
		<div style='margin-bottom: 15px;'>
			<el-button type='primary' size='mini' @click='$router.push(`/index/fly`)'>走飞</el-button>
			<el-button type='warning' size='mini' @click='$router.push(`/index/fly/fly-webside`)'>走飞站点</el-button>
			<el-button type='success' size='mini' @click='$router.push(`/index/fly/fly-report`)'>走飞报表</el-button>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				cs : 1,
				pl : 1,
				total_pl : 1,
				total_show : 1,
				update_pl : 1
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
