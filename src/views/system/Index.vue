<template>
	<div class="">
		<el-row :gutter='20'>
			<el-col :span='6'>
				<p>六合彩设定</p>
				<el-form label-width='120px' size='mini'>
					<el-form-item label='每期开盘时间'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='连码截止时间'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='正码截止时间'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='网页截止时间'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='特码截止时间'>
						<el-input></el-input>
					</el-form-item>
				</el-form>
				<hr>
				<el-form label-width='120px' size='mini'>
					<el-form-item label='登录密码容错次数'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='最小下注金额'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='最低退水注额'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='本年度的生肖'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='预设最高占成'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='可以改占城日'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='连码支数限制'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='公司子账查看日'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='旧账显示数-管理层'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='旧账显示数-会员'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='信用额度调降模式'>
						<el-input></el-input>
					</el-form-item>
				</el-form>
				<hr>
				<el-form label-width='120px' size='mini'>
					<el-form-item label='特码赔率标B=A-'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='特码赔率标C=A-'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='特码赔率标D=A-'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='网页截止时间'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='特两赔率标B=A-'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='特两赔率标C=A-'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='特两赔率标D=A-'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='连码减倍设定值'>
						<el-input></el-input>
					</el-form-item>
					<el-form-item label='连码减倍最大值'>
						<el-input></el-input>
					</el-form-item>
				</el-form>
			</el-col>
			<el-col :span='15'>
				<p>全系统设定</p>
				<el-form label-width='160px' size='mini'>
					<el-form-item label='全博弈系统维护中'>
						<el-radiogroup>
							<el-radio label='是'></el-radio>
							<el-radio label='否'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='管理层IP显示模式'>
						<el-radiogroup>
							<el-radio label='是'></el-radio>
							<el-radio label='否'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='试玩连接网址'>
						<el-radiogroup>
							<el-radio label='不显示'></el-radio>
							<el-radio label='红色'></el-radio>
							<el-radio label='否'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='系统重大公告'>
						<el-input type='textarea'></el-input>
					</el-form-item>
					<el-form-item label='六合彩管理人员公告'>
						<el-input type='textarea'></el-input>
					</el-form-item>
					<el-form-item label='六合彩会员跑马灯信息'>
						<el-input type='textarea'></el-input>
					</el-form-item>
				</el-form>
				<p class="red">【六合彩-相关设定】</p>
				<el-form label-width='160px' size='mini' inline>
					<el-form-item label='系统维护中'>
						<el-radiogroup>
							<el-radio label='是'></el-radio>
							<el-radio label='否'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='大股东操盘功能'>
						<el-radiogroup>
							<el-radio label='开'></el-radio>
							<el-radio label='关'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='合肖检查双面'>
						<el-radiogroup>
							<el-radio label='是'></el-radio>
							<el-radio label='否'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='颁奖过账中'>
						<el-radiogroup>
							<el-radio label='是'></el-radio>
							<el-radio label='否'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='管理层特码减倍'>
						<el-radiogroup>
							<el-radio label='开'></el-radio>
							<el-radio label='关'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='允许自动走飞'>
						<el-radiogroup>
							<el-radio label='是'></el-radio>
							<el-radio label='否'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='走飞启动中'>
						<el-radiogroup>
							<el-radio label='是'></el-radio>
							<el-radio label='否'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='走飞值盘中修改'>
						<el-radiogroup>
							<el-radio label='开'></el-radio>
							<el-radio label='关'></el-radio>
						</el-radiogroup>
					</el-form-item>
					<el-form-item label='一肖连肖连动'>
						<el-radiogroup>
							<el-radio label='是'></el-radio>
							<el-radio label='否'></el-radio>
						</el-radiogroup>
					</el-form-item>
				</el-form>
				<el-button type='primary'  size='small'>确认修改</el-button>
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
