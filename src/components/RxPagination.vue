<!-- 
	分页组件
	@params : 
		page当前页码
		size每页数量量
		total总数据量
	@methods : 
		size-change : size改变时触发
		current-change : page改变时触发
 -->
<template>
	<div class="rx-pagination s-b">
		<slot>
			<span></span>
		</slot>
		<el-pagination
			background
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="page"
			:page-sizes="[20, 50, 100]"
			:page-size="size"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total">
		</el-pagination>
	</div>
	
</template>

<script>
	export default {
		props : {
			//页码切换方法
			currentChangeFn : {
				type :Function,
				default : null
			},
			//size切换函数
			sizeChangeFn :{
				type :Function,
				default : null
			},
			page : {
				type :Number
			},
			size : {
				type :Number
			},
			total : {
				type : Number
			}
		},
		components: {},
		data () {
			return {
				
			}
		},
		created () {
			
		},
		
		methods : {
			handleSizeChange (size) {
				this.$emit('size-change',size)
			},
			handleCurrentChange (page) {
				this.$emit('current-change',page)
			}
		},
	}
</script>
