<template>
	<div class="system">
		<el-row :gutter='15'>
			<el-col :span='3'>
				<el-card>
					<ul class="menu">
						<router-link tag='li' to='/index/system'>系统设定</router-link>
						<router-link tag='li' to='/index/system/basic-peilv'>基本赔率设定</router-link>
						<router-link tag='li' to=''>基本退水限额</router-link>
						<router-link tag='li' to='/index/system/auto-peilv'>自动赔率设定</router-link>
						<router-link tag='li' to=''>走飞站名设定</router-link>
						<router-link tag='li' to='/index/system/quota-record'>占成/额度记录</router-link>
						<router-link tag='li' to='/index/system/inline-person'>线上人员</router-link>
						<router-link tag='li' to='/index/system/ip-search'>账号/IP搜寻</router-link>
						<router-link tag='li' to=''>变更密码</router-link>
						<router-link tag='li' to=''>停用闲置账号</router-link>
						<router-link tag='li' to=''>注单明细下载</router-link>
						<router-link tag='li' to='/index/system/change-record'>修改记录查询</router-link>
						<router-link tag='li' to=''>注单取消</router-link>
						<router-link tag='li' to=''>IP黑名单</router-link>
					</ul>
				</el-card>
			</el-col>
			<el-col :span='21'>
				<el-card>
					<router-view></router-view>
				</el-card>
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
