<template>
  <div class="Analytics">
<!--	select repair/customer week/month/year  -->
    <GChart
    type="ColumnChart"
    :data="filterChartData"
    :options="chartOptions"
    />
  </div>
</template>

<script>
	import axios from 'axios';
	import {
		GChart
	} from 'vue-google-charts'

	export default {
		name: 'Analytics',
		components: {
			GChart
		},
		created() {
			this.fetchTableData();
		},
		data() {
			return {
				// Array will be automatically processed with visualization.arrayToDataTable function
				url: "http://localhost:3005/",
				customers: [],
				repairs: [],
				devices: [],
				tmpChartData: [
					['Year', 'Customers', 'Repairs', 'Devices'],
					['2014', 1000, 400, 200],
					['2015', 1170, 460, 250],
					['2016', 660, 1120, 300],
					['2017', 1030, 540, 350]
				],
				chartOptions: {
					chart: {
						title: 'Company Performance',
						subtitle: 'Customers, Repairs, and Devices: 2014-2017',
					}
				}
			}
		},
		computed: {
			filterChartData() {
				const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				let chartData = [['Year', 'Customers', 'Repairs', 'Devices']];
				for (let i = 0; i < months.length; i++) {
					// this.reduceMonthValue()
					let k = i+1;
					chartData.push([ months[i], this.reduceMonthValue(k, this.customers), this.reduceMonthValue(k, this.repairs), this.reduceMonthValue(k, this.devices)]);
				}
				return chartData;
			},	
		},
		methods: {
			fetchTableData() {
				this.fetchCustomerData();
				this.fetchRepairsData();
				this.fetchDevicesData();
			},
			fetchCustomerData() {
				axios.get(`${this.url}customer`)
					.then((resp) => {
						this.customers = resp.data;
						console.log(this.customers)
					})
					.catch((err) => {
						console.log(err)
					})
			},
			fetchRepairsData() {
				axios.get(`${this.url}repair`)
					.then((resp) => {
						this.repairs = resp.data;
						console.log(this.repairs)
					})
					.catch((err) => {
						console.log(err)
					})
			},
			fetchDevicesData() {
				axios.get(`${this.url}device`)
					.then((resp) => {
						this.devices = resp.data;
						console.log(this.devices)
					})
					.catch((err) => {
						console.log(err)
					})
			},
			reduceMonthValue(index, data) {
				let value = 0;
				for (let i = 0; i < data.length; i++) {
					if (index === parseInt(data[i].createdAt.substring(5, 7))) {
						value++;
					}
				}
				return value;
			}
		}
	}

</script>
