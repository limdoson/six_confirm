<template>
	<div class="warning">
		<el-row :gutter='5'>
			<el-col :span='4' v-for='item in 11'>
				<table border>
					<tbody>
						<tr>
							<td class="label">{{item}}肖</td>
							<td class="label">笔数</td>
							<td class="label">金额</td>
							<td class="label">输赢</td>
							<td class="label">赔率</td>
						</tr>
						<tr>
							<td>中</td>
							<td>2</td>
							<td>2</td>
							<td>3</td>
							<td>4</td>
						</tr>
						<tr>
							<td>不中</td>
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
				
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
