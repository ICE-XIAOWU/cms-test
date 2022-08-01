<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="200px" class="main-aside">
        <aside-title title="运营端"></aside-title>
        <aside-menu></aside-menu>
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <header-info></header-info>
        </el-header>
        <el-main class="main-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AsideTitle from '@/components/aside-title'
import AsideMenu from '@/components/aside-menu'
import HeaderInfo from '@/components/header-info'
</script>

<style scoped lang="less">
.main {
  height: 100%;
  width: 100%;

  .main-container {
    width: 100%;
    height: 100%;

    .main-aside {
      background-color: #232236;
      color: #fff;
    }

    .main-header {
      background-color: #fff;
    }

    .main-content {
      background-color: #f5f5f5;
    }
  }
}
</style>
