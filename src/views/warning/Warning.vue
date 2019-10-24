<template>
	<div class="warning">
		<el-card>
			<!-- 头部信息 -->
			<div slot='header'>
				<table>
					<tbody>
						<tr>
							<th class="clearfix" style='background: #f1f1f1;'>
								<div class="fl">
									<el-button type='text' size='mini'>上一期</el-button>
									<span>
										下注期数：106，开奖日期：2018-0808
									</span>
									<el-button type='text' size='mini'>下一期</el-button>
								</div>
								<div class="fr" style='width: 50%;'>
									<el-form inline size='mini' label-width='80px'>
										<el-form-item label='特码'></el-form-item>
										<el-form-item label='即时注单'></el-form-item>
										<el-form-item label='成数'>
											<el-select v-model='cs'>
												<el-option label='成数' :value='1'></el-option>
											</el-select>
										</el-form-item>
										<el-form-item label='盘类'>
											<el-select v-model='pl'>
												<el-option label='全部' :value='1'></el-option>
											</el-select>
										</el-form-item>
									</el-form>
									
								</div>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- 开奖数据 -->
			<h1>香港时间：2018-08-08 14：00：00，<span class="red">已截止下注</span></h1>
			<el-row>
				<el-col :span='6'>
					<table>
						<tbody border>
							<tr>
								<th class="label">号码</th>
								<th class="label">笔数</th>
								<th class="label">金额</th>
								<th class="label">赔率</th>
								<th class="label">输赢</th>
							</tr>
							<tr v-for='item in 10'>
								<th>26</th>
								<th>154</th>
								<th><a href="">10215524</a></th>
								<th>45.500</th>
								<th class="red">-058845215</th>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='6'>
					<table>
						<tbody border>
							<tr>
								<th class="label">号码</th>
								<th class="label">笔数</th>
								<th class="label">金额</th>
								<th class="label">赔率</th>
								<th class="label">输赢</th>
							</tr>
							<tr v-for='item in 10'>
								<th>26</th>
								<th>154</th>
								<th>10215524</th>
								<th>45.500</th>
								<th class="green">8845215</th>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='6'>
					<table>
						<tbody border>
							<tr>
								<th class="label">号码</th>
								<th class="label">笔数</th>
								<th class="label">金额</th>
								<th class="label">赔率</th>
								<th class="label">输赢</th>
							</tr>
							<tr v-for='item in 10'>
								<th>26</th>
								<th>154</th>
								<th>10215524</th>
								<th>45.500</th>
								<th>-058845215</th>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='6'>
					<table>
						<tbody border>
							<tr>
								<th class="label">号码</th>
								<th class="label">笔数</th>
								<th class="label">金额</th>
								<th class="label">赔率</th>
								<th class="label">输赢</th>
							</tr>
							<tr v-for='item in 10'>
								<th>26</th>
								<th>154</th>
								<th>10215524</th>
								<th>45.500</th>
								<th>-058845215</th>
							</tr>
						</tbody>
					</table>
				</el-col>
			</el-row>
			<!-- 合计信息 -->
			<p class="clearfix total">
				<span class='fl'>合计：1230笔，金额：12314564</span>
				<el-form inline size='mini' label-width='80px' class='fl'>
					<el-form-item label='赔率'>
						<el-select v-model='total_pl'>
							<el-option label='当前赔率' :value='1'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='盘类'>
						<el-select v-model='total_show'>
							<el-option label='全部' :value='1'></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label='更新频率'>
						<el-select v-model='update_pl'>
							<el-option label='不更新' :value='1'></el-option>
						</el-select>
					</el-form-item>
				</el-form>
			</p>
			<!-- 类别 -->
			<el-row :gutter='10'>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
						</tbody>
					</table>
				</el-col>
				<el-col :span='4'>
					<table border>
						<tbody>
							<tr>
								<td class="label">类别</td>
								<td class="label">笔数</td>
								<td class="label">金额</td>
								<td class="label">赔率</td>
								<td class="label">输赢</td>
							</tr>
							<tr>
								<td>特单</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>特双</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>合计</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
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
