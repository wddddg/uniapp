<template>
	<view>
		<fy-dropdown :menuList="menuList" :class="{'hide':showMsk}">
			<fy-dropdown-item v-model="synthesisValue" dropdownKey="synthesis" :options="columnOptions" type="column"
				@change="handlerColumnChange"></fy-dropdown-item>
			<fy-dropdown-item v-model="priceValue" dropdownKey="price" :options="priceOptions"
				@change="handlerTypeChange"></fy-dropdown-item>
			<fy-dropdown-item v-model="salesValue" dropdownKey="sales" :options="salesOptions"
				@change="handlerTypeChange"></fy-dropdown-item>
		</fy-dropdown>
	</view>
</template>

<script>
	// export default {
	// 	methods:{
	// 		iconup(){
	// 			this.color = '#fff'
	// 		}
	// 	}
	// }
	export default {
		data() {
			return {
				menuList: [{
						title: '区域',
						dropdownKey: 'synthesis',
					},
					{
						title: '户型',
						dropdownKey: 'price',
					},
					{
						title: '总价',
						dropdownKey: 'sales',
					}
				],
				synthesisValue: '',
				columnOptions: [{
						title: '香洲',
						key: 'type',
						default: '',
						list: [{
							text: '全部',
							value: '1'
						}, {
							text: '热销',
							value: '11'
						}, {
							text: '低首付',
							value: '12'
						}],
					},
					{
						title: '斗门',
						key: 'type',
						default: '',
						list: [{
							text: '全部',
							value: '2'
						}, {
							text: '热销',
							value: '21'
						}, {
							text: '低首付',
							value: '22'
						}],

					},
					{
						title: '金湾',
						key: 'type',
						default: '',
						list: [{
							text: '全部',
							value: '3'
						}, {
							text: '热销',
							value: '31'
						}, {
							text: '低首付',
							value: '32'
						}],

					}
				],
				priceValue: '',
				priceOptions: [{
						label: '全部',
						value: 0,
					},
					{
						label: '一居',
						value: 1,
					},
					{
						label: '二居',
						value: 2,
					},
					{
						label: '三居',
						value: 3,
					},
					{
						label: '四居',
						value: 4,
					},
					{
						label: '五居',
						value: 5,
					},
					{
						label: '六居以及六居以上',
						value: 6,
					},
				],
				salesValue: '',
				salesOptions: [{
						label: '全部',
						value: 0,
					},
					{
						label: '50-100万/套',
						value: 1,
					},
					{
						label: '100-200万/套',
						value: 2,
					},
					{
						label: '300-400万/套',
						value: 3,
					},
					{
						label: '500-1000万/套',
						value: 4,
					},
					{
						label: '1000-5000万/套',
						value: 5,
					},
					{
						label: '5000万/套以及5000万/套以上',
						value: 6,
					},
				],
				showMsk: false
			}
		},
		methods: {
			handlerColumnChange(e) {
				if (e.cancel) return showMsk = true;

				this.columnOptions.forEach(item => {
					item.default = e.data[item.key];
				})


			},
			handlerTypeChange(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">
	.body {
		display: flex;
		justify-content: space-between;

		.title {}
	}

	.hide {
		position: fixed;
		top: 0;
		height: 100%;
		overflow: hidden;
		z-index: 999;
	}
</style>
