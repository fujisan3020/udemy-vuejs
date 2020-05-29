import Vue from 'vue'

// App.vueファイルをインポートすることによって、単一ファイルコンポーネントがオブジェクトになって使用できる？
import App from './App.vue';
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
// グローバル登録
// main.jsでimportして来て、Vue.componentを宣言する

Vue.component('LikeNumber', LikeNumber);
// カスタムディレクティブは抽象化したコードを再利用したいときに使う
Vue.directive("border", function(el,binding) {
  // binding.valueでデータを受け取ることができる
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  // binding.argで引数の値を取る
  el.style.borderStyle = binding.arg;
  // 修飾子の設定
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem";
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
  }
});

new Vue({
  // E6のrender関数の記載方法
  render: h => h(App),

  // E5のrender関数の記載方法
  // render: function(h) {
  //   return h(App)
  // }
}).$mount('#app')
