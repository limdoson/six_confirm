<template>
	<div class="">
		<el-row>
			<el-col :span='4' v-for='(item,index) in 5'>
				<table>
					<tbody border>
						<tr>
							<th class="label">号码</th>
							<th class="label">金额</th>
							<td class="label">输赢</td>
							<th class="label">赔率</th>
							<th class="label">走飞</th>
						</tr>
						<tr v-for='item in 10' v-if="(index +1)*item < 50">
							<th>{{(index)*10 + item}}</th>
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
							<td>总单</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<th>
								<el-checkbox></el-checkbox>
							</th>
						</tr>
						<tr>
							<td>总双</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<th>
								<el-checkbox></el-checkbox>
							</th>
						</tr>
						<tr>
							<td>总大</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
							<th>
								<el-checkbox></el-checkbox>
							</th>
						</tr>
						<tr>
							<td>总小</td>
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
