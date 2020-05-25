<template>
  <div>
    <button v-on:click="clearTodo">Clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit("clearAllItems");
    }
  }
};
</script>

<style>
</style>