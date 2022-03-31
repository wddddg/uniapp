<template>
	<view>
		<view class="bodynews">
			<view class="newstitle">
				<view class="newsname">
					<text>{{str}}</text>
					<image :src="show? '/static/img/collection.png':'/static/img/collection_1.png'" mode="" @click="shoucang"></image>
				</view>
				<view class="newslabel">
					<text>在售</text>
					<text class="lg text-gray cuIcon-crownfill"></text>
					<text>中山热销楼盘榜第1名</text>
					<text>住宅</text>
					<text>交通便利，生活舒适</text>
				</view>
				<view class="newsnum">
					<view class="newsnumq">
						<view><text>8700</text><text>元/平起</text></view>
						<text class="newsck">参考单位</text>
					</view>
					<view>
						<view  class="newsnumq" style="padding-left: 20rpx;">
							<view><text>78</text><text>万/套</text></view>
							<text class="newsck">参考总价</text>
						</view>
					</view>
					<view>
						<view class="newsnumq" style="padding-left: 20rpx;">
							<view><text>75-132</text><text>㎡</text></view>
							<text class="newsck">建面</text>
						</view>
					</view>
				</view>
				<view class="newstips">
					<text>注：以上价格更新于2021-08-02</text>
				</view>
				
				<view style="margin: 20rpx auto;">
					<scroll-view scroll-x="true">
						<view  style="white-space: nowrap;display: flex;">
							<view class="effect" v-for="(item,index) in photoList" :key="index">
								<view>效果图</view>
								<image :src="item" mode=""></image>
							</view>
						</view>
					</scroll-view>
				</view>
				
				
				<view class="newstime">
					<view class="newstimecontent">
						<view>
							<text>开盘:</text><text>2019-02-23</text><text class="newstimehx">2/3/4居</text><text class="newstimehx">户型:</text>	
						</view>
						<view>
							<text>预售许可证:</text><text> 中建房（预）字第2019071号</text>
						</view>
						<view>
							<text>地址:</text><text>黄圃镇、新柳中路8号</text>
						</view>
						<view>
							<text>风险提示:</text><text>居里用户风险提示</text>
						</view>
					</view>
					<view class="newstimecontent newsimg">
						<image src="@/static/img/address.png" mode=""></image>
					</view>
				</view>
				
				
				<view class="newsbtns">
					<view class="newsbtnsone">
						<view><image src="@/static/img/up.png" mode=""></image><text> 变价通知我 </text></view>
						<view><image src="@/static/img/alert.png" mode=""></image><text> 开盘通知我 </text></view>
					</view>
					<view class="newsbtnstwo">
						<view class="newsbtnstwotop">
							<text>●</text><text>恒裕买房·为买房人服务</text><text>●</text>
						</view>
						<view class="newsbtnstwobot">
							<view>
								<text class="lg text-gray cuIcon-check radius"></text>
								<text>低价保障，买贵赔差价</text>
							</view>
							<view>
								<text class="lg text-gray cuIcon-check radius"></text>
								<text>高学历咨询师，全程陪同</text>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="line"></view>
			
			<view class="newsbody">
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">享受优惠</text>
						<view class="discountq">
							<view><image src="@/static/img/tixt.png" mode=""></image></view>
							<view>
								<view>免费专车劵</view>
								<view>楼盘随心看，全城免费接送</view>
							</view>
							<view>领取</view>
						</view>
					</view>
				</view>
				
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">楼盘户型</text>
						<text class="lg text-gray cuIcon-right" style="float: right; line-height: 80rpx;"></text>
						<text class="text-gray" style="float: right; line-height: 80rpx;">查看全部</text>
						<scroll-view scroll-x="true">
							<view  style="white-space: nowrap;display: flex;">
								<view class="newsscroll">
									<view><image src="https://img2.baidu.com/it/u=178628709,3924753647&fm=11&fmt=auto&gp=0.jpg" mode=""></image></view>
									<view><text>2室2厅2卫</text><text>在售</text></view>
									<view><text>建面109㎡|南</text><text>95万/套</text></view>
									<view>咨询房贷首付</view>
								</view>
								<view class="newsscroll">
									<view><image src="https://img2.baidu.com/it/u=178628709,3924753647&fm=11&fmt=auto&gp=0.jpg" mode=""></image></view>
									<view><text>2室2厅2卫</text><text>在售</text></view>
									<view><text>建面109㎡|南</text><text>95万/套</text></view>
									<view>咨询房贷首付</view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
				
				
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">楼盘信息</text>
						<view class="newshouseinfo">
							<view class="newshouseinfoct">
								<view><text>交房：</text><text>2021-03-31</text></view>
								<view><text>产权：</text><text>70年</text></view>
							</view>
							<view class="newshouseinfoct">
								<view><text>装修：</text><text>带装修</text></view>
								<view><text>楼栋：</text><text>4栋在售,12栋待售</text></view>
							</view>
							<view class="newshouseinfoct">
								<view><text>水电：</text><text>民水民电</text></view>
								<view><text>供暖：</text><text>待更新</text></view>
							</view>
							<view class="newshouseinfobtn">
								了解更多楼盘信息
							</view>
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">有问必答</text>
						<text class="lg text-gray cuIcon-right" style="float: right; line-height: 80rpx;"></text>
						<text class="text-gray" style="float: right; line-height: 80rpx;">查看全部</text>
						<view class="newsbodyask">
							<text>问</text><text>荔园新天地位置在哪？</text><text style="float: right; font-size: 26rpx;" class="text-gray">1预览</text>
						</view>
						<view class="newsbodyask">
							<text>问</text><text>荔园新天地位置在哪？</text><text style="float: right; font-size: 26rpx;" class="text-gray">2预览</text>
						</view>
						<view class="newshouseinfo">
							<view class="newshouseinfobtn">
								我要提问
							</view>
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">成交用户对居里评价</text>
						<text class="lg text-gray cuIcon-right" style="float: right; line-height: 80rpx;"></text>
						<text class="text-gray" style="float: right; line-height: 80rpx;">查看全部</text>
						
						
						<view class="cu-list menu-avatar">
							<view class="cu-item">
								<view class="cu-avatar round lg" style="background-image:url(https://img2.baidu.com/it/u=2860896052,691474276&fm=26&fmt=auto&gp=0.jpg);"></view>
								<view class="content flex-sub">
									<view class="answer">安女士<text>成交用户</text></view>
									<view class="newslabel"><text>成交楼盘：</text><text>金色年华花园</text><text>服务咨询师：</text><text>买房咨询师</text></view>
								</view>
							</view>
						</view>
						<view class="text-content">
							居理买房网成立于2014年，其前身为居理新房  ，致力于为买房人提供全面、专业、可靠的购房决策支持。其拥有专业的买房咨询师团队，可提供从大数据找房、全城专车看房到低价买房的全流程定制服务。截至2021年，居理买房网的业务已覆盖京津冀、长三角、珠三角、成渝等7大城市群，37座城市，实勘楼盘超过17000个。
						</view>
						<text class="text-left text-gray">2020-04-12</text>
						<view class="text-gray text-sm text-right padding">
							<text class="cuIcon-appreciatefill margin-lr-xs"></text>0
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">楼盘概览</text>
						<view>
							<map :latitude="22.3" :longitude="113.52" style="width: 100%;"></map>
							<text style="float: right;">注：同价位为该楼盘总价上下浮动10%</text>
						</view>
						<view style="margin-top: 40rpx; margin-bottom: 20rpx;">整个区域目前均价9229.89元/㎡</view>
						
						<view class="">
							<view style="margin: 10rpx auto;">
								<view style="margin: 10rpx auto;">
									<text class="lg text-gray cuIcon-appreciate"></text>
									<text>项目优势</text>
								</view>
								<text style="font-size: 22rpx;">理买房网从天使轮开始，先后得到了险峰长青、唯猎资本、源码资本、祥峰投资、58集团以及红杉资本的投资，2019年9月，完成数千万美元C轮融资 。2021年3月，完成腾讯和海松资本领投的4亿元C+轮融资。</text>
							</view>
							<view>
								<view style="margin: 10rpx auto; display: flex; align-items: center;">
									<image src="@/static/img/time.png" style="width: 28rpx; height: 28rpx;" mode=""></image>
									<text>客群匹配</text>
								</view>
								<text style="font-size: 22rpx;">理买房网从天使轮开始，先后得到了险峰长青、唯猎资本、源码资本、祥峰投资、58集团以及红杉资本的投资，2019年9月，完成数千万美元C轮融资 。2021年3月，完成腾讯和海松资本领投的4亿元C+轮融资。</text>
							</view>
						</view>
						<view class="newshouseinfo">
							<view class="newshouseinfobtn">
								咨询楼盘完整分析
							</view>
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">区域发展</text>
						<text class="text-orange" style="float: right; line-height: 80rpx; font-size: 32rpx;">7.5分</text>
						<text class="text-gray" style="float: right; line-height: 80rpx; margin-right: 10rpx;">评测得分</text>
						<view>
							<text>该楼盘位于</text><text class="newsposition">黄圃镇区域</text>
							<view style=" margin: 10rpx auto;">
								<text style="font-size: 22rpx; ">理买房网从天使轮开始，先后得到了险峰长青、唯猎资本、源码资本、祥峰投资、58集团以及红杉资本的投资，2019年9月，完成数千万美元C轮融资 。2021年3月，完成腾讯和海松资本领投的4亿元C+轮融资。</text>
							</view>
						</view>
						<view class="newshouseinfo">
							<view class="newshouseinfobtn">
								咨询更多楼盘分析
							</view>
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">周边设施</text>
						<text class="text-orange" style="float: right; line-height: 80rpx; font-size: 32rpx;">7.5分</text>
						<text class="text-gray" style="float: right; line-height: 80rpx; margin-right: 10rpx;">评测得分</text>
						<view>
							<view style=" margin: 10rpx auto;">
								<text style="font-weight: 800;">医院：</text>
								<text>比较专业的医院是</text>
								<text class="newsposition">黄圃镇区域</text>
								<text>，开车10分钟内就能到，比较方便</text>
							</view>
							<view style=" margin: 10rpx auto;">
								<text style="font-weight: 800;">商场：</text>
								<text>平时休闲逛街可以去</text>
								<text class="newsposition">领丰汇商业中心</text>
								<text>，买完东西可以直接走路回家</text>
							</view>
						</view>
						<view class="newshouseinfo">
							<view class="newshouseinfobtn">
								了解更多周边详细
							</view>
						</view>
					</view>
					
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">交通概览</text>
						<text class="text-orange" style="float: right; line-height: 80rpx; font-size: 32rpx;">6.0分</text>
						<text class="text-gray" style="float: right; line-height: 80rpx; margin-right: 10rpx;">评测得分</text>
						<view>
							<map :latitude="22.3" :longitude="113.52" style="width: 100%;"></map>
							<text style="font-weight: 800; line-height: 80rpx; font-size: 32rpx;">通勤测距</text>
							<text class="lg text-gray cuIcon-right" style="float: right; line-height: 80rpx;"></text>
							<text class="text-gray" style="float: right; line-height: 80rpx;">查看更多路线</text>
						</view>
						<view style="margin: 20rpx 0rpx;">
							<text style="color: #CCCCCC; margin-right: 20rpx;">目的地</text>
							<text>立刻输入地址测算吧</text>
							<text class="newsposition" style="float: right;">添加地址</text>
						</view>
						<view style="text-align: center;" >
							<text class="newsposition" style="float: left;">自驾</text><text class="text-gray">公交</text>
						</view>
						<view style="height: 40rpx; margin: 10rpx auto;">
							<text style="float: right;" class="text-gray">*出发地默认为楼盘地址，以上数据采集于腾讯地图</text>
						</view>
						<view class="newshouseinfo">
							<view class="newshouseinfobtn">
								咨询楼盘完整分析
							</view>
						</view>
					</view>
					
					
					
					
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">小区环境</text>
						<text class="text-orange" style="float: right; line-height: 80rpx; font-size: 32rpx;">8.5分</text>
						<text class="text-gray" style="float: right; line-height: 80rpx; margin-right: 10rpx;">评测得分</text>
						<view>小区共有16栋楼</view>
						<view class="newshouseinfoct">
							<view><text>车位比：</text><text>1：1.2</text></view>
							<view><text>容积率：</text><text>2.50</text></view>
						</view>
						<view class="newshouseinfoct">
							<view><text>绿化率：</text><text>30%</text></view>
							<view><text>物业费：</text><text>2.5元/㎡/月</text></view>
						</view>
						<view class="newshouseinfoct">
							<view><text>开发商：</text><text>中山市荔园房地产开发有限公司</text></view>
						</view>
						<view class="newshouseinfoct">
							<view><text>物业：</text><text>待更新</text></view>
						</view>
						<view class="newshouseinfo">
							<view class="newshouseinfobtn">
								预约实地看房
							</view>
						</view>
					</view>
					
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">室内体验</text>
						<text class="text-orange" style="float: right; line-height: 80rpx; font-size: 32rpx;">8.9分</text>
						<text class="text-gray" style="float: right; line-height: 80rpx; margin-right: 10rpx;">评测得分</text>
						<view>
							<text style="line-height: 80rpx;">推荐户型</text>
							<text class="lg text-gray cuIcon-right" style="float: right; line-height: 80rpx;"></text>
							<text class="text-gray" style="float: right; line-height: 80rpx;">更多优质户型</text>
						</view>
						<view class="newsscroll">
							<view>
								<image src="https://img2.baidu.com/it/u=178628709,3924753647&fm=11&fmt=auto&gp=0.jpg" style="width: 100%;" mode=""></image>
							</view>
							<view>
								<text>2室2厅2卫</text><text>在售</text><text>户型方正</text>
							</view>
							<view>
								<text>建面93㎡|南</text><text>80万/套</text>
							</view>
						</view>
						<view class="newshouseinfobtns">
							<view>
								<image src="@/static/img/up.png" style="width: 34rpx; height: 34rpx;" mode=""></image><text> 咨询底价 </text>
							</view>
							<view>
								<image src="@/static/img/alert.png" style="width: 34rpx; height: 34rpx;"  mode=""></image><text> 咨询房贷首付 </text>
							</view>
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">居里服务</text>
						<view class="newsservice">
							<image src="https://t2.focus-img.cn/sh740wsh/xf/xw/60779c73-0e7f-4193-b13b-c39b9b2394d5.JPEG" mode=""></image>
							<view>
								<view><text>选房更专业</text></view>
								<view><text>买房咨询师，专业选房建议</text></view>
							</view>
						</view>
						<view class="newshouseinfo">
							<view class="newshouseinfobtn">
								马上预约居里服务
							</view>
						</view>
					</view>
				</view>
				<view class="line"></view>
				<view class="newsbodyframe">
					<view class="discount">
						<text class="newsbodytitle">猜你喜欢</text>
						<houseinfo></houseinfo>
					</view>
				</view>
			</view>
		</view>
		
		
		
		
		<view style="height: 84rpx; margin-top: 84rpx;"></view>
		<view class="bottomtab">
			<view class="cu-bar bg-white tabbar border">
				<!-- <button class="action" open-type="contact" style="flex: 1;">
					<view class="cuIcon-service text-green"></view>
					咨询热线
				</button> -->
				<view class="bg-orange"
				 style="flex: 2; text-align: center; margin: 0rpx 10rpx; padding: 10rpx; border-radius: 10rpx; background-color: rgb(255,117,80); line-height: 50rpx;">
					<text>我要看房</text>
				</view>
				<view class="bg-red navbottom"  style="flex: 2; text-align: center; margin: 0rpx 10rpx; padding: 10rpx; border-radius: 10rpx; line-height: 50rpx;">
					<text>我要咨询</text>
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
				str:null,
				photoList:null,
				show:false
			}
		},
		components:{
			houseinfo
		},
		methods:{
			imageshow(num){
				uni.showToast({
					title: num == 0 ? '关注成功':'取消关注',
					icon:'none',
					duration: 2000
				});
			},
			shoucang(){
				if(uni.getStorageSync('user')){
					this.show = !this.show
					if(this.show){
						uni.setStorageSync('shoucang',this.show)
					}else{
						uni.removeStorageSync('shoucang')
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
			}
		},
		onLoad(option) {
			console.log(option.name)
			this.str = option.name
			this.photoList = uni.getStorageSync('photoList')
			console.log(this.photoList)
			if(uni.getStorageSync('shoucang') == null){
				this.show = false
			}else{
				this.show = uni.getStorageSync('shoucang')
			}
		},
		onUnload(){
			uni.removeStorageSync('photoList')
		}
	}
</script>

<style lang="scss">
	.bodynews{
		.line{
			border-bottom: 20rpx solid rgb(246,246,246);
			margin: 20rpx auto ;
		}
		.newstitle{
			width: 700rpx;
			margin: auto;
			.newsname{
				font-size: 50rpx;
				font-weight: 800;
				image{
					width: 46rpx;
					height: 46rpx;
					vertical-align: middle;
					float: right;
				}
			}
			.newslabel{
				margin: 20rpx auto;
				image{
					width:30rpx;
					height: 25rpx;
				}
				text{
					color: rgb(122,123,127);
					background-color: rgba(122,123,127,.1) ;
					margin: 20rpx 10rpx;
					font-size: 22rpx;
					padding: 5rpx 10rpx 5rpx 10rpx;
				}
				text:nth-child(1){
					color: rgb(68,184,143);
					background-color: rgba(68,184,143,.1) ;
				}
				text:nth-child(2){
					margin: 0;
				}
				text:nth-child(3){
					margin: 0;
				}
				text:nth-child(2),text:nth-child(3){
					color:rgb(251,206,129);
					background-color: rgba(251,206,129,.1); ;
				}
			}
			.newsnum{
				display: flex;
				justify-content: space-between;
				view:nth-child(2),view:nth-child(3){
					border-left: 1rpx solid #CCCCCC;
				}
				// view{
				// 	margin: auto;
				// }
				.newsnumq{
					.newsck{
						color:rgb(150,155,158) ;
						font-size: 26rpx;
					}
					view:first-child{
						color:rgb(255,89,59) ;
						text:first-child{
							font-size: 40rpx;
							font-weight: 800;
						}
						text:nth-child(2){
							font-size: 24rpx;
						}
					}
				}
				
			}
			.newstips{
				margin: 20rpx auto;
			}
			.effect{
				width: 300rpx ;
				height: 200rpx;
				margin-right: 20rpx;
				position: relative;
				border-radius: 10rpx;
				flex-shrink:0;
				overflow: hidden;
				view{
					position: absolute;
					z-index: 99;
					bottom: 0;
					background: linear-gradient(0deg,rgba(0,0,0,.7),transparent);
					width: 100%;
					color: #FFFFFF;
					text-align: center;
					font-size: 22rpx;
					line-height: 50rpx;
				}
				image{
					width: 100%;
					height: 100%;
				}
			}
			.newstime{
				display: flex;
				align-items: center;
				.newstimecontent{
					image{
						width: 70rpx;
						height: 70rpx;
					}
					view{
						margin: 20rpx auto;
						.newstimehx{
							float: right;
							
						}
						text:first-child,text:nth-child(4){
							color: rgb(160,164,165);
							margin-right: 10rpx;
						}
					}
				}
				.newsimg{
					margin: auto;
				}
			}
			.newsbtns{
				.newsbtnsone{
					display: flex;
					justify-content: space-between;
					view{
						width: 330rpx;
						height: 100rpx;
						color: $uni-font-color;
						background-color: rgba($color: $uni-font-color, $alpha: .1);
						line-height: 100rpx;
						font-weight: 800;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 10rpx;
						image{
							width: 35rpx;
							height: 35rpx;
						}
					}
				}
				.newsbtnstwo{
					margin: 20rpx auto;
					width: 700rpx;
					height: 150rpx;
					background-color: rgba($color: $uni-font-color, $alpha: .1);
					text-align: center;
					border-radius: 10rpx;
					.newsbtnstwotop{
						line-height: 90rpx;
						font-weight: 800;
						color: rgb(56,37,12);
					}
					.newsbtnstwobot{
						display: flex;
						justify-content: space-between;
						width: 600rpx;
						margin: auto;
						color: rgba(56,37,12,.5);
						font-size: 22rpx;
						.radius{
							margin-right: 10rpx;
							border: 2rpx solid  rgba(56,37,12,.5) ;
							border-radius: 50%;
							padding: 5rpx;
						}
					}
				}
			}
		}
		.newsbody{
			.newsbodyframe{
				width: 700rpx;
				margin: auto;
				.discount{
					// border: 1rpx solid #FFFFFF;
					.newsbodytitle{
						font-weight: 800;
						font-size: 36rpx;
						line-height: 80rpx;
					}
					.discountq{
						display: flex;
						margin: 20rpx auto;
						align-items: center;
						justify-content: space-between;
						border-radius: 10rpx;
						background-color: rgba($color: $uni-font-color, $alpha: .1);
						padding: 0rpx 30rpx;
						view{
							font-size: 26rpx;
							color: #CCCCCC;
						}
						view:first-child{
							font-weight: 800;
							font-size: 32rpx;
							color: #000000;
						}
						view:nth-child(3){
							background-color: $uni-font-color;
							color: #FFFFFF;
							padding: 10rpx 30rpx ;
							border-radius: 50rpx;
						}
						image{
							width: 150rpx;
							height: 150rpx;
						}
					}
					.newsscroll{
						margin-right: 20rpx;
						image{
							width: 450rpx;
							height: 340rpx;
						}
						view:nth-child(2){
							margin: 10rpx auto;
							text:first-child{
								font-weight: 600;
								font-size: 32rpx;
							}
							text:nth-child(2){
								padding: 5rpx;
								background-color:rgba(62,179,145,.1) ;
								color: rgb(62,179,145);
								font-size: 24rpx;
								margin-left: 10rpx;
								font-weight: 700;
							}
							text:nth-child(3){
								padding: 5rpx;
								background-color:rgba(168,168,168,.1) ;
								color: rgb(168,168,168);
								font-size: 24rpx;
								margin-left: 10rpx;
								font-weight: 700;
							}
						}
						view:nth-child(3){
							margin: 10rpx auto;
							text:first-child{
								color: #CCCCCC;
								font-size: 24rpx;
							}
							text:nth-child(2){
								float: right;
								color: rgb(240,80,40);
							}
						}
						view:nth-child(4){
							margin: 10rpx auto;
							font-size: 32rpx;
							width: 100%;
							height: 100rpx;
							background-color: rgba($color: $uni-font-color, $alpha: .1);
							color: $uni-font-color;
							text-align: center;
							line-height: 100rpx;
							border-radius: 10rpx;
							font-weight: 800;
						}
					}
					.newshouseinfo{
						.newshouseinfoct{
							display: flex;
							// justify-content: space-between;
							view{
								width: 350rpx;
								margin-top: 5rpx;
								text:first-child{
									color: #C0C4CC ;
								}
							}
						}
						.newshouseinfobtn{
							margin: 20rpx auto;
							width: 100%;
							height: 100rpx;
							text-align: center;
							line-height: 100rpx;
							color: $uni-font-color;
							background-color: rgba($color: $uni-font-color, $alpha: .1);
							font-weight: 900;
						}
					}
					.newsbodyask{
						margin: 20rpx;
						text:first-child{
							color: #FFFFFF;
							background-color: rgb(253,115,78);
							padding: 5rpx;
							border-radius: 5rpx;
							font-size: 24rpx;
						}
					}
					.answer{
						text{
							// padding: 3rpx 5rpx;
							border: 1rpx solid $uni-font-color ;
							background-color: rgba($color: $uni-font-color, $alpha: .1) ;
							color: $uni-font-color;
							font-size: 20rpx;
							margin-left: 20rpx;
						}
					}
					.newslabel{
						font-size: 22rpx;
						text:nth-child(1),text:nth-child(3){
							color: rgb(138,148,150);
							margin: auto 10rpx;
						}
					}
					.newshouseinfobtns{
						display: flex;
						justify-content: space-between;
						view{
							width: 330rpx;
							height: 100rpx;
							color: $uni-font-color;
							background-color: rgba($color: $uni-font-color, $alpha: .1) ;
							line-height: 100rpx;
							font-weight: 800;
							display: flex;
							align-items: center;
							justify-content: center;
							border-radius: 10rpx;
							image{
								width: 35rpx;
								height: 35rpx;
							}
						}
					}
					.newsservice{
						display: flex;
						align-items: center;
						// justify-content: center;
						image{
							width: 200rpx;
							height: 150rpx;
						}
						text{
							color: #CCCCCC;
							font-size: 30rpx;
							margin: 20rpx;
						}
						view{
							margin: 20rpx;
						}
						view:first-child{
							text{
								font-size: 32rpx;
								font-weight: 800;
								color: #000000;
								// margin: 20rpx;
							}
						}
					}
				}
				.newsposition{
					color: $uni-font-color; 
					background-color: rgba($color: $uni-font-color, $alpha: .1);
				}
			}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	.bottomtab{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.navbottom{
		background-color: rgba($color: $uni-font-color, $alpha: .9) ;
	}
</style>
