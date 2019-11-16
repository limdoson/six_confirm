<template>
	<div class="">
		<el-table
			:header-cell-style="{'background' : '#f1f1f1'}"
			:data='list'>
			<el-table-column label='二肖'>
				<template>
					<table border style='width: 100%;'>
						<tbody>
							<tr>
								<td>鼠<span class="red">2.01</span></td>
								<td>牛<span class="red">2.01</span></td>
								<td>虎<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>兔<span class="red">2.01</span></td>
								<td>龙<span class="red">2.01</span></td>
								<td>蛇<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>马<span class="red">2.01</span></td>
								<td>羊<span class="red">2.01</span></td>
								<td>猴<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>鸡<span class="red">2.01</span></td>
								<td>狗<span class="red">2.01</span></td>
								<td>猪<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td colspan="3" class="center">9548.12</td>
							</tr>
						</tbody>
					</table>
					<table  style='width: 100%;margin-top: 15px;'>
						<tbody>
							<tr>
								<td class="center">鼠，龙</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">虎，兔</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">牛，兔</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">牛，鸡</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">虎，猪</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">羊，蛇</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，猪</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">猪，猴</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">兔，羊</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，猪</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">猪，蛇</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，马</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
						</tbody>
					</table>
				</template>
			</el-table-column>
			<el-table-column label='三肖'>
				<template>
					<table border style='width: 100%;'>
						<tbody>
							<tr>
								<td>鼠<span class="red">2.01</span></td>
								<td>牛<span class="red">2.01</span></td>
								<td>虎<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>兔<span class="red">2.01</span></td>
								<td>龙<span class="red">2.01</span></td>
								<td>蛇<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>马<span class="red">2.01</span></td>
								<td>羊<span class="red">2.01</span></td>
								<td>猴<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>鸡<span class="red">2.01</span></td>
								<td>狗<span class="red">2.01</span></td>
								<td>猪<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td colspan="3" class="center">9548.12</td>
							</tr>
						</tbody>
					</table>
					<table  style='width: 100%;margin-top: 15px;'>
						<tbody>
							<tr>
								<td class="center">鼠，龙，狗</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">虎，兔，鼠</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">牛，兔，鸡</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">牛，鸡，羊</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">虎，猪，蛇</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">羊，蛇，马</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，猪，龙</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">猪，猴，鸡</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">兔，羊，狗</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，猪，虎</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">猪，蛇，牛</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，马，兔</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
						</tbody>
					</table>
				</template>
			</el-table-column>
			<el-table-column label='四肖'>
				<template>
					<table border style='width: 100%;'>
						<tbody>
							<tr>
								<td>鼠<span class="red">2.01</span></td>
								<td>牛<span class="red">2.01</span></td>
								<td>虎<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>兔<span class="red">2.01</span></td>
								<td>龙<span class="red">2.01</span></td>
								<td>蛇<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>马<span class="red">2.01</span></td>
								<td>羊<span class="red">2.01</span></td>
								<td>猴<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>鸡<span class="red">2.01</span></td>
								<td>狗<span class="red">2.01</span></td>
								<td>猪<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td colspan="3" class="center">9548.12</td>
							</tr>
						</tbody>
						
					</table>
					<table  style='width: 100%;margin-top: 15px;'>
						<tbody>
							<tr>
								<td class="center">鼠，龙，狗，兔</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">虎，兔，鼠，鸡</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">牛，兔，鸡，羊</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">牛，鸡，羊，蛇</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">虎，猪，蛇，马</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">羊，蛇，马，龙</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，猪，龙，鸡</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">猪，猴，鸡，羊</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">兔，羊，狗，猪</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，猪，虎，牛</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">猪，蛇，牛，兔</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，马，兔，羊</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
						</tbody>
					</table>
				</template>
			</el-table-column>
			<el-table-column label='五肖'>
				<template>
					<table border style='width: 100%;'>
						<tbody>
							<tr>
								<td>鼠<span class="red">2.01</span></td>
								<td>牛<span class="red">2.01</span></td>
								<td>虎<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>兔<span class="red">2.01</span></td>
								<td>龙<span class="red">2.01</span></td>
								<td>蛇<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>马<span class="red">2.01</span></td>
								<td>羊<span class="red">2.01</span></td>
								<td>猴<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td>鸡<span class="red">2.01</span></td>
								<td>狗<span class="red">2.01</span></td>
								<td>猪<span class="red">2.01</span></td>
							</tr>
							<tr>
								<td colspan="3" class="center">9548.12</td>
							</tr>
						</tbody>
					</table>
					<table  style='width: 100%;margin-top: 15px;'>
						<tbody>
							<tr>
								<td class="center">鼠，龙，狗，兔，鸡</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">虎，兔，鼠，鸡，羊</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">牛，兔，鸡，羊，蛇</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">牛，鸡，羊，蛇，马</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">虎，猪，蛇，马，龙</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">羊，蛇，马，龙，鸡</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，猪，龙，鸡，羊</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">猪，猴，鸡，羊，狗</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">兔，羊，狗，猪，虎</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，猪，虎，牛，兔</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">猪，蛇，牛，兔，狗</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
							<tr>
								<td class="center">蛇，马，兔，羊，鸡</td>
								<td class="center"><span class="blue">2400</span></td>
							</tr>
						</tbody>
					</table>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				list : [
					{
						name : '二肖',
						items : [
							
						]
					}
				]
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
