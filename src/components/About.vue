<template>
  <div>
    <p>About</p>
      <input>
  </div>
</template>

<script>
// 動的コンポーネントは切り替えるごとにコンポーネントがdestroyされ、新しいインスタンスが再生成されるようになっている
export default {
  destroyed() {
    console.log("destroyed");
  },
  // 動的コンポーネントにおいてkeep-aliveを使用した時、activatedとdeactivatedという新しいライフサイクルフックが追加され、それに処理をつけることができる。
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  }
};
</script>
