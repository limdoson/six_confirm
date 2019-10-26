<template>
	<div class="account">
		<el-row :gutter='15'>
			<el-col :span='5'>
				<el-card>
					<el-form size='mini' slot='header'>
						<el-form-item label='账号'>
							<el-input></el-input>
						</el-form-item>
						<el-form-item label='模式'>
							<el-select>
								<el-option></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label='状态'>
							<el-select>
								<el-option></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
							<el-button type='primary' >搜索</el-button>
						</el-form-item>
					</el-form>
					<div class="tree-container">
						<el-tree 
							:data='tree'
							default-expand-all>
						</el-tree>
					</div>
					
				</el-card>
			</el-col>
			<el-col :span='19'>
				<el-card>
					<div slot='header' class="clearfix">
						<div class="fl">
							大股东管理应用
						</div>
						<div class="fr">
							<el-button type='primary' size='mini'>启用列表</el-button>
							<el-button type='primary' size='mini'>停用列表</el-button>
							<el-button type='primary' size='mini'>新增</el-button>
						</div>
					</div>
					<!-- 表格 -->
					<el-table
						border
						:header-cell-style="{background :'#fafafa'}">
						<el-table-column label='大股东账号'></el-table-column>
						<el-table-column label='名称'></el-table-column>
						<el-table-column label='彩类'></el-table-column>
						<el-table-column label='六合彩'>
							<el-table-column label='信用额度'></el-table-column>
							<el-table-column label='特码减倍'></el-table-column>
							<el-table-column label='下线减倍'></el-table-column>
							<el-table-column label='公司占成'></el-table-column>
							<el-table-column label='走飞'></el-table-column>
							<el-table-column label='操盘'></el-table-column>
						</el-table-column>
						<el-table-column label='新增/更新'></el-table-column>
						<el-table-column label='最后登录'></el-table-column>
						<el-table-column label='下层'></el-table-column>
						<el-table-column label='权限'></el-table-column>
						<el-table-column label='归属'></el-table-column>
						<el-table-column label='建档'></el-table-column>
						<el-table-column label='功能设定'></el-table-column>
						<el-table-column label='提早关盘'></el-table-column>
					</el-table>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				tree : [
					{
						label : 'zhanghao1',
						value :1,
						children : [
							{
								label : 'zhanghao2',
								value :2,
								children : [
									{
										label : 'zhanghao3',
										value :3,
									}
								]
							}
						]
					}
				]
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
