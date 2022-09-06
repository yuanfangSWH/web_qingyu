<template>
    <div class="content">
        <div class="addpage-box">
            <div class="add-title">敏感词设置</div>
            <div class="hzi">
             <div class="ggnr">屏蔽的关键词语</div>
              <div class="ggnr1">
              <el-input class="ggnr2" type="textarea" :autosize="{ minRows: 8, maxRows: 50}" placeholder="赌场，六合彩，加徽,薇芯,伽薇" v-model="textarea2"></el-input>
              </div>
            </div>
            <div class="sspb">
             <div class="sspb1">搜索结果过滤开关</div>
             <div class="sspb2">
             <el-radio v-model="radio" label="1">开</el-radio>
             <el-radio v-model="radio" label="2">关</el-radio>
             </div>
            </div>

              <div class="fabu">
              <div class="fabu1">发布</div>
              </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
       textarea2: '',
       radio: '',
    };
  }
};
</script>

<style scoped>
ul li{ list-style: none;}
.content{ background: #EBF1F4;}
.addpage-box{ width: calc(100% - 20px); background: #ffffff;margin-top: 20px; margin-left: 10px;height: 830px;}
.add-title{ width: 100%; border-bottom: 1px solid #E7E9EA; box-sizing: border-box; padding: 12px 20px; font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(0,0,0,1);}
.hzi{
  display: flex;
}
.ggnr{width:auto;height:14px;font-size:14px;color:#888888; margin-left: 148px;line-height: 122px;}
.ggnr1{
  margin-left: 20px; 
  margin-top: 45px;
  margin-bottom: 50px;
  position: relative;
}
.ggnr2{
  width: 380px;
}
.sspb{
  display: flex;
}
.sspb1{
width:112px;
height:14px;
font-size:14px;
font-family:PingFang SC;
font-weight:500;
color:rgba(136,136,136,1);
margin-left: 138px;
margin-bottom: 50px;
}
.sspb2{
  margin-left: 15px;
}
.fabu{
width:160px;
height:40px;
background:rgba(3,122,255,1);
border-radius:8px;
margin-left: 265px;
position: relative;
}
.fabu1{
width:auto;
height:14px;
font-size:14px;
color:rgba(255,255,255,1);
text-align: center;
line-height: 40px;
}

</style>