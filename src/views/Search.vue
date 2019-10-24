<template>
	<div class="search">
		<div class="search-input clearfix">
			<el-input class='fl'></el-input>
			<el-button class='fl' type='primary' icon='el-icon-search' @click='search'>搜索</el-button>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
			}
		},
		created () {},
		methods : {
			search () {
				this.$router.push('/search-result')
			}
		}
	}
</script>
