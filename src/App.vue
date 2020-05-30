<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <!-- transitionコンポーネント -->
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  }
}
</script>

<style scoped>
/* transitionクラス */

/* 現れる時の最初の状態 */
.fade-enter {
  opacity: 0;
}
/* 現れる時のトランジションの状態 */
.fade-enter-active {
  transition: opacity 0.5s;
}
/* 現れる時の最後の状態 */
.fade-enter-to {
  opacity: 1;
}
/* 消える時の最初の状態 */
.fade-leave {
  opacity: 1;
}
/* 消える時のトランジションの状態 */
.fade-leave-active {
  transition: opacity 0.5s;
}
/* 消える時の最後の状態 */
.fade-leave-to {
  opacity: 0;
}

.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
