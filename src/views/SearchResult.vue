<template>
	<div class="search-result">
		<header>
			<div class="search-input clearfix">
				<el-input class='fl'></el-input>
				<el-button class='fl' type='primary' icon='el-icon-search' @click='search'>搜索</el-button>
			</div>
		</header>
		<ul class="result">
			<li>
				<a href="http://localhost:8080/#/login" target="_blank">网页名称</a>
				<p>
					文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明
				</p>
			</li>
			<li>
				<a href="" target="_blank">网页名称</a>
				<p>
					文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明
				</p>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				
			}
		},
		created () {},
		methods : {
			
		}
	}
</script>
