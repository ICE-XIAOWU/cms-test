<template>
  <div class="user-card">
    <h2 class="title">{{ title }}</h2>
    <ul>
      <li class="item" v-for="item in config" :key="item.label">
        {{ item.label }} ：
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IUserConfig } from '@/views/main/goods/goods-main/cpns/goods-user/types'

defineProps({
  config: {
    type: Array as PropType<IUserConfig[]>,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.title {
  font-size: 16px;
  margin-bottom: 20px;
}

.item {
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
