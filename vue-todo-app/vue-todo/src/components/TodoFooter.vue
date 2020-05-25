<template>
  <div>
    <button v-on:click="clearTodo">Clear All</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      clearTodo: "clearAllItems"
    })
    // clearTodo() {
    //   this.$store.commit("clearAllItems");
    // }
  }
};
</script>

<style>
</style>