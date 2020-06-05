import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
// import Users from "./views/Users.vue";
// import UsersPosts from "./views/UsersPosts.vue";
// import UsersProfile from "./views/UsersProfile.vue";
// import HeaderHome from "./views/HeaderHome.vue";
// import HeaderUsers from "./views/HeaderUsers.vue";

// 遅延ローディングをすることで、必要な時にデータを取ってくる処理を書く
const Home = ()  => import(/* webpackChunckName: "Home" */ "./views/Home.vue");
const Users = ()  => import(/* webpackChunckName: "Users" */ "./views/Users.vue");
const UsersPosts = ()  => import(/* webpackChunckName: "UsersPosts" */ "./views/UsersPosts.vue");
const UsersProfile = ()  => import(/* webpackChunckName: "UsersProfile" */ "./views/UsersProfile.vue");
const HeaderHome = ()  => import(/* webpackChunckName: "HeaderHome" */ "./views/HeaderHome.vue");
const HeaderUsers = ()  => import(/* webpackChunckName: "HeaderUsers" */ "./views/HeaderUsers.vue");

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
      props: {
        default: true,
        header: false
      },
      children: [
        // 下の2つのパスは、/users/:id の続きである。
        // ex /users/:id/post  /users/:id/profile
        { path: "posts", component: UsersPosts},
        { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]
    },
    {
      // リダイレクト機能
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // savedPosition : ページを戻った時、前回の飛んだ縦の位置(ｙ座標)に戻ることができる
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash
      };
      // selector: '#next-user',
      // offset: { x: 0, y: 100}
      // return { x: 0, y: 100}
    }
  }
});

// URLの#以降はインターネットにアクセスされておらず、JavaScriptがlocalhpst(index.html)を読み込み、解析していろいろな処理がなされる。

// デプロイ時はindex.htmlを返す処理はされないので、自分で全てのアクセスに対して、全てindex.htmlに対応付ける必要がある。
