<template>
  <div id="repairs">
    <div id="table-utils" >
    <button type="button" class="button is-primary" >add repair</button>
    <input type="search"  class="input" placeholder="Search repairs" />
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
      <tbody v-for="(item, key) in items" >
        <tr>
          <th>{{key+100}}</th>
          <td>
            {{item.rType}}
          </td>
          <td>
            {{item.rStatus}}
          </td>
          <td>
            {{item.rLeftIn}}
          </td>
          <td><button type="button" class="button is-primary" >update</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'Repairs',
    data: function() {
      return {
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
  }

</script>

<style scoped>
  
  input {
    width: 25%;
  }
  
  table{
    margin: 0px auto; 
  }
  
  #table-utils{
    text-align: center;
  }
</style>
