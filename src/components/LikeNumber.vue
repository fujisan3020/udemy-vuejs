<template>
  <!-- template内はルート要素を必ず1つだけにしなければならない -->
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>


<script>
  export default {
    // props : 親から子にデータを渡す命令(※プロパティ)
    // JavaScriptではキャメルケースで書く
    // props: {
    //
    //   // propsはオブジェクトにすることでデータ型等が指定できる
    //   totalNumber: {
    //     type: Number,
    //     // required: true,
    //
    //     // default : 親コンポーネントでpropsの属性が設定されていたら10、されていなかったら親コンポーネントに従う
    //     default: 10,
    //   },
    //   testProps: {
    //     type: String
    //   }
    // },

    props: ["totalNumber"],
    // propsはdataの扱いと同じで良い(ex. this.〜)
    computed: {
      halfNumber() {
        return this.totalNumber / 2;
      }
    },
    methods: {
      increment() {
        // $emit :子から親コンポーネントにデータを渡すメソッド
               // 親コンポーネントのイベントを発火させるスイッチ(カスタムイベントの作成)
        this.$emit("my-click", this.totalNumber + 1);
      }
    }
  };
</script>

<!-- scoped : 今いるコンポーネントに属性を付与して、CSSを反映させる(CSSのスコープ) -->
<style scoped>
div {
  border: 1px solid red;
}
</style>
