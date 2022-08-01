<template>
  <div class="logistics">
    <content-title
      title="订单编号：11231231231"
      :item-style="{ fontWeight: 500 }"
    />
    <logistics-status-info />
  </div>
</template>

<script setup lang="ts">
import ContentTitle from '@/components/content-title/src/content-title.vue'
import LogisticsStatusInfo from '../../logistics-status-info'
</script>

<style scoped></style>
