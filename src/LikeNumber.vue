<template>
  template内はルート要素を必ず1つだけにしなければならない
  <div class="">
    <p>いいね({{ number }})</p>
    <button @click="increment">+1</button>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        number: 5
      };
    },
    methods: {
      increment() {
        this.number += 1;
      }
    }
  };
</script>
