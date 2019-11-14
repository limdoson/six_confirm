<template>
	<div class="search">
		<div class="search-input">
			<img src="../assets/img/logo.svg" alt="" class="search-logo">
			<div class=" clearfix">
				<el-input class='fl'></el-input>
				<el-button class='fl' type='primary' icon='el-icon-search' @click='search'>搜索</el-button>
			</div>
			<ul class="coperation-list clearfix">
				<li class="fl">
					<img src="../assets/img/1.png" alt="">
					<p>斗鱼直播</p>
				</li>
				<li class="fl">
					<img src="../assets/img/1.png" alt="">
					<p>斗鱼直播</p>
				</li>
				<li class="fl">
					<img src="../assets/img/1.png" alt="">
					<p>斗鱼直播</p>
				</li>
				<li class="fl">
					<img src="../assets/img/1.png" alt="">
					<p>斗鱼直播</p>
				</li>
				<li class="fl">
					<img src="../assets/img/1.png" alt="">
					<p>斗鱼直播</p>
				</li>
			</ul>
		</div>
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
			search () {
				this.$router.push('/search-result')
			}
		}
	}
</script>
<style scoped  lang='less'>
	.search-logo {
		display: block;
		margin-left: 200px;
		margin-bottom: 15px;
	}
	.coperation-list {
		margin-top: 30px;
		width: 660px;
		li {
			width: 20%;
			text-align: center;
			margin-top: 15px;
			cursor: pointer;
			img {
				width: 40px;
			}
			p {
				font-size: 12px;
			}
		}
	}
</style>
