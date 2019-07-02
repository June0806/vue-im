<template>
  <div>
    <img class="bgone"
         src="~@@/image/1.jpg">
    <img class="pic"
         src="~@@/image/a.png">
    <div class="table">
      <div class="wel">客服系统后台登录</div>
      <div class="wel1">KE FU XI TONG HUO TAI DENG LU</div>
      <div class="user">
        <div id="yonghu"
             style=""><img src="~@@/image/yhm.png"></div>
        <input v-model="form.username"
               placeholder="用户名"
               @keyup.enter="handleUserEnter"
               type="text">
      </div>
      <div class="password">
        <div id="yonghu"><img src="~@@/image/mm.png"></div>
        <input v-model="form.password"
               ref="password"
               name="密码"
               placeholder="●●●●●●"
               @keyup.enter="handlePasswordEnter"
               type="password">
      </div>
      <input class="btn"
             name="登录"
             value="登录"
             @click="handleLogin"
             type="button">
    </div>

  </div>
</template>

<script>
export default {
  name: "imLogin",
  data () {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    handleUserEnter () {
      if (!this.form.username) {
        this.$message.error("请输入用户名");
        return false;
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      })
    },
    handlePasswordEnter () {
      if (!this.form.password) {
        this.$message.error("请输入密码");
        return false;
      }
      this.handleLogin();
    },
    handleLogin () {
      if (!this.form.username) {
        this.$message.error("请输入用户名");
        return false;
      }
      if (!this.form.password) {
        this.$message.error("请输入密码");
        return false;
      }
      this.$store.imLogin.dispatch("login");
    }
  }
}
</script>

 <style>
.bgone {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
}
.pic {
  width: 492px;
  height: auto;
  position: absolute;
  top: 0;
  right: 453px;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 99999;
}
.table {
  background-color: #ffffff;
  width: 960px;
  height: 365px;
  position: absolute;
  top: 10%;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
}
.password {
  position: absolute;
  top: 7.8rem;
  right: 4rem;
  display: flex;
}
.btn {
  position: absolute;
  top: 13.5rem;
  right: 3.9rem;
  border: none;
  color: #fff;
  width: 373px;
  text-align: center;
  background-color: #1592ef;
  text-indent: 0rem;
  border-radius: 10px;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  height: 50px;
  cursor: pointer;
}

.wel {
  width: 960px;
  height: 35px;
  color: #fff;
  font-size: 30px;
  position: absolute;
  top: -7rem;
  text-align: center;
}
.wel1 {
  width: 960px;
  height: 35px;
  color: #fff;
  font-size: 12.38px;
  position: absolute;
  top: -4rem;
  text-align: center;
}
input {
  height: 40px;
  width: 373px;
  text-indent: 55px;
  outline: none;
  background: #eef6fd;
  border-bottom: 2px #d6e7fa solid;
}

.user {
  position: absolute;
  top: 3.2rem;
  right: 4rem;
  display: flex;
}

#yonghu img {
  height: 30px;
  position: absolute;
  left: 10px;
  top: 13px;
}
</style>