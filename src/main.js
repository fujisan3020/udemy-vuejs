import Vue from 'vue'

// App.vueファイルをインポートすることによって、単一ファイルコンポーネントがオブジェクトになって使用できる？
import App from './App.vue';
// import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
// グローバル登録
// main.jsでimportして来て、Vue.componentを宣言する

// Vue.component('LikeNumber', LikeNumber);

// filter : 一般的なテキストフォーマットを作成する
// 第一引数はfilter名、第二引数は関数(今回は)を入れる。
// 関数には必ず引数を取る必要がある。
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

// グローバルミックスイン
// 全てのVueインスタンスにオプションが反映されてしまうので、注意!! 基本的には使わない
Vue.mixin({
  created() {
    console.log("global mixin");
  }
})

new Vue({
  // E6のrender関数の記載方法
  render: h => h(App),

  // E5のrender関数の記載方法
  // render: function(h) {
  //   return h(App)
  // }
}).$mount('#app')
