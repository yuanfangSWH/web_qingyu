<template>
    <div class="content">
        <div class="addpage-box">
            <div class="add-title">用户编辑</div>
            <div class="zhiti">
             <div class="wxkg">
            <div class="wxidkg1">发用户头像</div>
            <div class="wxkg2">
            <img class="sslogo" src="/../../static/images/logo.png" />
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">用户名称</div>
            <div class="wxkg2">
            <el-input v-model="input" placeholder="" :disabled="true"></el-input>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">手机号码</div>
            <div class="wxkg2">
            <el-input v-model="input" placeholder="" :disabled="true"></el-input>
            </div>
            </div>
              <div class="wxkg">
            <div class="wxidkg1">用户等级</div>
            <div class="wxkg2">
            <div class="put">
            <div class="put1">普通用户</div>
            <div class="put2">
            <div class="put4">续费Vip</div>
            </div>
            <div class="put5">vip到期时间：2021-02-20 14:43:13</div>
            </div>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">状态</div>
            <div class="wxkg2">
             <el-radio-group v-model="radio">
           <el-radio :label="1">正常</el-radio>
           <el-radio :label="2">禁用1周</el-radio>
           <el-radio :label="3">禁用1个月</el-radio>
           <el-radio :label="4">永久封禁</el-radio>
           </el-radio-group>
            </div>
            </div>
            <div class="wxkg">
            <div class="wxidkg1">发布消息通知</div>
            <div class="wxkg2">
            <el-radio-group v-model="radio">
           <el-radio :label="1">开启</el-radio>
           <el-radio :label="2">禁用</el-radio>
           </el-radio-group>
            </div>
            </div>
            <div class="wxkg">
            <div class="wxidkg1">任务消息通知</div>
            <div class="wxkg2">
            <el-radio-group v-model="radio">
           <el-radio :label="1">开启</el-radio>
           <el-radio :label="2">禁用</el-radio>
           </el-radio-group>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">系统消息通知</div>
            <div class="wxkg2">
           <el-radio-group v-model="radio">
           <el-radio :label="1">开启</el-radio>
           <el-radio :label="2">禁用</el-radio>
           </el-radio-group>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">官方公告通知</div>
            <div class="wxkg2">
            <el-radio-group v-model="radio">
           <el-radio :label="1">开启</el-radio>
           <el-radio :label="2">禁用</el-radio>
           </el-radio-group>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">佣金账户余额</div>
            <div class="wxkg2">
            <div class="put">
            <div class="put1">120元</div>
            <div class="put2">
            <div class="put4">更变</div>
            </div>
            </div>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">发布账户余额</div>
            <div class="wxkg2">
            <div class="put">
            <div class="put1">180元</div>
            <div class="put2">
            <div class="put4">更变</div>
            </div>
            </div>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">注册时间</div>
            <div class="wxkg2">
            <div class="shijian">2020-3-10 14:00</div>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">最后一次登录时间</div>
            <div class="wxkg2">
           <div class="shijian">2020-4-10 14:00</div>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">用户设备唯一识别码</div>
            <div class="wxkg2">
           <div class="shijian">355672-05-245751-9</div>
            </div>
            </div>
             <div class="wxkg">
            <div class="wxidkg1">直推合伙人数量</div>
            <div class="wxkg2">
            <div class="shijian">300</div>
            </div>
            </div>
            <div class="wxkg">
            <div class="wxidkg1">越级合伙人数量</div>
            <div class="wxkg2">
           <div class="shijian">350</div>
            </div>
            </div>
            <div class="wxkg">
            <div class="wxidkg1">团队人数</div>
            <div class="wxkg2">
           <div class="shijian">200</div>
            </div>
            </div>
            <!-- 关系图 -->
            <div class="wxkg">
            <div class="wxidkg1">关系图</div>
            <div class="wxkg2">
            <div class="qy-gxt">
            <div class="gxt-fg">
             <img class="sslogo" src="/../../static/images/logo.png" />
            <div>
             <div class="gxt2">anglebaby</div>
             <div class="gxt2">Vip用户</div>
            </div>
            <!-- 分割线 -->
            <div class="gtx3"></div>
            </div>
            <div class="gxt-fg">
             <img class="sslogo" src="/../../static/images/logo.png" />
            <div>
             <div class="gxt2">刷量+我把</div>
             <div class="gxt2">普通用户</div>
            </div>
            <!-- 分割线 -->
            <div class="gtx3"></div>
            </div>
            <div class="gxt-fg">
             <img class="sslogo" src="/../../static/images/logo.png" />
            <div>
             <div class="gxt2">超级广告户</div>
             <div class="gxt2">Vip用户</div>
            </div>
            <!-- 分割线 -->
            </div>

            </div>
            </div>
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
.addpage-box{ width: calc(100% - 20px); background: #ffffff;margin-top: 20px; margin-left: 10px;height: 1100px; margin-bottom: 50px;}
.add-title{ width: 100%; border-bottom: 1px solid #E7E9EA; box-sizing: border-box; padding: 12px 20px; font-size:14px;font-family:PingFang-SC-Bold;font-weight:bold;color:rgba(0,0,0,1);}
.zhiti{margin-top: 20px;}
.wxkg{display: flex;}
/* 这个文字对齐在其他模块是一个一个来对齐的  */
.wxidkg1{
width:200px;height:14px;
text-align: right;
font-size:14px;
font-family:PingFang SC;font-weight:500;
color:rgba(136,136,136,1);
margin-left: 30px;
line-height: 50px;
}
.wxkg2{line-height: 50px;margin-left: 30px;}
.sslogo{
  width:70px;
  height:70px;
  border-radius:50%;
}
/* 用户升级Vip */
.put{display: flex;}
.put1{font-size:14px; color:rgba(16,16,16,1); font-family:PingFang SC;font-weight:500;}
.put2{
width:68px;
height:26px;
background:rgba(3,122,255,1);
border-radius:8px;
margin-left: 20px;
font-size:12px;
font-family:PingFang SC;
font-weight:500;
color:rgba(255,255,255,1);
margin-top: 12px;
}
.put4{
text-align: center;
margin-top: -11px;
}
.put5{
  font-size:14px; color:rgba(16,16,16,1); font-family:PingFang SC;font-weight:500;margin-left: 20px;
}
/* 时间 */
.shijian{
width:auto;
font-size:14px;
font-family:PingFang SC;
font-weight:500;
color:rgba(16,16,16,1);
}
/* 关系图 */
.qy-gxt{display: flex;}
.gxt{display: flex;}
.gxt2{
width:auto;
height:20px;
font-size:14px;
font-family:PingFang SC;
font-weight:500;
color:rgba(16,16,16,1);
}
.gtx3{
 width:1px;
height:60px;
background:rgba(242,242,242,1);
margin-left: 10px;
}
.gxt-fg{
  display: flex;
  margin-left: 20px;
}
</style>