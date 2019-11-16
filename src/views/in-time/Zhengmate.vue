<template>
	<div class="warning">
		<el-row>
			<el-col :span='6' v-for='item in 4'>
				<table>
					<tbody border >
						<tr>
							<th class="label">号码</th>
							<th class="label">笔数</th>
							<th class="label">金额</th>
							<th class="label">赔率</th>
							<td class="label">输赢</td>
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
		<h1 class="clearfix">
			<span class="fl">合计：2015比，金额：201555010</span>
			<el-form inline size='mini' class='fr'>
				<el-form-item label='赔率'>
					<el-select>
						<el-option label='目前赔率'></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label='显示'>
					<el-select>
						<el-option label='全部'></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label='每'>
					<el-select>
						<el-option label='不更新'></el-option>
					</el-select>
					更新
				</el-form-item>
				<el-form-item >
					<el-button type='primary' size='mini'>重新整理</el-button>
				</el-form-item>
			</el-form>
		</h1>
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
