<!-- App.vueは、大きくtemplateタグ・scriptタグ・styleタグに3つに分かれている(単一ファイルコンポーネント) -->

<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number  }}</h2>
    <!-- 子のコンポーネントのpropsで宣言されものを属性として設する -->
    <LikeNumber :number="number"></LikeNumber>
    <LikeNumber :number="number"></LikeNumber>
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
    }
  };
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
