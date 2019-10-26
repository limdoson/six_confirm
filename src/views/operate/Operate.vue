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
					<el-col :span='3'>
						<el-button type='primary' size='mini'>记录</el-button>
						<el-button type='danger' size='mini'>立即停止下注</el-button>
					</el-col>
				</el-row>
			</div>
			<!-- 开奖数据 -->
			<h1 style="margin-bottom: 8px;">香港时间：2018-08-08 14：00：00，<span class="red">距离下注时间还有：2天12小时48分30秒</span>，目前总连线数<span class="red">0</span>，<el-button type='primary' size='mini'>启动走飞</el-button></h1>
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
			<!-- 快选 -->
			<el-row style='font-size: 12px;'>
				<el-col :span='1'>
					快选
				</el-col>
				<el-col :span='12'>
					<ul class="check-quickly clearfix">
						<li class="fl">红</li>
						<li class="fl">蓝</li>
						<li class="fl">绿</li>
						<li class="fl">单</li>
						<li class="fl">双</li>
						<li class="fl">大</li>
						<li class="fl">小</li>
						<li class="fl">合单</li>
						<li class="fl">合双</li>
						<li class="fl">家禽</li>
						<li class="fl">野兽</li>
						<li class="fl">尾大</li>
						<li class="fl">尾小</li>
						<li class="fl">合尾大</li>
						<li class="fl">合尾小</li>
						<li class="fl">大单</li>
						<li class="fl">大双</li>
						<li class="fl">小单</li>
						<li class="fl">小双</li>
					</ul>
					<ul class="check-quickly clearfix">
						<li class="fl">红单</li>
						<li class="fl">红双</li>
						<li class="fl">红大</li>
						<li class="fl">红小</li>
						<li class="fl">蓝单</li>
						<li class="fl">蓝双</li>
						<li class="fl">蓝大</li>
						<li class="fl">蓝小</li>
						<li class="fl">绿单</li>
						<li class="fl">绿双</li>
						<li class="fl">绿大</li>
						<li class="fl">绿小</li>
						<li class="fl">前10</li>
						<li class="fl">前5</li>
						<li class="fl">全部</li>
					</ul>
					<div class="clearfix">
						<p class="fl">增量</p>
						<ul class="check-quickly clearfix fl">
							<li class="fl">5</li>
							<li class="fl">4</li>
							<li class="fl">3</li>
							<li class="fl">2</li>
							<li class="fl">1</li>
							<li class="fl">0.5</li>
							<li class="fl">0.4</li>
							<li class="fl">0.3</li>
							<li class="fl">0.2</li>
							<li class="fl">0.1</li>
							<li class="fl">0.05</li>
							<li class="fl">0.04</li>
							<li class="fl">0.03</li>
							<li class="fl">0.02</li>
							<li class="fl">0.01</li>
						</ul>
					</div>
					
				</el-col>
				<el-col :span='11'>
					<el-form inline size='mini' style='margin-bottom: 6px;'>
						<el-form-item label='热门号码'>
							<el-input></el-input>
						</el-form-item>
						<el-form-item label='单注限额'>
							<el-input></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type='primary' size='mini'>确定</el-button>
							<el-button type='primary' size='mini'>清除</el-button>
						</el-form-item>
					</el-form>
					<el-form inline size='mini' style='margin-bottom: 6px;'>
						<el-form-item label='大单视窗提示'>
							<el-checkbox></el-checkbox>
						</el-form-item>
						<el-form-item label='大单音效提示'>
							<el-checkbox></el-checkbox>
						</el-form-item>
						<el-form-item>
							<el-button type='primary' size='mini'>确定</el-button>
							<el-button type='primary' size='mini'>清除</el-button>
						</el-form-item>
					</el-form>
					<el-form inline size='mini' style='margin-bottom: 6px;'>
						<el-form-item label='补货赔率'>
							<el-input></el-input>
						</el-form-item>
						<el-form-item label='最大输值'>
							<el-input></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type='primary' size='mini'>补货计算</el-button>
						</el-form-item>
					</el-form>
				</el-col>
			</el-row>
			<!-- 类别 -->
			<el-row :gutter='10'>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">金额</td>
								<td class="label">输赢</td>
								<td class="label">赔率</td>
								<td class="label">操盘</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<th>
									<span class="plus">-</span>
									<span class="minas">+</span>
								</th>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<th>
									<span class="plus">-</span>
									<span class="minas">+</span>
								</th>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<th>
									<span class="plus">-</span>
									<span class="minas">+</span>
								</th>
							</tr>
						</tbody>
					</table>
				</el-col>
			</el-row>
			<div class="clearfix" style="font-size: 12px;">
				<p class="fl">增量</p>
				<ul class="check-quickly clearfix fl">
					<li class="fl">5</li>
					<li class="fl">4</li>
					<li class="fl">3</li>
					<li class="fl">2</li>
					<li class="fl">1</li>
					<li class="fl">0.5</li>
					<li class="fl">0.4</li>
					<li class="fl">0.3</li>
					<li class="fl">0.2</li>
					<li class="fl">0.1</li>
					<li class="fl">0.05</li>
					<li class="fl">0.04</li>
					<li class="fl">0.03</li>
					<li class="fl">0.02</li>
					<li class="fl">0.01</li>
				</ul>
			</div>
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
