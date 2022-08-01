<template>
  <div class="aside-title">
    <h2 class="title">LUNA HOME</h2>
    <span>{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="less">
.aside-title {
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #000;

  .title {
    font-size: 16px;
    margin-right: 10px;
  }
}
</style>
