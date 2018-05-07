<template>
  <div id="app">
    <img src="/assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2 @click='do_reduce'>Ecosystem</h2>
    <ul >
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <div @click='do_add(3)'>
      {{count}}
    </div>
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
