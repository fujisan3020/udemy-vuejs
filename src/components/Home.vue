<template>
  <!-- データを2つ以上渡す時は、オブジェクトにして渡す -->
  <!-- :〜 の 〜が引数。下の場合、dottedが引数となる。引数は一つだけしか設定できない -->
  <!-- 引数の後に、修飾子をいくつか設定できる -->
  <p v-border:solid.round.shadow=" {width: '5px', color: 'red'} ">Home</p>
</template>
