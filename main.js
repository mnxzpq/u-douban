import Vue from 'vue'
import App from './App'
import store from 'store'
import { http } from '@/utils/request.js'

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(http)

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
