<template>
  <div id="app">
     <h1>WIKE的前端组建系统</h1>
     <div>
       <a href="/datetime">日期插件</a>
     </div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
  	var  list=[1,2,3]
  	var  {a,b,c}={a:1,b:2,c:3}
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[...list,4,5,6],
      listapp:{c:c}
    }
  },
  created(){
  	// console.log(this)
  	this.otherd(1000)
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
  }
  
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
