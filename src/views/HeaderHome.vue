<template>
  <nav>
    <h2>Home</h2>
    <router-link
      to="/" tag="div"
      active-class="link-active"
      exact
      class="link"
    >Home</router-link>
    <br>
    <router-link
    :to="{ name: 'users-id-profile',
    params: { id: 1 } ,
    query: { lang: 'ja', page: 2 },
    hash: '#next-user'
     }"
      active-class="link-active"
      exact
      class="link"
    >Users</router-link>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </nav>
</template>

<script>
export default {
  methods: {
    increment() {
      // $storeでmutationを使用するにはcommitを使う
      this.$store.commit('increment', 2);
    },
    decrement() {
      this.$store.commit('decrement', 2);
    }
  }
};
</script>


<style scoped>
  .link {
    margin-right: 10px;
  }
  .link-active {
    font-size: 20px;
  }
</style>
