<template>
  <div>
    <!-- slot : 親コンポーネントから子コンポーネントにHTMLタグを含んだデータを渡すことができる -->

    <slot></slot>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    }
  }
};
</script>


<style media="screen">
  h1 {
    color: red;
  }
</style>
