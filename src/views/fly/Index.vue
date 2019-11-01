<template>
	<div class="warning">
		<el-card>
			<!-- 头部信息 -->
			<div slot='header'>
				<el-row style='font-size: 12px;'>
					<el-col :span='3'>
						特码操盘室，107期2018-08-08
					</el-col>
					<el-col :span='2'>
						特码（<span class="red">0</span>）
					</el-col>
					<el-col :span='2'> 
						合肖（<span class="red">0</span>）
					</el-col>
					<el-col :span='2'>
						正码（<span class="red">0</span>）
					</el-col>
					<el-col :span='2'>
						正码特（<span class="red">0</span>）
					</el-col>
					<el-col :span='2'>
						一肖尾数（<span class="red">0</span>）
					</el-col>
					<el-col :span='2'>
						连码（<span class="red">0</span>）
					</el-col>
					<el-col :span='2'>
						自选不中（<span class="red">0</span>）
					</el-col>
					<el-col :span='2'>
						连肖（<span class="red">0</span>）
					</el-col>
					<el-col :span='2'>
						特尾（<span class="red">0</span>）
					</el-col>
					<el-col :span='2'>
						特整合（<span class="red">0</span>）
					</el-col>
				</el-row>
			</div>
			<!-- 开奖数据 -->
			<h1 style="margin-bottom: 8px;">香港时间：2018-08-08 14：00：00，<span class="red">距离下注时间还有：2天12小时48分30秒</span>，<el-button type='primary' size='mini'>资料刷新</el-button></h1>
			<el-row>
				<el-col :span='6'>
					<table>
						<tbody border>
							<tr>
								<th class="label">号码</th>
								<th class="label">金额</th>
								<td class="label">输赢</td>
								<th class="label">赔率</th>
								<th class="label">走飞</th>
							</tr>
							<tr v-for='item in 10'>
								<th>26</th>
								<th>0</th>
								<th>0</th>
								<th>0</th>
								<th class="red">
									<el-checkbox></el-checkbox>
								</th>
							</tr>
						</tbody>
					</table>
				</el-col>
			</el-row>
			<!-- 快选 -->
			<el-form inline size='mini' style='margin-bottom: 8px;'>
				<el-form-item label='负值'></el-form-item>
				<el-form-item label='特码走飞'></el-form-item>
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
					<el-select>
						<el-option label='站名1'></el-option>
						<el-option label='站名2'></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type='primary' size='mini'>走飞</el-button>
				</el-form-item>
			</el-form>
			<!-- 类别 -->
			<el-row :gutter='10'>
				<el-col :span='4'>
					<table >
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">金额</td>
								<td class="label">输赢</td>
								<td class="label">赔率</td>
								<td class="label">走飞</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<th>
									<el-checkbox></el-checkbox>
								</th>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<th>
									<el-checkbox></el-checkbox>
								</th>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<th>
									<el-checkbox></el-checkbox>
								</th>
							</tr>
						</tbody>
					</table>
				</el-col>
			</el-row>
			<el-form inline size='mini'>
				<el-form-item label='特码两面走飞'></el-form-item>
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
					<el-select>
						<el-option label='站名1'></el-option>
						<el-option label='站名2'></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type='primary' size='mini'>走飞</el-button>
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				cs : 1,
				pl : 1,
				total_pl : 1,
				total_show : 1,
				update_pl : 1
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
