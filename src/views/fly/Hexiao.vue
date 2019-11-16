<template>
	<div class="">
		<table style='width: 100%;' border>
			<tbody>
				<tr>
					<td class="label">类别</td>
					<td class="label">
						<el-radio>1肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>1肖不中</el-radio>
					</td>
					<td class="label">
						<el-radio>2肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>2肖不中</el-radio>
					</td>
					<td class="label">
						<el-radio>3肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>3肖不中</el-radio>
					</td>
					<td class="label">
						<el-radio>4肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>4肖不中</el-radio>
					</td>
				</tr>
				<tr>
					<td class="label">赔率</td>
					<td class="red" v-for='(item,index) in 8'>{{index + 0.2}} </td>
				</tr>
				<tr>
					<td class="label">注额</td>
					<td class="red" v-for='(item,index) in 8'>{{index + 0.2}} </td>
				</tr>
				<tr>
					<td class="label">输赢</td>
					<td class="red" v-for='(item,index) in 8'>{{index * 100 +1}} </td>
				</tr>
				<tr>
					<td class="label">类别</td>
					<td class="label">
						<el-radio>5肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>5肖不中</el-radio>
					</td>
					<td class="label">
						<el-radio>6肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>6肖不中</el-radio>
					</td>
					<td class="label">
						<el-radio>7肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>7肖不中</el-radio>
					</td>
					<td class="label">
						<el-radio>8肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>8肖不中</el-radio>
					</td>
				</tr>
				<tr>
					<td class="label">赔率</td>
					<td class="red" v-for='(item,index) in 8'>{{index + 0.2}} </td>
				</tr>
				<tr>
					<td class="label">注额</td>
					<td class="red" v-for='(item,index) in 8'>{{index + 0.2}} </td>
				</tr>
				<tr>
					<td class="label">输赢</td>
					<td class="red" v-for='(item,index) in 8'>{{index * 100 +1}} </td>
				</tr>
				<tr>
					<td class="label">类别</td>
					<td class="label">
						<el-radio>9肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>9肖不中</el-radio>
					</td>
					<td class="label">
						<el-radio>10肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>10肖不中</el-radio>
					</td>
					<td class="label">
						<el-radio>11肖中</el-radio>
					</td>
					<td class="label">
						<el-radio>11肖不中</el-radio>
					</td>
					<td class="label red" colspan="2" rowspan="4">
						请先选择类别，再勾选生肖
					</td>
				</tr>
				<tr>
					<td class="label">赔率</td>
					<td class="red" v-for='(item,index) in 6'>{{index + 0.2}} </td>
				</tr>
				<tr>
					<td class="label">注额</td>
					<td class="red" v-for='(item,index) in 6'>{{index + 0.2}} </td>
				</tr>
				<tr>
					<td class="label">输赢</td>
					<td class="red" v-for='(item,index) in 6'>{{index * 100 +1}} </td>
				</tr>
			</tbody>
		</table>
		<el-row>
			<el-col :span='6'>
				<table style='width: 100%;margin-top: 15px;' border>
					<tbody>
						<tr>
							<td class="label">生肖</td>
							<td class="label">选择</td>
							<td class="label">号码</td>
						</tr>
						<tr>
							<td>鼠</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
						<tr>
							<td>牛</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
						<tr>
							<td>虎</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
						<tr>
							<td>兔</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
					</tbody>
				</table>
			</el-col>
			<el-col :span='6'>
				<table style='width: 100%;margin-top: 15px;' border>
					<tbody>
						<tr>
							<td class="label">生肖</td>
							<td class="label">选择</td>
							<td class="label">号码</td>
						</tr>
						<tr>
							<td>龙</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
						<tr>
							<td>蛇</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
						<tr>
							<td>马</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
						<tr>
							<td>羊</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
					</tbody>
				</table>
			</el-col>
			<el-col :span='6'>
				<table style='width: 100%;margin-top: 15px;' border>
					<tbody>
						<tr>
							<td class="label">生肖</td>
							<td class="label">选择</td>
							<td class="label">号码</td>
						</tr>
						<tr>
							<td>猴</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
						<tr>
							<td>鸡</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
						<tr>
							<td>狗</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
						<tr>
							<td>猪</td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
							<td>11,24,36,48</td>
						</tr>
					</tbody>
				</table>
			</el-col>
		</el-row>
		<el-form inline size='mini'>
			<el-form-item label='合肖走飞'></el-form-item>
			<el-form-item label='赔率'>
				<el-input></el-input>
			</el-form-item>
			<el-form-item label='退水'>
				<el-input></el-input>
			</el-form-item>
			<el-form-item label='金额'>
				<el-input></el-input>
			</el-form-item>
			<el-form-item label='站名'>
				<el-input></el-input>
			</el-form-item>
			<el-form-item >
				<el-button type='primary'>走飞</el-button>
				<el-button type='danger'>清楚</el-button>
				<el-button type='default'>资料刷新</el-button>
			</el-form-item>
		</el-form>
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
