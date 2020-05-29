<template>
  <!-- データを2つ以上渡す時は、オブジェクトにして渡す -->
  <!-- :〜 の 〜が引数。下の場合、dottedが引数となる。引数は一つだけしか設定できない -->
  <p v-border:dotted=" {width: '5px', color: 'red'} ">Home</p>
</template>
