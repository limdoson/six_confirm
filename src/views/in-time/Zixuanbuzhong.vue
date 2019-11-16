<template>
	<div class="">
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="Top20" name="/index/in-time/zixuanbuzhong"></el-tab-pane>
			<el-tab-pane label="五不中" name="/index/in-time/zixuanbuzhong/wubuzhong"></el-tab-pane>
		</el-tabs>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				activeName : '/index/in-time/zixuanbuzhong'
			}
		},
		created () {},
		methods : {
			handleClick (tab) {
				this.$router.push(tab.name)
			}
		}
	}
</script>
