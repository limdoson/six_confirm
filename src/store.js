import Vue from 'vue'
import Vuex from 'vuex'
import VuexAlong from 'vuex-along'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
		//token
        token : null,
		//用户信息
		userInfo  : null,
    },
    mutations : {
		tokenInit (state,payload) {
			state.token = payload
		},
		userInfoInit (state,payload) {
			state.userInfo = payload
		}
	},
    actions : {},
	plugins : [VuexAlong]
})
