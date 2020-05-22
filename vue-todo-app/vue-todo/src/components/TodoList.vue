<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
        <button v-on:click="toggleComplete(todoItem, index)">
          <i class="far fa-check-square"></i>
        </button>
        <span v-bind:class="{completed: todoItem.completed}">{{ todoItem.item }}</span>
        <button v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    };
  },
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  // * Vue의 라이프 사이클에 대해 알아보기
  created: function() {
    console.log("created");
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
        }
      }
    }
  }
};
</script>

<style>
.completed {
  font-style: italic;
  color: #aaa;
}
</style>