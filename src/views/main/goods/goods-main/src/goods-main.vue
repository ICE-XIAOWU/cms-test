<template>
  <div class="goods-main">
    <content-header title="成品订单"></content-header>
    <div class="main-content">
      <logistics-status />
      <logistics-main />
      <goods-user />
      <goods-info />
      <purchase-main />
    </div>
  </div>
</template>

<script setup lang="ts">
import LogisticsStatus from '../cpns/logistics-status'
import LogisticsMain from '../cpns/logistics-main'
import PurchaseMain from '../cpns/purchase-main'
import GoodsUser from '../cpns/goods-user'
import GoodsInfo from '../cpns/goods-info'
</script>

<style scoped lang="less">
.goods-main {
  margin-top: 20px;

  .main-content {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px;
  }
}
</style>
