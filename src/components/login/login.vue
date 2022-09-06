<template>
  <div class="qyu-bj">
    <div class="dlu">
      <div class="login-main">
        <ul class="login-ul">
          <li>
            <div class="login-div01">
              <el-input class="login-ipt01" v-model="account" placeholder="请输入账号"></el-input>
            </div>
          </li>
          <li>
            <div class="login-div01">
              <el-input class="login-ipt01" v-model="password" placeholder="请输入密码"  show-password></el-input>
            </div>
          </li>
          <!-- <li>
            <div class="login-div02">
              <span class="i-03"></span>
              <Input
                class="login-ipt02"
                v-model="yzcode"
                style="margin-top:2px;"
                type="text"
                placeholder="请输入验证码"
              />
              <a class="yzm" @click="changeyzm" href="javascript:;">
                <img class="yzmimgs" />
              </a>
            </div>
          </li>-->
          <li>
            <Button class="login-btn" type="primary" @click="loginFun">登录</Button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //账号
      account: "",
      //密码
      password: ""
    };
  },
  methods: {
    //登录
    loginFun() {
      if (this.account == "") {
        this.$message({
          showClose: true,
          message: "账号不能为空",
          type: "error",
          position: "bottom-right"
        });
        return;
      }
      if (this.password == "") {
        this.$message({
          showClose: true,
          message: "密码不能为空",
          type: "error",
          position: "bottom-right"
        });
        return;
      }
      var data = {
        //账号
        UserName: this.account,
        //密码
        Pwd: this.password
      };
      this.api.apiPost("/Reg/Login", "post", data, "", (status, code, res) => {
        if (status) {
          sessionStorage.setItem("tokenData", res.obj);
          this.$emit('LoginCG',false);
          this.$message({
            showClose: true,
            message: "登录成功",
            type: "success",
            position: "bottom-right"
          });
        } else {
          this.$message({
            showClose: true,
            message: res.msg,
            type: "error",
            position: "bottom-right"
          });
        }
      });
    }
  }
};
</script>

<style scoped>
.qyu-bj {
  width: 100%;
  height: 100vh;
  background: url(../../../static/images/login.png) no-repeat left center;
  background-size: cover;
  position: relative;
  z-index: 99;
}
.dlu {
  width: 520px;
  height: 409px;
  background: linear-gradient(
    0deg,
    rgba(17, 22, 51, 1) 0%,
    rgba(27, 37, 86, 1) 100%
  );
  box-shadow: 0px 4px 23px 1px rgba(227, 227, 227, 1);
  border-radius: 10px;
  margin-top: 358px;
  position: absolute;
  margin-left: 36%;
  text-align: center;
}
ul,
ul li {
  list-style: none;
}
.login-ipt01,
.login-ipt02 {
  width: 360px;
  height: 50px;
  border-radius: 12px;
}
.login-div01 {
  line-height: 50px;
  margin-bottom: 30px;
}
.login-btn {
  width: 350px;
  height: 50px;
  background: rgba(252, 187, 103, 1);
  border-radius: 12px;
  margin-top: 50px;
}
.login-ul{
  padding-top: 60px;
}
</style>
