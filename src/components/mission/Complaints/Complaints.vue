<template>
  <div class="layer">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>
    <!-- 搜索模块 -->
    <div class="ssdht">
      <!-- 添加 -->
      <div class="tianj1">
        <div class="tianj2">
          <div class="tianj"></div>
        </div>
      </div>
      <!-- 全局搜索组件 -->
      <Search @search="search"></Search>
    </div>
    <!-- 使用中 -->
    <div class="syz">
      <div class="syz1" :class="{'wzxzcl':state==0}" @click="tab(0)">未处理</div>
      <div class="syz2">|</div>
      <div class="syz3" :class="{'wzxzcl':state==1}" @click="tab(1)">已处理</div>
    </div>

    <!-- 列表 -->
    <div class="list-div">
      <div class="title">
        <div class="li">做单用户ID</div>
        <div class="li">做单用户名称</div>
        <div class="li">做单用户所执行的任务名称</div>
        <div class="li">被投诉商家ID</div>
        <div class="li">被投诉商家名称</div>
        <div class="li">被投诉理由</div>
        <div class="li">被投诉时间</div>
        <div class="li">操作</div>
      </div>
      <div class="title" v-for="(item,key) in totalData" :key="key">
        <div class="li">{{item.ByReportId}}</div>
        <div class="li">{{item.ByReportNickName}}</div>
        <div class="li">{{item.ByReportTaskTitle}}</div>
        <div class="li">{{item.ReportId}}</div>
        <div class="li">{{item.ReportNickName}}</div>
        <div class="li">{{item.ReportBec}}</div>
        <div class="li">{{item.ReportTime}}</div>
        <div class="li">
            <span class="li-abq1" v-show="state==0" @click="detailsTZ(item.TaskReceiveId)">处理</span>
            <span class="li-abq1" v-show="state==1" @click="detailsTZ(item.TaskReceiveId)">查看</span>
        </div>
      </div>
      <div class="pagingdiv">
        <!-- 全局分页组件 -->
        <Paging :totalCount="totalCount" @jumpData="jumpData" v-show="totalData!=''&&totalData!=null" ></Paging>
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
        { name: "用户举报商家", url: "" }
      ],
      //搜索关键字
      searchData: "",
      //分页
      page: 1,
      //分页总数据量
      totalCount: 10,
      //分类条件ID
      state: 0,
      //总数据
      totalData: [],
      //分类条件2
      state2: 0
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
        setTimeout(function() {
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
        setTimeout(function() {
          //关闭加载框
          loadingInstance.close();
        }, 300);
      }
    },
    //加载页面数据
    loadingData() {
      var data = {
        //0用户投诉商家，1商家投诉用户
        stateid:0,
        //是否已处理，1已处理 0未处理
        ishead:this.state,
        //页码
        pageindex: this.page,
        //页面大小，默认10
        pagecount: 10,
        //搜索关键字
        key: this.searchData
      };
      this.api.apiPost(
        "/TaskManager/UserOrStoreReport",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            //总数据
            this.totalData = res.obj.arr;
            //总列数
            this.totalCount = res.obj.count;
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
    //查看
    detailsTZ(id) {
      this.$router.push({
        path: "/Complaintsck",
        query: {
          id: id
        }
      });
    }
  }
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
  color: #000000;
  text-align: center;
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
.pagingdiv {
  padding-top: 20px;
}
.li-abq1{
  color: #037AFF;
}
</style>
