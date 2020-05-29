import Vue from 'vue'

// App.vueファイルをインポートすることによって、単一ファイルコンポーネントがオブジェクトになって使用できる？
import App from './App.vue';
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
// グローバル登録
// main.jsでimportして来て、Vue.componentを宣言する

Vue.component('LikeNumber', LikeNumber);
// カスタムディレクティブは抽象化したコードを再利用したいときに使う
Vue.directive("border", function(el,) {
  el.style.border = "solid black 2px";
});

new Vue({
  // E6のrender関数の記載方法
  render: h => h(App),

  // E5のrender関数の記載方法
  // render: function(h) {
  //   return h(App)
  // }
}).$mount('#app')
