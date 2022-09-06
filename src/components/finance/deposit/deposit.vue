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
    <!-- 这里可以实现切换的效果没有写 -->
    <div class="syz">
      <div class="syz1" :class="{'wzxzcl':state==1}" @click="tab(1)">提现审核</div>
      <div class="syz2">|</div>
      <div class="syz3" :class="{'wzxzcl':state==2}" @click="tab(2)">提现成功</div>
      <div class="syz2">|</div>
      <div class="syz3" :class="{'wzxzcl':state==3}" @click="tab(3)">提现失败</div>
    </div>

    <!-- 列表 -->
    <div class="list-div">
      <div class="title">
        <!-- <div class="li">
          <el-button @click="setAllNo">全选/反选</el-button>
        </div> -->
        <div class="li">用户ID</div>
        <div class="li">用户昵称</div>
        <div class="li">提现金额(元)</div>
        <div class="li">手续费</div>
        <div class="li">提现到账金额</div>
        <div class="li">金额类型</div>
        <div class="li">提现时间</div>
        <div class="li">渠道</div>
        <div class="li" v-show="state==2">提现成功时间</div>
        <div class="li" v-show="state==1">操作</div>
      </div>
      <div class="title" v-for="(item,key) in totalData" :key="key">
        <!-- <div class="li">
          <input type="checkbox" name="love" v-model="groupData" :value="item.user_id" />
        </div> -->
        <div class="li">{{item.user_id}}</div>
        <div class="li">{{item.nickname}}</div>
        <div class="li">{{item.take_total_amount}}</div>
        <div class="li">{{item.poundage}}</div>
        <div class="li">{{item.take_amount}}</div>
        <div class="li"><span v-show="item.amount_type==1">发布余额</span><span v-show="item.amount_type==2">提现余额</span></div>
        <div class="li">{{item.create_at}}</div>
        <div class="li">微信</div>
        <div class="li" v-show="state==2">{{item.take_success_at}}</div>
        <div class="li" v-show="state==1">
          <span class="li-abq1" @click="tonguotk(1,item)">通过</span>
        </div>
      </div>
      <div class="paging">
        <!-- 全局分页组件 -->
        <Paging :totalCount="totalCount" @jumpData="jumpData" v-show="totalData!=''&&totalData!=null" ></Paging>
      </div>
    </div>
    <!-- 通用遮罩层 -->
    <div class="zhezc" v-show="blocking"></div>
    <div class="tankxg" v-show="juztk">
      <div class="biaotl">提现通过</div>
      <div class="wltw">确定通过“{{userTK.nickname}}”用户的提现吗？</div>
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
        { name: "提现管理", url: "" },
      ],
      //搜索关键字
      searchData: "",
      //分页
      page: 1,
      //分页总数据量
      totalCount: 10,
      //分类条件ID
      state: 1,
      //总数据
      totalData: [],
      //全选-选中的数据
      groupData: [],
      //弹框数据
      userTK: "",
      //遮罩层
      blocking: false,
      //弹框
      juztk: false
    };
  },
  //生命周期-页面初始化完成加载
  created() {
    this.loadingData();
  },
  methods: {
     //全选/全不选操作
    setAllNo() {
      //初始化数据
      this.groupData = [];
      var loves = document.getElementsByName("love");
      if (this.checkAll) {
        this.checkAll = false;
        for (var i = 0; i < loves.length; i++) {
          loves[i].checked = true;
          //数据添加
          this.groupData.push(loves[i].value);
        }
      } else {
        this.checkAll = true;
        //数据清空
        this.groupData = [];
        for (var i = 0; i < loves.length; i++) {
          loves[i].checked = false;
        }
      }
    },
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
      var data = {
        //是否已处理，1提现中2提现成功3失败
        state: this.state,
        //页码
        PageIndex: this.page,
        //页面大小，默认10
        PageCount: 10,
        //搜索关键字
        key: this.searchData,
      };
      this.api.apiPost(
        "/OperationManager/WithdRawal",
        "post",
        data,
        "",
        (status, code, res) => {
          if (status) {
            //总数据
            this.totalData = res.obj.TRC;
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
    //通过弹框显示/关闭
    tonguotk(e,data){
      if (e == 1) {
        this.userTK = data;
        this.blocking = true;
        this.juztk = true;
      } else {
        this.blocking = false;
        this.juztk = false;
      }
    },
    //提现通过
    tonguo(){
      var params = {
        //ID 
        take_id:this.userTK.Id,
      };
      this.api.apiPost(
        "/take/withdrawmoney",
        "post",
        "",
        params,
        (status, code, res) => {
          if (status) {
            //关闭弹框
            this.tonguotk(2);
            this.$message({
              showClose: true,
              message: "通过成功",
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
    //查看
    detailsTZ(id, clown) {
      this.$router.push({
        path: "/reportck",
        query: {
          id: id,
          clown: clown,
        },
      });
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
  color: rgba(136, 136, 136, 1);
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
  margin-top: 20px;
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
  cursor:pointer;
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
  cursor:pointer;
}
/* 通过弹框结束 */
</style>
