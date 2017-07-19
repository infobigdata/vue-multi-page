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
            <button type="button" class="ipt-button fr" @click="checkUser" v-bind:class="{ buttonLoading: isLoading}">登录</button>
            <a class="ipt-link fr" href="">忘记密码</a>
          </div>
        </form>
      </div>
    </section>

    <footer>版权所有 © 武汉中润普达信息技术有限公司 &nbsp;－ &nbsp;鄂ICP备14018646号</footer>

  </div>
</template>

<script>
  import Base from 'assets/js/base';

  require('./less/login.less')

  export default{
    data() {
      return {
        isLoading: false,
        username: '',
        password: ''
      }
    },
    methods: {
      checkUser(){
        const self = this;
        if (this.username == ''){
          this.$message({ message: '用户名不能为空',type: 'warning' });
        }else if (this.password == '') {
          this.$message({ message: '密码不能为空',type: 'warning' });
        }else{
          this.isLoading = true;
          Base.C.ajax({
            url:'login.php',
            type: 'post',
            data: {
              username: self.username,
              password: self.password
            },
            success: function (res){
              if (res.status == 1) {
                self.$message({ message: '恭喜，成功！',type: 'success' });
                location.href = '../dashboard/index.html'
              }else{
                self.$message({ message: '糟糕，出错了！',type: 'error' });
              }
            },
            error: function(req){
              self.fullscreenLoading = false;
              self.$Notice.error({desc: '糟糕，出现了一个惊天大BUG!'});
            }
          })
        }
      }
    }
  }
</script>
