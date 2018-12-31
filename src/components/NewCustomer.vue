<template>
	<form class="box">
		<h1 class="is-size-2"  >Customer</h1>
		<div class="field">
  			<label class="label">Name</label>
  			<div class="control">
    			<input class="input" type="text" v-model="name" placeholder="name">
  			</div>
		</div>
		<div class="field">
  			<label class="label">Address</label>
  			<div class="control">
    			<input class="input" type="text" v-model="address" placeholder="address">
  			</div>
		</div>
		<div class="field">
  			<label class="label">Contact</label>
  			<div class="control">
    			<input class="input" type="text" v-model="contact" placeholder="contact">
  			</div>
		</div>
		<button type="submit" class="button is-warning" @click="postCustomer" >Create</button>
	</form>
</template>

<script>
	import axios from 'axios';
	
	export default {
		name: 'NewCustomer',
		data() {
			return {
				customer: {},
				url: 'http://localhost:3005/',
				name: '',
				address: '',
				contact: '',
			}
		},
		methods: {
			postCustomer(e) {
				e.preventDefault();
				axios.post(`${this.url}customer`, {
					"customerId": `C${this.randInt(100,10000)}`,
					"customerName": this.name,
					"customerAddress": this.address,
					"customerContact": this.contact,
					"repairs": []
				}).then(function(response) {
					console.log(response);
				}).catch(function(error) {
					console.log(error.response);
				});
			},
			randInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min);
			}
		}
	}

</script>
