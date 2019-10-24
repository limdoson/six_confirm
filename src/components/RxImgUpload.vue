<template>
	<div>
		<el-upload
			class="avatar-uploader"
			:action="`${$cfg.upload_url}`"
			name ='uploadFile'
			:show-file-list="false"
			:on-success="success"
			:before-upload="before">
			<img v-if="show_img_url" :src="show_img_url" class="avatar" width='80px' height='80px'>
			<el-button type='primary' size='mini' v-else>点击上传</el-button>
		</el-upload>
	</div>
</template>

<script>
	export default {
		props : {
			value : {
				default : null
			},
			path :{
				type :String,
				default :null
			}
		},
		components: {},
		data () {
			return {
				result : this.value,
				show_img_url : this.page ? `${this.$cfg.img_doman}/${this.path}` :null
			}
		},
		created () {
			
		},
		
		methods : {
			before () {
				
			},
			success (res,file,fileList) {
				if (res.code == 200) {
					this.result = res.data.id;
					this.show_img_url = `${this.$cfg.img_doman}/${res.data.filePath}`;
					this.$emit('input',this.result)
				} else {
					this.$utils.rxAlert(res.data.msg)
				}
				
			}
		},
		watch : {
			value (n) {
				this.result = n;
			},
			path (n){
				console.log(n)
				this.show_img_url =  `${this.$cfg.img_doman}/${n}`
			}
		}
	}
</script>
