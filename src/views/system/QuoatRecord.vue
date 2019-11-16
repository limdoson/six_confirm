<template>
	<div class="">
		<el-table
			border
			:data='list'
			:header-cell-style="{'background' : '#fafafa'}">
			<el-table-column label='日期时间'></el-table-column>
			<el-table-column label='占成上线'></el-table-column>
			<el-table-column label='上线账号'></el-table-column>
			<el-table-column label='上线名称'></el-table-column>
			<el-table-column label='占成下线'></el-table-column>
			<el-table-column label='下线账号'></el-table-column>
			<el-table-column label='下线名称'></el-table-column>
			<el-table-column label='修改类别'></el-table-column>
			<el-table-column label='最少占成'>
				<el-table-column label='新'></el-table-column>
				<el-table-column label='旧'></el-table-column>
			</el-table-column>
			<el-table-column label='最大占成'>
				<el-table-column label='新'></el-table-column>
				<el-table-column label='旧'></el-table-column>
			</el-table-column>
			<el-table-column label='收飞最大占成'>
				<el-table-column label='新'></el-table-column>
				<el-table-column label='旧'></el-table-column>
			</el-table-column>
			<el-table-column label='下线可占成'>
				<el-table-column label='新'></el-table-column>
				<el-table-column label='旧'></el-table-column>
			</el-table-column>
			<el-table-column label='固定占成'>
				<el-table-column label='新'></el-table-column>
				<el-table-column label='旧'></el-table-column>
			</el-table-column>
			<el-table-column label='停押开关'>
				<el-table-column label='新'></el-table-column>
				<el-table-column label='旧'></el-table-column>
			</el-table-column>
			<el-table-column label='信用额度'>
				<el-table-column label='新'></el-table-column>
				<el-table-column label='旧'></el-table-column>
			</el-table-column>
			<el-table-column label='真人游戏额度'>
				<el-table-column label='新'></el-table-column>
				<el-table-column label='旧'></el-table-column>
			</el-table-column>
			<el-table-column label='电子游戏额度'>
				<el-table-column label='新'></el-table-column>
				<el-table-column label='旧'></el-table-column>
			</el-table-column>
			<el-table-column label='修改者账号'></el-table-column>
		</el-table>
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
