import RxThemeBtn from '@c/RxThemeBtn'
import RxDialog from '@c/RxDialog'
import RxTable from '@c/RxTable'
import RxForm from '@c/RxForm'
function vComponent(Vue) {
	// 判断组件组件是否已安装
	if(vComponent.installed){
		return;
	}
	Vue.component('RxThemeBtn',RxThemeBtn);
	Vue.component('RxDialog',RxDialog);
	Vue.component('RxTable',RxTable);
	Vue.component('RxForm',RxForm);
}
// 导出组件
export default vComponent