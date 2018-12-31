<template>
  <div id="repairs">
    <div id="table-utils" >
    <button type="button" class="button is-primary" >add repair</button>
    <input type="search"  class="input" placeholder="Search repairs" />
    </div>
    <table class="table" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Contact</th>
          <th># of Repairs</th>
          <th>Joined</th>
		  <th></th>
        </tr>
      </thead>
      <tfoot>
        
      </tfoot>
      <tbody v-for="(customer, key) in customers" >
        <tr>
          <td>
			  <router-link :to="{ name: `Customers`, params: { id: customer._id }}">{{customer.customerId}}</router-link>
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
            {{customer.createdAt}}
          </td>
          <td><button type="button" class="button is-primary" >update</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Repairs',
		data: function() {
			return {
				url: "http://localhost:3005/",
				customers: {},
				items: [{
						rType: 'cracked screen',
						rStatus: 'In Progress',
						rLeftIn: '13/12/2018'
					},
					{
						rType: 'speaker not working',
						rStatus: 'Done',
						rLeftIn: '03/12/2018'
					},
					{
						rType: 'charing port not charging',
						rStatus: 'In Progress',
						rLeftIn: '30/11/2018'
					},
					{
						rType: 'headphone jack broken',
						rStatus: 'Done',
						rLeftIn: '27/11/2018'
					}
				]
			}
		},
		created() {
			this.fetchData()
		},
		methods: {
			fetchData() {
				// 5c1ef64362d8552de8aa3977
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
