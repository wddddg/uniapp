<!-- <template>
    <view class="select-city-wrap">
        <view class="select-city">
            <view class="index-bg-view">
                <view class="index" @touchmove="touchMoveIndex">
                    <view class="index-item" @click="scrollTo('#')">#</view>
                    <view class="index-item" v-for="item in citys" :key="item.letter" @click="scrollTo(item.letter)">{{ item.letter }}</view>
                </view>
            </view>
            <scroll-view :scroll-into-view="scrollIntoId" @scroll="scrollChange" :scroll-y="true" :scroll-with-animation="isAnimation" :style="{ height: windowHeight }">
                <view class="content">
                    <view class="section" id="current">
                        <view class="city-title">当前城市</view>
                        <view class="city-list">
                            <view @click="onSelect(value)" class="city-item" style="display: flex; justify-content: center; align-items: center;">
                                {{ current }}
                            </view>
                        </view>
                    </view>
                    <view class="section" id="hot" v-if="hotCitys.length">
                        <view class="city-title">热门城市</view>
                        <view class="city-list">
                            <view class="city-item" :class="{ active: current === city }" v-for="(city, i) in hotCitys" :key="i" @click="onSelect(city)">{{ city }}</view>
                        </view>
                    </view>
                    <view class="section" :id="item.letter" v-for="item in citys" :key="item.letter">
                        <view class="letter">{{ item.letter }}</view>
                        <view class="city-list">
                            <view class="city-item" :class="{ active: current === city }" v-for="(city, itemIndex) in item.list" :key="itemIndex" @click="onSelect(city)">
                                {{ city }}
                            </view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>
<script>
import Citys from '@/components/search/region/city/citys.js';
export default {
    props: {
        hotCitys: {
            type: Array,
            default() {
                return [];
            }
        },
        value: {
            type: String,
            default: ''
        },
        locationValue: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            citys: Citys,
            windowHeight: '',
            scrollIntoId: 'A',
            current: this.value,
            itemBounds: {},
            marginTopHeight: 0,
            isAnimation: true,
            query: null
        };
    },
    mounted() {
        this.getSystemInfo();
    },
    created() {
        let that = this;
        uni.$on('upadteLoaction', function(city) {
            that.current = city;
            console.log(city);
        });
    },
    beforeDestroy() {
        uni.$off(['upadteLoaction']);
    },
    methods: {
        scrollChange: function(e) {
        },
        // 获取导航栏的高度
        getItemHeight: function() {
            let that = this;
            this.query = uni.createSelectorQuery().in(this);
            this.query
                .select('.index-item')
                .boundingClientRect(data => {
                    let itemW = data.width;
                    let itemH = data.height;
                    that.itemBounds = {
                        width: itemW,
                        height: itemH
                    };
                })
                .exec();
            this.query
                .select('.index')
                .boundingClientRect(data => {
                    console.log(data);
                    console.log(this.windowHeight);
                    console.log(data.height);
                    this.marginTopHeight = (parseInt(this.windowHeight) - parseInt(data.height)) / 2;
                    console.log(this.marginTopHeight);
                })
                .exec();
            this.query
                .select('.letter')
                .boundingClientRect(data => {
                    console.log(data);
                    
                })
                .exec();
        },
        getSystemInfo() {
            uni.getSystemInfo().then(res => {
                let [error, data] = res;
                this.windowHeight = `${data.windowHeight}px`;
                this.getItemHeight();
            });
        },
        scrollTo(letter) {
			this.scrollIntoId = letter === '#' ? 'current' : letter;
			// uni.pageScrollTo({
			//   scrollTop: this.scrollIntoId,
			//   duration: 300
			// })
			console.log(this.scrollIntoId)
        },
        onSelect(city) {
            console.log(city);
            this.current = city;
            this.$emit('input', city);
            this.$emit('on-select', city);
        },

        touchMoveIndex: function(e) {
            let info = e.changedTouches[0];
            // console.log('开始移动点：' + info.pageY);
            let itemY = info.pageY - this.marginTopHeight;
            var count = Math.ceil(itemY / this.itemBounds.height);
            if (count == 1) {
                this.isAnimation = true;
                this.scrollIntoId = 'current';
                return;
            }
            // console.log(count);
            if (count > 23) {
                return
            }
            if (count - 1 > 0) {
                count = count - 1;
            }
            let item = this.citys[count - 1];
            if (this.scrollIntoId == item.letter) {
                return;
            }
            // console.log(item.letter);
            this.isAnimation = true;
            this.scrollIntoId = item.letter === '#' ? 'current' : item.letter;
        }
    }
};
</script>

<style lang="scss" scoped>
.select-city-wrap {
    position: relative;
    padding: 0 30upx;
    // background-color: rgba(25,255,255, 1);
}

.index-item {
    width: 60upx;
    height: 42upx;
    line-height: 42upx;
    text-align: center;
}

.select-city {
    .index-bg-view {
        position: fixed;
        right: 10rpx;
        z-index: 999;
        height: 100%;
        width: 60upx;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .index {
        // position: absolute;
        // right: 10upx;
        // top: 140upx;
        // z-index: 999;
        color: rgba(0,0,0, 0.5);
        font-size: 32upx;
    }

    .section {
        margin-bottom: 19upx;
        .city-title {
            color: #000000;
            font-size: 32upx;
            margin-bottom: 28upx;
            margin-top: 30rpx;
			font-weight: 800;
        }

        .letter {
            width: 44upx;
            height: 44upx;
            color: #000000;
            font-weight: 800;
            // border-radius: 100%;
            // background-color: #2f9bfe;
            font-size: 28upx;
            line-height: 44upx;
            text-align: center;
            margin-bottom: 30upx;
        }

        .city-list {
            display: flex;
            flex-wrap: wrap;

            .city-item {
                width: 200upx;
                height: 64upx;
                margin-right: 20upx;
                margin-bottom: 20upx;
                line-height: 64upx;
                text-align: center;
                // border: 1px solid #dcdcdc;
                border-radius: 8upx;
                color: #000000;
                font-size: 28upx;
                background-color: rgba(0, 0, 0, 0.1);

                // 选中状态
                .active {
                    background-color: rgba(247, 70, 104, 1);
                    // border-color: #2f9bfe;
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }
}
</style> -->

<template>
	<u-index-list :scrollTop="scrollTop" :index-list="indexList">
		<view v-for="(item, index) in citys" :key="index" @click="back">
			<u-index-anchor :index="item.letter" />
			<view class="list-cell" v-for="(item2,index2) in item.list" :key="index2">
				<view class="list-cellbox">
					{{item2}}
				</view>
			</view>
		</view>
	</u-index-list>
</template>

<script>
	import Citys from '@/components/search/region/city/citys.js';
	export default {
		data() {
			return {
				citys: Citys,
				scrollTop: 0,
				indexList:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z']
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			back() {
				uni.navigateBack()
			}
		},
	}
</script>

<style lang="scss" scoped>
	.list-cell {
		width: 100%;
		padding: 10px 24rpx;
		color: #323233;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
		
		.list-cellbox{
			display: flex;
			flex-direction: column;
			border-bottom: 1upx solid #DEDEDE;
			text{
				display: block;
			}
		}
	}
</style>
