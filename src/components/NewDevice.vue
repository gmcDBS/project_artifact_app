<template>
    <form class="box">
		<h1 class="is-size-2" >Device</h1>
		<div class="field">
  			<label class="label">Type</label>
  			<div class="control">
    			<input class="input" type="text" v-model="type" placeholder="type">
  			</div>
		</div>
		<div class="field">
  			<label class="label">Brand</label>
  			<div class="control">
    			<input class="input" type="text" v-model="brand" placeholder="brand">
  			</div>
		</div>
		<div class="field">
  			<label class="label">Model</label>
  			<div class="control">
    			<input class="input" type="text" v-model="model" placeholder="model">
  			</div>
		</div>
		<button type="submit" class="button is-warning" @click="postDevice" >Create</button>
	</form>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'NewDevice',
		data() {
			return {
				devices: [],
				url: 'http://localhost:3005/',
				type: '',
				brand: '',
				model: ''
			}
		},
		methods: {
			postDevice(e) {
				e.preventDefault();
				axios.post(`${this.url}device`, {
					"deviceId": `D${this.randInt(100,10000)}`,
					"deviceImage": 'NA',
					"deviceType": this.type,
					"deviceBrand": this.brand,
					"deviceModel": this.model
				}).then(function(response) {
					console.log(response);
				}).catch(function(error) {
					console.log(error.response);
				});
			},
			randInt(min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min);
			},
			test(e) {
				e.preventDefault();
				console.log("type: " + this.type + " brand: " + this.brand + " model: " + this.model);
			}
		}
	}

</script>
