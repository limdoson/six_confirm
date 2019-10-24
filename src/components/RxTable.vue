<!-- 
	简单二次封装table组件
	ctrl-column 为放置表格操作按钮的插槽
	pagination-slot 为方式批量操作按钮的插槽
	如果需要设置column的值 table_header可以传入一个对象值
	例 ： 
		data () {
			retrun {
				table_header ： {
					name : {
						label : "姓名"，
						width : 1000,     --tableColumn宽度,如果slot为true，该字段失效
						preBuffer : '￥'， --前置字段属性部分，如：后端返回的money值为100，如果设置了preBuffer,显示的内容将变成 ￥100
						endBuffer : '',   --字段结束后多显示的部分
						uri : '#/index/org/add-branch',   --需要条件的前置链接
						params_key : 'id',  --参数名字  如果有多参数，只能传一个值
						window_width : 1200,  --打开窗口的宽度
						window_height : 700,   --打开窗口的高度
						window_left : 50,   --打开窗口距离视口左边的距离
						slot : true, --是否需要自定义插槽，如果需要，slot传入true，slot的名称与key名一致
						slotabled : true, --是否可排序，默认false
						filter : true, --如果传入该属性，则会启用table的过滤功能
					},
					sex : '姓别'
				}
			}
		}
 -->
<template>
	<div class="rx-table">
		<el-table
			v-if='table_header_handle'
			row-key='id'
			border
			:max-height='max_table_height'
			@select-all='selectAll'
			@selection-change='selectionChange'
			:header-cell-style = "{backgroundColor: '#fafafa'}"
			:data='tableData'>
			<el-table-column type='selection' width='50' v-if='showSelectionColumn'></el-table-column>
			<el-table-column type='index' width='60' :reserve-selection='true' v-if='showIndexColumn'></el-table-column>
			<template v-for='(value,key,index) in table_header_handle' >
				<!-- 判断该节点是否启用插槽，如果启用插槽，则插槽的name就是table_header_handle的key值 -->
				<template v-if="table_header_handle[key]['slot']">
					<!-- <el-table-column>
						{{key}}
					</el-table-column> -->
					<slot :name='key'>
						
					</slot>
				</template>
				<template v-else>
					<template v-if="table_header_handle[key]['uri'] || table_header_handle[key]['preBuffer']">
						<!-- 是否数据过滤 -->
						<template v-if="table_header_handle[key]['filter']">
							<el-table-column
								:key="key"
								:prop='key'
								:filters="table_header_handle[key]['filterData']"
								:filter-method="filterHandler"
								:sortable="table_header_handle[key]['sortabled'] ? table_header_handle[key]['sortabled'] : false"
								:label=" table_header_handle[key]['label'] "
								:width='`${table_header_handle[key].width}px`'>
								<template slot-scope='scope'>
									<el-button
										type='text'
										size='mini'
										v-if="table_header_handle[key]['uri'] && table_header_handle[key]['params_key']"
										@click="openWindow(table_header_handle[key],scope.row)">
										{{scope.row[key]}}
									</el-button>
									<span v-if="table_header_handle[key]['preBuffer']">
										{{table_header_handle[key]['preBuffer']}}{{scope.row[key]}}
									</span>
								</template>
							</el-table-column>
						</template>
						<template v-else>
							<el-table-column
								:key="key"
								:prop='key'
								:sortable="table_header_handle[key]['sortabled'] ? table_header_handle[key]['sortabled'] : false"
								:label=" table_header_handle[key]['label'] "
								:width='`${table_header_handle[key].width}px`'>
								<template slot-scope='scope'>
									<el-button
										type='text'
										size='mini'
										v-if="table_header_handle[key]['uri'] && table_header_handle[key]['params_key']"
										@click="openWindow(table_header_handle[key],scope.row)">
										{{scope.row[key]}}
									</el-button>
									<span v-if="table_header_handle[key]['preBuffer']">
										{{table_header_handle[key]['preBuffer']}}{{scope.row[key]}}
									</span>
								</template>
							</el-table-column>
						</template>
					</template>
					<template v-else>
						<!-- 是否使用数据过滤 -->
						<template v-if="table_header_handle[key]['filter']">
							<el-table-column
								:key="key"
								:prop='key'
								:filters="table_header_handle[key]['filterData']"
								:filter-method="filterHandler"
								:sortable="table_header_handle[key]['sortabled'] ? table_header_handle[key]['sortabled'] : false"
								:label=" table_header_handle[key]['label']"
								:width='`${table_header_handle[key].width}px`'></el-table-column>
						</template>
						<template v-else>
							<el-table-column
								:key="key"
								:prop='key'
								:sortable="table_header_handle[key]['sortabled'] ? table_header_handle[key]['sortabled'] : false"
								:label=" table_header_handle[key]['label']"
								:width='`${table_header_handle[key].width}px`'>
							</el-table-column>
						</template>
					</template>
					
				</template>
			</template>
			<!-- 表格尾部操作插槽 -->
			<slot>
				
			</slot>
		</el-table>
		<rx-pagination
			v-if='showPagination'
			:page ='page'
			:size='size'
			:total = 'total'
			@size-change='sizeChange'
			@current-change='currentChange'>
			<!-- 批量操作按钮插槽 -->
			<slot name='pagination-slot'></slot>
		</rx-pagination>
	</div>
</template>

<script>
	import RxPagination from '@c/RxPagination'
	export default {
		components: {RxPagination},
		props : {
			//多选数据
			value : {
				type : Array,
				default : () => []
			},
			//表格数据
			tableData : {
				type : Array,
				default : () => []
			},
			//表头
			tableHeader : {
				type : Object,
				default : null
			},
			//当前页码
			page : {
				type :Number,
				default : 1
			},
			//
			size : {
				type : Number,
				default :20
			},
			//总计数据量
			total : {
				type : Number,
				default : 0
			},
			//表格高度
			tableHeight : {
				type : Number,
				default : null
			},
			//是否显示分页器
			showPagination : {
				type : Boolean,
				default : true
			},
			//是否显示序号
			showIndexColumn : {
				type : Boolean,
				default : true
			},
			//是否显示多选框
			showSelectionColumn : {
				type : Boolean,
				default : true
			}
		},
		data () {
			return {
				//多选中的已选数据
				selected_list : this.value,
				table_header_handle : null
			}
		},
		computed : {
			//表格高度
			max_table_height () {
				if (this.tableHeight) {
					return this.tableHeight
				} else {
					return this.$cfg.default_table_height
				}
			}
		},
		created () {
			// console.log(this.tableHeader)
		},
		methods : {
			openWindow(table_header_item,row) {
				
				let uri = table_header_item.params_key ? `${table_header_item['uri']}/${row[table_header_item['params_key']]}` : null;
				
				if (!uri) {
					return;
				}
				this.$rxfn.openWindow(uri, table_header_item.window_width, table_header_item.window_height, table_header_item.window_left)
			},
			//全选方法 
			selectAll (selection) {
				this.selected_list = selection;
				this.$emit('input',this.selected_list)
			},
			//选项放生变化时的监听方法
			selectionChange (selection) {
				this.selected_list = selection;
				this.$emit('input',this.selected_list)
			},
			//页码切换函数，从这里再网上级组件传递
			currentChange (page) {
				this.$emit('current-change',page)
			},
			//size切换函数
			sizeChange (size) {
				this.$emit('size-change',size)
			},
			//数据过滤方法
			filterHandler (value, row, column) {
				const property = column['property'];
				return row[property] === value;
			}
		},
		watch :{
			value (n) {
				this.selected_list = n;
			},
			tableData : {
				handler (n) {
					if (n && n.length > 0) {
						//如果tableHeader中有filter属性，则根据tableHeader结合tableData，构造出数据过滤的filterData
						for (let key in this.tableHeader) {
							if (this.tableHeader[key]['filter']) {
								this.tableHeader[key]['filterData'] = this.tableData.map(item => {
									return {
										text : item[key],
										value : item[key],
									}
								})
							}
						}
						
					}
					this.table_header_handle = this.tableHeader;
					this.$forceUpdate()
				},
				immediate :true,
				deep :true
			}
		}
	}
</script>
