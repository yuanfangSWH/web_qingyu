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
          <div class="wxidkg1">用户ID</div>
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
          <div class="wxidkg1">任务剩余</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.TaskReMainCount}}个</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">剩余加速红包</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.ReMainSpeedMoney}}元</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">任务转发点击</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.ShareCount}}次</div>
          </div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">平台盈利</div>
          <div class="wxkg2">
            <div class="shijian">{{totalData.Platform}}元</div>
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
          <div class="wxidkg1"><span v-show="item.step_type==0">步骤一（图文说明）</span><span v-show="item.step_type==1">步骤二（收集截图）</span></div>
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
        { name: "进行中", url: "/underway" },
        { name: "任务详情", url: "" }
      ],
      //总数据
      totalData: [],
      //任务ID
      taskId: ""
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
</style>