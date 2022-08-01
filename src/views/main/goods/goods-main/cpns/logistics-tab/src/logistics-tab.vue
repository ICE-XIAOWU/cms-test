<template>
  <div class="logistics-tab">
    <el-tabs type="card" class="tabs" v-model="activeName">
      <el-tab-pane label="包裹1" name="first">
        <goods-logistics></goods-logistics>
      </el-tab-pane>
      <el-tab-pane label="包裹2" name="two">
        <goods-logistics></goods-logistics>
      </el-tab-pane>
      <el-tab-pane label="包裹3" name="three">
        <goods-logistics></goods-logistics>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('first')
</script>

<style scoped></style>
