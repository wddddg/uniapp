<template>
	<view>
		<view class="zindex">
			<view class="cu-bar search">
				<view class="search-form round searchz">
					<view class="action" @click="toregion">
						<text>珠海</text>
						<text class="cuIcon-triangledownfill"></text>
					</view>
					<view style="font-size:38rpx; color: #C0C0C0;">|</view>
					<text class="cuIcon-search" @click="tosearchfloor"></text>
					<!-- <input @focus="InputFocus" disabled="true" @click="tosearchfloor" @blur="InputBlur" :adjust-position="false" type="text" placeholder="请输入搜索内容" confirm-type="search"></input> -->
					<view style="width: 450rpx;" @click="tosearchfloor" >请输入搜索内容</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			toregion(){
				uni.navigateTo({
					url:'/components/search/region/region'
				})
			},
			tosearchfloor(){
				uni.navigateTo({
					url:'/components/search/searchfloor/searchfloor'
				})
			}
		}
	}
</script>

<style lang="scss">
	.zindex{
		z-index: 10;
		opacity: .7;
	}
	
</style>
