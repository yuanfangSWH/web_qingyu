<template>
 <div class="layer">
  <!-- 搜索模块 -->
  <div class="ssdht">
    <!-- 添加 -->
   <div class="tianj1">
  <div class="tianj2">
   <!-- <div class="tianj">Vip用户</div> -->
   <!-- 选择的时间 -->
   <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>
  </div>
   <!-- 搜索 -->
   <div class="ssk">
     <div class="ssbj">
    <img class="sslogo" src="/../../static/images/sousou.png" />
    <input class="s-input" type="text" placeholder="输入平台用户ID进行搜索" ></input>
    </div>
   </div>
     <!-- 点击搜索 -->
   <div class="djss">
     <div class="djss1">搜索</div>
   </div>
  </div>
  
  
  <!-- 使用中 -->
<!-- 列表 -->
    <div class="list-div">
        <div class="title">
          <div class="li">用户ID</div>
          <div class="li">用户信息</div>
          <div class="li">手机号</div>
          <div class="li">订单编号</div>
          <div class="li">到期时间</div>
          <div class="li">支付方式</div>
          <div class="li">购买确认时间</div>
          <div class="li">日活数</div>
          <div class="li">状态</div>
        </div>
        <div class="title">
         <div class="li">12345</div>
          <div class="li">李厘子</div>
          <div class="li">13877278538</div>
          <div class="li">3214523431231425</div>
          <div class="li">2021-02-20 (12个月)</div>
          <div class="li">微信</div>
          <div class="li">2020-02-20 14:43:13</div>
          <div class="li">300</div>
          <div class="li">使用中</div>
        </div>
        <!-- 分页 -->
        <div class="paging">
          <el-pagination
            background
            layout="prev, pager, next, jumper"
            :page-size="10"
            :total="totalCount"
            @current-change="jumpData"
          ></el-pagination>
        </div>
      </div>
       </div>
       
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.layer{width: auto;}

/* 搜索模块 */
.ssdht{
width:1660px;
height:56px;
background:rgba(255,255,255,1);
box-shadow:0px 4px 11px 1px rgba(248,248,248,1);
border-radius:10px;
margin-left: 20px;
margin-top: 20px;
margin-bottom: 11px;

}
/* 添加按钮 */
.tianj1{
  display: flex;
}
.tianj2{
width:120px;
height:40px;
/* background:#037AFF; */
border-radius:10px;
margin-left: 20px;
margin-top: 8px;
}
.tianj{
width:auto;
height:16px;
font-size:16px;
color:#000000;
text-align: center;
line-height: 40px;
}
/* 搜索 */
.ssk{
width:370px;
height:40px;
background:rgba(255,255,255,1);
border:1px solid rgba(231,233,234,1);
border-radius:20px 0px 0px 20px;
float: right; margin-right: 100px; margin-top: -42px; position: relative;
}
.sslogo{
 margin-top: 5px;
}
.ssbj{display: flex;}
/* 去掉input输入边框 */
.s-input{margin-top: 5px; width: 300px;border-top-style: none; border-left-style: none; border-right-style: none; border-bottom-style: none; outline:none;}
.djss{
width:90px;
height:40px;
background:rgba(3,122,255,1);
border-radius:0px 20px 20px 0px;
float: right;margin-top: -42px;margin-right: 10px;
}
.djss1{
 text-align: center;
font-size:16px;
font-family:PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
line-height: 40px;
}
/* 使用中 */
.syz{display: flex; margin-left: 20px; margin-bottom: 20px;}
.syz1{width:auto;height:16px;font-size:16px;color:rgba(3,122,255,1);}
.syz2{margin-left: 20px;}
.syz3{margin-left: 20px; color:rgba(136,136,136,1); font-size:16px;}
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
    height:auto;
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
    overflow:scroll;
    overflow: hidden;
  }
  .title .li { 
   flex: 1.2;
  }

  
</style>
