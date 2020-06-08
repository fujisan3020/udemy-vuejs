<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersのページに行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    doubleCount() {
      return this.$store.getters.doubleCount;
    },
    tripleCount() {
      return this.$store.getters.tripleCount;
    }
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
