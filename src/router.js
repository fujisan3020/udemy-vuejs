import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersPosts from "./views/UsersPosts.vue";
import UsersProfile from "./views/Users.vue";
import HeaderHome from "./views/HeaderHome.vue";
import HeaderUsers from "./views/HeaderUsers.vue";

// .use : プラグインを適応する命令
Vue.use(Router);

export default new Router({
  // mode: "history"でURLの#を消すことができる
  // デフォルトは mode: "hash"
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
      default: Home,
      header: HeaderHome
      }
    },
    // ルートコンポーネントの再利用は、propsオプションをtrueにする
    {
      path: "/users/:id",
      components: {
        default: Users,
        header: HeaderUsers
      },
      props: true,
      children: [
        // 下の2つのパスは、/users/:id の続きである。
        // ex /users/:id/post  /users/:id/profile
        { path: "posts", component: UsersPosts},
        { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]
    }
  ]
});

// URLの#以降はインターネットにアクセスされておらず、JavaScriptがlocalhpst(index.html)を読み込み、解析していろいろな処理がなされる。

// デプロイ時はindex.htmlを返す処理はされないので、自分で全てのアクセスに対して、全てindex.htmlに対応付ける必要がある。