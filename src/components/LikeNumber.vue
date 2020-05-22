<template>
  <!-- template内はルート要素を必ず1つだけにしなければならない -->
  <div>
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

<!-- scoped : 今いるコンポーネントに属性を付与して、CSSを反映させる(CSSのスコープ) -->
<style scoped>
div {
  border: 1px solid red;
}
</style>
