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
						<router-link tag='a' to='/index/fly' exact>
							特码（<span class="red">0</span>）
						</router-link>
					</el-col>
					<el-col :span='2'> 
						<router-link tag='a' to='/index/fly/hexiao' >
							合肖（<span class="red">0</span>）
						</router-link>
						
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
				</el-row>
			</div>
			<!-- 开奖数据 -->
			<h1 style="margin-bottom: 8px;">香港时间：2018-08-08 14：00：00，<span class="red">距离下注时间还有：2天12小时48分30秒</span>，<el-button type='primary' size='mini'>资料刷新</el-button></h1>
			<router-view></router-view>
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
