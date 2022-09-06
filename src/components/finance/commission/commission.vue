<template>
  <div class="layer">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>

    <!-- 搜索模块 -->
    <div class="ssdht">
      <!-- 添加 -->
      <div class="tianj1">
        <div class="tianj2">
          <el-date-picker
            v-model="value"
            type="month"
            placeholder="选择年月"
            value-format="yyyy-MM-dd"
            @change="loadingData"
          ></el-date-picker>
        </div>
      </div>
      <!-- 全局搜索组件 -->
      <Search @search="search"></Search>
    </div>

    <!-- 使用中 -->
    <div class="syz">
      <div class="syz1" :class="{'wzxzcl':state==0}" @click="tab(0)">未结算</div>
      <div class="syz2">|</div>
      <div class="syz3" :class="{'wzxzcl':state==1}" @click="tab(1)">已结算</div>
    </div>

    <!-- 列表 -->
    <div class="list-div">
      <div class="title">
        <div class="li">用户ID</div>
        <div class="li">用户信息</div>
        <div class="li">手机号</div>
        <div class="li">收入时间</div>
        <div class="li">团队总业绩(元)</div>
        <div class="li">团队等级</div>
        <div class="li">本月结算佣金(元)</div>
        <div class="li" v-show="state==0">操作</div>
      </div>
      <div class="title" v-for="(item,key) in tuanData" :key="key">
        <div class="li">{{item.UserId}}</div>
        <div class="li">{{item.NickName}}</div>
        <div class="li">{{item.Mobile}}</div>
        <div class="li">{{item.GradeTime}}</div>
        <div class="li">{{item.Grade}}</div>
        <div class="li">{{item.GradeLevel}}</div>
        <div class="li">{{item.ReturnGrade}}</div>
        <div class="li" v-show="state==0">
          <span class="li-abq1" @click="tonguotk(1,item)">结算</span>
        </div>
      </div>
      <div class="paging">
        <!-- 全局分页组件 -->
        <Paging :totalCount="totalCount" @jumpData="jumpData" v-show="tuanData!=''&&tuanData!=null"></Paging>
      </div>
    </div>
    <!-- 通用遮罩层 -->
    <div class="zhezc" v-show="blocking"></div>
    <div class="tankxg" v-show="juztk">
      <div class="biaotl">提现通过</div>
      <div class="wltw">确定通过“{{userTK.NickName}}”用户的结算吗？</div>
      <div class="anntl">
        <div class="ant1" @click="tonguotk(2)">取消</div>
        <div class="ant2" @click="tonguo()">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
var d = new Date();
var value = d.getFullYear() + "-" + (d.getMonth() + 1) + "-01";
import { Loading } from "element-ui";
export default {
  data() {
    return {
      //导航组
      guide: [
        { name: "首页", url: "/" },
        { name: "团队佣金", url: "" },
      ],
      //日期
      value: value,
      //搜索关键字
      searchData: "",
      //分页
      page: 1,
      //分页总数据量
      totalCount: 10,
      //总数据
      tuanData: [],
      //弹框数据
      userTK: "",
      //遮罩层
      blocking: false,
      //弹框
      juztk: false,
      //分类条件ID
      state: 0,
    };
  },
  //生命周期-页面初始化完成加载
  created() {
    this.loadingData();
  },
  methods: {
    //切换状态
    tab(value) {
      if (this.state == value) {
        //加载框
        let loadingInstance = Loading.service();
        setTimeout(function () {
          //关闭加载框
          loadingInstance.close();
        }, 300);
      } else {
        this.state = value;
        //初始化分页
        this.page = 1;
        this.loadingData();
        //加载框
        let loadingInstance = Loading.service();
        setTimeout(function () {
          //关闭加载框
          loadingInstance.close();
        }, 300);
      }
    },
    //加载页面数据
    loadingData() {
      var e = this.value.split("-");
      var i = e[1];
      if (i.length == 1) {
        i = "0" + i;
      }
      var rq = e[0] + i;
      var data = {
        //页码
        pageindex: this.page,
        //页面大小，默认10
        pagecount: 10,
        //0未结算 1已结束
        StateId: this.state,
        //日期
        TheMonth: rq,
      };
      this.api.apiPost(
        "/Take/TeamRecord",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            //总数据
            this.tuanData = res.obj.data;
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
    //结算弹框显示/关闭
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
    //结算通过
    tonguo() {
      var params = {
        //ID
        TeamRecordId: this.userTK.Id,
      };
      this.api.apiPost(
        "/Take/TeamRecordHead",
        "post",
        "",
        params,
        (status, code, res) => {
          if (status) {
            //关闭弹框
            this.tonguotk(2);
            this.$message({
              showClose: true,
              message: "结算成功",
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
