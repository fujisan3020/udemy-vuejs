<template>
  <div>
    <!-- slot : 親コンポーネントから子コンポーネントにHTMLタグを含んだデータを渡すことができる -->
    <slot>
      <h2>デフォルトのタイトル</h2>
    </slot>
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
