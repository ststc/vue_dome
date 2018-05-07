<template>
  <div id="app">
     <date-time id='id_1'  w-model='id1' @timechange='getinit'></date-time>
     <date-time id='id_2' type='year' v-wmodel='id2'></date-time>
     <date-time id='id_3' type='month' v-wmodel='id3'></date-time>
     <date-time id='id_4' type='date' v-wmodel='id4'></date-time>
     <date-time id='id_5' type='time' v-wmodel='id5'></date-time>
     <date-time id='id_0' type='datetime' v-wmodel='id6'></date-time>



     <date-time id='id_6' type='year' range='-' v-wmodel='id7'></date-time>
     <date-time id='id_7' type='month' range='-'></date-time>
     <date-time id='id_8' type='date' range='-'></date-time>
     <date-time id='id_9' type='time' range='-'></date-time>
     <date-time id='id_10' type='datetime' range='-'></date-time>


    <date-time id='id_12'  format='yyyy年MM月dd日 HH:mm:ss'></date-time>
    <date-time id='id_12' format='yyyy/MM/dd HH:mm:ss'></date-time>

    <date-time id='id_1' value='1998-08-08' type='date'></date-time>

    <date-time id='id_1' value='1998-08-08' type='date' min='1998-08-06' max='1998-08-08'></date-time>
    <date-time id='id_1' trigger='click'></date-time>
    <date-time id='id_1' show='true'></date-time>
    <date-time id='id_1' calendar='true' :done='getinit'></date-time>
    <div>
      时间id2{{id2}}
    </div>
        <div>
      时间id3{{id3}}
    </div>
        <div>
      时间id4{{id4}}
    </div>
        <div>
      时间id5{{id5}}
    </div>
        <div>
      时间id6{{id6}}
    </div>
        <div>
      时间id7{{id7}}
    </div>

  </div>
</template>

<script>
import dateTime from "../components/datetime"

export default {
  name: 'datetime',
  data () {

    return {
      id2:'',
      id3:'',
      id4:'',
      id5:'',
      id6:'',
      id7:'',
      id8:'',
      id9:'',
    }
  },
  created(){
     
  },
  methods:{
   	getinit(arg,name){
     console.log(arguments)
    }
  },
  components:{
      dateTime
  },
  directives:{
    "wmodel":{
      bind:(function(el,bind,vnode){
        console.log(arguments)
        $(el).on('timechange',function(e,val){
          val.vm[bind.expression]=val.value;
        })
      }),
      update:function(){
        console.log(this,arguments)
      }
    }
  }
}
</script>

<style>

</style>
