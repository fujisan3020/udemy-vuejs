<template>
  <div>
    <!-- :〜 の 〜が引数。下の場合、dottedが引数となる。引数は一つだけしか設定できない -->
    <!-- 引数の後に、修飾子をいくつか設定できる -->
    <p v-border:solid.round.shadow=" {width: '5px', color: 'red'} ">Home</p>
    <!-- filterを使う場合は、パイプ | を使って、
      {{ データ | filter名 }} というような感じで使用する  -->
    <!-- filterは複数連結させることができ、左から順番に処理が実行されていく -->
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: "hello"
    };
  },
  components: {
    CountNumber
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
