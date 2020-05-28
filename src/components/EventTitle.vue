<template>
  <div>
    <h2>イベントのフォーム</h2>
    <label for="title">タイトル</label>
    <input
      id="title"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"]
};
</script>
