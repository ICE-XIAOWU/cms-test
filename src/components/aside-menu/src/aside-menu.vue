<template>
  <div class="aside-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#232236"
      text-color="#fff"
      :defaultActive="activeIndex"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><GoodsFilled /></el-icon>
          <span>商品</span>
        </template>
        <el-menu-item index="3" @click="handleMenuItemClick('home')"
          >商品总览</el-menu-item
        >
        <el-menu-item index="4" @click="handleMenuItemClick('manage')"
          >商品管理列表</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><List /></el-icon>
          <span>采购单</span>
        </template>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('3')
const handleMenuItemClick = (id: string) => {
  if (id === 'home') {
    activeIndex.value = '3'
    router.push('/main/goods/home')
  } else {
    activeIndex.value = '4'
    router.push('/main/goods/manage')
  }
}
</script>

<style scoped lang="less">
.el-menu {
  border-right: none;
}
.el-menu-item.is-active {
  background-color: #191928;
}
</style>
