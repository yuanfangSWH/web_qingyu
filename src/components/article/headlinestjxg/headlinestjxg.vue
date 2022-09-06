<template>
  <div class="content">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>
    <div class="addpage-box">
      <div class="add-title">
        <span v-if="btnr==1">公告添加</span>
        <span v-else>公告编辑</span>
      </div>
      <div class="hzi">
        <div class="ggnr">公告标题</div>
        <div class="ggnr1">
          <el-input v-model="NoticeTitle" placeholder="请输入标题"></el-input>
        </div>
      </div>
      <div class="hzi">
        <div class="ggnr">公告图片</div>
        <div class="ggnr1">
          <el-upload
            class="avatar-uploader"
            action="http://king2.rong298.cn/Sys/UploadImg"
            :headers="tokenData"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-error="handleFailure"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="NoticeStreamer" :src="NoticeStreamer" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="hzi">
        <div class="ggnr">公告内容</div>
        <div class="ggnr1">
          <el-input
            class="ggnr2"
            type="textarea"
            :autosize="{ minRows: 8, maxRows: 50}"
            placeholder="请输入内容"
            v-model="NoticeCentent"
          ></el-input>
        </div>
      </div>

      <div class="fabu">
        <el-button type="primary" class="tian" @click="validation"  v-if="btnr==1">添加</el-button>
        <el-button type="primary" class="tian" @click="bianji" v-else>保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
  data() {
    return {
      //标题内容
      btnr: 1,
      //导航组
      guide: [
        { name: "首页", url: "/" },
        { name: "公告列表", url: "/headlines" }
      ],
      //当前ID
      Gid: "",
      //标题
      NoticeTitle: "",
      //内容
      NoticeCentent: "",
      //图片
      NoticeStreamer: "",
      //创建日期
      CreateTime: "",
      //token
      tokenData: "",
    };
  },
  //生命周期-页面初始化完成加载
  created() {
    
    this.tokenData = { token: sessionStorage.getItem("tokenData") };
    var key = this.$route.query.key;
    if (key == 1) {
      this.btnr = 1;
      this.guide.push({ name: "公告添加", url: "" });
    } else {
      this.btnr = 2;
      this.guide.push({ name: "公告编辑", url: "" });
      var data = this.$store.state.gongao;
      //ID
      this.Gid = data.Id;
      //标题
      this.NoticeTitle = data.NoticeTitle;
      //内容
      this.NoticeCentent = data.NoticeCentent;
      //图片
      this.NoticeStreamer = data.NoticeStreamer;
      //创建日期
      this.CreateTime = data.CreateTime;
    }
  },
  methods: {
    //添加验证
    validation() {
      if (this.NoticeTitle == "") {
        this.$message({
          showClose: true,
          message: "标题必填！",
          type: "error",
          position: "bottom-right",
        });
      } else if (this.NoticeCentent == "") {
        this.$message({
          showClose: true,
          message: "内容必填！",
          type: "error",
          position: "bottom-right",
        });
      } else if (this.NoticeStreamer == "") {
        this.$message({
          showClose: true,
          message: "图片必须上传一张！",
          type: "error",
          position: "bottom-right",
        });
      }else{
        this.tianjia();
      }
    },
    //添加
    tianjia() {
      var data = {
        //标题
        NoticeTitle: this.NoticeTitle,
        //内容
        NoticeCentent: this.NoticeCentent,
        //公告图片
        NoticeStreamer: this.NoticeStreamer,
      };
      this.api.apiPost(
        "/OperationManager/SysNoticeAdd",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            this.$message({
              showClose: true,
              message: "添加成功",
              type: "success",
              position: "bottom-right",
            });
            this.$router.push({
              path: "/headlines",
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
    //保存
    bianji() {
      var data = {
        //ID
        Id: this.Gid,
        //标题
        NoticeTitle: this.NoticeTitle,
        //内容
        NoticeCentent: this.NoticeCentent,
        //公告图片
        NoticeStreamer: this.NoticeStreamer,
        //创建日期
        CreateTime: this.CreateTime,
      };
      this.api.apiPost(
        "/OperationManager/SysNoticeEdit",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            this.$message({
              showClose: true,
              message: "保存成功",
              type: "success",
              position: "bottom-right",
            });
            this.$router.push({
              path: "/headlines",
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
    //文件上传成功时的钩子
    handleAvatarSuccess(res, file) {
      this.NoticeStreamer = res.obj;
    },
    //文件上传失败时的钩子
    handleFailure() {
      this.NoticeStreamer = "";
    },
    //文件检测函数
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 5;

      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 5MB!");
      }
      return isLt2M;
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
  border-radius: 8px;
  margin-left: 220px;
  position: relative;
}
.tian{
  width: 160px;
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
