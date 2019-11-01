<template>
	<div class="warning">
		<el-card>
			<div slot='header'>
				<el-form inline label-width='140px' size='small'>
					<el-form-item label='选择要应用的子公司'>
						<el-select>
							<el-option label='子公司1'></el-option>
							<el-option label='所有子公司'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type='primary'>应用设置</el-button>
					</el-form-item>
				</el-form>
			</div>
			<el-row>
				<el-col :span='6'>
					<table>
						<tbody border>
							<tr>
								<th class="label">号码</th>
								<th class="label">金额</th>
								<td class="label">输赢</td>
								<th class="label">补货</th>
								<th class="label">赔率</th>
								<th class="label">操盘</th>
							</tr>
							<tr v-for='item in 10'>
								<th>26</th>
								<th>0</th>
								<th>0</th>
								<th>0</th>
								<th class="red">45.00</th>
								<th>
									<span class="plus">-</span>
									<span class="minas">+</span>
								</th>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='6'>
					<table>
						<tbody border>
							<tr>
								<th class="label">号码</th>
								<th class="label">金额</th>
								<td class="label">输赢</td>
								<th class="label">补货</th>
								<th class="label">赔率</th>
								<th class="label">操盘</th>
							</tr>
							<tr v-for='item in 10'>
								<th>26</th>
								<th>0</th>
								<th>0</th>
								<th>0</th>
								<th class="red">45.00</th>
								<th>
									<span class="plus">-</span>
									<span class="minas">+</span>
								</th>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='6'>
					<table>
						<tbody border>
							<tr>
								<th class="label">号码</th>
								<th class="label">金额</th>
								<td class="label">输赢</td>
								<th class="label">补货</th>
								<th class="label">赔率</th>
								<th class="label">操盘</th>
							</tr>
							<tr v-for='item in 10'>
								<th>26</th>
								<th>0</th>
								<th>0</th>
								<th>0</th>
								<th class="red">45.00</th>
								<th>
									<span class="plus">-</span>
									<span class="minas">+</span>
								</th>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='6'>
					<table>
						<tbody border>
							<tr>
								<th class="label">号码</th>
								<th class="label">金额</th>
								<td class="label">输赢</td>
								<th class="label">补货</th>
								<th class="label">赔率</th>
								<th class="label">操盘</th>
							</tr>
							<tr v-for='item in 10'>
								<th>26</th>
								<th>0</th>
								<th>0</th>
								<th>0</th>
								<th class="red">45.00</th>
								<th>
									<span class="plus">-</span>
									<span class="minas">+</span>
								</th>
							</tr>
						</tbody>
					</table>
				</el-col>
			</el-row>
		</el-card>
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
