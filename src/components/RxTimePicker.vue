<template>
	<el-time-picker
		v-model='result'
		placeholder='选择时间'
		format='HH:mm:ss'
		value-format='HH:mm:ss'
		@change='change'
		:picker-options="{
			selectableRange: '06:30:00 - 23:30:00'
		}">
	</el-time-picker>
</template>

<script>
	export default {
		props: {
			value :{
				default : null
			}
		},
		components: {},
		data () {
			return {
				result : this.value
			}
		},
		created () {
			
		},
		
		methods : {
			change () {
				this.$emit('input',this.result)
			}
		},
		watch : {
			value (n) {
				this.result = n;
			}
		}
	}
</script>
