<!-- App.vueは、大きくtemplateタグ・scriptタグ・styleタグに3つに分かれている(単一ファイルコンポーネント) -->

<template>
  <div>
    <LikeHeader>
        <h3>はじめまして</h3>
    </LikeHeader>

    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>

    <button @click="currentComponent = 'Home' ">Home</button>
    <button @click="currentComponent = 'About' ">About</button>
    <!-- 動的コンポーネント : componentタグとis属性を使用して作成する -->
    <!-- keep-alive : keep-aliveタグでコンポーネントタグを囲うことによって、動的コンポーネントの状態を保持する -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    <div>
      <!-- lazy修飾子 : 入力してフォーカスを外した時に発火させる -->
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input
        id="title"
        type="text"
        v-model.lazy="eventData.title"
      >
    </div>
    <p>{{ eventData.title }}</p>
  </div>
</template>

<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

  export default {
    data() {
      return {
        number: 14,
        currentComponent: "Home",
        eventData: {
          title: "タイトル"
        }
      };
    },
    components: {
      LikeHeader,
      About,
      Home
    },
    methods: {
      incrementNumber(value) {
        this.number = value;

      }
    }
  };
</script>
