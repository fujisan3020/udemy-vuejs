<template>
  <!-- template内はルート要素を必ず1つだけにしなければならない -->
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>


<script>
  export default {
    // props : 親から子にデータを渡す命令(※プロパティ)
    // JavaScriptではキャメルケースで書く
    props: ["totalNumber"],
    // propsはdataの扱いと同じで良い
    computed: {
      halfNumber() {
        return this.totalNumber / 2;
      }
    }
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
