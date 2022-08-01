<template>
  <div class="logistics-content">
    <div class="left">
      <h2>月球发货中</h2>
      <span>2022-11-20 11:55:33</span>
    </div>
    <div class="right">
      <el-steps :active="3" align-center>
        <el-step
          title="等待买家付款"
          description="2022-11-20 11:55:33"
          :icon="CircleCheck"
        />
        <el-step
          title="等待月球发货"
          description="2022-11-20 11:55:33"
          :icon="CircleCheck"
        />
        <el-step
          title="月球发货中"
          description="2022-11-20 11:55:33"
          :icon="CircleCheck"
        />
        <el-step
          title="交易完成"
          description="2022-11-20 11:55:33"
          :icon="CircleCheck"
        />
      </el-steps>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CircleCheck } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.logistics-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  border: 1px solid #dddfe5;

  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-right: 1px solid #dddfe5;

    h2 {
      font-size: 30px;
    }

    span {
      padding-top: 10px;
      color: #b2b2b4;
    }
  }

  .right {
    flex: 1;
  }
  .el-step__title.is-finish {
    color: #000 !important;
  }
}
</style>
