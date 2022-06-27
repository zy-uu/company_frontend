<template>
  <div class="auth-page">
    <b-alert class="alert-sm" variant="danger" :show="verifyLoginInfo">
      请输入正确的邮箱和密码
    </b-alert>
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        企业信息管理平台
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>登录</h3>"
        customHeader
      >
        <!-- <p class="widget-auth-info">
            登录
        </p> -->
        <form class="mt">
          <div class="form-group">
            <input
              class="form-control no-border"
              ref="email"
              v-model="email"
              required
              type="email"
              name="email"
              placeholder="邮箱"
            />
          </div>
          <div class="form-group">
            <input
              class="form-control no-border"
              ref="password"
              required
              v-model="password"
              type="password"
              name="password"
              placeholder="密码"
            />
          </div>
          <b-button
            size="sm"
            class="auth-btn mb-3"
            variant="inverse"
            @click="login"
            >登录</b-button
          >
          <!-- <p class="widget-auth-info">or sign in with</p>
          <div class="social-buttons">
            <b-button variant="primary" class="social-button mb-2">
              <i class="social-icon social-google"></i>
              <p class="social-text">GOOGLE</p>
            </b-button>
            <b-button variant="success" class="social-button">
              <i class="social-icon social-microsoft"></i>
              <p class="social-text">MICROSOFT</p>
            </b-button>
          </div> -->
        </form>
        <p class="widget-auth-info">没有账户？创建一个吧！</p>
        <router-link class="d-block text-center" to="/register"
          >创建账户</router-link
        >
      </Widget>
    </b-container>
    <footer class="auth-footer">2022 - Make by Zy-uu</footer>
    <!-- <footer class="auth-footer">
      2019 &copy; Sing App Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com/">Flatlogic</a>
    </footer> -->
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import {loginApi}  from "./loginHttp";

export default {
  name: "LoginPage",
  components: { Widget },
  data() {
    return {
      errorMessage: null,
      email: "",
      password: "",
      verifyLoginInfo: false,
    };
  },
  methods: {
     async login() {
       const user = {
        email: this.email,
        password: this.password,
      };
      try {
        const res = await loginApi(user);
        console.log("logindata:",res);
        if(res.data.code === 200) {
          this.$router.push({name: 'AnalyticsPage'});
          localStorage.setItem('Token',JSON.stringify(res.data.accessToken));
          this.$store.dispatch('storeUserId',res.data.id);
        }
        else {
          this.verifyLoginInfo = true;
        }
      }
      catch(err) {
        console.log('err')
        this.errorMessage = err.response.data.message;
        
      }

    },
  },
  created() {
    // if (window.localStorage.getItem("authenticated") === "true") {
    //   this.$router.push("/app/main/analytics");
    // }
  },
};
</script>
