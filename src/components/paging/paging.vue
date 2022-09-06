<template>
  <div>
    <!-- 这里是分页 -->
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
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    //总列数
    totalCount: ""
  },
  methods: {
    //下一页
    jumpData(val) {
      this.$emit('jumpData',val); 
    }
  }
};
</script>

<style scoped>
/* 分页 */
.paging {
  width: 100%;
  height: 60px;
  text-align: center;
}
</style>
