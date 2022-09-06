<template>
  <div>
    <div class="heard">
      <div class="daoh">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            v-for="(item,key) in guide"
            :key="key"
            :to="{ path: item.url }"
          >{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    //导航组
    guide: ""
  },
  methods: {
  }
};
</script>

<style scoped>
/* 顶部 */
.choose {
  font-weight: bold;
}
.heard {
  width: 100%;
  height: 54px;
  background: #ffffff;
  position: fixed;
  top: 0;
  z-index: 20;
  display: flex;
}
.daoh {
  height: 54px;
  flex: 1;
  padding-left: 20px;
}
.el-breadcrumb {
  font-size: 18px;
  line-height: 54px;
}
.daoh1 {
  width: auto;
  height: 16px;
  font-size: 16px;
  color: rgba(136, 136, 136, 1);
  line-height: 50px;
  margin-left: 20px;
}
.daoh2 {
  width: 20px;
  height: 20px;
  line-height: 60px;
}
.daoh3 {
  width: auto;
  height: 16px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(16, 16, 16, 1);
  line-height: 50px;
}
/* .tc {
  width: 300px;
  height: 54px;
 display: flex;
}

.toxian {
  width: 36px;
  height: 36px;
  margin-right: 20px;
  margin-top: 8px;
}
.yonghu {
  width: 180px;
  height: 54px;
  line-height: 54px;
  font-size: 16px;
  color: rgba(136, 136, 136, 1);
  padding-right: 10px;
}
.tcdl {
  width: 50;
   height: 54px;
  line-height: 54px;
  font-size: 16px;
  color: rgba(136, 136, 136, 1);
} */
</style>
