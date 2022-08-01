<template>
  <div class="goods-logistics">
    <div class="title">商品采购单</div>
    <page-table
      :config="logisticsLabelConfig"
      :data="logisticsDataConfig"
      name="logistics"
    ></page-table>
  </div>
</template>

<script setup lang="ts">
import pageTable from '@/components/page-table'
import logisticsLabelConfig from '../config/logistics.label.config'
import logisticsDataConfig from '../config/logistics.data.config '
</script>

<style scoped lang="less">
.goods-logistics {
  margin-top: 10px;
  .title {
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
