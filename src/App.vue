<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <!-- transitionコンポーネント -->
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <!-- transitionコンポーネントは単一の要素でしか入れられない -->
    <!-- 他の要素も入れたい場合は、divタグなどで括ってあげる -->
    <transition name="slide">
      <div v-if="show">
        <p>bye</p>
        <p>third</p>
        <p>third</p>
        <p>third</p>
      </div>
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



.slide-enter-active {
  animation: slide-in 0.5s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}


.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
