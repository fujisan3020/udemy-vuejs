<template>
  <div>
    <!-- slot : 親コンポーネントから子コンポーネントにHTMLタグを含んだデータを渡すことができる -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
};
</script>
