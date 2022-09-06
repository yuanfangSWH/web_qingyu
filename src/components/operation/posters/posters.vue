<template>
  <div class="layer">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>

    <!-- 搜索模块 -->
    <div class="ssdht">
      <!-- 添加 -->
      <div class="tianj1">
        <div class="tianj2">
          <el-button type="primary" @click="tianjiabj(1)" round>添加海报</el-button>
        </div>
      </div>
      <!-- 全局搜索组件 -->
      <!-- <Search @search="search"></Search> -->
    </div>

    <!-- 列表 -->
    <div class="list-div">
      <div class="title">
        <div class="li">ID</div>
        <div class="li">海报图片</div>
        <div class="li">左偏移量</div>
        <div class="li">上偏移量</div>
        <div class="li">创建日期</div>
        <div class="li">操作</div>
      </div>
      <div class="title" v-for="(item,key) in gongData" :key="key">
        <div class="li">{{item.Id}}</div>
        <div class="li">
          <el-image style="width: 80px; height: 50px;padding-top: 6px;" :src="item.PosterUrl"></el-image>
        </div>
        <div class="li">{{item.LeftOffset}}</div>
        <div class="li">{{item.TopOffset}}</div>
        <div class="li">{{item.CreateTime}}</div>
        <div class="li">
          <span class="li-abq1" style="color:#037AFF;" @click="tianjiabj(2,item)">编辑</span>
          <span class="li-abq1" style="margin-left: 10px;" @click="tonguotk(1,item)">删除</span>
        </div>
      </div>
      <div class="paging">
        <!-- 全局分页组件 -->
        <Paging :totalCount="totalCount" @jumpData="jumpData" v-show="gongData!=''&&gongData!=null"></Paging>
      </div>
    </div>
    <!-- 通用遮罩层 -->
    <div class="zhezc" v-show="blocking"></div>
    <div class="tankxg" v-show="juztk">
      <div class="biaotl">删除海报</div>
      <div class="wltw">确定删除“{{userTK.Id}}”吗？</div>
      <div class="anntl">
        <div class="ant1" @click="tonguotk(2)">取消</div>
        <div class="ant2" @click="tonguo()">确定</div>
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
        { name: "海报列表", url: "" },
      ],
      //搜索关键字
      searchData: "",
      //分页
      page: 1,
      //分页总数据量
      totalCount: 10,
      //总数据
      gongData: [],
      //弹框数据
      userTK: "",
      //遮罩层
      blocking: false,
      //弹框
      juztk: false,
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
      };
      this.api.apiPost(
        "/OperationManager/PoseterList",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            //总数据
            this.gongData = res.obj.arr;
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
      this.page = 1;
      this.loadingData();
    },
    //删除弹框显示/关闭
    tonguotk(e, data) {
      if (e == 1) {
        this.userTK = data;
        this.blocking = true;
        this.juztk = true;
      } else {
        this.blocking = false;
        this.juztk = false;
      }
    },
    //删除
    tonguo() {
      var data = {
        //ID
        Id: this.userTK.Id,
      };
      this.api.apiPost(
        "/OperationManager/DelPoseter",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            //关闭弹框
            this.tonguotk(2);
            this.$message({
              showClose: true,
              message: "删除成功",
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
    //添加/编辑
    tianjiabj(key, data) {
      if (key == 1) {
        this.$router.push({
          path: "/posterstjxg",
          query: {
            key: key,
          },
        });
      } else {
        this.$store.commit('haiStorage', data)
        this.$router.push({
          path: "/posterstjxg",
          query: {
            key: key
          },
        });
      }
    },
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
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 8px;
}
.tianj {
  width: auto;
  height: 16px;
  font-size: 16px;
  color: #ffffff;
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
  color: rgba(136, 136, 136, 1);
}
.syz2 {
  margin-left: 20px;
}
.syz3 {
  margin-left: 20px;
  color: rgba(136, 136, 136, 1);
  font-size: 16px;
}
.wzxzcl {
  color: rgba(3, 122, 255, 1);
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
/* 通过弹框 */
.tankxg {
  width: 400px;
  height: 240px;
  background-color: #fff;
  border-radius: 10px 10px 10px 10px;
  z-index: 40;
  position: fixed;
  top: 50%;
  margin-top: -120px;
  left: 50%;
  margin-left: -200px;
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
.anntl {
  width: 240px;
  height: 40px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
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
  cursor: pointer;
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
  cursor: pointer;
}
/* 通过弹框结束 */
</style>
