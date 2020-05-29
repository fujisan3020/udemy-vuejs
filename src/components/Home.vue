<template>
  <div>
    <!-- :〜 の 〜が引数。下の場合、dottedが引数となる。引数は一つだけしか設定できない -->
    <!-- 引数の後に、修飾子をいくつか設定できる -->
    <p v-border:solid.round.shadow=" {width: '5px', color: 'red'} ">Home</p>
    <!-- filterを使う場合は、パイプ | を使って、
      {{ データ | filter名 }} というような感じで使用する  -->
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
  </div>
  <!-- データを2つ以上渡す時は、オブジェクトにして渡す -->
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is central city"
    };
  },
  // directivesオプションを使えば、カスタムディレクティブをローカル登録できる
  // カスタムディレクティフではthisは使えない
  directives: {
    border(el, binding) {
      // binding.valueでデータを受け取ることができる
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      // binding.argで引数の値を取る
      el.style.borderStyle = binding.arg;
      // 修飾子の設定
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.5)";
      }
    }
  }
}
</script>
