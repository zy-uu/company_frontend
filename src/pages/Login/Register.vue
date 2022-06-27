<template>
  <div class="register-page">
    <!-- alert -->
    <b-alert v-model="showRegisterAlert" 
    class="mt-2"
    style="text-align: center"
    variant="success"
     dismissible>
     <span style="font-size: 13px">注册成功,请登录</span>
    </b-alert>
    <!-- alert -->

    <b-form class="form">
      <b-form-group>
        <b-form-input
          v-model="username"
          type="text"
          placeholder="请输入用户名"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="email"
          type="email"
          placeholder="请输入邮箱"
          required
        >
        </b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-select
          v-model="role"
          placeholder="请选择角色"
          :options="options"
        >
        </b-form-select>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="password"
          type="password"
          placeholder="请输入密码"
          required
        >
        </b-form-input>
      </b-form-group>
      <div class="registerButton">
        <b-button variant="primary" @click="register">注册</b-button>
      </div>
    </b-form>
  </div>
</template> 

<script>
import { registerApi } from "./loginHttp";

export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      role: "",
      showRegisterAlert: false,
      options: [
        {
          value: "管理员",
          text: "管理员",
        },
        {
          value: "用户",
          text: "用户",
        },
      ],
    };
  },
  methods: {
    async register() {
      const user = {
        username: this.username,
        password: this.password,
        email: this.email,
        role: this.role,
      };
      const res = await registerApi(user);
      console.log(res);
      if (res.status === 200) {
          this.showRegisterAlert = true;
          setTimeout(() => {
              console.log("wait 2 second")
              this.$router.push("/login");   
          }, 1000);
          
      }
    },
  },
};
</script>

<style lang="scss">
.register-page {
  height: 100%;
  position: relative;

  .form {
    width: 25%;
    position: absolute;
    transform: translate(-50%, 0);
    left: 50%;
    top: 20%;

    .registerButton {
      display: flex;
      flex-direction: row-reverse;
    }
  }
}
</style>
