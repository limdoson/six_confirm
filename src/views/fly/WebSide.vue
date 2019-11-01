<template>
	<div class="">
		<el-card>
			<div slot='header'>
				<el-button type='primary' size='mini' @click='$rxfn.openWindow(`#/add-webside`)'>添加站点</el-button>
			</div>
			<rx-table
				:table-data='table_data'
				:table-header='table_header'
				:show-selection-column='false'>
				<el-table-column label='操作' width='140'>
					<template slot-scope='{row}'>
						<el-button type='text' size='mini'>编辑</el-button>
						<el-button type='text' size='mini'>删除</el-button>
					</template>
				</el-table-column>
			</rx-table>
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
						b : 1000,
						d : 20000,
						c : '2018-08-09'
					}
				],
				table_header : {
					a : {
						label : '站点名称'
					},
					b : {
						label :'累计走飞金额'
					},
					d : {
						label : '走飞额度'
					},
					c : {
						label : '最近走飞时间'
					}
				}
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
