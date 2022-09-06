<template>
    <div class="content">
        <div class="addpage-box">
            <div class="add-title">域名管理</div>
            <div class="hzi">
             <div class="ggnr">分享域名</div>
              <div class="ggnr1">
              <el-input class="ggnr2" type="textarea" :autosize="{ minRows: 5, maxRows: 50}" placeholder="请输入内容" v-model="textarea2"></el-input>
              </div>
            </div>
         <div class="hzi">
             <div class="ggnrkg">快站开关</div>
              <div class="ggnr1">
                 <el-radio v-model="radio" label="1">开</el-radio>
                 <el-radio v-model="radio" label="2">关</el-radio>
              </div>
            </div>

            <div class="hzi">
             <div class="ggnr">快站域名</div>
              <div class="ggnr1">
              <el-input class="ggnr2" type="textarea" :autosize="{ minRows: 5, maxRows: 50}" placeholder="请输入内容" v-model="textarea2"></el-input>
              </div>
            </div>
            
            <div class="hzi">
             <div class="ggnrkg">提现开关</div>
              <div class="ggnr1">
                 <el-radio v-model="radio" label="1">开</el-radio>
                 <el-radio v-model="radio" label="2">关</el-radio>
              </div>
            </div>

            <div class="hzi">
             <div class="ggnryu">JS注入内容</div>
              <div class="ggnr1">
              <el-input class="ggnr2" type="textarea" :autosize="{ minRows: 5, maxRows: 50}" placeholder="JS注入内容" v-model="textarea2"></el-input>
              </div>
            </div>
            <div class="hzi">
             <div class="ggnryu">注入JS域名</div>
              <div class="ggnr1">
              <el-input class="ggnr2" type="textarea" :autosize="{ minRows: 5, maxRows: 50}" placeholder="注入JS域名" v-model="textarea2"></el-input>
              </div>
            </div>
            <div class="hzi">
             <div class="ggnryu">注入JS域名</div>
              <div class="ggnr1">
              <el-input class="ggnr2" type="textarea" :autosize="{ minRows: 5, maxRows: 50}" placeholder="注入JS域名" v-model="textarea2"></el-input>
              </div>
            </div>

              <div class="fabu">
              <div class="fabu1">保存</div>
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
.addpage-box{ width: calc(100% - 20px); background: #ffffff;margin-top: 20px; margin-left: 10px;height: 850px;}
.add-title{ width: 100%; border-bottom: 1px solid #E7E9EA; box-sizing: border-box; padding: 12px 20px; font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(0,0,0,1);}
.hzi{
  display: flex;
}
.ggnr{width:auto;height:14px;font-size:14px;color:#888888; margin-left: 148px;line-height: 80px;}
.ggnryu{width:auto;height:14px;font-size:14px;color:#888888; margin-left: 132px;line-height: 80px;}
.ggnrkg{width:auto;height:14px;font-size:14px;color:#888888; margin-left: 148px;line-height: 42px;}
.ggnr1{
  margin-left: 20px; 
  margin-top: 10px;
  margin-bottom: 5px;
  position: relative;
}
.ggnr2{
  width: 380px;
}
.fabu{
width:160px;
height:40px;
background:rgba(3,122,255,1);
border-radius:8px;
margin-left: 220px;
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