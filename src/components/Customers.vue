<template>
  <div id="customers">
    <div id="table-utils" >
<!--    <button type="button" class="button is-primary" >Add Repair</button>-->
    <input type="search"  class="input" v-model="search" placeholder="Search Customers" />
    </div>
    <table class="table" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Contact</th>
          <th># of Repairs</th>
          <th>Joined</th>
<!--		  <th></th>-->
        </tr>
      </thead>
      <tfoot>
        
      </tfoot>
      <tbody v-for="customer in filteredCustomers" >
        <tr>
          <td>
			  <router-link :to="{ name: `Customer`, params: { id: customer._id }}">{{customer.customerId}}</router-link>
		  </td>
          <td>
            {{customer.customerName}}
          </td>
          <td>
            {{customer.customerContact}}
          </td>
			<td>
            {{customer.repairs.length}}
          </td>
          <td>
            {{customer.createdAt.substring(0, 10).split("-").reverse().join("-")}}
          </td>
<!--          <td><button type="button" class="button is-primary" >update</button></td>-->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Customers',
		data: function() {
			return {
				url: "http://localhost:3005/",
				customers: [],
				search: ''
			}
		},
		created() {
			this.fetchData();
		},
		computed: {
			filteredCustomers() {
				return this.customers.filter(customer => {
					return customer.customerName.toLowerCase().includes(this.search.toLowerCase())
				})
			},
		},
		methods: {
			
			fetchData() {
				axios.get(`${this.url}customer`)
					.then((resp) => {
						this.customers = resp.data;
						console.log(resp)
						console.log(this.customers)
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
