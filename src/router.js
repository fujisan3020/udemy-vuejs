import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/Users.vue";

// .use : プラグインを適応する命令
Vue.use(Router);

export default new Router({
  // mode: "history"でURLの#を消すことができる
  // デフォルトは mode: "hash"
  mode: "history",
  routes: [
    {path: "/", component: Home},
    // ルートコンポーネントの再利用は、propsオプションをtrueにする
    {path: "/users/:id",
      component: Users,
      props: true,
      children: [
        // 下の2つのパスは、/users/:id の続きである。
        // ex /users/:id/post  /users/:id/profile
        { path: "post", component: UsersPosts},
        { path: "profile", component: UsersProfile}
      ]
    }
  ]
})

// URLの#以降はインターネットにアクセスされておらず、JavaScriptがlocalhpst(index.html)を読み込み、解析していろいろな処理がなされる。

// デプロイ時はindex.htmlを返す処理はされないので、自分で全てのアクセスに対して、全てindex.htmlに対応付ける必要がある。
