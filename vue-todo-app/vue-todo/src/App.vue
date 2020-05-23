<template>
  <div>
    <TodoHeader />
    <TodoInput v-on:addTodoItem="addOneItem" />
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    />
    <TodoFooter v-on:clearAll="clearAllItems" />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  data: function() {
    return {
      todoItems: []
    };
  },
  methods: {
    addOneItem: function(todoItem) {
      var obj = {
        completed: false,
        item: todoItem
      };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function() {
    console.log("created");
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          if (localStorage.key(i) !== "csCursors") {
            this.todoItems.push(
              JSON.parse(localStorage.getItem(localStorage.key(i)))
            );
          }
        }
      }
    }
  },
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background: #f6f6f6;
}

input,
button {
  border-style: groove;
}
</style>