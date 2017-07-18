<template>
  <div class="login">

    <header><a href="/"><img src="./images/logo.png" /></a></header>

    <section>
      <div class="Form">
        <h3 class="title">登录</h3>
        <form id="loginForm">
          <div class="input-items">
            <input class="ipt-text" type="text" v-model="username" placeholder="请输入您的账号" />
          </div>
          <div class="input-items">
            <input class="ipt-text" type="password" v-model="password" placeholder="请输入您的密码" />
          </div>
          <div class="overflow">
            <input type="button" class="ipt-button fr" value="登录" @click="checkUser()"/>
            <a class="ipt-link fr" href="">忘记密码</a>
          </div>
        </form>
      </div>
    </section>

    <footer>版权所有 © 武汉中润普达信息技术有限公司 &nbsp;－ &nbsp;鄂ICP备14018646号</footer>

  </div>
</template>

<script>
  export default{
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      checkUser(){

      }
    }
  }
</script>
