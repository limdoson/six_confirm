<template>
	<div class="">
		<table border style='width: 800px;margin-bottom: 15px;'>
			<tbody>
				<tr>
					<td class="label">类别</td>
					<td>
						<el-radio>三全中</el-radio>
					</td>
					<td>
						<el-radio>三中二</el-radio>
					</td>
					<td>
						<el-radio>二全中</el-radio>
					</td>
					<td>
						<el-radio>二中特</el-radio>
					</td>
					<td>
						<el-radio>特串</el-radio>
					</td>
				</tr>
				<tr>
					<td class="label" >赔率</td>
					<td>
						<p>最高<span class="red">720</span></p>
						<p>最低<span class="red">720</span></p>
					</td>
					<td>
						<p>
							(1)中二最低<span class="red">20/</span>最高<span class="red">20</span>
							
						</p>
						<p>
							(2)中三最低<span class="red">100/</span>最高<span class="red">100</span>
						</p>
					</td>
					<td>
						<p>最高<span class="red">60</span></p>
						<p>最低<span class="red">60</span></p>
					</td>
					<td>
						<p>
							(1)中特最低<span class="red">20/</span>最高<span class="red">20</span>
							
						</p>
						<p>
							(2)中二最低<span class="red">100/</span>最高<span class="red">100</span>
						</p>
					</td>
					<td>
						<p>最高<span class="red">135</span></p>
						<p>最低<span class="red">135</span></p>
					</td>
				</tr>
				<tr>
					<td class="label">注额</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
					<td>0</td>
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
			<el-form-item label='连码走飞'></el-form-item>
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
