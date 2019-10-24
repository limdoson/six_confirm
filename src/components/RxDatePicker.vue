<template>
	<el-date-picker
		v-model="result"
		type="date"
		:format='format'
		:value-format = 'valueFormat'
		:readonly='readonly'
		@change='selectDate'
		placeholder="选择日期">
	</el-date-picker>
</template>

<script>
	export default {
		components: {},
		props :{
			value :{
				default : null
			},
			format : {
				type : String,
				default : 'yyyy-MM-dd'
			},
			valueFormat :{
				type : String,
				default : 'yyyy-MM-dd'
			},
			readonly : {
				type :Boolean,
				default : false
			}
		},
		data () {
			return {
				result : this.value
			}
		},
		created () {
			
		},
		
		methods : {
			selectDate () {
				this.$emit('input', this.result)
			}
		},
		watch : {
			value (n) {
				this.result = n;
			}
		}
	}
</script>
<style scoped lang='less'>
	.el-date-editor.el-input, .el-date-editor.el-input__inner {
		width: 170px;
	}
</style>
