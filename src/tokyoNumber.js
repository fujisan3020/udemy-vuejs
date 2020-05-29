export const tokyoNumber = {
  data() {
    return {
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is central city",
      number: 0
    };
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  //  ミックスインとコンポーネントが被った場合、コンポーネントが優先される。しかし、ライフサイクルフックにおいては、先にミックスインが起こり、あとでコンポーネントが起こる。
  created() {
    console.log("created in Mixin");
  }
};
