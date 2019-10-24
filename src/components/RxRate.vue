<template>
	<el-rate 
		v-model='result'
		:readonly='readonly'
		:disabled='disabled'
		@change='change'></el-rate>
</template>

<script>
	export default {
		props :{
			value : {
				type :Number,
				default : 0
			},
			readonly : {
				type : Boolean,
				default :false
			},
			disabled : {
				type : Boolean,
				default :false
			}
		},
		components: {},
		data () {
			return {
				result : 0
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
