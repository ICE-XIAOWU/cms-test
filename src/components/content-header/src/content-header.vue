<template>
  <div class="content-header">
    <breadcrumb></breadcrumb>
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Breadcrumb from '../../breadcrumb'

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="less">
.title {
  padding-top: 20px;
}
</style>
