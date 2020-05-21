<template>
  <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
  <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"; //vue 확장자까지 써주면 좋음
export default {
  components: {
    "app-header": AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = "텍스트 변경!";
    }
  },
  data: function() {
    return {
      str: "Hello!"
    };
  }
};
</script>

<style>
</style>

<!--
webpack 강의
https://www.inflearn.com/course/webpack-%EC%9B%B9%ED%8C%A9-%EA%B0%95%EC%A2%8C/lecture/8141
-->


<!-- 
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  // 인스턴트 옵셩 속성 or 컴포넌트 옵션 속성
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

-->