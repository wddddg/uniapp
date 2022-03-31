<template>
	<view v-if="showz">
		<view>
			<view class="nav">		
				<view class="userbody">
					<view class="view" >
						<text>用户名</text>
						<input type="" name="" id="" v-modul="name" :placeholder="name" />
						<view class="hr"></view>
					</view>
					<view class="view">
						<text>联系电话</text>
						<input type="" name="" id="" v-modul="phone" :placeholder="phone" />
						<view class="hr"></view>
					</view>
					<view class="view">
						<text>邮箱地址</text>
						<input type="" name="" id="" v-modul="email" :placeholder="email" />
						<view class="hr"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="xiugai" @click="xiugai">修改</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				showz:false,
				name:'wddxhz',
				phone:'123123',
				email:'123123'
			}
		},
		onLoad(){
			if(uni.getStorageSync('user')){
				return this.showz = true
			}else{
				uni.showModal({
				    title: '您还没登录',
				    content: '是否前往登录',
				    success: function (res) {
				        if (res.confirm) {
				            uni.navigateBack()
				        } else if (res.cancel) {
				            uni.navigateBack()
				        }
				    }
				});
			}
		},
		methods:{
			xiugai(){
				
			}
		}
	}
</script>

<style lang="scss">
	.nav {
		width: 700rpx;
		margin: auto;
		.userbody {
			border: 1rpx solid #FFFFFF;
			margin-top: 50rpx;
			width: 650rpx;
			margin: auto;
			color: #000000;
			font-size: 30rpx;
	
			.view {
				margin-top: 50rpx;
				height: 35rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				position: relative;
				image {
					width: 40rpx;
					height: 40rpx;
					vertical-align: bottom;
				}
				input:nth-child(2) {
					position: absolute;
					right: 0;
					text-align: right;
					margin-top: -8rpx;
					font-size: 22rpx;
				}
			}
		}
	}
	
	.hr {
		margin: 30rpx auto 0rpx;
		border: 3rpx solid rgba(183, 183, 183, .1);
	}
	.xiugai{
		text-align: center;
		width: 700rpx;
		line-height: 70rpx;
		background-color: $uni-font-color;
		color: #FFFFFF;
		margin: 20rpx auto;
		border-radius: 10rpx;
	}
</style>
