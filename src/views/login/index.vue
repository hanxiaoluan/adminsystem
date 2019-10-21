<template>
  <div class="login-container">
    <h1 class="title">Login Form</h1>
    <el-form :model="form" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm el-form">
      <el-form-item prop="user" class="el-form-item">
        <span class="svg-container">
          <svg-icon icon-class="user"></svg-icon>
        </span>
        <el-input type="text" v-model="form.user" auto-complete="off" ref="user"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"></svg-icon>
        </span>
        <el-input type="password" v-model="form.password" auto-complete="off" ref="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import SocialSign from "./components/SocialSignin";
import { validUsername } from "@/utils/validate";
export default {
  components: { SocialSign },
  data() {
    var validateUser = (rule, value, callback) => {
      if (!validUsername(value)) {
        return callback(new Error("please enter the correct user name"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("the password can not be less than 6 digits"));
      } else {
        callback();
      }
    };

    return {
      form: {
        user: "admin",
        password: "111111"
      },
      rules: {
        user: [{ validator: validateUser, trigger: "blur", required: true }],
        password: [{ validator: validatePass, trigger: "blur", required: true }]
      }
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
/**
 * fix input bg-color 
 */
$light_gray: #fff;
$cursor: #fff;
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
@supports (-webkit-mask: none) and (not (caret-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* element reset css */
.login-container {
  width: 100%;
  height: 100%;
  /*  display: flex;
  align-items: center;
  justify-content: center; */
  background-color: $bg;
  overflow: hidden;
  .el-input {
    width: 85%;
    display: inline-block;
    // position:absolute;
    // left: 0;
    // z-index: 0;
  }
  input {
    background: transparent;
    border: 0px;
    -webikit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: $light_gray;
    height: 47px;
    caret-color: $cursor;
  }
  .title {
    max-width: 520px;
    margin: 100px auto 40px;
    text-align: center;
    font-size: 26px;
    color: #eee;
  }
  .el-form {
    max-width: 520px;
    margin: 0 auto;
    position: relative;
  }
  .el-form-item {
    position: relative;
    height: 47px;
  }
  .el-form-item_content {
    position: relative;
    left: 50px;
    margin: 0;
    padding: 0;
  }
  .el-input_inner {
    width: 520px;
  }
  .svg-container {
    color: $dark_gray;
    position: absolute;
    left: 4px;
    top: -4px;
    display: block;
    z-index: 10;
    
    width: 20px;
    height: 47px;
    padding: 6px 5px 6px 15px;
  }
}
</style>