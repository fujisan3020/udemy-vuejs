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
      <p>{{ eventData.title }}</p>

      <!-- number修飾子 : HTMLのinputは、最初にデータ型を数値型にしていても、それ以降は文字列型になってしまう。そこで、number修飾子を使うことによって、数値型を保持することができる。 -->
      <label for="maxNumber">最大人数</label>
      <input
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <p>{{ typeof eventData.maxNumber }}</p>
    </div>
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
          title: "タイトル",
          maxNumber: 0
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
