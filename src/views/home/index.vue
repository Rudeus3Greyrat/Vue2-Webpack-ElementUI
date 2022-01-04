<template>
  <div class="container">
    <div class="statistics-block">
      <el-table :data="tableData" border :header-cell-style="{background:'#F3F4F7',color:'#555'}">
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column prop="num" label="数量">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          title:'test',
          num:123
        }
      ]
    }
  },
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.container {
  .statistics-block {
    width: 800px;
    margin: 100px auto 0;
  }
}
</style>