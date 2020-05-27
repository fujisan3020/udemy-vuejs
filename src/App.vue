<!-- App.vueは、大きくtemplateタグ・scriptタグ・styleタグに3つに分かれている(単一ファイルコンポーネント) -->

<template>
  <div>
    <LikeHeader>
      <h2>みなさん</h2>
      <!-- 名前付きスロット : templateタグに、v-slotとその第一引数を指定し、子コンポーネントのslotにnameでその第一引数を指定することで、複数のスロットを使用することができる。 -->
      <!-- slotProps : スロットプロパティは子コンポーネントから親コンポーネントにデータを送ることができる -->
      <template v-slot:title="slotProps">
        <h2>こんにちは</h2>
        <h2>{{ slotProps.user.firstName }}</h2>
      </template>

      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>

      <template v-slot:number>
        <p>{{ number }}</p>
      </template>
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
  /* h1 {
    color: red;
  } */
</style>
