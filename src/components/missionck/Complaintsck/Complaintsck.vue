<template>
  <div class="content">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>
    <div class="addpage-box">
      <div class="add-title">投诉处理</div>
      <div class="zhiti">
        <!-- 方框里面内容 -->
        <div class="wxkg">
          <div class="wxidkg2">
            <span>订单详情</span>
          </div>
          <div class="wxkg2">
            <div class="fkbuj">
              <div class="toxian">
                <div class="toxian-1">
                  <img class="toxian-2" :src="receive_info.HeadImager" />
                </div>
                <div class="tshi">
                  <div class="mc">{{receive_info.Nickname}}</div>
                  <div class="sj">商家ID：{{receive_info.UserId}}</div>
                </div>
              </div>
              <div class="ztwz">提交数据：{{receive_info.submit_data}}</div>
              <div v-for="(imga,key) in receive_info.StepInfos" :key="key">
                <div class="fenbt">
                  <span v-show="imga.step_type==0">图文说明</span>
                  <span v-show="imga.step_type==1">收集截图</span>
                </div>
                <div class="liywz" style="line-height: 30px;">{{imga.step_text_des}}</div>
                <div style="display: flex;">
                  <div class="qy-mbys">
                    <img
                      class="mbys-1"
                      v-if="imga.step_pic_demo_url!=''"
                      :src="imga.step_pic_demo_url"
                    />
                    <div class="qy-mbys-1" v-if="imga.step_pic_demo_url!=''">商家示例</div>
                  </div>
                  <div class="qy-mbys">
                    <img class="mbys-1" v-if="imga.step_pic_url!=''" :src="imga.step_pic_url" />
                    <div class="qy-mbys-1" v-if="imga.step_pic_url!=''">用户提交</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 方框里面内容结束-->
        <!-- 方框里面内容 -->
        <div class="wxkg">
          <div class="wxidkg2">
            <span>举报信息</span>
          </div>
          <div class="wxkg2">
            <div class="fkbuj">
              <div class="toxian">
                <div class="toxian-1">
                  <img class="toxian-2" :src="report_info.HeadImg" />
                </div>
                <div class="tshi">
                  <div class="mc">{{report_info.NickName}}</div>
                  <div class="sj">用户ID：{{report_info.UserId}}</div>
                </div>
              </div>
               <div class="ztwz bohyl">商家驳回原因：{{report_info.RejectBec}}</div>
              <div class="ztwz">理由：{{report_info.Content}}</div>
              <div>
                <div class="fenbt">
                  <span>举报图片</span>
                </div>
                <div style="display: flex;">
                  <div class="qy-mbys">
                    <img class="mbys-1" v-if="report_info.Img[0]!=''" :src="report_info.Img[0]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 方框里面内容结束-->
      </div>
      <div>
        <div class="wxkg">
          <div class="wxidkg1">处理结果</div>
          <div class="wxkg2" v-if="kefu_head.Status==0">
            <el-select class="xiaok" v-model="results" placeholder="点击请选择...">
              <el-option
                v-for="item in xialData"
                :key="item.template_id"
                :label="item.title"
                :value="item.template_id"
              ></el-option>
            </el-select>
          </div>
          <div class="wxkg2" v-if="kefu_head.Status==1">{{results}}</div>
        </div>
        <div class="wxkg">
          <div class="wxidkg1">判决理由</div>
          <div class="wxkg2" v-if="kefu_head.Status==0">
            <el-input type="textarea" class="xiaok" v-model="reasonData" placeholder="请输入判决理由"></el-input>
          </div>
          <div class="wxkg2" v-if="kefu_head.Status==1">{{reasonData}}</div>
        </div>
        <!-- 保存 -->
        <div class="baoc" v-if="kefu_head.Status==0">
          <div class="baoc1" @click="validation">提交</div>
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
        { name: "用户举报商家", url: "/Complaints" },
        { name: "任务详情", url: "" },
      ],
      //订单数据
      receive_info: "",
      //举报信息
      report_info: {"Img":[""]},
      //客服介入信息
      kefu_head: "",
      //领取的任务ID
      taskId: "",
      //结果数组
      xialData: [
        {
          template_id: 1,
          title: "做单用户胜诉",
        },
        {
          template_id: 2,
          title: "发布商家胜诉",
        },
      ],
      //处理结果
      results: "",
      //判决理由
      reasonData: ""
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
        //领取的任务ID
        taskreceiveid: this.taskId,
      };
      this.api.apiPost(
        "/TaskManager/TaskReportInfo",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            this.receive_info = res.obj.receive_info;
            this.report_info = res.obj.report_info;
            this.kefu_head = res.obj.kefu_head;
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
    //验证
    validation() {
      if (this.results == "") {
        this.$message({
          showClose: true,
          message: "请选择处理结果",
          type: "error",
          position: "bottom-right",
        });
      } else if (this.reasonData == "") {
        this.$message({
          showClose: true,
          message: "处理理由不能为空",
          type: "error",
          position: "bottom-right",
        });
      } else {
        this.auditData();
      }
    },
    //提交
    auditData() {
      var data = {
        //已领取任务ID
        taskreceiveid: this.taskId,
        //1，用户胜诉 2，商家胜诉
        state: this.results,
        //理由
        result: this.reasonData,
      };
      this.api.apiPost(
        "/TaskManager/TaskReportInfoTrial",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            this.$message({
              showClose: true,
              message: "提交成功",
              type: "success",
              position: "bottom-right",
            });
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
.bohyl{
  border-bottom:1px #b5adac solid;
}
.fenbt {
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 20px;
  text-align: center;
  background-color: rgb(228, 228, 228);
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
.wxidkg2 {
  width: 200px;
  height: 14px;
  text-align: right;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(136, 136, 136, 1);
  margin-left: 30px;
  line-height: 50px;
  margin-top: 200px;
}
.wxkg2 {
  line-height: 50px;
  margin-left: 30px;
  margin-bottom: 20px;
}
.fkbuj {
  width: 360px;
  height: auto;
  padding-bottom: 20px;
  background: rgba(247, 247, 247, 1);
  border-radius: 16px;
}
.fkbuj-2 {
  width: 380px;
  height: 130px;
  background: rgba(247, 247, 247, 1);
  border-radius: 16px;
}
.fkxiao {
  width: 380px;
  height: 130px;
  background: rgba(247, 247, 247, 1);
  border-radius: 16px;
}
.toxian {
  display: flex;
  margin-left: 20px;
}
.toxian-1 {
  margin-top: 20px;
}
.toxian-2 {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
/* 方框里面头像昵称 */
.tshi {
  margin-top: 10px;
  margin-left: 9px;
}
.mc {
  width: 260px;
  height: 30px;
  line-height: 30px;
  padding-top: 10px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sj {
  width: 270px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(136, 136, 136, 1);
}
.ztwz {
  width: 320px;
  height: auto;
  line-height: 30px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(38, 38, 38, 1);
  margin-left: 20px;
  margin-bottom: 5px;
}
.ztwz1 {
  width: auto;
  height: 8px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(38, 38, 38, 1);
  margin-left: 20px;
  margin-top: -20px;
}
.mbys-1 {
  width: 151px;
  height: 320px;
}
.qy-mbys {
  margin-left: 20px;
  margin-top: 10px;
}
.qy-mbys-1 {
   width: 56px;
  height: 34px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(136, 136, 136, 1);
  line-height: 14px;
  margin-left: 40px;
}
.xiaok {
  width: 380px;
}
.baoc {
  width: 160px;
  height: 40px;
  background: rgba(3, 122, 255, 1);
  border-radius: 8px;
  font-size: 14px;
  color: #ffffff;
  line-height: 40px;
  text-align: center;
  margin-top: 20px;
  margin-left: 350px;
}
.baoc1 {
  text-align: center;
}
.liywz{
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
}
</style>