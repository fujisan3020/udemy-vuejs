<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    // mapGetters : gettersをまとめたもの
    // ... (スプレッド演算子) : computedプロパティにオブジェクト{}はダメらしいので、... (スプレッド演算子)を使って、それをできるようにする。
    ...mapGetters(["doubleCount", "tripleCount"]),

  },
  methods: {
    toUsers() {
      // this.$router.push("users");
      this.$router.push({
        name: 'users-id-profile',
        params: { id: 1 }
      });
    }
  }
}
</script>
