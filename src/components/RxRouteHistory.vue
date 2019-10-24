<template>
	<div class="rx-route-history">
		<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
			<el-tab-pane
				:key="item.name"
				v-for="(item, index) in editableTabs"
				:label="item.title"
				:name="item.name"
			 ></el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		components: {},
		data () {
			return {
				editableTabsValue : '2',
				editableTabs: [{
					title: 'Tab 1',
					name: '1',
					content: 'Tab 1 content'
				},{
					title: 'Tab 2',
					name: '2',
					content: 'Tab 2 content'
				}],
				tabIndex: 2
			}
		},
		created () {
			
		},
		
		methods : {
			handleTabsEdit(){
				
			}
		},
	}
</script>
