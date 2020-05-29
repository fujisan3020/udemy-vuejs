<template>
  <div>


    <!-- filterを使う場合は、パイプ | を使って、
      {{ データ | filter名 }} というような感じで使用する  -->
    <!-- filterは複数連結させることができ、左から順番に処理が実行されていく -->
    <h2>{{ title | lowerCase | upperCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
mixins: [tokyoNumber]
};
</script>
