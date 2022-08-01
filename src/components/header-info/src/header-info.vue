<template>
  <div class="header-info">
    <el-dropdown :hide-on-click="false">
      <div class="dropdown">
        <el-avatar
          :size="30"
          src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        />
        <span class="el-dropdown-link"> iuce </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.header-info {
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  padding-right: 30px;

  .dropdown {
    display: flex;
    align-items: center;

    span {
      padding-left: 8px;
      color: #333;
      font-weight: 500;
    }
  }
}
</style>
