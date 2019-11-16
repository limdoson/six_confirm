<template>
	<div class="warning">
		<table border style='width: 1000px;'>
			<tbody>
				<tr>
					<td colspan="8">六合彩【自动赔率设定】</td>
				</tr>
				<tr>
					<td colspan="8">
						<p class="center red">升赔率之结果以基本赔率为上限</p>
						<p class="center red">最低赔率应小于基本赔率</p>
					</td>
				</tr>
				<tr>
					<td class="label center" rowspan="2">玩法</td>
					<td class="label center" colspan="3">第一阶段（一次性）</td>
					<td class="label center" colspan="3">第二阶段（累进）</td>
					<td class="label center" rowspan="2">最低赔率</td>
				</tr>
					<td class="label center">金额</td>
					<td class="label center">赔率</td>
					<td class="label center">升降</td>
					<td class="label center">金额</td>
					<td class="label center">赔率</td>
					<td class="label center">升降</td>
				<tr>
					<td>特码A</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td class="label" >特码B</td>
					<td colspan="7" class="red">B类的玩法同A类的玩法公用</td>
				</tr>
				<tr>
					<td>特单双</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>特大小</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>特合单双</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>正码A</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td class="label" >正码B</td>
					<td colspan="7" class="red">B类的玩法同A类的玩法公用</td>
				</tr>
				<tr>
					<td>总单双</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>总大小</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>三全中</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>三中二A</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td class="label" >三中二B</td>
					<td colspan="7" class="red">B类的玩法同A类的玩法公用</td>
				</tr>
				<tr>
					<td>二全中</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>二中特A</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td class="label" >二中特B</td>
					<td colspan="7" class="red">B类的玩法同A类的玩法公用</td>
				</tr>
				<tr>
					<td>特窜</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>色波</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>生肖</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>家禽野兽</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>特尾大小</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>合尾大小</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>正码1-6单双</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>正码1-6大小</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>正码1-6色波</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>正码1-6合码</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
				<tr>
					<td>正码特A</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
					<td>
						<el-input class='mini-input'></el-input>
					</td>
				</tr>
			</tbody>
		</table>
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
