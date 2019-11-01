<template>
	<div class="warning">
		<el-card>
			<el-row>
				<el-col :span='6' v-for='item in 4'>
					<table>
						<tbody border >
							<tr>
								<th class="label">号码</th>
								<th class="label">金额</th>
								<td class="label">输赢</td>
								<th class="label">赔率</th>
								<th class="label">走飞金额</th>
							</tr>
							<tr v-for='ball in 12'>
								<th>{{item * ball}}</th>
								<th>0</th>
								<th>0</th>
								<th>45.00</th>
								<th class="red">
									0
								</th>
							</tr>
						</tbody>
					</table>
				</el-col>
			</el-row>
			<!-- <rx-table
				:table-data='table_data'
				:table-header='table_header'
				:show-selection-column='false'>
				<el-table-column label='操作' width='140'>
					<template slot-scope='{row}'>
						<el-button type='text' size='mini'>编辑</el-button>
						<el-button type='text' size='mini'>删除</el-button>
					</template>
				</el-table-column>
			</rx-table> -->
		</el-card>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				table_data : [
					{
						a : '站点名称',
						b : '2018-08-09',
						c : 20150,
						d : '107.2.4.7'
					}
				],
				table_header : {
					a : {
						label : '站点名称'
					},
					b : {
						label :'时间'
					},
					d : {
						label : 'ip'
					},
					c : {
						label : '走飞金额'
					}
				}
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
