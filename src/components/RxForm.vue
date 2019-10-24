<!--
	简单封装el-form
	示例 ： form-config : [
		{
			prop : 'name',  --绑定的字段名称，对应form-data中的属性键，当type=slot时，该字段则作为slot的name属性存在
			label : '姓名'，  --label  form-item的label
			type : 'input',  --form单元的类型 input:输入框 select :下拉选择框
			inputType : 'password', -- type为input时，可传入inputType来标识是那种input类型，值：input[password,textarea]
			placeholder : '请填写员工姓名',  --输入占位符
			disabled : true,  --是否允许操作  默认false
			required : true,  --是否为必填项  默认false
			showInEdit : true, --该字段只在编辑时显示
			code : 'common_status' --当类型为下拉框时，传入code来表明要请求哪个字典表的值，如果数据源不在字典表内，请用slot处理
		}
	]
 -->
<template>
	<div class="rx-form">
		<el-form 
			:inline='inline'
			:rules='rules'
			:size='size'
			:label-width='labelWidth'
			:model='formData'
			ref='rxForm'>
			<template v-for='item in formConfig' >
				<template>
					<el-form-item :key='item.label' :prop='item.prop' :label='item.label' v-if='(item.showInEdit && $route.params.id) || !item.showInEdit'>
						<template v-if="item.type == 'slot'">
							<slot :name='item.prop'></slot>
						</template>
						<!-- 输入框 -->
						<template v-if="item.type =='input'">
							<el-input 
								:placeholder='item.placeholder ? item.placeholder : null' 
								v-model="formData[item.prop]" 
								:disabled =" item.disabled ? item.disabled : false "
								:readonly=" item.readonly ? item.readonly : false"
								:type="item.inputType ? item.inputType : 'input'"></el-input>
						</template>
						<!-- 联级选择器  需要传入optiontype类型数据 -->
						<template v-if="item.type == 'cascader'">
							<rx-cascader 
								:disabled =" item.disabled ? item.disabled : false "
								:readonly=" item.readonly ? item.readonly : false"
								:type='item.optionType' 
								:props='item.props'
								v-model="formData[item.prop]"></rx-cascader>
						</template>
						<!-- 下单框，传入字典code -->
						<template v-if="item.type == 'select'">
							<rx-select 
								:disabled =" item.disabled ? item.disabled : false "
								:readonly=" item.readonly ? item.readonly : false"
								:code='item.code'
								:diyCode='item.diyCode ? true : false'
								:option-label='item.optionLabel ? item.optionLabel : null'
								:params ='item.params'
								:multiple =' item.multiple ? item.multiple : false'
								v-model='formData[item.prop]'></rx-select>
						</template>
						<!-- 单图上传 -->
						<template v-if="item.type == 'img-upload'">
							<RxImgUpload :upload-type="item.upload_type ? item.upload_type : 'single-img'"></RxImgUpload>
						</template>
						<!-- 日期选择 -->
						<template v-if="item.type == 'date-pick'">
							<rx-date-picker 
								v-model='formData[item.prop]'
								:format='item.format ? item.format : null'
								:value-format='item.valueFormat ? item.valueFormat : null'
								:readonly='item.readonly ? item.readonly : false'></rx-date-picker>
						</template>
						<!-- 时间选择 -->
						<template v-if="item.type == 'time-pick'">
							<rx-time-picker 
								v-model='formData[item.prop]' 
								:format='item.format ? item.format : null'
								:value-format='item.valueFormat ? item.valueFormat : null'></rx-time-picker>
						</template>
						<!-- tags -->
						<template v-if="item.type == 'tags'">
							<rx-tags v-model='formData[item.prop]'></rx-tags>
						</template>
						<!-- rate -->
						<template v-if="item.type == 'rate'">
							<rx-rate v-model='formData[item.prop]'></rx-rate>
						</template>
						<!-- autocomplete -->
						<template v-if="item.type == 'auto'">
							<rx-auto v-model='formData[item.prop]' :code='item.code'></rx-auto>
						</template>
					</el-form-item>
				</template>
				
			</template>
			
			<slot name='other-form-item'></slot>
		</el-form>
		<template v-if='showFormFooter'>
			<slot name='form-btns'>
				<div class="center">
					<rx-theme-btn @click.native='formSubmit'>提交并保存</rx-theme-btn>
					<el-button type='default' size='mini' @click='formCancel'>关闭</el-button>
				</div>
			</slot>
		</template>
		
	</div>
</template>

<script>
	import RxCascader from '@c/RxCascader'
	import RxSelect from '@c/RxSelect'
	import RxImgUpload from '@c/RxImgUpload'
	import RxDatePicker from '@c/RxDatePicker'
	import RxTimePicker from '@c/RxTimePicker'
	import RxTags from '@c/RxTags'
	import RxRate from '@c/RxRate'
	import RxAuto from '@c/RxAuto'
	export default {
		components: {
			RxCascader,
			RxSelect,
			RxImgUpload,
			RxDatePicker,
			RxTimePicker,
			RxTags,
			RxRate,
			RxAuto,
		},
		props : {
			//是否为行内表单
			inline : {
				type : Boolean,
				default : true,
			},
			//表单验证规则
			rules : {
				type : Object,
				default : null
			},
			//尺寸
			size : {
				type : String,
				default : 'mini'
			},
			//label-width
			labelWidth :{
				type : String,
				default : '120px'
			},
			//表单表情的数据
			value : {
				type : Object,
				default : null
			},
			//表单配置
			formConfig : {
				type : Array,
				default : null
			},
			//是否显示表单底部的操作按钮
			showFormFooter : {
				type : Boolean,
				default : true
			}
		},
		
		data () {
			return {
				formData : this.value
			}
		},
		created () {
			console.log(this.formConfig)
		},
		
		methods : {
			//提交事假
			formSubmit () {
				this.$refs['rxForm'].validate( (valid)=>{
					if (valid) {
						this.$emit('form-submit')
					} else {
						return false;
					}
				})
			},
			//关闭事假
			formCancel () {
				this.$emit('formCancel');
				window.close()
			}
		},
		watch : {
			value (n) {
				this.formData = n;
			}
		}
	}
</script>
<style scoped lang='less'>
	.el-rate {
		width: 170px;
	}
</style>
