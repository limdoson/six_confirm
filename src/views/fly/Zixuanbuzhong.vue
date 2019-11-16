<template>
	<div class="">
		<table border style='width: 800px;margin-bottom: 15px;'>
			<tbody>
				<tr>
					<td class="label">五不中</td>
					<td class="label">六不中</td>
					<td class="label">七不中</td>
					<td class="label">八不中</td>
					<td class="label">九不中</td>
					<td class="label">十不中</td>
					<td class="label">十一不中</td>
					<td class="label">十二不中</td>
				</tr>
				<tr>
					<td class="label" >赔率</td>
					<td colspan="7">
						<p>最高<span class="red">135</span></p>
						<p>最低<span class="red">135</span></p>
					</td>
				</tr>
				<tr>
					<td class="label">注额</td>
					<td colspan="7">0</td>
					
				</tr>
			</tbody>
		</table>
		<table style='width: 800px;margin-bottom: 15px;'>
			<tbody>
				<tr>
					<template v-for='item in 5'>
						<td class="label">号码</td>
						<td class="label">赔率</td>
						<td class="label">选择</td>
					</template>
				</tr>
				<template v-for='(row,index) in 10'>
					<tr>
						<template v-for='column in 5' v-if='(column - 1) * 10 + row < 50'>
							<td>{{ (column - 1) * 10 + row }} </td>
							<td><span class="red">720</span></td>
							<td>
								<el-checkbox></el-checkbox>
							</td>
						</template>
					</tr>
				</template>
			</tbody>
		</table>
		<el-form inline size='mini' style='margin-bottom: 8px;'>
			<el-form-item label='自选不中走飞'></el-form-item>
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
