<template>
  <div class="content">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>
    <div class="addpage-box">
      <div class="add-title">任务详情</div>
      <div class="zhiti">
        <div class="wxkg">
          <div class="wxidkg1">发布商家头像</div>
          <div class="wxkg2">
            <img class="sslogo" :src="totalData.HeadImg" />
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">商家ID</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.UserId}}</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务编号</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.Id}}</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">项目名称</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.ItemName}}</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务标题</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.TaskTitle}}</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务数量</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.TaskCount}}个</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务单价</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.TaskPrice}}元</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">加速红包</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.ForceSumMoney}}元</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务支付</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.TaskMoney}}元</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务链接</div>
          <div class="wxkg2">
            <div class="shijian" v-if="totalData.TaskLink!=''">{{totalData.TaskLink}}</div>
            <div class="shijian" v-else>商家未填写</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务结束时间</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.ClosingDate}}</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务提交限时</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.SubmitTimeLimit}}小时</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务审核周期</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.AuditPeriod}}小时</div>
          </div>
        </div>
        <div class="wxkg" v-for="(item,key) in totalData.StepInfos" :key="key">
          <div class="wxidkg1">
            <span v-show="item.step_type==0">步骤一（图文说明）</span>
            <span v-show="item.step_type==1">步骤二（收集截图）</span>
          </div>
          <div class="wxkg2">
            <div class="shijian">{{item.step_text_des}}</div>
            <img class="mbshit" :src="item.step_pic_demo_url" />
          </div>
        </div>
<div class="wxkg">
          <div class="wxidkg1">提交数据</div>
          <div class="wxkg2">
            <div class="shijian" v-if="totalData.SubmitData!=''">{{totalData.SubmitData}}</div>
            <div class="shijian" v-else>商家未填写</div>
          </div>
        </div>
        <!-- 通过和拒绝 -->
        <div class="qy-qd">
          <div class="qy-tg" @click="shenghejc(1)">
            <div class="qy-tg1">通过</div>
          </div>

          <div class="qy-jj" @click="shenghejc(2)">
            <div class="qy-jj1">拒绝</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 通用遮罩层 -->
    <div class="zhezc" v-show="blocking"></div>
    <div class="tankxg" v-show="juztk">
      <div class="biaotl">任务审核</div>
      <div class="wltw">确定拒绝该审核吗？</div>
      <div class="yabyxz">
        拒绝原因
        <el-input class="julinput" v-model="juData" placeholder="请输入拒绝原因"></el-input>
      </div>
      <div class="anntl">
        <div class="ant1" @click="jujtkF(2)">取 消</div>
        <div class="ant2" @click="auditData(2)">拒 绝</div>
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
        { name: "待审核", url: "/audit" },
        { name: "任务详情", url: "" }
      ],
      //总数据
      totalData: [],
      //任务ID
      taskId: "",
      //拒绝原因
      juData: "",
      //遮罩层
      blocking: false,
      //拒绝弹框
      juztk: false
    };
  },
  created() {
    this.taskId = this.$route.query.id;
    this.loadingData();
  },
  methods: {
    //加载页面数据
    loadingData() {
      var data = {
        //任务ID
        taskid: this.taskId
      };
      this.api.apiPost(
        "/TaskManager/TaskInfo",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            //总数据
            this.totalData = res.obj;
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: "error",
              position: "bottom-right"
            });
          }
        }
      );
    },
    //显示或者关闭拒绝弹框
    jujtkF(e) {
      if (e == 1) {
        this.blocking = true;
        this.juztk = true;
      } else {
        this.blocking = false;
        this.juztk = false;
      }
    },
    //判断是拒绝还是通过
    shenghejc(id) {
      if (id == 1) {
        //3 通过
        this.auditData(3);
      } else {
        //拉起拒绝弹框
        this.jujtkF(1);
      }
    },
    //审核提交
    auditData(ispass) {
      if (ispass == 2 && this.juData == "") {
        this.$message({
          showClose: true,
          message: "请填写拒绝原因！",
          type: "error",
          position: "bottom-right"
        });
        return;
      }
      var data = {
        //任务ID
        taskid: this.taskId,
        //2拒绝，3 通过
        ispass: ispass,
        //原因
        result: this.juData
      };
      this.api.apiPost(
        "/TaskManager/ToExamineTask",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            if (ispass == 2) {
              this.$message({
                showClose: true,
                message: "拒绝成功",
                type: "success",
                position: "bottom-right"
              });
            } else {
              this.$message({
                showClose: true,
                message: "通过成功",
                type: "success",
                position: "bottom-right"
              });
            }
            //成功后跳转
            this.$router.push({
              path: "/audit"
            });
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: "error",
              position: "bottom-right"
            });
          }
        }
      );
    }
  }
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
  height: auto;
  padding-bottom: 50px;
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
  height: 14px;
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
  height: 50px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(16, 16, 16, 1);
}
.mbshit {
  width: 139px;
  height: 300px;
}
/* 通过和拒绝 */
.qy-qd {
  display: flex;
  margin-top: 20px;
}
.qy-tg {
  width: 160px;
  height: 40px;
  background: rgba(3, 122, 255, 1);
  border-radius: 8px;
  margin-left: 70px;
}
.qy-tg1 {
  width: auto;
  height: 14px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 40px;
}
.qy-jj {
  width: 160px;
  height: 40px;
  background: rgba(245, 103, 92, 1);
  border-radius: 8px;
  margin-left: 30px;
}
.qy-jj1 {
  width: auto;
  height: 14px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 40px;
}
  /* 拒绝弹框 */
  .tankxg{
      width: 500px;
      height: 300px;
      background-color: #fff;
      border-radius:10px 10px 10px 10px;
      z-index: 40;
      position: fixed;
      top: 50%;
      margin-top: -150px;
      left: 50%;
      margin-left: -250px;
      overflow: hidden;
  }
  .biaotl{
      width: 100%;
      height: 50px;
      background-color: #037AFF;
      text-indent: 20px;
      line-height: 50px;
      font-size: 14px;
      color: #fff;
      font-weight: bold;
  }
  .wltw{
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #404448;
      font-size: 14px;
      text-align: center;
      padding-top: 30px;
      padding-bottom: 20px;
  }
  .yabyxz{
      width: 400px;
      height: 40px;
      line-height: 40px;
      color: #404448;
      font-size: 14px;
      margin-left: 70px;
  }
  .julinput{
      width: 260px;
    height: 40px;
    margin-left: 20px;
  }
  .anntl{
      width: 240px;
      height: 40px;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      padding-top: 40px;
  }
  .ant1{
    width:76px;
    height:36px;
    border:1px solid rgba(216,216,216,1);
    border-radius:4px;
    line-height: 36px;
    text-align: center;
    color: #A09F9F;
    font-size: 14px;
  }
  .ant2{
    width:76px;
    height:36px;
    background-color: #037AFF;
    border-radius:4px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    margin-left: 80px;
  }
  /* 拒绝弹框结束 */
</style>