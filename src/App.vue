<template>
  <div class="main">
    <button @click="myAnimation = 'slide'">Slide</button>
    <button @click="myAnimation = 'fade'">Fade</button>
    <p>{{ myAnimation }}</p>
    <button @click="show = !show">切り替え</button>
    <br><br>
    <!-- JavaScriptフック -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @entwr-cancelled="enterCancelled"

      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="circle" v-if="show"></div>
    </transition>
    <br>
    <button @click="myComponent = 'ComponentA'">ComponentA</button>
    <button @click="myComponent = 'ComponentB'">ComponentB</button>
    <transition name="fade" mode="out-in">
      <component :is="myComponent"></component>
    </transition>
    <!-- transitionコンポーネント -->
    <!-- mode="out-in" : 要素間のトランジションのタイミングをずらして、いい感じに表示してくれる -->
    <transition name="fade" mode="out-in">
      <!-- トランジションの中で、複数の要素を切り替えるようなトランジションを使う場合、必ずキーをつける -->
      <!-- v-showは2つ使えない -->
      <p v-if="show" key="bye">さよなら</p>
      <p v-else key="hello">こんにちは</p>
    </transition>
    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <p v-if="show">hello</p>
    </transition>
    <!-- transitionコンポーネントは単一の要素でしか入れられない -->
    <!-- 他の要素も入れたい場合は、divタグなどで括ってあげる -->
    <!-- CSSトランジションとCSSアニメーションを両方使用する時はtype属性をつける -->
    <!-- apper属性を使って、最初の描画時にトランジションを適用する -->
    <transition
      :name="myAnimation"
      appear
    >
      <p v-show="show">bye</p>
    </transition>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      show: true,
      myAnimation: 'slide',
      myComponent: "ComponentA"
    };
  },
  methods: {
    beforeEnter(el) {
      // 現れる前
    },
    enter(el, done) {
      // 現れる時
    },
    afterEnter(el) {
      // 現れた後
    },
    enterCancelled(el) {
      // 現れるアニメーションがキャンセルされれた時
    },
    beforeLeave(el) {
      // 消える前
    },
    leave(el, done) {
      // 消えた時
    },
    afterLeave(el) {
      // 消えた後
    },
    leaveCancelled(el) {
      // 消えるアニメーションがキャンセルされれた時
      // v-showと一緒に使う時だけ、有効になる
    }
  }
}
</script>

<style scoped>
.circle {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 100px;
  background-color: deeppink;
}

/* transitionクラス */

/* 現れる時の最初の状態 */
.fade-enter {
  opacity: 0;
}
/* 現れる時のトランジションの状態 */
.fade-enter-active {
  transition: opacity 0.5s;
}
/* 現れる時の最後の状態 */
.fade-enter-to {
  opacity: 1;
}
/* 消える時の最初の状態 */
.fade-leave {
  opacity: 1;
}
/* 消える時のトランジションの状態 */
.fade-leave-active {
  transition: opacity 0.5s;
}
/* 消える時の最後の状態 */
.fade-leave-to {
  opacity: 0;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 1s;
}
.slide-leave-active {
  animation: slide-in 0.5s reverse;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}


.main {
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
