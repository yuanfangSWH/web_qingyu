<template>
  <div class="layer">
    <!-- 全局导航组件 -->
    <Navigation v-bind:guide="guide"></Navigation>
    <!-- 搜索模块 -->
    <div class="ssdht">
      <!-- 添加 -->
      <div class="tianj1">
        <div class="tianj2">
          <div class="tianj">任务分类</div>
        </div>
      </div>
      <!-- 全局搜索组件 -->
      <Search @search="search"></Search>
      <div class="hex"></div>
      <!-- 任务分类在这里 -->
      <div class="rwfl">
        <div class="rwfl-1">
          <div class="rwfl-3" :class="{'rwfl-2':state==0}" @click="tab(0)">全部</div>
          <div class="rwfl-3" :class="{'rwfl-2':state==1}" @click="tab(1)">下载注册</div>
          <div class="rwfl-3" :class="{'rwfl-2':state==2}" @click="tab(2)">砍价红包</div>
          <div class="rwfl-3" :class="{'rwfl-2':state==3}" @click="tab(3)">关注投票</div>
          <div class="rwfl-3" :class="{'rwfl-2':state==4}" @click="tab(4)">分享转发</div>
          <div class="rwfl-3" :class="{'rwfl-2':state==5}" @click="tab(5)">电商任务</div>
          <div class="rwfl-3" :class="{'rwfl-2':state==6}" @click="tab(6)">多天任务</div>
          <div class="rwfl-3" :class="{'rwfl-2':state==7}" @click="tab(7)">高价任务</div>
          <div class="rwfl-3" :class="{'rwfl-2':state==8}" @click="tab(8)">其他任务</div>
        </div>
      </div>
    </div>
    <!-- 用户任务审核  只写了单个样式 css没有写获取数据之后的排版-->
    <div class="yhsh">
      <!-- 这里面开始算是一个模块的内容 这里的东西只是布局 任务提示下面的地方都是写si的 -->
      <div class="yhsh-1" v-for="(item,key) in totalData" :key="key">
        <div class="yhtx">
          <img class="yhtx-1" :src="item.HeadImg" />
        </div>
        <div class="yhmz">{{item.TaskTitle}}</div>
        <div class="rebq">
          <div class="rebq-1">{{item.TaskType}}</div>
          <div class="rebq-2">{{item.AuditPeriod}}小时审核</div>
        </div>
        <div class="rets">
          <div class="rets-1">任务单价</div>
          <div class="rets-2">任务数量</div>
          <div class="rets-2">剩余数量</div>
        </div>
        <div class="redj">
          <div class="redj-1">{{item.TaskPrice}}元</div>
          <div class="redj-2">{{item.TaskCount}}个</div>
          <div class="redj-2">{{item.RemainCount}}个</div>
        </div>
        <div class="wtmdxxx"></div>
        <div class="shh" @click="detailsTZ(item.Id)">查看</div>
      </div>
    </div>

    <!-- 全局分页组件 -->
    <Paging :totalCount="totalCount" @jumpData="jumpData" v-show="totalData!=''&&totalData!=null" ></Paging>
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
        { name: "已结束", url: "" }
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
      totalData: []
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
        //1待审核，2进行中，3已结束，4被投诉，5用户投诉商家，6商家投诉用户
        stateid: 3,
        //1.下载注册 2.砍价红包 3.关注投票 4.分享转发 5.电商任务 6.多天任务 7.高价任务 8.分享转发
        typeid: this.state,
        //页码
        pageindex: this.page,
        //页面大小，默认10
        pagecount: 10,
        //搜索关键字
        key: this.searchData
      };
      this.api.apiPost(
        "/TaskManager/GetTaskListScreen",
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
        path: "/finishck",
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
  height: 136px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 11px 1px rgba(248, 248, 248, 1);
  border-radius: 10px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 11px;
}
/* 横线 */
.hex {
  width: 1620px;
  height: 1px;
  background: rgba(242, 242, 242, 1);
  border-radius: 1px 1px 0px 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
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

/* 任务分类 */
.rwfl {
  display: flex;
}
.rwfl-1 {
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
}

.rwfl-3 {
  width: 92px;
  height: 32px;
  background: rgba(234, 234, 234, 1);
  border-radius: 6px;
  margin-left: 30px;
  color: #aaaaaa;
  line-height: 32px;
  text-align: center;
}
.rwfl-2 {
  width: 92px;
  height: 32px;
  background: rgba(3, 122, 255, 1);
  border-radius: 6px;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 32px;
}
/* 用户审核模块排版 */
.yhsh {
  display: flex;
  flex-wrap: wrap;
  width: 1660px;
}
.yhsh-1 {
  width: 300px;
  height: 308px;
  background: #ffffff;
  box-shadow: 0px 4px 11px 1px rgba(248, 248, 248, 1);
  border-radius: 10px;
  margin-left: 30px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}

/* 用户审核模块框内信息 */
.yhtx {
  display: flex;
}
.yhtx-1 {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.yhmz {
  text-align: center;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(16, 16, 16, 1);
  margin-bottom: 20px;
}
.rebq {
  display: flex;
  margin-bottom: 20px;
}
.rebq-1 {
  width: 90px;
  height: 30px;
  background: rgba(234, 234, 234, 1);
  border-radius: 15px;
  /* margin-left: auto; margin-right: auto; */
  margin-left: 50px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  color: #aaaaaa;
}
.rebq-2 {
  width: 90px;
  height: 30px;
  background: rgba(234, 234, 234, 1);
  border-radius: 15px;
  /* margin-left: auto; margin-right: auto; */
  margin-left: 20px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  color: #aaaaaa;
}
.rets {
  display: flex;
  margin-bottom: 10px;
}
.rets-1 {
  width: auto;
  height: 14px;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  font-family: PingFang SC;
  font-weight: 500;
  margin-left: 35px;
}
.rets-2 {
  width: auto;
  height: 14px;
  font-size: 14px;
  color: rgba(0, 0, 0, 1);
  font-family: PingFang SC;
  font-weight: 500;
  margin-left: 30px;
}
.redj {
  display: flex;
}

/* 这里是任务数量的css具体数据的拉长没有调 */
.redj-1 {
  width: auto;
  height: 15px;
  font-size: 20px;
  font-family: DIN;
  font-weight: bold;
  color: rgba(255, 167, 74, 1);
  margin-left: 35px;
}
.redj-2 {
  width: auto;
  height: 15px;
  font-size: 20px;
  font-weight: bold;
  color: rgba(255, 167, 74, 1);
  margin-left: 30px;
}
.shh {
  width: auto;
  height: 46px;
  line-height: 46px;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(170, 170, 170, 1);
  text-align: center;
}
.shh:hover {
  background-color: #037aff;
  color: #ffffff;
}
.wtmdxxx {
  width: 100%;
  height: 1px;
  background-color: #ededed;
  margin-top: 24px;
}
</style>
