import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // E6のrender関数の記載方法
  render: h => h(App),
  
  // E5のrender関数の記載方法
  // render: function(h) {
  //   return h(App)
  // }
}).$mount('#app')
