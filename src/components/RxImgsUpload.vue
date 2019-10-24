<template>
	<div class="">
		<el-upload
			:action="`${$cfg.upload_url}`"
			name ='uploadFile'
			list-type="picture-card"
			:on-success="success"
			:on-remove="handleRemove"
			:file-list='files'>
			<i class="el-icon-plus"></i>
		</el-upload>
	</div>
</template>

<script>
	export default {
		props : {
			value : {
				type : Array,
				default : ()=> []
			},
			fileList : {
				type : Array,
				default : ()=> []
			}
		},
		components: {},
		data () {
			return {
				result : this.value,
				files : null
			}
		},
		created () {
			// console.log(this.fileList)
		},
		
		methods : {
			success (res,file,fileList) {
				if (res.code == 200) {
					console.log(res)
					this.result.push(res.data.id);
					this.$emit('input',this.result)
				} else {
					this.$utils.rxAlert(res.data.msg)
				}
			},
			handleRemove (file) {
				this.$http.request({
					method :'delete',
					url : '/api/v1/shopPhoto/deleteById',
					params :{
						id : file.id
					}
				}).then(res => {
					this.$utils.rxMsg('删除成功');
				})
			}
		},
		watch :{
			value (n) {
				this.result = n;
			},
			fileList (n) {
				if (n && n.length) {
					n.map(item =>{
						item.url = `${this.$cfg.img_doman}/${item.filePath}`
					})
					this.files = n
				}
			}
		}
	}
</script>
