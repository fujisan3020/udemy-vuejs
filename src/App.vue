<!-- App.vueは、大きくtemplateタグ・scriptタグ・styleタグに3つに分かれている(単一ファイルコンポーネント) -->

<template>
  <div>
    <LikeHeader>
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>
    <!-- 子のコンポーネントのpropsで宣言されものを属性として設する -->
    <!-- また、HTML内では、ケバブケースで書く -->
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue";

  export default {
    data() {
      return {
        number: 14,
      }
    },
    components: {
      LikeHeader
    },
    methods: {
      incrementNumber(value) {
        this.number = value;

      }
    }
  };
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
