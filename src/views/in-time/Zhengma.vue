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
		<el-row :gutter='10'>
			<el-col :span='24'>
				<el-table 
					style='margin-bottom: 0;'
					size='mini'
					:data='list1'
					:header-cell-style="{'background' : '#f1f1f1'}">
					<el-table-column prop='name'></el-table-column>
					<el-table-column label='单'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='赔率'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='双'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='赔率'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='合计'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='大'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='赔率'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='小'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='赔率'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='合计'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
				</el-table>
			</el-col>
			<el-col :span='24'>
				<el-table 
					style='margin-bottom: 0;'
					size='mini'
					:data='list1'
					:header-cell-style="{'background' : '#f1f1f1'}">
					<el-table-column prop='name'></el-table-column>
					<el-table-column label='红波'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='赔率'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='蓝波'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='赔率'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='绿波'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='赔率'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='合计'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='合单'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='赔率'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='合双'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='赔率'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
					<el-table-column label='合计'>
						<el-table-column label='笔数'></el-table-column>
						<el-table-column label='金额'></el-table-column>
						<el-table-column label='输赢'></el-table-column>
					</el-table-column>
				</el-table>
			</el-col>
			<el-col :span='6'>
				<table border>
					<tbody>
						<tr>
							<td class="label">类别</td>
							<td class="label">笔数</td>
							<td class="label">金额</td>
							<td class="label">输赢</td>
							<td class="label">赔率</td>
						</tr>
						<tr>
							<td>总单</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
						</tr>
						<tr>
							<td>总双</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							
						</tr>
						<tr>
							<td>合计</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
						</tr>
					</tbody>
				</table>
			</el-col>
			<el-col :span='6'>
				<table border>
					<tbody>
						<tr>
							<td class="label">类别</td>
							<td class="label">笔数</td>
							<td class="label">金额</td>
							<td class="label">输赢</td>
							<td class="label">赔率</td>
						</tr>
						<tr>
							<td>总大</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
						</tr>
						<tr>
							<td>总小</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							
						</tr>
						<tr>
							<td>合计</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
						</tr>
					</tbody>
				</table>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				list1 : [
					{
						name : '正码一'
					},{
						name : '正码二'
					},{
						name : '正码三'
					},{
						name : '正码四'
					},{
						name : '正码五'
					},{
						name : '正码六'
					}
				]
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
