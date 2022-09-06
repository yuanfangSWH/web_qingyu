<template>
    <div class="content">
        <div class="addpage-box">
            <div class="add-title">Vip设置</div>
            <div class="zhiti">
              <div class="wxkg">
            <div class="wxappshkg1">Vip1个月价格</div>
            <div class="wxkg2">
            <el-input class="xiaok" v-model="input" placeholder=""></el-input><div class="fhao">元</div>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxappshkg2">Vip3个月价格</div>
            <div class="wxkg2">
            <el-input class="xiaok" v-model="input" placeholder=""></el-input><div class="fhao">元</div>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxappshkg3">Vip12个月价格</div>
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
/* 这里是inpu的调整 */
.wxappshkg1{width:auto;height:14px;font-size:14px;font-family:PingFang SC;font-weight:500;color:rgba(136,136,136,1);margin-left: 161px;line-height: 50px;}
.wxappshkg2{width:auto;height:14px;font-size:14px;font-family:PingFang SC;font-weight:500;color:rgba(136,136,136,1);margin-left: 161px;line-height: 50px;}
.wxappshkg3{width:auto;height:14px;font-size:14px;font-family:PingFang SC;font-weight:500;color:rgba(136,136,136,1);margin-left: 153px;line-height: 50px;}
.wxkg2{line-height: 50px;margin-left: 30px; display: flex; margin-bottom: 10px;}
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