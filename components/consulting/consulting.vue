<template>
	<view class="body">
		<view class="bodyconsultant" v-for="(item,index) in bodyconsultant" :key="index">
			<view class="bodycontent">
				<view class="bodycontenttp">
					<image src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00699-2604.jpg">
					</image>
				</view>
				<view class="bodycontenttp1">
					<view style="font-weight: 800; font-size:36rpx;">保利国际广场<text class="zaishou">在售</text></view>
					<view><text class="gcjzx">高层</text><text class="gcjzx">精装修</text></view>
					<view style="font-size: 22rpx;">横琴新区·横琴|建面96000㎡</view>
					<!-- <view class="btns">咨询置业顾问</view> -->
					<button type="default" class="btns" @click="tophone">咨询置业顾问</button>
				</view>
			</view>
			<view class="bodycontent1">
				<view><text class="lg text-gray cuIcon-location"></text>楼盘地址:港澳大道</view>
				<view><text class="lg text-gray cuIcon-phone"></text>销售地址:--</view>
				<view><text class="lg text-gray cuIcon-profile"></text>开发商:珠海横琴保利利和投资有限公司</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bodyconsultant: null
			}
		},
		methods: {
			// toconsultantpepople(name, school, label, img) {
			// 	uni.navigateTo({
			// 		url: '/components/consulting/consultantpeople?name=' + name + '&school=' + school + '&label=' +
			// 			label
			// 	})
			// 	uni.setStorageSync('consultantimg', img)
			// }
			tophone() {
				uni.makePhoneCall({
					// 手机号
					phoneNumber: '17658012791',
					// 成功回调
					success: (res) => {
						console.log('调用成功!')
					},
					// 失败回调
					fail: (res) => {
						console.log('调用失败!')
					}
				});
			}
		},
		onLoad() {
			console.log(uni.getStorageSync('consultantz'))
			this.bodyconsultant = uni.getStorageSync('consultantz')
			console.log(this.bodyconsultant)
		},
		onUnload() {
			uni.removeStorageSync('consultantz')
		}
	}
</script>

<style lang="scss">
	.body {
		width: 700rpx;
		margin: auto;
	}

	.bodyconsultant {
		margin-top: 20rpx;
		width: 700rpx;
		height: 390rpx;
		border-radius: 10rpx;
		box-shadow: 0rpx 0rpx 10rpx 1rpx #CCCCCC;

		.bodycontent {
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			white-space: nowrap;

			.bodycontentyh {
				margin-right: 30rpx;
				width: 320rpx;

				.contentname {
					font-weight: 800;
					margin: 10rpx auto;
				}

				.contentschool {
					font-size: 22rpx;
					color: #CCCCCC;
					margin: 10rpx auto;
				}

				.contentlabel {
					font-size: 22rpx;
					margin: 10rpx auto;

					text:first-child {
						background-color: rgb(225, 248, 255);
					}

					text {
						padding: 5rpx 10rpx;
						color: $uni-font-color;
						background-color: rgb(243, 247, 250);
						margin-right: 10rpx;
					}
				}

				.bodycontentnum {
					display: flex;
					font-size: 22rpx;
					align-items: center;
					margin: 20rpx auto;
					justify-content: space-between;

					.num {
						text:first-child {
							font-weight: 800;
							font-size: 30rpx;
						}

						margin: 10rpx auto;
					}

					line-height: 30rpx;
				}

				.mfzx {
					line-height: 80rpx;
					background-color: $uni-font-color;
					text-align: center;
					color: #FFFFFF;
					font-weight: 800;
					border-radius: 20rpx;
				}
			}

			.bodycontenttp {
				width: 300rpx;
				margin: 10rpx;

				image {
					height: 200rpx;
					border-radius: 10rpx;
				}
			}

			.bodycontenttp1 {
				width: 400rpx;

				view {
					margin: 10rpx auto;
				}

				.btns {
					margin-top: 20rpx;
					width: 300rpx;
					line-height: 50rpx;
					font-size: 28rpx;
					color: #FFFFFF;
					background-color: $uni-font-color;
					border-radius: 50rpx;
					text-align: center;
				}
			}

			.zaishou {
				padding: 5rpx 10rpx;
				color: #FFFFFF;
				background-color: rgba($color: $uni-font-color, $alpha: .5);
				font-size: 22rpx;
				float: right;
			}

			.gcjzx {
				padding: 5rpx 10rpx;
				color: rgb(120, 120, 120);
				background-color: rgba(187, 187, 187, .2);
				font-size: 22rpx;
				margin-right: 10rpx;
			}
		}

		.bodycontent1 {
			margin: 10rpx;

			view {
				margin: 10rpx auto;

				text {
					margin-right: 10rpx;
					color: $uni-font-color;
				}
			}
		}
	}
</style>
