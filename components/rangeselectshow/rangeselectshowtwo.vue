<template>
	<view class="bodzy">
		<view class="Box">
			<view class="house">
				<view class="housetitle">
					<text>您关注的户型</text>
				</view>
				<view class="houseclass">
					<view  v-for="(item,index) in list" :key="index" :class="curlist==index? 'bgcoloracolor' : ''" @click="curlist = index,name(item)">{{item}}</view>
					<!-- <view>不限</view>
					<view>一居</view>
					<view>二居</view>
					<view>三居</view>
					<view>四居</view>
					<view>五居以及以上</view> -->
				</view>
				<view class="housetitle">
					<text>您的购房预算/㎡</text>
				</view>
				<view class="houseclass">
					<view v-for="(item,index) in lists" :key="index"  :class="curlists==index? 'bgcoloracolor' : ''" @click="curlists = index,namemoney(item)">{{item}}</view>
					<!-- <view>小于一万</view>
					<view>一万↔三万</view>
					<view>三万↔五万</view>
					<view>五万↔十万</view>
					<view>十万↔二十万</view>
					<view>二十万以上</view> -->
				</view>
			</view>
		</view>
		<view class="btn">
			<view class="btnbox1" @click="curlist = 0 , curlists = 0, namemoneyz='小于一万' , namemoneyzz='不限' "><view>清空</view></view>
			<view class="btnbox2" @click="" @click="hidead(namemoneyzz,namemoneyz)"><view>确定</view></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					'不限','一居','二居','三居','四居','五居以及以上'
				],
				lists:[
					'小于一万','一万↔三万','三万↔五万','五万↔十万','十万↔二十万','二十万以上'
				],
				curlist:0,
				curlists:0,
				namemoneyz:'小于一万',
				namemoneyzz:'不限'
			};
		},
		methods: {
			hidead(str,strz){
				// uni.setStorageSync('interested',str)
				// console.log(str);
				this.$emit('hideadClickz', {str, strz});
				// console.log(str,strz);
			},
			namemoney(str){
				this.namemoneyz = str
			},
			name(str){
				this.namemoneyzz = str
			}
		},
	}
</script>

<style lang="scss">
	.bodzy{
		height: 50%;
		.Box {
			display: flex;
			width: 700rpx;
			margin: auto;
			.housetitle{
				line-height: 80rpx;
				font-weight: 600;
			}
			.houseclass{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				view{
					width: 220rpx;
					height: 80rpx;
					background-color:rgba(240,246,250,1) ;
					text-align: center;
					line-height: 80rpx;
					margin-bottom: 20rpx;
					border-radius: 10rpx;
					font-weight: 600;
				}
				.bgcoloracolor{
					color: $uni-font-color;
					background-color: rgba($color: $uni-font-color, $alpha: .1);
				}
			}
			.wrap {
				padding: 30rpx;
				text-align: center;
				text{
					margin: 20rpx auto;
					font-size: 28rpx;
					font-weight: 600;
				}
				.leftright{
					text:nth-child(1){
						float: left;
					}
					text:nth-child(2){
						float: right;
					}
				}
			}
		}
		.btn{
			display: flex;
			justify-content: space-between;
			width: 700rpx;
			margin: auto;
			view{
				width: 320rpx;
				margin: auto;
				text-align: center;
				height: 80rpx;
				margin: 10rpx auto ;
				view:first-child{
					line-height: 60rpx;
				}
			}
			.btnbox1{
				border: 2rpx solid #CCCCCC;
			}
			.btnbox2{
				color: #FFFFFF;
				background-color: $uni-font-color;
			}
		}
	}
	
	
	
</style>
