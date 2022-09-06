<template>
  <div class="layer">
  <!-- 搜索模块 -->
  <div class="ssdht">
    <!-- 添加 -->
   <div class="tianj1">
  <div class="tianj2">
   <div class="tianj">添加任务分类</div>
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
          <div class="li">任务分类ID</div>
          <div class="li">任务分类名称</div>
          <div class="li">任务分类副标题</div>
          <div class="li">任务分类图标</div>
          <div class="li">最低发布单价</div>
          <div class="li">状态</div>
          <div class="li">操作</div>
        </div>
        <div class="title">
          <div class="li">001</div>
          <div class="li">下载注册</div>
          <div class="li">软件下载注册任务</div>
          <div class="li">
             <img  src="/../../static/images/rwfl.png" />
          </div>
          <div class="li">2元</div>
          <div class="li">使用中</div>
          <div class="li">
            <span class="li-abq1">编辑</span>
            <span class="li-abq2">删除</span>
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
.syz{display: flex; margin-left: 20px; margin-bottom: 20px; margin-top: 20px;}
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
