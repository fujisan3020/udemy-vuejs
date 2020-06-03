<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <!-- <a>ではなく、<router-link>コンポーネントを使って、クリックでURLを切り替える -->
      <!-- <router-link>ではhref=""の代わりに、to=""を使う -->
      <!-- また、tagを設定することで、tagを変更できる(<a>としてのおおもとの機能は変わらない?)。 -->
      <router-link to="/" tag="div" class="link">Home</router-link>
      <br>
      <router-link to="/users" class="link">Users</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }
</style>
