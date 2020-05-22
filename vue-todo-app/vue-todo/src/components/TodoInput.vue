<template>
  <div>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <button v-on:click="addTodo">
      Add
      <i class="fas fa-plus-circle"></i>
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    };
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem != "") {
        var obj = {
          completed: false,
          item: this.newTodoItem
        };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newTodoItem = "";
    }
  }
};
</script>

<style>
</style>