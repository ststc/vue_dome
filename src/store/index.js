import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count:3
}

const mutations={
	add(state,data){
		state.count=state.count+data
	},
	reduce(state){
		state.count--
	}
}

const actions={
	do_add(context,data){
	
		context.commit('add',data)
	},
	do_reduce(context){
		context.commit('reduce')
	}
}
export default new Vuex.Store({
	state,
	actions,
	mutations
})