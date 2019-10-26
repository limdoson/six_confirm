<template>
	<div class="">
		<el-card>
			<div slot='header' class='clearfix'>
				<div class="fl">开奖管理</div>
				<el-button class="fr" type='primary' size='mini'>新增</el-button>
			</div>
			<el-table
				border
				:header-cell-style="{background :'#fafafa'}">
				<el-table-column label='日期'></el-table-column>
				<el-table-column label='星期'></el-table-column>
				<el-table-column label='期数'></el-table-column>
				<el-table-column label='揽珠结果'></el-table-column>
				<el-table-column label='特别号'></el-table-column>
				<el-table-column label='下注金额'></el-table-column>
				<el-table-column label='会员结果'></el-table-column>
				<el-table-column label='公司结果'></el-table-column>
				<el-table-column label='走飞金额'></el-table-column>
				<el-table-column label='走飞结果'></el-table-column>
				<el-table-column label='公司总计'></el-table-column>
				<el-table-column label='赔率'></el-table-column>
			</el-table>
		</el-card>
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
			
		}
	}
</script>
