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
  }
}
</script>
