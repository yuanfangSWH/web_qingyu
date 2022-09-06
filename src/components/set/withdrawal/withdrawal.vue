<template>
    <div class="content">
        <div class="addpage-box">
            <div class="add-title">提现管理</div>
            <div class="zhiti">
            <div class="wxkg">
            <div class="wxkg1">提现开关</div>
            <div class="wxkg2">
             <el-radio v-model="radio" label="1">开</el-radio>
             <el-radio v-model="radio" label="2">关</el-radio>
            </div>
            </div>
             <div class="wxkg">
            <div class="zfkg1">禁止提现的提示</div>
            <div class="wxkg2">
            <el-input v-model="input" type="text" placeholder="提现系统正在维护，请稍后再来"></el-input>
            </div>
            </div>

            <!-- 这里设置添加的金额 不知道效果或添加的样子所以没有写 -->
            <div class="wxkg">
            <div class="wxidkg1">佣金提现金额设置</div>
            <div class="wxkg2">
            <el-input class="tixsz" v-model="input" placeholder=""></el-input>
            <el-input class="tixsz1" v-model="input" placeholder=""></el-input>
            <el-input class="tixsz1" v-model="input" placeholder=""></el-input>
            <el-input class="tixsz1" v-model="input" placeholder=""></el-input>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">发布提现金额设置</div>
            <div class="wxkg2">
            <el-input class="tixsz" v-model="input" placeholder=""></el-input>
            <el-input class="tixsz1" v-model="input" placeholder=""></el-input>
            <el-input class="tixsz1" v-model="input" placeholder=""></el-input>
            <el-input class="tixsz1" v-model="input" placeholder=""></el-input>
            </div>
            </div>



             <div class="wxkg">
            <div class="alshkg1">发布提现金额设置</div>
            <div class="wxkg2">
            <el-input class="xiaok" v-model="input" placeholder=""></el-input><div class="fhao">%</div>
            </div>
            </div>
              <div class="wxkg">
            <div class="wxappshkg1">提现需人工审核</div>
            <div class="wxkg2">
            <el-input class="xiaok" v-model="input" placeholder=""></el-input><div class="fhao">元</div>
            </div>
            </div>
            <!-- 保存 -->
            <div class="baoc">
            <div class="baoc1">保存</div>
            </div>
          


             
            </div> 
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        radio: '1',
        input: '',
    };
  }
};
</script>

<style scoped>
ul li{ list-style: none;}
.content{ background: #EBF1F4;}
.addpage-box{ width: calc(100% - 20px); background: #ffffff;margin-top: 20px; margin-left: 10px;height: 830px;}
.add-title{ width: 100%; border-bottom: 1px solid #E7E9EA; box-sizing: border-box; padding: 12px 20px; font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(0,0,0,1);}
.zhiti{margin-top: 50px;}
.wxkg{display: flex;}
.wxkg1{width:auto;height:14px;font-size:14px;font-family:PingFang SC;font-weight:500;color:rgba(136,136,136,1);margin-left: 130px;line-height: 50px;}
.zfkg1{width:auto;height:14px;font-size:14px;font-family:PingFang SC;font-weight:500;color:rgba(136,136,136,1);margin-left: 88px;line-height: 50px;}
.wxidkg1{width:auto;height:14px;font-size:14px;font-family:PingFang SC;font-weight:500;color:rgba(136,136,136,1);margin-left: 75px;line-height: 50px;}
.wxshkg1{width:auto;height:14px;font-size:14px;font-family:PingFang SC;font-weight:500;color:rgba(136,136,136,1);margin-left: 88px;line-height: 50px;}
.alshkg1{width:auto;height:14px;font-size:14px;font-family:PingFang SC;font-weight:500;color:rgba(136,136,136,1);margin-left: 74px;line-height: 50px;}
.wxappshkg1{width:auto;height:14px;font-size:14px;font-family:PingFang SC;font-weight:500;color:rgba(136,136,136,1);margin-left: 88px;line-height: 50px;}
.wxkg2{line-height: 50px;margin-left: 30px;display: flex;margin-bottom: 20px;}
.baoc{
width:160px;
height:40px;
background:rgba(3,122,255,1);
border-radius:8px;
font-size:14px;
color: #FFFFFF;
line-height: 40px;
text-align: center;
margin-top: 50px;
margin-left: 210px;
}
.baoc1{
  text-align: center;
}
.tixsz{
  width: 50px; 
}
.tixsz1{
  width: 50px;
  margin-left: 20px;
}
.xiaok{
  width: 80px;
  height: 36px;
}
.fhao{
width:auto;
height:12px;
font-size:14px;
font-family:PingFang SC;
font-weight:500;
color:rgba(136,136,136,1);
margin-left: 20px;
}


</style>