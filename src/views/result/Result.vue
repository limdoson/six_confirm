<template>
	<div class="">
		<el-card>
			<div class="clearfix" slot='header'>
				开奖结果
				
			</div>
			<el-table
				border
				:data='list'
				:header-cell-style="{background :'#f1f1f1'}">
				<el-table-column label='期数' prop='qs'></el-table-column>
				<el-table-column label='星期' prop='xq'></el-table-column>
				<el-table-column label='日期' prop='rq'></el-table-column>
				<el-table-column label='彩球号码' prop='cqhm' width='200'>
					<template slot-scope='{row}'>
						<div class="ball-list">
							<span class="ball red-ball" v-for='item in row.cqhm' :key='item'>{{item}}</span>
						</div>
					</template>
				</el-table-column>
				<el-table-column label='特(单双)' prop='tds'></el-table-column>
				<el-table-column label='特(大小)' prop='tdx'></el-table-column>
				<el-table-column label='特(大中小)' prop='tdzx'></el-table-column>
				<el-table-column label='总分' prop='zf'></el-table-column>
				<el-table-column label='总单双' prop='zds'></el-table-column>
				<el-table-column label='总大小' prop='dzx'></el-table-column>
				<el-table-column label='生肖' prop='sx'></el-table-column>
				<el-table-column label='合(单双)' prop='hds'></el-table-column>
				<el-table-column label='合(大小)' prop='hdx'></el-table-column>
				<el-table-column label='一肖' prop='yx'>
					<template v-slot="{row}">
						<div class="yx-list" >
							<span v-for='item in row.yx' :key='item'>{{item}}</span>
						</div>
					</template>
				</el-table-column>
				<el-table-column label='波' prop='bd'></el-table-column>
			</el-table>
			<el-pagination
				background
				layout="prev, pager, next"
				:total="1000">
			</el-pagination>
		</el-card>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				list : [
					{
						qs : 105,
						xq : '一',
						rq : '2018-08-08',
						cqhm : [
							1,2,3,4,5,6,7
						],
						tds : '单',
						tdx : '小',
						tdzx : '大',
						zf : '110',
						zds : '双',
						dzx : '小',
						sx : '蛇',
						hds : '单',
						hdx: '小',
						yx : [
							'猴',
							'蛇',
							'猪'
						],
						bd : '红'
					}
				],
				
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
