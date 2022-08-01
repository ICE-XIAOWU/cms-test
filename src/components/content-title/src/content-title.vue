<template>
  <div class="content-title" :style="itemStyle">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  itemStyle: {
    type: Object,
    default: () => ({ backgroundColor: '#f5f5f5', paddingLeft: '10px' })
  }
})
</script>

<style scoped lang="less">
.content-title {
  height: 40px;
  line-height: 40px;
  margin: 20px 0;
}
</style>
