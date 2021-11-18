import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://vue-http-7d581-default-rtdb.firebaseio.com/'

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'https://vue-http-7d581-default-rtdb.firebaseio.com/'
    })
  }
})
