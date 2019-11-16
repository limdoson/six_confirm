<template>
	<div class="">
		<el-card>
			<el-form inline size='small' label-width='140px'>
				<el-form-item label='开奖管理'></el-form-item>
				<el-form-item label='时间'>
					<el-date-picker
					  v-model="value1"
					  type="date"
					  placeholder="选择日期">
					</el-date-picker>
				</el-form-item>
			</el-form>
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
				value1 : null
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
