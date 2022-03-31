<template>
	<view class="bodzy">
		<view class="VerticalBox">
			<scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop"
				style="height:calc(30vh)">
				<view class="cu-item" :class="index==tabCur?'text-green cur':''" v-for="(item,index) in list"
					:key="index" @tap="TabSelect" :data-id="index">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(30vh)"
				:scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
				<view class="padding-top padding-lr" v-for="(item,index) in list" :key="index" :id="'main-'+index">
					<view class="cu-bar solid-bottom bg-white" v-for="(item1,index1) in item.cityq" :key="index1"  @click="hidead(item1)">
						<view class="action">
							{{item1}}
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- <view class="btn">
			<view class="btnbox1" @click=""><view>清空</view></view>
			<view class="btnbox2"><view>确定</view></view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name:'不限',
						cityq:['不限']
					},
					{
						name:'香洲区',
						cityq:['香洲','香洲1']
					},
					{
						name:'金湾区',
						cityq:['金湾','金湾1']
					},
					{
						name:'斗门区',
						cityq:['斗门','斗门1']
					}
				],
				tabCur: 0,
				mainCur: 0,
				verticalNavTop: 0,
				load: true
				// interested:''
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true
			});
			let list = [{}];
			for (let i = 0; i < 26; i++) {
				list[i] = {};
				list[i].name = String.fromCharCode(65 + i);
				list[i].id = i;
			}
			this.list = list;
			this.listCur = list[0];
		},
		onReady() {
			uni.hideLoading()
		},
		methods: {
			hidead(str){
				// uni.setStorageSync('interested',str)
				// console.log(str);
				this.$emit('hideadClick', str);
			},
			TabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
				this.mainCur = e.currentTarget.dataset.id;
				this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
			},
			VerticalMain(e) {
				// #ifdef MP-ALIPAY
				   return false  //支付宝小程序暂时不支持双向联动 
				// #endif
				let that = this;
				let tabHeight = 0;
				if (this.load) {
					for (let i = 0; i < this.list.length; i++) {
						let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
						view.fields({
							size: true
						}, data => {
							this.list[i].top = tabHeight;
							tabHeight = tabHeight + data.height;
							this.list[i].bottom = tabHeight;
						}).exec();
					}
					this.load = false
				}
				let scrollTop = e.detail.scrollTop + 10;
				for (let i = 0; i < this.list.length; i++) {
					if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
						this.verticalNavTop = (this.list[i].id - 1) * 50
						this.tabCur = this.list[i].id
						console.log(scrollTop)
						return false
					}
				}
			}
		},
	}
</script>

<style lang="scss">
	.bodzy{
		height: 50%;
		.VerticalBox {
			display: flex;
			.VerticalNav.nav {
				width: 200upx;
				white-space: initial;
			}
		
			.VerticalNav.nav .cu-item {
				width: 100%;
				text-align: center;
				background-color: #fff;
				margin: 0;
				border: none;
				height: 50px;
				position: relative;
			}
		
			.VerticalNav.nav .cu-item.cur {
				background-color: #f1f1f1;
			}
		
			.VerticalNav.nav .cu-item.cur::after {
				content: "";
				width: 8upx;
				height: 30upx;
				border-radius: 10upx 0 0 10upx;
				position: absolute;
				background-color: currentColor;
				top: 0;
				right: 0upx;
				bottom: 0;
				margin: auto;
			}
			.VerticalMain {
				background-color: #f1f1f1;
				flex: 1;
				height: 30vh;
			}
		}
	}
	
	
	
</style>
