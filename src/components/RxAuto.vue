<template>
	<el-autocomplete
		v-model="input"
		:fetch-suggestions="querySearch"
		placeholder="请输入内容"
		:trigger-on-focus="false"
		clearable
		@select="handleSelect">
		<template slot-scope='{item}'>
			{{item.selectName}}
		</template>
	</el-autocomplete>
</template>

<script>
	export default {
		components: {},
		props : {
			value : {
				default : null
			},
			code : {
				type : String,
				default : null
			}
		},
		data () {
			return {
				input : null,//输入的值
			}
		},
		created () {
			
		},
		
		methods : {
			querySearch (qs,cb) {
				this.$http.request({
					method :'get',
					url : '/api/v1/selectComponent/getBySelectName',
					params : {
						selectType : this.code,
						selectName :qs
					}
				}).then(res => {
					cb(res.data)
				})
			},
			handleSelect (item) {
				this.input = item.selectName
				this.$emit('input', item.id)
			}
		},
	}
</script>
