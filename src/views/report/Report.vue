<template>
	<div class="">
		<el-card>
			<div slot="header">
				<h3>系统管理员报表管理（搜寻）</h3>
				<el-form inline size='mini' label-width='110px' style='width: 100%;margin-top:15px;'>
					<el-form-item label='大股东'>
						<el-select>
							<el-option label='大股东1'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='报表种类'>
						<el-select>
							<el-option label='总账'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='选项'>
						<el-select>
							<el-option label='全部'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='下注类别'>
						<el-select>
							<el-option label='全部'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='统计贡献额'>
						<el-checkbox></el-checkbox>
					</el-form-item>
					<el-form-item label='浏览日期'>
						<el-radiobox>
							<el-radio label='本日账'></el-radio>
							<el-radio label='历史账'></el-radio>
						</el-radiobox>
					</el-form-item>
					<el-form-item>
						<el-button type='primary'>搜寻</el-button>
					</el-form-item>
				</el-form>
			</div>
			<el-table
				:header-cell-style="{'background' : '#fafafa'}"
				:data='list'
				border>
				<el-table-column label='股东账号名称' prop=''></el-table-column>
				<el-table-column label='笔数' prop=''></el-table-column>
				<el-table-column label='下注金额' prop=''></el-table-column>
				<el-table-column label='会员结果' prop=''></el-table-column>
				<el-table-column label='股东交收' prop=''></el-table-column>
				<el-table-column label='大股东' prop=''>
					<el-table-column label='退水' prop=''></el-table-column>
					<el-table-column label='倍差' prop=''></el-table-column>
					<el-table-column label='金额' prop=''></el-table-column>
					<el-table-column label='占成' prop=''></el-table-column>
					<el-table-column label='结果' prop=''></el-table-column>
					
				</el-table-column>
				<el-table-column label='大股东收飞' prop=''>
					<el-table-column label='收飞' prop=''></el-table-column>
					<el-table-column label='退水' prop=''></el-table-column>
					<el-table-column label='倍差' prop=''></el-table-column>
					<el-table-column label='结果' prop=''></el-table-column>
				</el-table-column>
				<el-table-column label='总结果' prop=''></el-table-column>
				<el-table-column label='大股东交收' prop=''></el-table-column>
				
			</el-table>
		</el-card>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				list : []
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
