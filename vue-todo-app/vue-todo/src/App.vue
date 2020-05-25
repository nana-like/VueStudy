<template>
  <div>
    <TodoHeader />
    <TodoInput />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  // ! 이하 내용은 vuex의 state로 대체
  // data() {
  //   return {
  //     todoItems: []
  //   };
  // },
  methods: {
    // ! 이하 내용은 vuex의 mutations으로 대체
    // addOneItem(todoItem) {
    //   const obj = {
    //     completed: false,
    //     item: todoItem
    //   };
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // }
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
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