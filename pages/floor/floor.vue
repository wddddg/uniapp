<template>
	<view>
		<u-navbar :is-back="false" title="恒裕买房" :background="background" :title-color="ticolor" :border-bottom="false">
			<!-- <view class="slot-wrap">
				
			</view> -->
		</u-navbar>
		<view class="bodycontent">
			<view class="search">
				<search @tabClick="tabClick"></search>
			</view>
			<view>
				<screen :value="value" @tabClick="tabClick" ref="screen"></screen>
			</view>
			<!-- <view class="redenvelopes">
				<view class="redenvelopescontent">
					<text class="lg text-gray cuIcon-redpacket_fill"></text>
					<text>购房福利，新人买房指南</text>
					<text class="lg text-gray cuIcon-right" style="float: right;"></text>
					<text style="float: right;">去领取</text>
				</view>
			</view> -->
			<view>
				<houseinfo ref="houseinfo"></houseinfo>
			</view>
		</view>
	</view>
</template>

<script>
	import screen from '@/components/screen/screen.vue'
	import search from '@/components/search/search.vue'
	import houseinfo from '@/components/houseinfo/houseinfo.vue'
	export default{
		data(){
			return{
				value: '',
				background: {
					backgroundImage: 'linear-gradient(180deg, rgb(79,159,248), rgb(55,119,242))'
					// 导航栏背景图
					// background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
					// 还可以设置背景图size属性
					// backgroundSize: 'cover',
					// background:'#4F9FF8'
					// 渐变色
					// backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				ticolor:'#fff'
			}
		},
		components:{
			screen,
			search,
			houseinfo
		},
		methods: {
			tabClick(value) {
				this.$refs.houseinfo.update(value)
			},
			tabNum(value) {
				this.$refs.screen.tabNum(value)
			},
		},
		onShow(){
			this.$refs.houseinfo.update(uni.getStorageSync('isnews'));
			this.tabNum(uni.getStorageSync('num'))
		},
		// onShow() {
		// 	this.value = uni.getStorageSync('name');
			
		// },
		onHide() {
			uni.removeStorageSync('name')
			this.value = ''
			uni.removeStorageSync('isnews')
			uni.removeStorageSync('num')
		}
	}
</script>

<style lang="scss">
	.toumingdu{
		opacity: .4;
	}
	.slot-wrap{
		font-weight: 600;
		font-size: 32rpx;
		margin-left: 25rpx;
	}
	.bodycontent{
		width: 700rpx;
		margin: auto;
		.search{
			align-items: center;
			.searchz{
				margin: 0rpx;
			}
			// text:nth-child(2){
			// 	font-size: 40rpx;
			// 	color: #000000;
			// }
		}
		
	}
	
</style>
