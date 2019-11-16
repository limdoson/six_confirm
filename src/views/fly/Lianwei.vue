<template>
	<div class="">
		<table border style='width: 1000px;'>
			<tbody>
				<tr>
					<td class="label">类别</td>
					<td class="label">
						<el-radio>二尾中</el-radio>
					</td>
					<td class="label">
						<el-radio>三尾中</el-radio>
					</td>
					<td class="label">
						<el-radio>四尾中</el-radio>
					</td>
					<td class="label">
						<el-radio>二尾不中</el-radio>
					</td>
					<td class="label">
						<el-radio>三尾不中</el-radio>
					</td>
					<td class="label">
						<el-radio>四尾不中</el-radio>
					</td>
				</tr>
				<tr>
					<td class="label">赔率</td>
					<template v-for='item in 6'>
						<td>
							<table>
								<tbody>
									<tr>
										<td>0) <span class="red">3</span></td>
										<td>1) <span class="red">2.5</span></td>
									</tr>
									<tr>
										<td>2) <span class="red">3</span></td>
										<td>3) <span class="red">2.5</span></td>
									</tr>
									<tr>
										<td>4) <span class="red">3</span></td>
										<td>5) <span class="red">2.5</span></td>
									</tr>
									<tr>
										<td>6) <span class="red">3</span></td>
										<td>7) <span class="red">2.5</span></td>
									</tr>
									<tr>
										<td>8) <span class="red">3</span></td>
										<td>9) <span class="red">2.5</span></td>
									</tr>
								</tbody>
							</table>
						</td>
					</template>
				</tr>
				<tr>
					<td class="label">注额</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
				</tr>
			</tbody>
		</table>
		<table style="margin-top: 15px; width: 1000px;" border>
			<tbody>
				<tr>
					<template v-for='item in 10'>
						<td class="label">选择</td>
						<td class="label">尾数</td>
					</template>
					
				</tr>
				<tr>
					<template v-for='(item,index) in 10'>
						<td>
							<el-checkbox></el-checkbox>
						</td>
						<td>{{index}}</td>
					</template>
				</tr>
			</tbody>
		</table>
		<el-form inline size='mini' style='margin-bottom: 8px;'>
			<el-form-item label='连尾'></el-form-item>
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
