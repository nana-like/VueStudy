<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
        <button v-on:click="toggleComplete(todoItem, index)">
          <i class="far fa-check-square"></i>
        </button>
        <span v-bind:class="{completed: todoItem.completed}">{{ todoItem.item }}</span>
        <button v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit("removeItem", todoItem, index);
    },
    toggleComplete: function(todoItem, index) {
      this.$emit("toggleItem", todoItem, index);
    }
  }
};
</script>

<style scoped>
.completed {
  font-style: italic;
  color: #aaa;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>