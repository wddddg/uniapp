<template>
	<view class="body">
		<view class="cu-bar search">
			<view class="search-form round searchz">
				<text class="cuIcon-search" @click="tosearchfloor"></text>
				<input type="text" placeholder="请输入搜索内容"></input>
			</view>
			<text class="back" @click="navback">取消</text>
		</view>
		<view class="bodycontent">
			<view class="title">
				<text>热门搜索</text><text @click="changefollow">换一换</text><image src="@/static/img/change.png" @click="changefollow"></image>
			</view>
			<view class="content">
				<view class="morecontent" v-for="(item,index) in 4" :key="index">
					<view class="morecontenttitle">
						<text>北京新天地</text><text :style="fontcolor? 'background-color:#255CEE;':''">热</text>
					</view>
					<view class="morecontentxx">
						<text>住宅</text><text>朝阳</text><text>1/3/4居</text>
					</view>
					<view  class="morecontentq" :class="fontcolor? 'fontcolor' : ''">
						<text>首付157万</text><text>元起</text>
					</view>
				</view>
				<!-- <view class="morecontent">
					<view class="morecontenttitle">
						<text>北京新天地</text><text>热</text>
					</view>
					<view class="morecontentxx">
						<text>住宅</text><text>朝阳</text><text>1/3/4居</text>
					</view>
					<view  class="morecontentq">
						<text>首付157万</text><text>元起</text>
					</view>
				</view>
				<view class="morecontent">
					<view class="morecontenttitle">
						<text>北京新天地</text><text>热</text>
					</view>
					<view class="morecontentxx">
						<text>住宅</text><text>朝阳</text><text>1/3/4居</text>
					</view>
					<view  class="morecontentq">
						<text>首付157万</text><text>元起</text>
					</view>
				</view>
				<view class="morecontent">
					<view class="morecontenttitle">
						<text>北京新天地</text><text>热</text>
					</view>
					<view class="morecontentxx">
						<text>住宅</text><text>朝阳</text><text>1/3/4居</text>
					</view>
					<view  class="morecontentq">
						<text>首付157万</text><text>元起</text>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				fontcolor:false
			}
		},
		methods: {
			navback() {
				uni.navigateBack()
			},
			changefollow(){
				this.fontcolor = !this.fontcolor
			}
		},
	}
</script>

<style lang="scss">
	.body{
		width: 700rpx;
		margin: auto;
		.back{
			margin: 0rpx 20rpx;
		}
		.searchz{
			margin: 0rpx 0rpx;
		}
		.bodycontent{
			margin-top: 50rpx;
			.title{
				image{
					width: 28rpx;
					height: 28rpx;
					vertical-align: top;
					float: right;
					margin-right: 5rpx;
					margin-top: 6rpx;
				}
				text:nth-child(2){
					float: right;
				}
			}
			.content{
				margin-top: 20rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				.morecontent{
					width:340rpx;
					height: 200rpx;
					box-shadow: 0rpx 0rpx 10rpx 1rpx #CCCCCC;
					border: 1rpx solid rgba(255,255,255,.1);
					margin-bottom: 20rpx;
					.morecontenttitle,.morecontentxx,.morecontentq{
						margin: 10rpx;
					}
					.morecontenttitle{
						margin-top: 20rpx;
						text:nth-child(2){
							background-color: rgb(255,44,98);
							color: #FFFFFF;
							padding: 0rpx 5rpx 0rpx 7rpx ;
							font-weight: 800;
							font-size: 22rpx;
							border-radius: 5rpx;
							margin-left: 10rpx;
						}
					}
					.morecontentxx{
						color: #000;
						margin-top: 10rpx;
						
						text{
							border: 2rpx solid #000000;
							margin-right: 10rpx;
							padding: 5rpx 10rpx ;
						}
					}
					.morecontentq{
						margin-top: 20rpx;
						color: $uni-font-color;
						font-weight: 500;
						text:first-child{
							font-size: 36rpx;
							font-weight: 600;
						}
						text:nth-child(2){
							font-size: 26rpx;
						}
					}
					.fontcolor{
						color: #F87943;
					}
				}
			}
		}
	}
	
</style>
