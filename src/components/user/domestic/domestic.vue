<template>
  <div class="layer">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>
    <!-- 搜索模块 -->
    <div class="ssdht">
      <!-- 添加 -->
      <div class="tianj1">
        <div class="tianj2">
          <div class="tianj">用户列表</div>
        </div>
      </div>
      <!-- 全局搜索组件 -->
      <Search @search="search"></Search>
    </div>

    <!-- 列表 -->
    <div class="list-div">
      <div class="title">
        <div class="li">用户ID</div>
        <div class="li">用户昵称</div>
        <div class="li">手机号</div>
        <div class="li">上级ID</div>
        <div class="li">发布任务数量</div>
        <div class="li">完成任务数量</div>
        <div class="li">VIP会员</div>
        <div class="li">发布余额</div>
        <div class="li">佣金余额</div>

        <div class="li">操作</div>
      </div>
      <div class="title" v-for="(item,key) in userData" :key="key">
        <div class="li">{{item.Id}}</div>
        <div class="li">{{item.Nickname}}</div>
        <div class="li">{{item.Mobile}}</div>
        <div class="li">{{item.Pid}}</div>
        <div class="li">{{item.TaskIssueCount}}</div>
        <div class="li">{{item.TaskDoneCount}}</div>
        <div class="li">
          <span v-if="item.PlusMember==1">是</span>
          <span v-else>否</span>
        </div>
        <div class="li">{{item.IssueMoney}}</div>
        <div class="li">{{item.CommissionMoney}}</div>

        <div class="li">
          <span class="li-abq1" @click="jujtkF(1,item)">封号</span>
          <span class="li-abq2" @click="xiaoqing(item.Id)">详情</span>
        </div>
      </div>
      <!-- 全局分页组件 -->
      <Paging :totalCount="totalCount" @jumpData="jumpData" v-show="userData!=''&&userData!=null"></Paging>
    </div>
    <!-- 通用遮罩层 -->
    <div class="zhezc" v-show="blocking"></div>
    <div class="tankxg" v-show="juztk">
      <div class="biaotl">用户封号</div>
      <div class="wltw">确定封号“{{userTK.Nickname}}”吗？</div>
      <div class="yabyxz">
        封号天数
        <el-input class="julinput" type="number" v-model="tianData" placeholder="请输入封号天数"></el-input>
      </div>
      <div class="anntl">
        <div class="ant1" @click="jujtkF(2)">取消</div>
        <div class="ant2" @click="auditData(2)">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
  data() {
    return {
      //导航组
      guide: [
        { name: "首页", url: "/" },
        { name: "用户列表", url: "" },
      ],
      //搜索关键字
      searchData: "",
      //分页
      page: 1,
      //分页总数据量
      totalCount: 10,
      //总数据
      userData: [],
      //弹框数据
      userTK: "",
      //封号天数
      tianData: "",
      //遮罩层
      blocking: false,
      //封号弹框
      juztk: false
    };
  },
  //生命周期-页面初始化完成加载
  created() {
    this.loadingData();
  },
  methods: {
    //加载页面数据
    loadingData() {
      var data = {
        //页码
        pageindex: this.page,
        //页面大小，默认10
        pagecount: 10,
        //搜索关键字
        key: this.searchData,
      };
      this.api.apiPost(
        "/UserManager/UserList",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            //总数据
            this.userData = res.obj.uss;
            //总列数
            this.totalCount = res.obj.count;
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: "error",
              position: "bottom-right",
            });
          }
        }
      );
    },
    //下一页
    jumpData(val) {
      this.page = val;
      this.loadingData();
    },
    //搜索
    search(val) {
      this.searchData = val;
      this.page=1;
      this.loadingData();
    },
    //显示或者关闭弹框
    jujtkF(e, data) {
      if (e == 1) {
        this.userTK = data;
        this.blocking = true;
        this.juztk = true;
      } else {
        this.blocking = false;
        this.juztk = false;
      }
    },
    //判断是取消还是通过
    shenghejc(id) {
      if (id == 1) {
        //确定
        this.auditData(3);
      } else {
        //显示弹框
        this.jujtkF(1);
      }
    },
    //封号提交
    auditData(ispass) {
      if (this.tianData == "") {
        this.$message({
          showClose: true,
          message: "请填写封号天数！",
          type: "error",
          position: "bottom-right",
        });
        return;
      }
      var data = {
        //禁用用户ID
        UserId: this.userTK.Id,
        //禁用多少天
        Time: this.tianData,
      };
      this.api.apiPost(
        "/UserManager/UserDis",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            //关闭弹框
            this.jujtkF(2);
            this.$message({
              showClose: true,
              message: "封号成功",
              type: "success",
              position: "bottom-right",
            });
            //加载数据
            this.loadingData();
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: "error",
              position: "bottom-right",
            });
          }
        }
      );
    },
    //用户详情
    xiaoqing(id){
      this.$router.push({
        path: "/domesticbj",
        query: {
          id: id
        }
      });
    }
  },
};
</script>

<style scoped>
.layer {
  width: auto;
}

/* 搜索模块 */
.ssdht {
  width: 1660px;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 11px 1px rgba(248, 248, 248, 1);
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 11px;
}
/* 添加按钮 */
.tianj1 {
  display: flex;
}
.tianj2 {
  width: 120px;
  height: 40px;
  /* background:#037AFF; */
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 8px;
}
.tianj {
  width: auto;
  height: 16px;
  font-size: 16px;
  color: #000000;
  text-align: center;
  line-height: 40px;
}
/* 搜索 */
.ssk {
  width: 370px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(231, 233, 234, 1);
  border-radius: 20px 0px 0px 20px;
  float: right;
  margin-right: 100px;
  margin-top: -42px;
  position: relative;
}
.sslogo {
  margin-top: 5px;
}
.ssbj {
  display: flex;
}
/* 去掉input输入边框 */
.s-input {
  margin-top: 5px;
  width: 300px;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom-style: none;
  outline: none;
}
.djss {
  width: 90px;
  height: 40px;
  background: rgba(3, 122, 255, 1);
  border-radius: 0px 20px 20px 0px;
  float: right;
  margin-top: -42px;
  margin-right: 10px;
}
.djss1 {
  text-align: center;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}

/* 使用中 */
.syz {
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
}
.syz1 {
  width: auto;
  height: 16px;
  font-size: 16px;
  color: rgba(3, 122, 255, 1);
}
.syz2 {
  margin-left: 20px;
}
.syz3 {
  margin-left: 20px;
  color: rgba(136, 136, 136, 1);
  font-size: 16px;
}
/* 分页 */
.paging {
  width: 100%;
  height: 60px;
  padding-top: 30px;
  text-align: center;
}
/* 列表 */
.list-div {
  width: 1680px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  background-color: #ffffff;
  border: 1px solid rgba(231, 233, 234, 1);
  color: #2b333d;
  position: relative;
}
.l-tab {
  width: 100%;
  height: 51px;
  display: flex;
  border-bottom: 1px #e7e9ea solid;
}
.tab-div {
  width: 83px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 14px;
}
.tab-a {
  margin-left: 35px;
}
.tab-b {
  margin-left: 80px;
}
.choose {
  color: #037aff;
  border-bottom: 3px #037aff solid;
}
.title {
  width: 100%;
  height: 60px;
  border-bottom: 1px #e7e9ea solid;
  display: flex;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  overflow: scroll;
  overflow: hidden;
}
.title .li {
  flex: 1.2;
}
/* 封号弹框 */
.tankxg {
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px 10px 10px 10px;
  z-index: 40;
  position: fixed;
  top: 50%;
  margin-top: -150px;
  left: 50%;
  margin-left: -250px;
  overflow: hidden;
}
.biaotl {
  width: 100%;
  height: 50px;
  background-color: #037aff;
  text-indent: 20px;
  line-height: 50px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
}
.wltw {
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: #404448;
  font-size: 14px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 20px;
}
.yabyxz {
  width: 400px;
  height: 40px;
  line-height: 40px;
  color: #404448;
  font-size: 14px;
  margin-left: 70px;
}
.julinput {
  width: 260px;
  height: 40px;
  margin-left: 20px;
}
.anntl {
  width: 240px;
  height: 40px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
}
.ant1 {
  width: 76px;
  height: 36px;
  border: 1px solid rgba(216, 216, 216, 1);
  border-radius: 4px;
  line-height: 36px;
  text-align: center;
  color: #a09f9f;
  font-size: 14px;
  cursor:pointer;
}
.ant2 {
  width: 76px;
  height: 36px;
  background-color: #037aff;
  border-radius: 4px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  margin-left: 80px;
  cursor:pointer;
}
/* 封号弹框结束 */
</style>
