<template>
	<div class="">
		<el-form inline size='small'>
			<el-form-item>
				<el-checkbox-group v-model='name'>
					<el-checkbox label='系统设定'>系统设定</el-checkbox>
					<el-checkbox>玩法注单</el-checkbox>
					<el-checkbox>账号修改</el-checkbox>
					<el-checkbox>颁奖异动</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label='指定日期'>
				<el-date-picker
					v-model="value1"
					type="daterange"
					format='yyyy-MM-dd'
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item label='搜索关键字'>
				<el-input></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type='primary'>搜索</el-button>
			</el-form-item>
		</el-form>
		<el-table
			border
			:data='list'
			:header-cell-style="{'background' : '#f1f1f1'}">
			<el-table-column label='编号' prop='id'></el-table-column>
			<el-table-column label='日期时间' prop='time'></el-table-column>
			<el-table-column label='修改者账号' prop='account'></el-table-column>
			<el-table-column label='修改描述' prop='desc' width='600'></el-table-column>
			<el-table-column label='ip' prop='ip'></el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				name : [],
				value1 : null,
				list : [
					{
						id : 12345,
						time : '2018-10-18 14:10:15',
						account : 'admin',
						desc : '六合彩颁奖结束',
						ip : '0.0.0.0'
					}
				]
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
