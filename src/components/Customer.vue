<template>
  <div>
    <div class="Customer">
      <div class="card">
        <div class="card-content">
          <div class="media">

            <div class="media-content">
              <p class="title is-4">{{ customer.customerName }}</p>
              <p class="subtitle is-6">{{ customer.customerId }}</p>
            </div>
          </div>

          <div class="content">
			{{ customer.customerContact }}
			<br />
            {{ customer.customerAddress }}
          </div>
        </div>
      </div>
    </div>
    <br />
	<div id="table-utils" >
    	<button type="button" class="button is-primary" @click="postRepair" >Add Repair</button>
    </div>
    <table class="table" >
      <thead>
        <tr>
          <th>ID</th>
		  <th>Device</th>
          <th>Type</th>
          <th>Status</th>
          <th>Left in</th>
          <th></th>
		  <th></th>
        </tr>
      </thead>
      <tfoot>
        
      </tfoot>
      <tbody v-for="repair in customer.repairs" >
        <tr>
          <td>{{repair.repairId}}</td>
          <td>  
			<div class="select" >
				<select class="devices" v-model="repair.device._id" >
				  <option v-for="device in devices" :value="device._id">{{device.deviceBrand + " " + device.deviceModel}}</option>
				</select>
			</div>
          </td>
		  <td>
<!--            {{repair.repairType}}  v-model="repair.repairType"-->
			<div class="control">
    			<input class="input" type="text" placeholder="repair type"  v-model="repair.repairType" />
  			</div>
			
          </td>
          <td>
<!--            {{repair.repairStatus}}-->
			  <div class="select" >
			  	<select v-model="repair.repairStatus" >
					<option value="Queue" >Queue</option>
					<option value="In Progress" >In Progress</option>
					<option value="Done" >Done</option>
				</select>				
			  </div>
          </td>
          <td>
            {{repair.createdAt.substring(0, 10).split("-").reverse().join("-")}}
          </td>
          <td><button type="button" class="button is-primary" @click="putRepair(repair._id)" >Update</button></td>
		  <td><button type="button" class="button is-danger"  @click="deleteRepair(repair._id)" >Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Customer',
		data() {
			return {
				url: "http://localhost:3005/",
				customer: [],
				devices: []
			}
		},
		created() {
			this.fetchTableData();
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchTableData() {
				this.fetchCustomerData();
				this.fetchDevicesData();
			},
			fetchCustomerData() {
				axios.get(`${this.url}customer/${this.$route.params.id}`)
					.then((resp) => {
						this.customer = resp.data;
						console.log(resp.data)
					})
					.catch((err) => {
						console.log(err)
					})
			},
			fetchDevicesData() {
				axios.get(`${this.url}device`)
					.then((resp) => {
						this.devices = resp.data;
						console.log(this.devices[0])
					})
					.catch((err) => {
						console.log(err)
					})
			},
			postRepair() {
				axios.post(`${this.url}repair`, {
						"repairId": `R${this.randInt(100,10000)}`,
						"repairType": "",
						"repairStatus": "Queue",
						"device": "5c1ef56d62d8552de8aa3971"
					})
					.then((resp) => {
						this.putCustomer(resp.data._id);
					})
					.catch((err) => {
						console.log(err)
					})
			},
			putCustomer(newRepair) {
				let repairs = this.customer.repairs.map(r => r._id);
				repairs.push(newRepair);
				axios.put(`${this.url}customer/${this.$route.params.id}`, {
						"customerId": this.customer.customerId,
						"customerName": this.customer.customerName,
						"customerAddress": this.customer.customerAddress,
						"customerContact": this.customer.customerContact,
						"repairs": repairs
					})
					.then((resp) => {
						this.fetchTableData();
					})
					.catch((err) => {
						console.log(err)
					})
			},
			testPut(repairId) {
				let repair = this.customer.repairs.filter(r => repairId === r._id);
				let index = this.customer.repairs.findIndex((r) => {
					return r._id === repairId;
				});
				repair = repair[0];
				console.log(this.customer.repairs)
				console.log(index)
			},
			putRepair(repairId) {
				let repair = this.customer.repairs.filter(r => repairId === r._id);
				let index = this.customer.repairs.findIndex((r) => {
					return r._id === repairId;
				});
				repair = repair[0];
				axios.put(`${this.url}repair/${repairId}`, {
						"repairId": repair.repairId,
						"repairType": repair.repairType,
						"repairStatus": repair.repairStatus,
						"device": document.querySelectorAll(".devices")[index].value
					})
					.then((resp) => {
						console.log("hh")
						console.log(resp.data);
						this.fetchTableData();
					})
					.catch((err) => {
						console.log(err)
					})
			},
			deleteRepair(repairId) {
				axios.delete(`${this.url}repair/${repairId}`)
					.then((resp) => {
						this.fetchTableData();
					})
					.catch((err) => {
						console.log(err)
					})
			},

			randInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min);
			}

		}
	}

</script>

<style scoped>
	table {
		margin: 0px auto;
	}

	#table-utils {
		text-align: center;
	}

</style>
