import Vue from 'vue'

// App.vueファイルをインポートすることによって、単一ファイルコンポーネントがオブジェクトになって使用できる？
import App from './App.vue';
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
// グローバル登録
// main.jsでimportして来て、Vue.componentを宣言する

// カスタムディレクティブは抽象化したコードを再利用したいときに使う
Vue.component('LikeNumber', LikeNumber);
Vue.directive("border", {
  // v-bind : ディレクティブが対象の要素に紐付いた時
  bind(el, binding, vnode) {

  },
  // inserted : 親Nodeが挿入された時
  inserted(el, binding, vnode) {

  },
  // update : コンポーネントが挿入される度。子コンポーネントが更新される前。
  update(el, binding, vnode, oldVnode) {

  },
  // componentUpdataed : コンポーネントが挿入される度。子コンポーネントが更新される後。
  componentUpdataed(el, binding, vnode, oldVnode) {

  },
  // unbind : ディレクティブが紐付いていた要素から取り除かれた時
  unbind(el, binding, vnode) {

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
