<template>
	<el-dialog
		:title='title'
		:visible.sync="dialogVisible"
		:close-on-click-modal='false'
		:close-on-press-escape='false'
		:show-close='false'
		:width='d_width'>
		<slot ></slot>
		<span slot="footer" class="dialog-footer">
		    <el-button @click="dialogCancel" size='mini'>取 消</el-button>
		    <el-button type="primary" @click="dialogConfirm"  size='mini'>确 定</el-button>
		</span>
	</el-dialog>
</template>

<script>
	export default {
		props : {
			//dialog标题
			title : {
				type : String,
				default : null
			},
			//是否显示
			value : {
				type : Boolean,
				default : false
			},
			//传入的dialog宽度
			width :{
				default : null
			}
		},
		data () {
			return {
				dialogVisible : this.value,
			}
		},
		created () {
			
		},
		
		methods : {
			//取消，edmit一个dialogCancel事件,如需参数，在方法中添加即可
			dialogCancel () {
				this.$emit('input', false);
				this.$emit('dialog-cancel')
			},
			//确认，edmit一个dialogConfirm事件,如需参数，在方法中添加即可
			dialogConfirm () {
				this.$emit('dialog-confirm')
			}
		},
		watch : {
			value (n) {
				this.dialogVisible = n;
			}
		},
		computed: {
			//dialog宽度
			d_width () {
				if (this.width) {
					return this.width
				} else {
					return '40%'
				}
			}
		}
	}
</script>
