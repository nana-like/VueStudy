<template>
  <div>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <button v-on:click="addTodo">
      Add
      <i class="fas fa-plus-circle"></i>
    </button>
    <Modal v-if="showModal" @close="showModal=false">
      <h3 slot="header">Oops!</h3>
      <p slot="body">내용을 입력하세요.</p>
      <p slot="footer">
        <small>copyright 2020 nana</small>
      </p>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem != "") {
        this.showModal = false;
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal
  }
};
</script>

<style>
</style>