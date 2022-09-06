<template>
  <div class="content">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>
    <div class="addpage-box">
      <div class="add-title">用户详情</div>
      <div class="zhiti">
        <div class="wxkg">
          <div class="wxidkg1">用户头像：</div>
          <div class="wxkg2">
            <img class="sslogo" :src="userData.Headimgurl" />
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">用户ID：</div>
          <div class="wxkg2">{{userData.Id}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">用户名称：</div>
          <div class="wxkg2">{{userData.Nickname}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">手机号码：</div>
          <div class="wxkg2">
            {{userData.Mobile}}
            <span v-show="userData.Mobile==''">该用户未绑定手机号</span>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">用户等级：</div>
          <div class="wxkg2">
            <span v-show="userData.PlusMember==1">VIP用户</span>
            <span v-show="userData.PlusMember==0">普通用户</span>
          </div>
        </div>
        <div class="wxkg" v-show="userData.PlusMember==1">
          <div class="wxidkg1">VIP到期时间：</div>
          <div class="wxkg2">{{userData.PlusEndTime}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">佣金账户余额：</div>
          <div class="wxkg2">{{userData.CommissionMoney}}元</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">发布账户余额：</div>
          <div class="wxkg2">{{userData.IssueMoney}}元</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">发布任务手续费比例：</div>
          <div class="wxkg2">{{userData.issue_rate}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">发布任务数量：</div>
          <div class="wxkg2">{{userData.TaskIssueCount}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">完成任务数量：</div>
          <div class="wxkg2">{{userData.TaskDoneCount}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">评论数量：</div>
          <div class="wxkg2">{{userData.CommentCount}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">粉丝数量：</div>
          <div class="wxkg2">{{userData.FansCount}}</div>
        </div>
        <div style="margin-left: 80px;">------------------------------------------</div>
        <div class="wxkg">
          <div class="wxidkg1">发布任务-发布量：</div>
          <div class="wxkg2">{{rwData.RsTkCount}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">发布任务-进行中：</div>
          <div class="wxkg2">{{rwData.IngTkCount}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">发布任务-今日新增：</div>
          <div class="wxkg2">{{rwData.TdTkCount}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">接受任务-任务总数：</div>
          <div class="wxkg2">{{rwData.RecCount}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">接受任务-进行中：</div>
          <div class="wxkg2">{{rwData.IngRecCount}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">接受任务-今日新增：</div>
          <div class="wxkg2">{{rwData.TdRecCount}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //导航组
      guide: [
        { name: "首页", url: "/" },
        { name: "用户列表", url: "/domestic" },
        { name: "用户详情", url: "/" },
      ],
      radio: "1",
      input: "",
      //用户ID
      userID: "",
      //用户数据
      userData: "",
      //任务数据
      rwData: "",
    };
  },
  //生命周期-页面初始化完成加载
  created() {
    this.userID = this.$route.query.id;
    this.loadingData();
  },
  methods: {
    //加载页面数据
    loadingData() {
      var data = {
        //页码
        userid: this.userID,
      };
      this.api.apiPost(
        "/UserManager/UserTaskAboutInfo",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            this.userData = res.obj.usInfo;
            this.rwData = res.obj.overInfo;
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
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
}
.content {
  background: #ebf1f4;
}
.addpage-box {
  width: calc(100% - 20px);
  background: #ffffff;
  margin-top: 20px;
  margin-left: 10px;
  height: 1100px;
  margin-bottom: 50px;
}
.add-title {
  width: 100%;
  border-bottom: 1px solid #e7e9ea;
  box-sizing: border-box;
  padding: 12px 20px;
  font-size: 14px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}
.zhiti {
  margin-top: 20px;
}
.wxkg {
  display: flex;
}
/* 这个文字对齐在其他模块是一个一个来对齐的  */
.wxidkg1 {
  width: 200px;
  text-align: right;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(136, 136, 136, 1);
  margin-left: 30px;
  line-height: 50px;
}
.wxkg2 {
  line-height: 50px;
  margin-left: 30px;
}
.sslogo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
/* 用户升级Vip */
.put {
  display: flex;
}
.put1 {
  font-size: 14px;
  color: rgba(16, 16, 16, 1);
  font-family: PingFang SC;
  font-weight: 500;
}
.put2 {
  width: 68px;
  height: 26px;
  background: rgba(3, 122, 255, 1);
  border-radius: 8px;
  margin-left: 20px;
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-top: 12px;
}
.put4 {
  text-align: center;
  margin-top: -11px;
}
/* 时间 */
.shijian {
  width: auto;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(16, 16, 16, 1);
}
/* 关系图 */
.qy-gxt {
  display: flex;
}
.gxt {
  display: flex;
}
.gxt2 {
  width: auto;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(16, 16, 16, 1);
}
.gtx3 {
  width: 1px;
  height: 60px;
  background: rgba(242, 242, 242, 1);
  margin-left: 10px;
}
.gxt-fg {
  display: flex;
  margin-left: 20px;
}
</style>