<template>
  <div class="modal">
    <div class="modal-header">
      <slot name="header">header</slot>
    </div>
    <div class="modal-body">
      <slot name="body">body</slot>
    </div>
    <div class="modal-footer">
      <slot name="footer">footer</slot>
    </div>
    <button @click="$emit('close')">닫기</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.modal {
  z-index: 1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 30px;
  background: #fff;
  box-shadow: 4px 20px 30px #aaa;
}
</style>