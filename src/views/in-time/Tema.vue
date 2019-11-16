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
		<el-row :gutter='10'>
			<el-col :span='4' v-for='item in list'>
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
							<td>{{item.first}}</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
						</tr>
						<tr>
							<td>{{item.second}}</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							
						</tr>
						<tr>
							<td>{{item.third ? item.third : '合计'}}</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
						</tr>
					</tbody>
				</table>
			</el-col>
		</el-row>
		<h1>
			<span class="fl">合计：2015比，金额：201555010</span>
		</h1>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				list : [
					{
						first : '特单',
						second : '特双'
					},{
						first : '特大',
						second : '特小'
					},{
						first : '合单',
						second : '合双'
					},{
						first : '合大',
						second : '合小'
					},{
						first : '合尾大',
						second : '合尾小'
					},{
						first : '鼠',
						second : '龙',
						third : '猴'
					},{
						first : '牛',
						second : '蛇',
						third : '鸡'
					},{
						first : '虎',
						second : '马',
						third : '狗'
					},{
						first : '兔',
						second : '羊',
						third : '猪'
					},{
						first : '家禽',
						second : '野兽'
					},{
						first : '红单',
						second : '蓝单',
						third : '绿单'
					},{
						first : '红双',
						second : '蓝双',
						third : '绿双'
					},{
						first : '红大',
						second : '蓝大',
						third : '绿大'
					},{
						first : '红小',
						second : '蓝小',
						third : '绿小'
					},{
						first : '特尾大',
						second : '特尾小',
						third : '绿单'
					},{
						first : '红',
						second : '蓝',
						third : '绿'
					},{
						first : '大',
						second : '中',
						third : '小'
					}
				]
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
