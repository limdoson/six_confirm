/*
	工具类
 */
import Vue from 'vue';

class Utils extends Vue {
    constructor () {
        super();
		this.loading = null; //用来全局存储elementui的laoding，便于在http中关闭
		this.treeCheckResult = [];
    }
	//loading 方法
	loading () {
		this.loading = this.$loading({
			lock: true,
			text: '数据处理中，请稍后...',
			spinner: 'el-icon-loading',
			background: 'rgba(0, 0, 0, 0.7)'
		});
		return this.loading;
	}
	/*
	 elementUI confirm方法
	 */
	rxAlert (msg = null,cb) {
		if (!msg) {
		   throw new Error('utils类中msg方法缺省必要参数msg')
		}
		this.$confirm(msg,'提示',{
		    confirmButtonText: '确定',
		    cancelButtonText: '取消',
			confirmButtonClass :'alert-confirm',
		}).then( ()=> {
		    cb && cb();
		}).catch( ()=> {
			
		})
	}
	/*
	 elementUI message方法
	 */
	rxMsg (message,type='success') {
		if (!message) {
		   throw new Error('utils类中rxMsg方法缺省必要参数msg');
		   return;
		}
		this.$message({
			message,
			type,
			duration : 1800
		})
	}
}

export default new Utils;