<template>
  <div>
    <!-- slot : 親コンポーネントから子コンポーネントにHTMLタグを含んだデータを渡すことができる -->
    <slot name="title"></slot>
    <hr>
    <p>いいねの数</p>
    
    <!-- 名前付きスロット -->
    <!-- v-slotで設定された値をname=""で指定する -->
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
</script>

<!-- slotは、cssでは親コンポーネント・子コンポーネントどちらでもで反映される。ちなみに、両方反映させていた場合、親コンポーネントの設定が優先される。 -->
<style media="screen">
  h1 {
    color: red;
  }
</style>
