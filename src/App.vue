<template>
  <div>
    <div v-if="!loginData">
      <!-- 头部 -->
      <div class="heardEX">
        <div class="tc">
          <div class="toxian">
            <img src="/../../static/images/toxian.png" />
          </div>
          <div class="yonghu">欢迎{{nameData}}</div>
          <div class="tcdl" @click="exit">退出</div>
        </div>
      </div>
      <!-- 左侧 -->
      <div class="left-div">
        <div class="hlxt">
          <img class="qyulogo" src="/../../static/images/logo.png" />
          <div class="hlxt1">轻鱼管理后台</div>
        </div>
        <div class="left-layer">
          <el-menu
            default-active="2-1"
            class="el-menu-vertical-demo"
            background-color="#1B2556"
            text-color="#FFFFFF"
            active-text-color="#2B6CFA"
          >
            <!-- <router-link to="/index">
              <el-menu-item index="1">
                <i class="el-icon-data-analysis"></i>
                <span slot="title">数据总览</span>
              </el-menu-item>
            </router-link> -->

            <!--任务管理-->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>任务管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/audit">
                  <el-menu-item index="2-1">待审核</el-menu-item>
                </router-link>
                <router-link to="/underway">
                  <el-menu-item index="2-2">进行中</el-menu-item>
                </router-link>
                <router-link to="/finish">
                  <el-menu-item index="2-3">已结束</el-menu-item>
                </router-link>
                <router-link to="/complaint">
                  <el-menu-item index="2-4">被投诉</el-menu-item>
                </router-link>
                <router-link to="/Complaints">
                  <el-menu-item index="2-5">用户投诉商家</el-menu-item>
                </router-link>
                <router-link to="/report">
                  <el-menu-item index="2-6">商家举报用户</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>

            <!--产品管理-->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/domestic">
                  <el-menu-item index="3-1">用户列表</el-menu-item>
                </router-link>
                <!-- <router-link to="/vipuser">
                  <el-menu-item index="3-2">Vip用户</el-menu-item>
                </router-link>
                <router-link to="/blacklist">
                  <el-menu-item index="3-3">黑名单用户</el-menu-item>
                </router-link>
                <router-link to="/leave">
                  <el-menu-item index="3-4">用户留言</el-menu-item>
                </router-link> -->
              </el-menu-item-group>
            </el-submenu>
            <!--财务管理-->
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-help"></i>
                <span>财务管理</span>
              </template>
              <el-menu-item-group>
                <!-- <router-link to="/statement">
                  <el-menu-item index="4-1">聚合报表</el-menu-item>
                </router-link>
                <router-link to="/record">
                  <el-menu-item index="4-2">Vip购买记录</el-menu-item>
                </router-link> -->
                <router-link to="/commission">
                  <el-menu-item index="4-3">团队佣金</el-menu-item>
                </router-link>
                <router-link to="/deposit">
                  <el-menu-item index="4-4">提现管理</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <!--订单管理-->
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>运营管理</span>
              </template>
              <el-menu-item-group>
                <!-- <router-link to="/advertising">
                  <el-menu-item index="5-1">广告管理</el-menu-item>
                </router-link>
                <router-link to="/activity">
                  <el-menu-item index="5-2">活动管理</el-menu-item>
                </router-link> -->
                <router-link to="/posters">
                  <el-menu-item index="5-3">海报管理</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <!--运营管理-->
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item-group>
                <!-- <router-link to="/common">
                  <el-menu-item index="6-1">常见FAQ</el-menu-item>
                </router-link> -->
                <router-link to="/headlines">
                  <el-menu-item index="6-1">公告列表</el-menu-item>
                </router-link>
                <router-link to="/announcement">
                  <el-menu-item index="6-2">头条更换</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <!--文章管理-->
            <!--<el-submenu index="7">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/withdrawal">
                  <el-menu-item index="3-2">提现管理</el-menu-item>
                </router-link>
                 <router-link to="/role">
                  <el-menu-item index="7-1">角色管理</el-menu-item>
                </router-link>
                <router-link to="/account">
                  <el-menu-item index="7-2">账号管理</el-menu-item>
                </router-link>
                <router-link to="/payment">
                  <el-menu-item index="7-3">支付管理</el-menu-item>
                </router-link>
                <router-link to="/domain">
                  <el-menu-item index="7-5">域名管理</el-menu-item>
                </router-link>
                <router-link to="/appsz">
                  <el-menu-item index="7-6">App设置</el-menu-item>
                </router-link>
                <router-link to="/sensitive">
                  <el-menu-item index="7-7">敏感词设置</el-menu-item>
                </router-link>
                <router-link to="/vipsz">
                  <el-menu-item index="7-8">Vip设置</el-menu-item>
                </router-link>
                <router-link to="/tssz">
                  <el-menu-item index="7-9">推送设置</el-menu-item>
                </router-link>
                <router-link to="/task">
                  <el-menu-item index="7-10">任务分类设置</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu> -->
            <!-- <router-link to="/cheshi">
              <el-menu-item index="8">
                <i class="el-icon-data-analysis"></i>
                <span slot="title">内部测试</span>
              </el-menu-item>
            </router-link> -->
          </el-menu>
        </div>
      </div>
      <!-- 框架内容 -->
      <div class="index-div">
        <div class="index-layer">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive" />
        </div>
      </div>
    </div>
    <!-- 登录页面 -->
    <Login v-if="loginData" @LoginCG="LoginCG"></Login>
  </div>
</template>


<script>
//全局注册导航组件
import Login from "./components/login/login";
import axios from "axios";
export default {
  components: {
    Login: Login
  },
  data() {
    return {
      //是否退出
      exitBounced: false,
      //用户名
      nameData: "最高级管理员",
      //是否显示登录
      loginData: true
    };
  },
  //生命周期-页面初始化完成加载
  created() {
    //获取动态域名
    // this.api.DomainName(id,status => {
    //   if (status) {
    //   } else {
    //     this.$notify({
    //       title: "域名获取失败",
    //       type: "success",
    //       position: "bottom-right"
    //     });
    //   }
    // });
    //获取接口返回动态验证码
    //this.Verification();
    //检测本地用户缓存
    var user = sessionStorage.getItem("tokenData");
    if (user == "" || user == null) {
      this.loginData = true;
    } else {
      this.loginData = false;
    }
  },
  methods: {
    //登录成功
    LoginCG(value) {
      this.loginData = value;
    },
    //获取到验证码
    Verification() {
    },
    // 点击验证码刷新验证码
    changeCode() {
      //获取接口返回动态验证码
      this.Verification();
    },
    //退出
    exit(value) {
      this.loginData = true;
      sessionStorage.setItem("tokenData", "");
      sessionStorage.setItem("DomainURL", "");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* 主体框架 */
.index-div {
  width: 1720px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 200px;
  background-color: #ebf1f4;
  overflow: auto;
}
.index-layer {
  padding-top: 54px;
}
/* 左边CSS */
.left-div {
  width: 200px;
  height: 100%;
  text-decoration: none;
  background: linear-gradient(
    0deg,
    rgba(17, 22, 51, 1) 0%,
    rgba(27, 37, 86, 1) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
  overflow: hidden;
}

.left-layer {
  width: 202px;
}
.hlxt {
  width: 100%;
  display: flex;
}
.hlxt1 {
  width: auto;
  height: 18px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 800;
  color: rgba(91, 101, 152, 1);
  line-height: 80px;
  margin-left: 10px;
}
.qyulogo {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 1);
  border-radius: 50%;
  margin-top: 16px;
  margin-left: 13px;
}

.login-div {
  width: 520px;
  height: 532px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 8px 14px 1px rgba(54, 106, 177, 0.08);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  margin-top: -266px;
  left: 50%;
  margin-left: -260px;
  overflow: hidden;
  z-index: 99;
}
/* 顶部 */
.heardEX {
  width: 300px;
  height: 54px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 30;
}
.tc {
  width: 300px;
  height: 54px;
  display: flex;
  float: right;
  margin-right: 20px;
}

.toxian {
  width: 36px;
  height: 36px;
  margin-right: 20px;
  margin-top: 8px;
}
.yonghu {
  width: 180px;
  height: 54px;
  line-height: 54px;
  font-size: 16px;
  color: rgba(136, 136, 136, 1);
  padding-right: 10px;
}
.tcdl {
  width: 50;
  height: 54px;
  line-height: 54px;
  font-size: 16px;
  color: rgba(136, 136, 136, 1);
}

/* 组件尺寸重新定制 */
.el-submenu .el-menu-item {
  text-indent: 10px;
}
/* 验证码 */
.tbdyyzmo {
  width: 100%;
  height: 100%;
}
</style>

