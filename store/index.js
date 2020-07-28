import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {
	getRervse,
	getInTheaters
} from '@/apis/index.js'


export default new Vuex.Store({
	state: {
		city: "北京市",
		nowPlayingList: {}
	},
	getters: {},
	mutations: {},
	actions: {
		getCity(context) {
			uni.showLoading({
				title: '加载中'
			});
			uni.hideLoading()
		}
	}
})
