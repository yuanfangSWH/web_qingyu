<template>
  <div class="layer">
  <!-- 搜索模块 -->
  <div class="ssdht">
    <!-- 添加 -->
   
   <div class="tianj1">
     <!-- 暂时用这个超链接 -->
   <router-link to="/activityadd">
  <div class="tianj2">
   <div class="tianj">创建活动</div>
  </div>
   </router-link>
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
  <div class="syz">
    <div class="syz1">使用中</div>
    <div class="syz2">|</div>
    <div class="syz3">回收站</div>
  </div>

<!-- 列表 -->
    <div class="list-div">
        <div class="title">
          <div class="li">图片ID</div>
          <div class="li">素材</div>
          <div class="li">描述</div>
          <div class="li">活动时间</div>
          <div class="li">排序</div>
          <div class="li">状态</div>
          <div class="li">操作</div>
        </div>
        <div class="title">
          <div class="li">115</div>
          <div class="li">
             <!-- <img :src="item.poster_url"/> -->
             <img  src="/../../static/images/shili.png" />
          </div>
          <div class="li">新人红包奖励</div>
          <div class="li">2020-03-10 至 2020-04-10</div>
          <div class="li">001</div>
          <div class="li">已结束</div>
          <div class="li">
            <span class="li-abq1">上线</span>
          </div>
          
        </div>
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
    return {
      //导航组
      guide: [
        { name: "首页", url: "/" },
        { name: "待审核", url: "" }
      ],
      //搜索关键字
      searchData:"",
      //搜索提示语
      searchTips:"输入平台用户ID进行搜索",
      //分页
      page: 1,
      //分页总数据量
      totalCount: 10,
      //分类条件ID
      state:0,
      //总数据
      totalData: []
    };
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
