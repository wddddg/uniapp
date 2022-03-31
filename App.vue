<script>
	export default {
		onLaunch: function() {
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			let that = this
			// uni.request({
			// 	url:'https://tcb-fra1wa1o89719b-7dymy3bb949fd.service.tcloudbase.com/api?url=%2Fbuilding%2Fsys%2Flist&data=%7B%22name%22:%22%22,%22minPrice%22:0,%22maxPrice%22:0,%22category_id%22:%22%22,%22pageNum%22:1,%22pageSize%22:20%7D',
			// 	success(data) {
			// 		that.globalData.body = data
			// 		that.$isResolve()
			// 		uni.hideLoading();
			// 	}
			// })
			uniCloud.callFunction({
				name:'houseinfo',
				success(res) {
					console.log(res.result)
					that.globalData.body = res
					that.$isResolve()
					uni.hideLoading();
				},
				fail(err){
					console.log(err)
				}
			})
		},
		globalData:{
			body:null
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "static/css/main.css";
	@import "static/css/icon.css";
	@import "static/iconfont/iconfont.css";
	@import "uview-ui/index.scss";
	page {
			background-color: #FFFFFF;
		}
</style>
