<template>
	<view v-if="showindex">
		
		<u-popup v-model="show2" mode="center">
			<rangeselectshowthree ref="rangeselectshowthree" @send="show2 = false"></rangeselectshowthree>
		</u-popup>
		<!-- 自定义导航栏 -->
		<u-navbar :is-back="false" title="恒裕买房" :background="background" :title-color="ticolor" :border-bottom="false">
			<!-- <view class="slot-wrap">
				
			</view> -->
		</u-navbar>
		<view class="content">
			<view style="position: absolute; background-image: linear-gradient(180deg, rgb(55,119,242), rgb(38,93,237)); height: 400rpx; width: 100%;"></view>
			<!-- 顶部搜索栏 -->
			<search></search>
			<!-- 顶部图片和视频 -->
			<view class="video">
				<swiper :indicator-dots="true" :autoplay="hidez" :interval="3000" :duration="1000" style="height: 400rpx; width: 700rpx; margin: auto;">
					<swiper-item>
						<view class="swiper-item" v-if="hidez" @click="hidez = false">
							<image
								src="http://pfghouse.pinfangw.com/housealbum/179e65ff073394479ea1248de8ec010d.jpg/same"
								mode=""></image>
						</view>
						<view v-if="!hidez" >
							<video autoplay="true"  @ended="hidez = true"
								src="https://vd3.bdstatic.com/mda-km3kgwrga7rz1u1g/mda-km3kgwrga7rz1u1g.mp4?auth_key=1627880534-0-0-1aaccd794e76598be5f0376ee34f0c96&bcevod_channel=searchbox_feed&pd=1&pt=3"
								controls></video>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="https://img1.baidu.com/it/u=1403226800,851454845&fm=26&fmt=auto&gp=0.jpg"
								mode=""></image>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="bodycontent">
				<!-- 顶部选择感兴趣区域 -->
				<view class="range">
					<view class="rangecontent">
						<view class="rangeselect" @click="show = true">
							<text>{{cityqu == ''? '选择感兴趣区域' : cityqu}} </text>
							<text class="lg text-gray cuIcon-right" style="float: right;"></text>
						</view>

						<u-popup v-model="show" mode="bottom">
							<rangeshow ref="rangeshow" @hideadClick="hideadClick"></rangeshow>
						</u-popup>


						<view class="rangeselect1" @click="show1 = true">
							<view class="rangeselect1view">
								<view class="rangeselect1viewcontent">
									<text>关注户型</text>
								</view>
								<view class="rangeselect1viewcontent1">
									<text>{{cityquo == '' ? '选择户型' : cityquo}} </text>
								</view>
							</view>
							<view style="height: 60rpx; border: 1rpx solid #cccccc; margin: 0rpx 20rpx;"></view>
							<view class="rangeselect1view">
								<view class="rangeselect1viewcontent">
									<text>总价预算</text>
								</view>
								<view class="rangeselect1viewcontent1">
									<text>{{cityqit == ''? '选择总价' : cityqit}} </text>
								</view>
							</view>
						</view>

						<u-popup v-model="show1" mode="bottom">
							<rangeshowtwo ref="rangeshowtwo"  @hideadClickz="hideadClickz"></rangeshowtwo>
						</u-popup>
						
						<view>
							<input type="text" value="" placeholder="请输入您的手机号码" @blur="photonumz" class="photonumclass" />
						</view>
						
						<view class="rangeselect2" @click="yes = !yes,btnshow = !btnshow">
							<view :style="yes?'background-color:#255CEE;':'background-color:#fff;'">
								<image src="@/static/img/yes.png"></image>
							</view>
							<text>预约找房服务，买房咨询师推荐合适房源</text>
						</view>
						<view class="rangebtn" @click="tohoutai" :class="btnshow? '' : 'btnshow'">
							<text>立即获取优惠</text>
						</view>
						<view class="rangeintroduce">
							<view>
								<image src="@/static/img/tixt.png" mode=""></image><text
									class="introducetext">专车接送看房</text>
							</view>
							<view>
								<image src="@/static/img/numfl.png" mode=""></image><text
									class="introducetext">全城有房源</text>
							</view>
							<view>
								<image src="@/static/img/lock.png" mode=""></image><text
									class="introducetext">买房质量保障</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 内容标签分类区域 -->
				<view>
					<view class="classification">
						<view class="classificationcontent" v-for="(item,index) in classificationcontent" :key="index" @click="tabtofloor(item.is_new,index)">
							<view>
								<image :src="item.imagetext " mode=""></image>
							</view>
							<text>{{item.name}}</text>
						</view>
					</view>
				</view>

				<view class="consultant" style="margin-top: 10rpx;">
					<view class="consultantcontent">
						<text class="title">本周热门好盘</text>
						<view class="content1">
							<text style="float: right;" @click="tofloor">更多在售楼盘
								<text class="lg text-gray cuIcon-right" @click="tofloor"></text>
							</text>
						</view>
					</view>
					<!-- https://img0.baidu.com/it/u=1597765947,2934039880&fm=26&fmt=auto&gp=0.jpg -->
					<view @click="tohousenews()"
						style=" margin-top: 20rpx; 
								display: flex; 
								height:170rpx; 
								border-radius: 10rpx; 
								box-shadow: 0rpx 0rpx 1rpx 1rpx #CCCCCC; 
								overflow: hidden; position: relative; ">
						<image :src="house[0].img" 
							style="width: 320rpx; height: 170rpx;" mode=""></image>
						<view class="effect1">
							<text style="font-size: 34rpx; line-height: 60rpx; margin: 20rpx; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; ">{{house[0].name.length > 7 ? house[0].name.substr(0,7) + '...' :house[0].name}}</text>
							<text class="efmoney">{{house[0].square}}万元/㎡</text>
						</view>
						<image class="dione" src="@/static/img/dione.png" mode=""></image>
					</view>

					<view style="display: flex; justify-content: space-between;">
						<view class="effect" @click="tohousenews()">
							<view class="effectview">
								<view>
									<text>{{house[1].name}}</text>
									<text>{{house[1].square}}万元/㎡</text>
								</view>
							</view>
							<image :src="house[1].img" mode=""></image>
							<image class="ditwo" src="@/static/img/ditwo.png" mode=""></image>
						</view>
						
						<view class="effect" @click="tohousenews()">
							<view class="effectview">
								<view>
									<text>{{house[2].name}}</text>
									<text>{{house[2].square}}万元/㎡</text>
								</view>
							</view>
							<image :src="house[2].img" mode=""></image>
							<image class="ditwo" src="@/static/img/dithree.png" mode=""></image>
						</view>
						
						<view class="effect" @click="tohousenews()">
							<view class="effectview">
								<view>
									<text>{{house[3].name}}</text>
									<text>{{house[3].square}}万元/㎡</text>
								</view>
							</view>
							<image :src="house[3].img" mode=""></image>
						</view>
					</view>
					
				</view>

				<!-- 内容低价捡漏区域 -->
				<view class="consultant">
					<view class="consultantcontent">
						<text class="title">低价捡漏</text>
						<view class="content">
							<text style="float: right;" @click="toconsulting(3)">
								查看更多
								<text class="lg text-gray cuIcon-right"@click="toconsulting(3)">
									
								</text>
							</text>
						</view>
					</view>
					<view class="consultantman">
						<!-- 捡漏 -->
						<view class="consultantpeople" v-for="(item,index) in 2" :key="index" v-if="index >= 2 ? 0:1" @click="toconsulting(3)">
							<view class="consultantimg">
								<image src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00699-2604.jpg" mode=""></image>
								<text style="font-weight:800 ;">保利中心广场</text>
							</view>
						</view>
					</view>
				</view>

				<!-- 内容筛选区域 -->
				<!-- <screen ref="screen" ></screen> -->
				<view class="consultant">
					<view class="consultantcontent">
						<text class="title">推荐好盘</text>
						<view class="content2">
							<text style="float: right;" @click="tofloor">查看更多
								<text class="lg text-gray cuIcon-right" @click="tofloor"></text>
							</text>
						</view>
					</view>
				</view>
				<!-- 内容房子信息区域 -->
				<houseinfo ref="houseinfo"></houseinfo>
				<!-- <houseinfo ref="houseinfo"></houseinfo> -->
			</view>
		</view>
		<!-- <button open-type="contact" bindcontact="handleContact">客服</button> -->
		<!-- <view @click="tototo">123123213</view> -->
	</view>
</template>

<script>
	import rangeshow from '@/components/rangeselectshow/rangeselectshow.vue'
	import rangeshowtwo from '@/components/rangeselectshow/rangeselectshowtwo.vue'
	import rangeselectshowthree from '@/components/rangeselectshow/rangeselectshowthree.vue';
	export default {
		data() {
			return {
				classificationcontent: [{
						name: '全部楼盘',
						imagetext: '/static/img/follow.png',
						is_new:''
					},
					{
						name: '本月热销',
						imagetext: '/static/img/follow1.png',
						is_new:'Y'
					},
					{
						name: '低首付',
						imagetext: '/static/img/follow2.png',
						is_new:'D'
					},
					{
						name: '小户型',
						imagetext: '/static/img/follow3.png',
						is_new:'X'
					},
					{
						name: '现房',
						imagetext: '/static/img/follow4.png',
						is_new:'F'
					}
				],
				show: false,
				show1: false,
				show2:false,
				yes: false,
				hidez: false,
				house: [],
				showindex: false,
				background: {
					backgroundImage: 'linear-gradient(180deg, rgb(79,159,248), rgb(55,119,242))'
				},
				ticolor:'#fff',
				cityqu: '',
				cityquo:'',
				cityqit:'',
				photonum:'',
				btnshow:false,
				user:uni.getStorageSync('user')
			}
		},
		methods: {
			hideviedoe(){
				console.log(1);
			},
			toconsulting(consultantpepople) {
				uni.navigateTo({
					url: '/components/consulting/consulting',
					success() {
						uni.setStorageSync('consultantz', consultantpepople)
					}
				})
			},
			hideadClick(value){
				this.cityqu = value
				this.show = false
				// this.$refs.rangeshow.hidead(value)
			},
			hideadClickz(value){
				this.cityquo = value.str
				this.cityqit = value.strz
				this.show1 = false
				console.log(value);
				// this.$refs.rangeshowtwo.hideadClickz(value)
			},
			tabtofloor(value,index){
				uni.switchTab({
					url:'/pages/floor/floor'
				})
				uni.setStorageSync('isnews',value)
				uni.setStorageSync('num',index)
			},
			tofloor(news) {
				uni.switchTab({
					url: '/pages/floor/floor'
				})
			},
			tohoutai(){
				if(uni.getStorageSync('user')){
					if(this.btnshow){
						this.show2 = true
					}else{
						uni.showToast({
							title:'预约失败',
							icon:'none'
						})
					}
				}else{
					uni.showModal({
					    title: '是否前去登录',
					    success: function (res) {
					        if (res.confirm) {
					            uni.switchTab({
									url:'/pages/aboutme/aboutme'
								})
					        } else if (res.cancel) {
					            return false
					        }
					    }
					});
				}
				this.usertou()
			},
			usertou(){
				// this.show2 = uni.getStorageSync('showtwo')
				this.$refs.rangeselectshowthree.updata(uni.getStorageSync('user'))
			},
			tohousenews(str,photoList){
				this.currindex = str
				uni.navigateTo({
					url:'/components/housenews/housenews?name=' + this.currindex
				})
				uni.setStorageSync('photoList',photoList)
			},
			photonumz(e){
				this.photonum = e.target.value
			},
			
			// tototo(){
			// 	uni.navigateTo({
			// 		url: 'https://tb.53kf.com/code/wx/4bd648c4e1ba2e90e1e116fba1fe4a8f5/1'
			// 	});
			// }
		},
		components: {
			rangeshow,
			rangeshowtwo,
			rangeselectshowthree
		},
		async onLoad() {
		　　// 等待onlauch执行完毕
		　　await this.$onLaunched;
			// console.log("onlauch加载完成，进入onload")
			this.house = getApp().globalData.body.result.data
			this.showindex = true
			console.log(this.house);
		},
	}
</script>

<style lang="scss">
	.toumingdu{
		opacity: .4;
	}
	
	.content {
		position: relative;

		.video {
			width: 100%;
			height: 400rpx;
			video {
				width: 100%;
				height: 400rpx;
				border-radius: 10rpx;
				overflow: hidden;
			}

			image {
				width: 100%;
				height: 400rpx;
				border-radius: 10rpx;
				overflow: hidden;
			}
		}

		.bodycontent {
			width: 700rpx;
			margin: auto;
			margin-top: 20rpx;

			.range {
				color: rgb(81, 95, 98);
				background-color: #FFFFFF;
				width: 700rpx;
				box-shadow: 0rpx 0rpx 10rpx 1rpx #ccc;
				height: 450rpx;
				border-radius: 10rpx;

				.rangecontent {
					width: 640rpx;
					margin: auto;
					border: 1rpx solid #FFFFFF;
					
					
					
					.photonumclass{
						height: 60rpx;
						font-size: 46rpx;
					}
					
					.rangeselect {
						margin: 20rpx auto;
						font-size: 32rpx;
						font-weight: 900;
					}

					.rangeselect1 {
						display: flex;
						margin: 20rpx auto;
						align-items: center;

						.rangeselect1view {
							flex: 1;

							.rangeselect1viewcontent {
								font-size: 24rpx;
							}

							.rangeselect1viewcontent1 {
								font-size: 32rpx;
								font-weight: 800;
							}
						}
					}

					.rangeselect2 {
						display: flex;
						align-items: center;
						margin: 20rpx auto;

						view {
							width: 30rpx;
							height: 30rpx;
							border: 1rpx solid #cccccc;
							border-radius: 50%;
							margin-right: 10rpx;
							background-color: #000000;

							image {
								width: 100%;
								height: 100%;
								margin-top: -5rpx;
							}
						}

						text {
							font-size: 26rpx;
						}
					}

					.rangebtn {
						font-size: 32rpx;
						border-radius: 50rpx;
						width: 640rpx;
						height: 70rpx;
						text-align: center;
						line-height: 70rpx;
						background-color: $uni-font-color;
						color: #FFFFFF;
						font-weight: 800;
						margin: 20rpx auto;
					}
					.btnshow{
						background-color: #CCCCCC;
					}

					.rangeintroduce {
						display: flex;
						align-items: center;
						font-size: 26rpx;

						view {
							flex: 1;
							display: flex;
							align-items: center;
							justify-content: center;

							image {
								width: 32rpx;
								height: 32rpx;
							}

							color: rgb(140, 149, 152);
						}

						.introducetext {
							margin-left: 5rpx;
						}
					}
				}
			}

			.classification {
				display: flex;
				flex-wrap: wrap;
				margin-top: 20rpx;

				.classificationcontent {
					width: 140rpx;
					margin: 20rpx auto;
					text-align: center;
					font-weight: 800;
					view{
						margin: 15rpx 25rpx;
						padding: 10rpx 5rpx;
						border-radius: 25rpx;
					}
					image {
						vertical-align: bottom;
						width: 40rpx;
						height: 40rpx;
					}
				}
				.classificationcontent:nth-child(1){
					view{
						background-image: linear-gradient(150deg,rgb(86,213,186),rgb(36,200,166));
					}
				}
				.classificationcontent:nth-child(2){
					view{
						background-image: linear-gradient(150deg,rgb(251,214,125),rgb(250,204,92));
					}
				}
				.classificationcontent:nth-child(3){
					view{
						background-image: linear-gradient(150deg,rgb(255,140,142),rgb(255,101,105));
					}
				}
				.classificationcontent:nth-child(4){
					view{
						background-image: linear-gradient(150deg,rgb(255,159,127),rgb(255,127,85));
					}
				}
				.classificationcontent:nth-child(5){
					view{
						background-image: linear-gradient(150deg,rgb(255,161,129),rgb(255,126,84));
					}
				}
			}

			.consultant {
				margin: 50rpx 0rpx 20rpx 0rpx;
				.consultantcontent {
					display: flex;
					align-items: center;
					width: 100%;

					.title {
						font-size: 36rpx;
						font-weight: 900;
					}

					.content {
						width: 530rpx;
						margin-left: 20rpx;
						color: rgb(132, 143, 144);
						font-size: 24rpx;
					}

					.content1 {
						width: 484rpx;
						// margin-left: 20rpx;
						color: rgb(132, 143, 144);
						font-size: 24rpx;
					}
					.content2{
						width: 548rpx;
						color: rgb(132, 143, 144);
						font-size: 24rpx;
					}
				}

				.effect {
					margin-top: 20rpx;
					width: 220rpx;
					height: 150rpx;
					position: relative;
					flex-shrink: 0;

					.effectview {
						position: absolute;
						z-index: 99;
						bottom: 0;
						background: linear-gradient(0deg, rgba(0, 0, 0, .7), transparent);
						width: 100%;
						color: #FFFFFF;
						font-size: 22rpx;
						line-height: 30rpx;
						border-radius: 10rpx;

						view {
							margin: 10rpx 20rpx;

							text {
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
						}
					}

					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
					.ditwo{
						width: 30rpx;
						height: 30rpx;
						margin: 10rpx;
						position: absolute;
						right: 0;
						top: 0;
					}
					
					text {
						display: block;
					}

					.eftitle {
						font-size: 30rpx;
						font-weight: 800;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.efpfm {
						color: #CCCCCC;
						font-size: 24rpx;
					}

					.efmoney {
						color: #f00;
						font-size: 28rpx;
					}
				}

				.effect1 {
					margin-top: 20rpx;
					height: 150rpx;
					border-radius: 5rpx;
					font-weight: 800;
					// width: 100rpx;
					.efmoney {
						margin: 20rpx;
						display: flex;
						color: #f00;
						font-size: 32rpx;
						font-weight: 600;
					}
				}

				.dione {
					width: 50rpx;
					height: 50rpx;
					position: absolute;
					right: 0;
					top: 0;
					margin: 10rpx;
				}

				.consultantman {
					display: flex;
					justify-content: center;
					// position: relative;
					.consultantpeople:first-child {
						margin-right: 30rpx;
					}

					.consultantpeople {
						position: relative;
						width: 335rpx;
						border-radius: 10rpx;
						overflow: hidden;
						margin-top: 20rpx;


						.consultantimg{
							text-align: center; 
							image {
								height: 220rpx;
								border-radius: 10rpx;
							}
						}
						 
						 
						

						.consultantbody {
							width: 300rpx;
							margin: auto;

							.consultantid {
								display: flex;
								align-items: center;
								margin: 10rpx auto;

								.consultantname {
									font-size: 32rpx;
									font-weight: 900;
								}

								.consultantschool {
									color: rgb(151, 159, 169);
									margin-left: 10rpx;
								}
							}
						}

						.consultantlabel {
							display: flex;
							margin: 10rpx auto;

							view {
								font-size: 22rpx;
								margin-right: 10rpx;
								background-color: rgb(240, 244, 245);
								display: inline-block;
								padding: 5rpx 10rpx;
								color: rgb(151, 159, 169);
							}
						}

						.consultantbtn {
							border: 2rpx solid $uni-font-color;
							border-radius: 50rpx;
							text-align: center;
							font-size: 28rpx;
							padding: 10rpx 5rpx;
							margin: 10rpx auto;
							color: $uni-font-color;
							font-weight: 900;
						}
					}
				}
			}
		}
	}
</style>
