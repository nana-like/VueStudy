<template>
  <form action>
    <label for="name">Name</label>
    <input type="text" id="name" v-bind:value="userName" />
  </form>
</template>

<script>
export default {
  name: "UserForm",
  data: function() {
    return {
      userName: "나나"
    };
  }
};
</script>

<style>
</style>