<template>
  <div>
    <h1>Users</h1>
    <!-- パラメーターが変わった時にライフサイクルフックが呼ばれないことに注意する -->
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <!-- to属性を動的に表現する -->
    <router-link :to=" '/users/' + (Number(id) + 1) + '/profile?lang=ja' ">次のユーザー</router-link>
    <!-- 名前付きルートを使って、わかりやすくリンク先のURLを動的にする -->
    <router-link
      :to="{ name: 'users-id-profile',
      params: { id: Number(id) + 1 } ,
      query: { lang: 'ja', page: 2 } }"
    >次のユーザー</router-link>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  props: ["id"]

};
</script>
