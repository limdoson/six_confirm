<template>
	<el-container :style="{height}">
		<slot></slot>
	</el-container>
</template>

<script>
	export default {
		props : {
			container_height :{
				type : Number,
				default :null
			}
		},
		components: {},
		data () {
			return {
				
			}
		},
		created () {
			
		},
		computed:  {
			height () {
				if (this.container_height) {
					return `${this.container_height}px`
				} else {
					return `${window.innerHeight - 40 - 50 - 10}px`
				}
			}
		},
		methods : {
			
		},
	}
</script>
