<template>
	<view>
		<ss-select-city :hotCitys="hotCitys" v-model="locationValue" @on-select="selectValue" />
	</view>
</template>

<script>
	import ssSelectCity from '@/components/search/region/city/city.vue'
	export default{
		components: {
		    ssSelectCity
		},
		methods:{
			selectValue(city) {
			    console.log(city)
			    this.locationValue = city
			        uni.showToast({
			        title:city,
			        icon: 'none'
			    })
			}
		}
	}
</script>

<style>
</style>
