<template>
  <div class="layer">
  <!-- 搜索模块 -->
  <div class="ssdht">
    <!-- 添加 -->
    <!-- 触发事件写这里 -->
   <div class="tianj1">
  <div class="tianj2">
     <router-link to="/tsszadd">
   <div class="tianj">添加推送</div>
     </router-link>
  </div>
  </div>
  </div>
  
  <!-- 使用中 -->
<!-- 列表 -->
    <div class="list-div">
        <div class="title">
          <div class="li">ID</div>
          <div class="li">主标题</div>
          <div class="li">副标题</div>
          <div class="li">推送时间</div>
          <div class="li">操作账号</div>
          <div class="li">状态</div>
        </div>
        <div class="title">
          <div class="li">001</div>
          <div class="li">今日推荐任务</div>
          <div class="li">注册拉新任务最高15元</div>
          <div class="li">2020-03-10 01:20:00</div>
          <div class="li">kefu001</div>
          <div class="li">
            <span class="li-abq1">已推送</span>
          </div>
          
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
.tianj1{
  display: flex;
}
.tianj2{
width:120px;
height:40px;
background:#037AFF;
border-radius:10px;
margin-left: 20px;
margin-top: 8px;
}
.tianj{
width:auto;
height:16px;
font-size:16px;
color:#ffffff;
text-align: center;
line-height: 40px;
}
/* 搜索 */
.s-input{
width:370px;
height:40px;
background:#ffffff;
border:1px solid rgba(231,233,234,1);
border-radius:20px 0px 0px 20px;
}
.sssr{float: right; margin-right: 100px; margin-top: -42px; position: relative;}
.sssr1{display: flex;}
.djss{width:90px;
height:43px;
background:rgba(3,122,255,1);
border-radius:0px 20px 20px 0px;}
.sslogo{
  width: 30px;height: 30px;
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
