import Vue from 'vue'

// App.vueファイルをインポートすることによって、単一ファイルコンポーネントがオブジェクトになって使用できる？
import App from './App.vue';
import LikeNumber from "./LikeNumber.vue";

Vue.config.productionTip = false;
// グローバル登録
Vue.component('LikeNumber', LikeNumber);

new Vue({
  // E6のrender関数の記載方法
  render: h => h(App),

  // E5のrender関数の記載方法
  // render: function(h) {
  //   return h(App)
  // }
}).$mount('#app')
