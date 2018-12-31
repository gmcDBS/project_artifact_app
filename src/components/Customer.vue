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
    	<button type="button" class="button is-primary" >Add Repair</button>
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
				<select  >
				  <option v-for="device in devices" :value="device._id">{{device.deviceBrand + " " + device.deviceModel}}</option>
				</select>
			</div>
          </td>
		  <td>
<!--            {{repair.repairType}}-->
			<div class="control">
    			<input class="input" type="text" placeholder="repair type" />
  			</div>
			
          </td>
          <td>
<!--            {{repair.repairStatus}}-->
			  <div class="select" >
			  	<select>
					<option value="Queue" >Queue</option>
					<option value="In Progress" >In Progress</option>
					<option value="Done" >Done</option>
				</select>				
			  </div>
          </td>
          <td>
            {{repair.createdAt}}
          </td>
          <td><button type="button" class="button is-primary" >Update</button></td>
		  <td><button type="button" class="button is-danger" >Delete</button></td>
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
			this.fetchCustomerData();
			this.fetchDevicesData();
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchCustomerData() {
				axios.get(`${this.url}customer/${this.$route.params.id}`)
					.then((resp) => {
						this.customer = resp.data;
						
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
			postRepair() {
				
			},
			putRepair() {
				
			},
			deleteRepair() {
				
			}
			
		}
	}

</script>

<style scoped>
	input {
		width: 25%;
	}

	table {
		margin: 0px auto;
	}

	#table-utils {
		text-align: center;
	}

</style>
