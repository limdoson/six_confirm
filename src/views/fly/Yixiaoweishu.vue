<template>
	<div class="">
		<table border style='width: 600px;'>
			<tbody>
				<tr>
					<td class="label">生肖</td>
					<td class="label">金额</td>
					<td class="label">输赢</td>
					<td class="label">赔率</td>
					<td class="label">走飞</td>
					<td class="label">生肖</td>
					<td class="label">金额</td>
					<td class="label">输赢</td>
					<td class="label">赔率</td>
					<td class="label">走飞</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<el-form inline size='mini' style='margin-bottom: 8px;'>
			<el-form-item label='一肖走飞'></el-form-item>
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
		<!-- 尾数 -->
		<table border style='width: 600px;'>
			<tbody>
				<tr>
					<td class="label">尾数</td>
					<td class="label">金额</td>
					<td class="label">输赢</td>
					<td class="label">赔率</td>
					<td class="label">走飞</td>
					<td class="label">尾数</td>
					<td class="label">金额</td>
					<td class="label">输赢</td>
					<td class="label">赔率</td>
					<td class="label">走飞</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<el-form inline size='mini' style='margin-bottom: 8px;'>
			<el-form-item label='尾数走飞'></el-form-item>
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
		<!-- 总肖 -->
		<table border style='width: 600px;'>
			<tbody>
				<tr>
					<td class="label">类别</td>
					<td class="label">金额</td>
					<td class="label">输赢</td>
					<td class="label">赔率</td>
					<td class="label">走飞</td>
				</tr>
				<tr>
					<td>总肖234</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>总肖5</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>总肖6</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>总肖7</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<el-form inline size='mini' style='margin-bottom: 8px;'>
			<el-form-item label='总肖走飞'></el-form-item>
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
		<!--  -->
		<table border style='width: 600px;'>
			<tbody>
				<tr>
					<td class="label">类别</td>
					<td class="label">金额</td>
					<td class="label">输赢</td>
					<td class="label">赔率</td>
					<td class="label">走飞</td>
				</tr>
				<tr>
					<td>总肖单</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>总肖双</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</table>
		<el-form inline size='mini' style='margin-bottom: 8px;'>
			<el-form-item label='总肖单双走飞'></el-form-item>
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
