import Vue from 'vue'
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;


// beforeEachガード : 全てのページ遷移前に、特定の処理をする関数のこと。 Laravelでいうミドルウェア？ 第三引数のnextは必須
router.beforeEach((to, from, next) => {
  if (to.path === "/users/1") {
    next({path: "/"});
  }
  next();
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
