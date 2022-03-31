<template>
	<view>
		<u-navbar title="我的" :background="background" :title-color="ticolor" :border-bottom="false" :is-back="false">
			<!-- <view class="slot-wrap">
				
			</view> -->
		</u-navbar>
		<view>
			<view class="nav">
				<view class="navuser">
					<text @click="denglu" class="usertext">{{user == '' ? '登录/注册' : user.nickName}}</text>
					<!-- <text class=" userhead"><text class="lg text-gray cuIcon-myfill"></text></text> -->
					<view class="userhead" @click="denglu"><text v-if="!user" class="lg text-gray cuIcon-myfill"></text>
						<image v-if="user" :src="user == '' ? '' : user.avatarUrl " mode=""></image>
					</view>

				</view>

				<view class="userbody">
					<view class="view" @click="tome">
						<image src="@/static/img/me.png" mode=""></image>
						<text>个人中心</text>
						<text class="lg text-gray cuIcon-right"></text>
						<view class="hr"></view>
					</view>
					<view class="view" @click="tofollow">
						<image src="@/static/img/lookme1.png" mode=""></image>
						<text>我的关注</text>
						<text class="lg text-gray cuIcon-right"></text>
						<view class="hr"></view>
					</view>
					<view class="view" @click="topreview">
						<image src="@/static/img/lookme.png" mode=""></image>
						<text>我的预览</text>
						<text class="lg text-gray cuIcon-right"></text>
						<view class="hr"></view>
					</view>
					<view class="view" @click="tophone">
						<image src="@/static/img/consultant.png" mode=""></image>
						<text>客服热线</text>
						<text class="lg text-gray cuIcon-right"></text>
						<view class="hr"></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: null,
				background: {
					backgroundImage: 'linear-gradient(180deg, rgb(79,159,248), rgb(55,119,242))'
				},
				ticolor: '#fff',
				phone: '',
				openid:''
			}
		},
		methods: {
			getPhoneNumber() {
				uniCloud.callFunction({
					name: 'user',
					data: {
						userphone: this.phone
					},
					success(res) {
						console.log(res);
					}
				})
			},
			denglu() {
				let that = this;
				if(uni.getStorageSync('user')){
					return false
				}else{
					if(uni.getStorageSync('user')){
						this.user = infoRes.userInfo
						uni.setStorageSync('user',infoRes.userInfo)
					}else{
						uni.getUserProfile({
							desc:'登录',
							success: function(infoRes) {
								that.user = infoRes.userInfo
								uni.setStorageSync('user',infoRes.userInfo)
								uni.login({
									provider: 'weixin',
									success: function(res) {
										let appid = 'wx021a11dae97c2436'
										let secret = 'e2b67612641a8faea0f4e29757e7cd94'
										let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' +
											secret + '&js_code=' +
											res.code + '&grant_type=authorization_code';
										uni.request({
											url: url, // 请求路径
											success: result => {
												// that.openid = result.data.openid
												console.log(result.data.openid);
												uniCloud.callFunction({
													name:'user',
													data:{
														username:that.user.nickName,
														userimg:that.user.avatarUrl,
														useropenid:result.data.openid,
														userphone:''
													},
													success(res){
														console.log(res);
													}
												})
											},
										});
									}
								});
								that.show2 = true
							}
						});
					}
				}
			},
			tome(){
				uni.navigateTo({
					url: '/components/follow/me'
				})
			},
			tofollow() {
				uni.navigateTo({
					url: '/components/follow/follow'
				})
			},
			topreview() {
				// uniCloud.callFunction({
				// 	name:'houseinfo',
				// 	success(res) {
				// 		for (let i = 0; i < res.length; i++) {
				// 			if(res[i].attention !== false){
				// 				// uni.setStorageSync('arry',true)
				// 				// uni.setStorageSync('house',res)
				// 				uni.setStorageinfoSync()
				// 			}else{
				// 				uni.setStorageSync('arry',false)
				// 			}
				// 		}
				// 	},
				// 	fail(err){
				// 		console.log(err)
				// 	}
				// })
				uni.navigateTo({
					url: '/components/follow/preview'
				})
			},
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
		onShow() {
			this.user = uni.getStorageSync('user')
		}
	}
</script>

<style lang="scss">
	.nav {
		width: 700rpx;
		margin: auto;

		.navuser {
			width: 600rpx;
			margin: auto;
			line-height: 150rpx;
			margin-top: 20rpx;

			.usertext {
				color: #000000;
				font-size: 50rpx;
			}

			.userhead {
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
				overflow: hidden;
				float: right;
				text-align: center;
				// background-color: rgba($color: $uni-font-color, $alpha: .7);
				background-image: linear-gradient(150deg, rgb(79, 159, 248), rgb(55, 119, 242));

				text {
					font-size: 120rpx;
					color: rgb(189, 202, 218);
				}

				image {
					width: 150rpx;
					height: 150rpx;
					border-radius: 50%;
				}
			}
		}

		.userbody {
			border: 1rpx solid #FFFFFF;
			margin-top: 50rpx;
			width: 650rpx;
			margin: auto;
			color: #000000;
			font-size: 30rpx;

			.view {
				margin-top: 50rpx;

				image {
					width: 40rpx;
					height: 40rpx;
					vertical-align: bottom;
				}

				text:nth-child(2) {
					margin-left: 20rpx;
				}

				text:nth-child(3) {
					float: right;
				}
			}
		}
	}

	.hr {
		margin: 30rpx auto 0rpx;
		border: 3rpx solid rgba(183, 183, 183, .1);
	}
</style>
