<template>
	<view class="bodzy1" ref="showtwo">
		<view class="dax" style="margin: 0;" @click="show2 = false">×</view>
		<view class="user">
			<image :src="user.avatarUrl" mode=""></image><text>{{user.nickName}}</text>
		</view>
		<view>授权恒裕买房获取您的手机号</view>
		<button type="default" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="btn">一键授权</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show2:false,
				user:null
			}
		},
		methods:{
			getPhoneNumber(e){
				console.log(e);
				// this.getphoneboole = e.detail.errMsg
				if(e.detail.errMsg == 'getPhoneNumber:ok'){
					// this.show2 = true
					uni.showToast({
						title:'预约成功',
						icon:'none'
					})
					// this.show2 = false
					this.$emit('send')
				}else if(e.detail.errMsg == 'getPhoneNumber:fail user deny'){
					uni.showToast({
						title:'请授权手机号码！',
						icon:'none'
					})
				}else{
					return false
				}
			},
			updata(value){
				this.user = value
				this.$emit('usertou',value)
			}
		}
	}
</script>

<style lang="scss">
	.bodzy1 {
		width: 600rpx;
		padding: 30rpx;
	
		view {
			margin: 30rpx auto;
		}
	
		.dax {
			float: right;
			font-size: 80rpx;
		}
	
		.user {
			display: flex;
			align-items: center;
	
			text {
				margin-left: 30rpx;
			}
	
			image {
				border-radius: 50%;
				width: 150rpx;
				height: 150rpx;
			}
		}
	
		.btn {
			color: $uni-font-color;
			background-color: rgba($color: $uni-font-color, $alpha: .2);
			line-height: 60rpx;
			text-align: center;
		}
	}
</style>
