<template>
  <div class="goods-user">
    <user-card
      title="收货人信息"
      :config="consigneeInfo"
      class="item"
    ></user-card>
    <user-card title="买家信息" :config="buyerInfo" class="item"></user-card>
    <user-card title="付款信息" :config="playInfo" class="item"></user-card>
  </div>
</template>

<script setup lang="ts">
import UserCard from '@/components/user-card'
import { IUserConfig } from '../types.js'

const consigneeInfo: IUserConfig[] = [
  { label: '收货人', value: '' },
  { label: '联系方式', value: '' },
  { label: '地址', value: '' }
]

const buyerInfo: IUserConfig[] = [{ label: '用户名', value: '' }]

const playInfo: IUserConfig[] = [
  { label: '实付金额', value: '' },
  { label: '付款方式', value: '' },
  { label: '付款时间', value: '' },
  { label: '支付流水号', value: '' }
]
</script>

<style scoped lang="less">
.goods-user {
  display: flex;
  padding: 20px;
  margin-top: 20px;
  box-sizing: border-box;
  background-color: #f6f6f6;

  .item {
    flex: 1;
  }
}
</style>
