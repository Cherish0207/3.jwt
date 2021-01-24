<template>
  <div class="login">
    <el-input v-model="username"></el-input>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: ''
    }
  }
};
</script>
<style >
  .login .el-input{
    width: 150px;
  }
</style>