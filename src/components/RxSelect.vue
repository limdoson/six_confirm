<template>
	<el-select 
		:disabled = 'disabled'
		@change='handleChange'
		:multiple ='multiple'
		v-model='result'>
		<template v-if='diyCode'>
			<el-option v-for='item in options' :key='item.id' :label='item[optionLabel]' :value='item.id'></el-option>
		</template>
		<!-- 普通的字典 -->
		<template v-else>
			<el-option v-for='item in options' :key='item.id' :label='item.detailName' :value='item.detailCode'></el-option>
		</template>
	</el-select>
</template>

<script>
	export default {
		props : {
			value : {
				default : null
			},
			//字典code
			code : {
				type :String,
				default : null
			},
			//diyCode : 是否不用code，而使用自定义的code类型
			diyCode : {
				type : Boolean,
				default : false
			},
			//自定义code需要传入的参数
			params : {
				default : null
			},
			optionLabel : {
				type : String,
				default : null
			},
			//是否禁用
			disabled :{
				type : Boolean,
				default : false
			},
			//是否允许多选
			multiple : {
				type :Boolean,
				default : false
			}
		},
		components: {},
		data () {
			return {
				result : this.value,
				options : null,//选项数据
			}
		},
		created () {
			this.getData()
		},
		watch : {
			value (n) {
				this.result = n
			}
		},
		methods : {
			getData () {
				if (this.diyCode) {
					switch (this.code){
						//获取部门下的角色
						case 'roles_in_dept': 
							this.getRolesInDept()
							break;
						//组织架构下的门店
						case 'shop_in_org':
							this.getShopsInOrg()
						default:
							break;
					}
				} else {
					this.$http.request({
						method : 'get',
						url : '/api/v1/selectComponent/getByCodeName',
						params :{
							code : this.code
						}
					}).then(res => {
						this.options = res.data;
					})
				}
				
			},
			//获取部门下的角色
			getRolesInDept () {
				this.$http.request({
					method : 'get',
					url : '/api/v1/role/getListByDepartmentId',
					params :{
						departmentId : this.params
					}
				}).then(res => {
					this.options = res.data;
				})
			},
			getShopsInOrg () {
				this.$http.request({
					method : 'get',
					url : '/api/v1/department/getTreeWithoutUserAndDept',
					params :{
						departmentId : this.params
					}
				}).then(res => {
					this.options = res.data;
				})
			},
			handleChange () {
				this.$emit('input',this.result)
			}
		},
		
	}
</script>
