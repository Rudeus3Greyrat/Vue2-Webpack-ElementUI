
<template>
  <div class="login-container">
    <div class="main-block">
      <el-row>
        <div class="login-block flex-c">
          <!-- <el-form :model="model" :rules="rules" ref="loginForm" @submit.native.prevent="login"
                   class="login-innerblock">
            <h1 class="title">登 录</h1>
            <div class="form-block">
              <el-form-item prop="username" class="input-block username-block">
                <i class="icon"></i>
                <el-input placeholder="用户名" v-model="model.username">
                </el-input>
              </el-form-item>
              <el-form-item prop="password" class="input-block password-block">
                <i class="icon"></i>
                <el-input placeholder="请输入密码" v-model="model.password" show-password></el-input>
              </el-form-item>
              <el-form-item class="login-btn">
                <el-button type="primary" native-type="submit" :loading="false">登 录</el-button>
              </el-form-item>
            </div>
          </el-form> -->
          <el-button type="primary" @click="login" style="width:200px;">登 录</el-button>
        </div>
      </el-row>
      <div class="copyright-block">新东方AI研究院 © 2020 版权所有</div>
    </div>
  </div>
</template>
<script>
import md5 from 'js-md5';
import { login } from '@/api/user'
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
    };
  },
  mounted() {
    this.login();
  },
  methods: {
    login() {
      const client_id = process.env.VUE_APP_U2_CLIENT_ID;
      const redirect_uri = location.origin;
      const state = process.env.VUE_APP_U2_STATE;
      window.location.href = `${process.env.VUE_APP_E2_LOGIN_URL}?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&state=${state}&scope=login`;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
    


