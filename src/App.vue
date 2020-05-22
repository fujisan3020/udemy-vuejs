<!-- App.vueは、大きくtemplateタグ・scriptタグ・styleタグに3つに分かれている(単一ファイルコンポーネント) -->

<template>
  <div>
    <!-- ケバブケース -->
    <!-- <like-header></like-header> -->

    <!-- コンポーネントの名前は、自動補完されやすく、html要素と見分けが付き易いので、パスカルがおすすめ -->
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue";

  export default {
    components: {
      LikeHeader
    }
  };
</script>
