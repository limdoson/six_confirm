<template>
	<el-cascader
		v-model='result'
		:options='options'
		:props='props'
		:show-all-levels="false"
		@change='handleChange'>
	</el-cascader>
</template>

<script>
	import countryData from '@u/country-data'
	export default {
		props :{
			value : {
				type : Array,
				default : ()=> []
			},
			props : {
				type : Object,
				default : ()=> {
					
				}
			},
			type :{
				type : String,
				default : 'country'
			},
		},
		components: {},
		data () {
			return {
				result : this.result,//结果
				options : null,//选项数据
			}
		},
		created () {
			this.getData();
		},
		
		methods : {
			getData () {
				switch (this.type){
					case 'country'://默认是城市数据
						this.options = countryData;
						break;
					case 'role'://部门+角色
						this.getRoleData();
						break;
					case 'org_width_user' : //组织架构
						this.getOrgWidthUserData();
						break;
					case 'org_width_shop' ://组织结构下的门店
						this.getOrgWidthShopData();
						break;
					default:
						break;
				}
			},
			handleChange () {
				this.$emit('input',this.result)
			},
			getRoleData(){
				this.$http.request({
					method : 'get',
					url : '/api/v1/department/getTreeWithRole',
				}).then(res =>{
					this.options = [res.data]
				})
			},
			getOrgWidthUserData () {
				this.$http.request({
					url : '/api/v1/department/getTreeWithUser',
					method : 'get'
				}).then(res => {
					this.options = [res.data];
				})
			},
			getOrgWidthShopData () {
				this.$http.request({
					method : 'get',
					url : '/api/v1/department/getTreeWithoutUserAndDept',
				}).then(res => {
					this.options = [res.data];
				})
			},
		},
		watch : {
			value (n) {
				if (n && Array.isArray(n)) {
					this.result = n;
				} else {
					this.result = []
				}
			}
		}
	}
</script>
