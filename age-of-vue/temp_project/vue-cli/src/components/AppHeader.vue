<template>
  <header>
    <h1 v-bind:userName="userName">안녕하세요, {{ userName }}님.</h1>
  </header>
</template>

<script>
export default {
  props: ["userName"]
};
</script>

<style>
header {
  width: 100%;
  padding: 80px 0;
  margin-bottom: 40px;
  background-color: #f0f0f0;
}
</style>