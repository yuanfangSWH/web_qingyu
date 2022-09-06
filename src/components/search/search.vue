<template>
  <div>
    <!-- 搜索 -->
      <div class="ssk">
        <div class="ssbj">
          <img class="sslogo" src="/../../static/images/sousou.png" />
          <input class="s-input" type="text" v-model="searchData" placeholder="请输入搜索关键字~" />
        </div>
      </div>
      <!-- 点击搜索 -->
      <div class="djss" @click="search">
        <div class="djss1">搜索</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //关键字
    searchData: ""
    };
  },
  props: {
    
  },
  methods: {
    //搜索
    search() {
      this.$emit('search',this.searchData); 
    }
  }
};
</script>

<style scoped>
/* 搜索 */
.ssk {
  width: 370px;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(231, 233, 234, 1);
  border-radius: 20px 0px 0px 20px;
  float: right;
  margin-right: 100px;
  margin-top: -42px;
  position: relative;
}
.sslogo {
  margin-top: 5px;
}
.ssbj {
  display: flex;
}
.s-input {
  margin-top: 5px;
  width: 300px;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
  border-bottom-style: none;
  outline: none;
}
.djss {
  width: 90px;
  height: 40px;
  background: rgba(3, 122, 255, 1);
  border-radius: 0px 20px 20px 0px;
  float: right;
  margin-top: -42px;
  margin-right: 10px;
}
.djss1 {
  text-align: center;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}
</style>
