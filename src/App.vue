<template>
  <div id="app">
      <div class="tabs">
        <ul>
          <li>
            <router-link to="/repairs">Repairs</router-link>        
          </li>
          <li>
            <router-link to="/customers">Customers</router-link>
          </li>
          <li>
            <router-link to="/analytics">Analytics</router-link>
          </li>
        </ul>
<!--    <router-link :to="{ name: 'Hello' }">Home</router-link>-->
<!--    <router-link to="/repairs">Repairs</router-link>-->
<!--    <router-link to="/repair/?id">Repair</router-link>-->
<!--    <router-link to="/customers">Customers</router-link>-->
<!--    <router-link to="/user/?id">User</router-link>-->
<!--    <router-link to="/analytics">Analytics</router-link>-->
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
</style>
