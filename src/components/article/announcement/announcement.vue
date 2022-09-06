<template>
  <div class="content">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>
    <div class="addpage-box">
      <div class="add-title">头条更换</div>
      <div class="hzi">
        <div class="ggnr">头条内容</div>
        <div class="ggnr1">
          <el-input
            class="ggnr2"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 50}"
            placeholder="请输入APP首页头条滚动内容"
            v-model="gongnr"
          ></el-input>
        </div>
      </div>

      <div class="fabu">
        <div class="fabu1" @click="auditData">确认更换</div>
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
        { name: "头条更换", url: "" }
      ],
      //公告内容
      gongnr: ""
    };
  },
  created() {
    //获取缓存
    this.gongnr = sessionStorage.getItem("gongnrData");
  },
  methods: {
    //提交修改
    auditData() {
      var data = {
        //公告内容
        notice: this.gongnr
      };
      this.api.apiPost(
        "/OperationManager/NoticeEdit",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            this.$message({
              showClose: true,
              message: "修改更换成功",
              type: "success",
              position: "bottom-right"
            });
            //保存缓存
            sessionStorage.setItem("gongnrData", this.gongnr);
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
  height: 830px;
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
.hzi {
  display: flex;
}
.ggnr {
  width: auto;
  height: 14px;
  font-size: 14px;
  color: #888888;
  margin-left: 148px;
  line-height: 122px;
}
.ggnr1 {
  margin-left: 20px;
  margin-top: 45px;
  margin-bottom: 50px;
  position: relative;
}
.ggnr2 {
  width: 380px;
}
.fabu {
  width: 160px;
  height: 40px;
  background: rgba(3, 122, 255, 1);
  border-radius: 8px;
  margin-left: 220px;
  position: relative;
}
.fabu1 {
  width: auto;
  height: 14px;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 40px;
}
</style>