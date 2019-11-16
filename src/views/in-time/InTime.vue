<template>
	<div class="in-time">
		<el-card>
			<div slot='header'>
				<div class="clearfix header">
					<span class="fl">
						<el-button type='text' size='mini'>上一期</el-button>
						[下注期数：124，开奖日：2018-08-08]
						<el-button type='text' size='mini'>上一期</el-button>
					</span>
					<span class="fr clearfix">
						<el-form inline size='mini' class="fl">
							<el-form-item label='特码'></el-form-item>
							<el-form-item label='即时注单'></el-form-item>
							<el-form-item label='成数'>
								<el-select>
									<el-option label='成数'></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label='盘类'>
								<el-select>
									<el-option label='全部'></el-option>
								</el-select>
							</el-form-item>
						</el-form>
					</span>
				</div>
				<ul class="type-list clearfix">
					<router-link tag='li' to='/index/in-time' exact>
						特码（<span class="red">21212</span>）
					</router-link>
					<router-link tag='li' to='/index/in-time/hexiao' >
						合肖（<span class="red">21212</span>）
					</router-link>
					<router-link tag='li' to='/index/in-time/zhengma'>
						正码（<span class="red">21212</span>）
					</router-link>
					<router-link tag='li' to='/index/in-time/zhengmate'>
						正码特（<span class="red">21212</span>）
					</router-link>
					<router-link tag='li' to='/index/in-time/yixiaoweishu'>
						一肖尾数（<span class="red">21212</span>）
					</router-link>
					<router-link tag='li' to='/index/in-time/lianma'>
						连码（<span class="red">21212</span>）
					</router-link>
					<router-link tag='li' to='/index/in-time/zixuanbuzhong'>
						自选不中（<span class="red">21212</span>）
					</router-link>
					<router-link tag='li' to='/index/in-time/lianxiao'>
						连肖（<span class="red">21212</span>）
					</router-link>
					<router-link tag='li' to='/index/in-time/lianwei'>
						连尾（<span class="red">21212</span>）
					</router-link>
					<router-link tag='li' to='/index/in-time/all'>
						全部（<span class="red">21212</span>）
					</router-link>
					
					<!-- <li>
						特码（<span class="red">21212</span>）
					</li>
					<li>
						合肖（<span class="red">21212</span>）
					</li>
					<li>
						正码（<span class="red">21212</span>）
					</li>
					<li>
						正码特（<span class="red">21212</span>）
					</li>
					<li>
						一肖位数（<span class="red">21212</span>）
					</li>
					<li>
						连码（<span class="red">21212</span>）
					</li>
					<li>
						特码（<span class="red">21212</span>）
					</li>
					<li>
						特码（<span class="red">21212</span>）
					</li>
					<li>
						特码（<span class="red">21212</span>）
					</li>
					<li>
						特码（<span class="red">21212</span>）
					</li> -->
				</ul>
			</div>
			<h1 class="time">
				香港时间：2018-10-10 16：45：45，<span class="red">已停止下注</span>
			</h1>

			<router-view></router-view>
		</el-card>
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
