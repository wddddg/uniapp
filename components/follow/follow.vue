<template>
	<view>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in listtitle" :key="index" @click="TabCur = index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<view v-if="!shoucang" class="contentnull">
			{{TabCur == 0? contentnullshow[0]:contentnullshow[1]}}
		</view>
		<view v-if="shoucang" class="houseinfo">
			<view class="properties" v-for="(item,index) in arry"
			:key="index"  
			@click="toumingdu1(item)" 
			:class="toumingdu? 'toumingdu' : ''">
				<view class="propertiescontent" @click="tohousenews(item.name,item.photoList)">
					<image :src="item.img" mode=""></image>
				</view>
				<view class="introduce">
					<view class="introducefirst">
						<text @click="tohousenews(item.name,item.photoList)">{{item.name}}</text><text @click="tohousenews(item.name)">住宅</text>
					</view>
					<view class="introducetwo" @click="tohousenews(item.name,item.photoList)">
						<text>{{item.money}}万</text>
						<text>{{item.down_payment}}起</text>
					</view>
					<view @click="tohousenews(item.name,item.photoList)">
						<text>{{item.district}}|建面{{item.floor_area}}</text>
					</view>
					<view class="introducelabel" @click="tohousenews(item.name,item.photoList)">
						<scroll-view scroll-x="true" style="white-space: nowrap;">
							<text><text class="lg text-gray cuIcon-crownfill"></text>{{item.label[0]}}</text>
							<text v-for="(item1,index1) in item.label" :key="index1" v-if="item1 == item.label[0] ? 0 :item1">{{item1}}</text>
						</scroll-view>
					</view @click="tohousenews(item.name,item.photoList)">
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import houseinfo from '@/components/houseinfo/houseinfo.vue'
	export default{
		data(){
			return{
				TabCur: 0,
				listtitle:["我的关注"],
				content:null,
				contentnullshow:['你还没有关注哦~'],
				shoucang: false,
				arry:false
			}
		},
		components:{
			houseinfo
		},
		onLoad(){
			if (uni.getStorageSync('arry')) {
				this.arry = uni.getStorageSync('arry')
			}else{
				this.arry = false
			}
		}
	}
</script>

<style>
	.contentnull{
		text-align: center;
		line-height: 100rpx;
	}
	.houseinfo{
		width: 700rpx;
		margin: auto;
	}
</style>
