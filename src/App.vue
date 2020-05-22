<!-- App.vueは、大きくtemplateタグ・scriptタグ・styleタグに3つに分かれている(単一ファイルコンポーネント) -->

<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from "./LikeHeader.vue";

  export default {
    components: {
      LikeHeader
    }
  }
</script>
