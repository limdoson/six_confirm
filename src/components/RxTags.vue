<template>
	<div class="">
		<el-tag
			v-for='item in result'
			:key='item'
			closable
			:disable-transitions="false"
			@close="handleClose(item)">{{item}}</el-tag>
		<el-input
			class="input-new-tag"
			v-if="inputVisible"
			v-model="inputValue"
			ref="saveTagInput"
			size="small"
			@keyup.enter.native="handleInputConfirm"
			@blur="handleInputConfirm"
		></el-input>
		<el-button v-else class="button-new-tag" size="mini" @click="showInput" type='primary'>点击添加</el-button>
	</div>
</template>

<script>
	export default {
		props : {
			value : {
				default : null
			}
			
		},
		components: {},
		data () {
			return {
				result : [],
				inputVisible: false,//是否显示输入tag
				inputValue: null,//输入的值
			}
		},
		created () {
			
		},
		
		methods : {
			handleClose(tag) {
				this.result.splice(this.result.indexOf(tag), 1);
				this.$emit('input',this.result)
			},
			showInput() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},
			handleInputConfirm() {
				let inputValue = this.inputValue;
				if (inputValue) {
					this.result.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = null;
				this.$emit('input',this.result)
			}
		},
		watch: {
			value (n) {
				if (typeof n == 'string') {
					this.result = n.splice(',')
				} else {
					this.result = n;
				}
			}
		}
		
	}
</script>
<style scoped lang='less'>
	el-tag + .el-tag {
	    margin-left: 10px;
	}
	.button-new-tag {
	    margin-left: 10px;
	    height: 32px;
	    line-height: 30px;
	    padding-top: 0;
	    padding-bottom: 0;
	}
	.input-new-tag {
	    width: 90px;
	    margin-left: 10px;
	    vertical-align: bottom;
	}
</style>
