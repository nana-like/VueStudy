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