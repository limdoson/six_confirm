<template>
	<el-tabs class='table-tabs' v-model='active' @tab-click="handleClick">
		<el-tab-pane label="全部" :name='null'></el-tab-pane>
		<el-tab-pane v-for='item in options' :label='item.detailName' :key='item.id' :name='item.detailCode'></el-tab-pane>
	</el-tabs>
</template>

<script>
	export default {
		props : {
			code : {
				type : String,
				default : null
			},
		},
		components: {},
		data () {
			return {
				options : null,
				active : null
			}
		},
		created () {
			
		},
		mounted () {
			this.$http.request({
				method : 'get',
				url : '/api/v1/selectComponent/getByCodeName',
				params :{
					code : this.code
				}
			}).then(res => {
				this.options = res.data;
				// this.active = res.data[0].detailCode
			})
		},
		methods : {
			handleClick (tab) {
				this.$emit('tab-click',tab.name)
			}
		},
	}
</script>
