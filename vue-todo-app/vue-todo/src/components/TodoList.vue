<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item">
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
  methods: {
    removeTodo(todoItem, index) {
      console.log("TodoList.vue에서 removeTodo 메서드를 실행했습니다.");
      this.$store.commit("removeOneItem", {
        todoItem,
        index
      });
    },
    toggleComplete(todoItem, index) {
      console.log("TodoList.vue에서 toggleComplete 메서드를 실행했습니다.");
      this.$store.commit("toggleOneItem", {
        todoItem,
        index
      });
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