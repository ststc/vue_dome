<template>
  <div class="input_field" style="margin:20px">
     <input type="text" class="demo-input" placeholder="请选择日期" :id="id+random"  >
  </div>
</template>
 location.href = 'http://pay.tarenwang.com/api_bingk/order_nobility.php?gameid=51&serverid=1001&username=13910950921&nobility=1&payway=1
<script>
export default {
  name: 'c_datetime',
  data () {
    var getuid=function(){
      return Math.floor(Math.random()*10000,6)
    }
     var random=getuid();
    while($('#'+this.id+random).length){
      random=getuid()
    }
    return {
      random:random
    }
  },
  props:['id','type','range','format','value','min','max','trigger','show','position','zindex','showBottom','btns','calendar','mark','done','vWmodel'],
  created(){

  },
  methods:{
   	changeValue(value, date, endDate){
      console.log(this.$parent)
        $('#'+this.id+this.random).trigger('timechange',{value:value,vm:this.$parent})
    }
  },
  components:{
  },
  mounted(){
   laydate.render({
      elem: '#'+this.id+this.random, //指定元素
      type:this.type||'datetime',
      range: this.range||false,
      format:this.format||"yyyy-MM-dd",
      value:this.value||'',
      min:this.min||'1900-1-1',
      max:this.max||'2099-12-31',
      trigger:this.trigger||'focus'
      ,show: this.show||false,
      position:this.position||'absolute',
      zIndex:this.zindex||66666666,
      showBottom:this.showBottom||true,
      btns:this.btns||['clear', 'now', 'confirm'],
      calendar:this.calendar||false,
      mark:this.mark||{}
      ,done:this.done||this.changeValue
      ,change:this.changeValue
      ,ready:this.ready||function(){}
    });
  } 
 
}
</script>

<style>

</style>
