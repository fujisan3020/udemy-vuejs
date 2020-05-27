<!-- App.vueは、大きくtemplateタグ・scriptタグ・styleタグに3つに分かれている(単一ファイルコンポーネント) -->

<template>
  <div>
    <LikeHeader>
        <p>{{ slotProps }}</p>
        <h2>みなさん</h2>
        <h3>はじめまして</h3>
        <p>よろしくお願いします</p>

        <!-- 動的なスロット -->
        <template v-slot:[title]></template>
    </LikeHeader>



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
        title: "title"
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
  /* h1 {
    color: red;
  } */
</style>
