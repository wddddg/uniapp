<template>
	<view>
		<dropdown></dropdown>
		<view class="dropdown">
			<scroll-view scroll-x="true">
				<view class="dropdownsv">
					<view v-for="(item,index) in label" :key="index"  @click="wddxhz(item.is_new),currment = index"  :class=" currment == index ? 'qhclass' : 'labelz'" >
						<image v-if="index == 0" src="@/static/img/time.png"></image>
						<image v-if="index == 1" src="@/static/img/fire.png"></image>
						{{item.name}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
	
</template>

<script>
	// import dropdown from '@/components/dropdown/dropdown.vue'
	export default{
		components:{
			// dropdown
		},
		data(){
			return{
				label:[
					{
						name:'全部楼盘',
						is_new:''
					},
					{
						name:'本月热销',
						is_new:'Y'
					},
					{
						name:'低首付',
						is_new:'D'
					},
					{
						name:'小户型',
						is_new:'X'
					},
					{
						name:'现房',
						is_new:'F'
					},
					{
						name:'在售',
						is_new:'Z'
					},
					{
						name:'品牌地产',
						is_new:'P'
					}
				],
				currment:0
			}
		},
		methods:{
			wddxhz(news){
				this.$emit('tabClick', news);
			},
			tabNum(index){
				this.currment = index
				this.$emit('tabNum', index);
			}
		}
	}
</script>

<style lang="scss">
	.dropdown{
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		.dropdownsv{
			display: flex;
			.labelz{
				padding: 5rpx 10rpx;
				background-color:rgba(240,244,245,1);
				margin: 10rpx 5rpx;
				display: flex;
				align-items: center;
				image{
					width: 28rpx;
					height: 28rpx;
				}
			}
		}
	}
	.qhclass{
		color: $uni-font-color;
		background-color: rgba($color: $uni-font-color, $alpha: .1);
		display: flex;
		align-items: center;
		margin: 10rpx 5rpx;
		padding: 5rpx 10rpx;
		image{
			width: 28rpx;
			height: 28rpx;
		}
	}
</style>
