<template>
  <div id="app">
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'app',
  data () {

    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created(){
  	console.log(this)
  	this.otherd(1000)
  },
  computed:{
    ...mapState(['count'])
  },
   methods:{
   	 otherd:async function(i){
   			console.log(1)
		  	var data=await this.timeout(i)
		  	console.log(data)
		  	console.log(2)
   	},
   	 timeout(i){
  	 return new Promise(function (resolve, reject){
  	 	window.setTimeout(function(){
  	 		resolve('data is settimeout')
  	 	},i)
 	 });
  },
    ...mapActions(['do_add','do_reduce'])
  },
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
