<template>
  <div id="repairs">
    <div id="table-utils" >
    <button type="button" class="button is-primary" >add repair</button>
    <input type="search"  class="input" v-model="search" placeholder="Search repairs" />
    </div>
    <table class="table" >
      <thead>
        <tr>
          <th>Reference ID</th>
          <th>Type</th>
          <th>Status</th>
          <th>Left in</th>
          <th></th>
        </tr>
      </thead>
      <tfoot>
        
      </tfoot>
      <tbody v-for="(repair, key) in repairs" >
        <tr>
          <th>{{key+100}}</th>
          <td>
            {{repair.repairType}}
          </td>
          <td>
            {{repair.repairStatus}}
          </td>
          <td>
            {{repair.createdAt}}
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
				repairs: {},
				search: '',
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
				axios.get(`${this.url}repair`)
					.then((resp) => {
						this.repairs = resp.data;
						console.log(resp)
						console.log(this.repairs)
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
