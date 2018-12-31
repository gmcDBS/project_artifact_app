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
            {{repair.device.deviceBrand + " "+ repair.device.deviceModel}}
          </td>
		  <td>
            {{repair.repairType}}
          </td>
          <td>
            {{repair.repairStatus}}
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
				customer: {}
			}
		},
		created() {
			this.fetchData()
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				// 5c1ef64362d8552de8aa3977
				axios.get(`${this.url}customer/${this.$route.params.id}`)
					.then((resp) => {
						this.customer = resp.data;
						console.log(resp)
						console.log(this.customer)
					})
					.catch((err) => {
						console.log(err)
					})
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
