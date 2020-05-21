<template>
  <div>
    <p>닉네임을 변경하시겠어요?</p>
    <input type="text" v-on:keydown.enter="passNewName" v-model="newUserName" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newUserName: ""
    };
  },
  methods: {
    passNewName: function() {
      this.$emit("passName", this.newUserName);
    }
  }
};
</script>

<style>
p {
  margin-bottom: 8px;
}
</style>