<template>
	<view>
		<view class="properties" v-for="(item,index) in house" :key="index"
			v-if="item.is_new.indexOf(is_news) !== -1 || is_news == ''" @click="toumingdu1(item)"
			:class="arry.indexOf(item) !== -1 ? 'toumingdu' : ''">
			<view class="propertiescontent" @click="tohousenews(item.name,item.photoList)">
				<image :src="item.img" mode=""></image>
			</view>
			<view class="introduce">
				<view class="introducefirst">
					<text @click="tohousenews(item.name,item.photoList)">{{item.name}}</text><text
						@click="tohousenews(item.name)">住宅</text>
				</view>
				<view class="introducetwo" @click="tohousenews(item.name,item.photoList)">
					<text>{{item.money}}万</text>
					<text>{{item.down_payment}}万起</text>
				</view>
				<view @click="tohousenews(item.name,item.photoList)">
					<text>{{item.district}}|建面{{item.floor_area}}</text>
				</view>
				<view class="introducelabel" @click="tohousenews(item.name,item.photoList)">
					<scroll-view scroll-x="true" style="white-space: nowrap;">
						<text><text class="lg text-gray cuIcon-crownfill"></text>{{item.label[0]}}</text>
						<text v-for="(item1,index1) in item.label" :key="index1" v-if="item1 == item.label[0] ? 0 :item1">{{item1}}</text>
					</scroll-view>
				</view>
				<!-- <view class="introducefoot">
					<text>热</text><text>1天前有人成交</text>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// props:[
		// 	'house'
		// ],
		data() {
			return {
				imageshowf: null,
				// name:this.house,
				currindex: null,
				money: null,
				house: [],
				is_news: '',
				toumingdu: false,
				arry: []
			}
		},
		methods: {
			tohousenews(str, photoList) {
				this.currindex = str
				uni.navigateTo({
					url: '/components/housenews/housenews?name=' + this.currindex
				})
				uni.setStorageSync('photoList', photoList)
			},
			update(value) {
				this.is_news = value
			},
			toumingdu1(item) {
				uniCloud.callFunction({
					name:'updatehouseinfo',
					data:{
						aaaa:item._id
					},
					success(res) {
						console.log(res);
					},
					fail(err){
						console.log(err)
					}
				})
				console.log(item.is_new);
			}
		},
		created() {
			this.house = getApp().globalData.body.result.data
			// if(uni.getStorageSync('arry')){
			// 	this.toumingdu = true
			// }else{
			// 	this.toumingdu = false
			// }
		}
	}
</script>

<style lang="scss">
	.properties {
		z-index: 1;
		margin-top: 20rpx;
		display: flex;

		.propertiescontent {
			image {
				width: 250rpx;
				height: 180rpx;
				border-radius: 10rpx;
			}
		}

		.introduce {
			margin-left: 20rpx;
			width: 440rpx;

			.introducefirst {
				margin: 5rpx auto;

				text:first-child {
					font-size: 32rpx;
					font-weight: 800;
				}

				text:nth-child(2) {
					margin-left: 5rpx;
					border: 2rpx solid #000000;
					border-radius: 5rpx;
					font-size: 24rpx;
					padding: 3rpx;
				}

				image {
					float: right;
					width: 40rpx;
					height: 40rpx;
				}
			}

			.introducetwo {
				margin: 5rpx auto;
				color: rgb(240, 80, 40);

				text:first-child {
					font-size: 38rpx;
					font-weight: 700;
				}

				text:nth-child(2) {
					font-size: 28rpx;
					font-weight: 700;
				}
			}

			view:nth-child(3) {
				font-size: 24rpx;
			}

			.introducelabel {
				margin: 20rpx auto;
				font-size: 20rpx;

				text {
					margin: auto 5rpx;
				}

				text:first-child {
					padding: 5rpx;
					color: rgb(251, 206, 129);
					background-color: rgb(255, 246, 227);
					margin: 0rpx;
				}

				text:nth-child(2) {
					padding: 5rpx;
					color: rgb(68, 218, 236);
					background-color: rgb(241, 252, 255);
				}

				text:nth-child(3) {
					padding: 5rpx;
					color: rgb(123, 137, 140);
					background-color: rgb(247, 247, 250);
				}
			}

			.introducefoot {
				display: flex;
				align-items: center;
				font-size: 24rpx;

				text:first-child {
					padding: 5rpx;
					background-color: rgb(255, 0, 0);
					color: #FFFFFF;
					font-size: 20rpx;
				}
			}
		}
	}
</style>
