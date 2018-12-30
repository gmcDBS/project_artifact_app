<template>
  <div>
    <div class="Customers">
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
    <Repairs />
  </div>
</template>

<script>
	import axios from 'axios';
	import Repairs from './Repairs'

	export default {
		name: 'Customers',
		data() {
			return {
				url: "http://localhost:3005/",
				customer: {}
			}
		},
		created() {
			this.fetchData()
		},
		components: {
			Repairs
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
