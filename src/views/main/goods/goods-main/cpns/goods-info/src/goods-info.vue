<template>
  <div class="goods-info">
    <page-table :config="contentConfig" :data="dataConfig"></page-table>
  </div>
</template>

<script setup lang="ts">
import PageTable from '@/components/page-table'
import contentConfig from '../config/content.config'
import dataConfig from '../config/data.config'
</script>

<style scoped></style>
