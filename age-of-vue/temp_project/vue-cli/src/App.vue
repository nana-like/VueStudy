<!-- App.vue -->

<template>
  <div id="app">
    <AppHeader v-bind:userName="userName" />
    <AppContent v-on:passName="getNewName" />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

export default {
  name: "App",
  components: {
    AppHeader,
    AppContent
  },
  data: function() {
    return {
      userName: "익명의 사용자"
    };
  },
  methods: {
    getNewName: function(name) {
      this.userName = name;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
  font-family: sans-serif;
}
</style>
