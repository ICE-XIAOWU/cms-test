<template>
  <div class="login-panel">
    <h2 class="title">CMS 测试系统</h2>
    <el-tabs
      type="border-card"
      class="demo-tabs"
      stretch
      @tab-click="tabClickHandle"
    >
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>登录</span>
          </span>
        </template>

        <login-account ref="loginAccountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><DocumentAdd /></el-icon>
            <span>注册</span>
          </span>
        </template>

        <login-register ref="loginRegisterRef"></login-register>
      </el-tab-pane>
    </el-tabs>
    <el-button class="login-btn" type="primary" @click="accountBtnClick">
      {{ isRegister === '0' ? '登录' : '注册' }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TabsPaneContext } from 'element-plus'
import LoginRegister from './login-register.vue'
import LoginAccount from './login-account.vue'

let isRegister = ref('0')
const loginAccountRef = ref(null)
const loginRegisterRef = ref(null)

const tabClickHandle = (pane: TabsPaneContext) => {
  isRegister.value = pane.index as string
}

const accountBtnClick = () => {
  if (isRegister.value === '0') {
    if (loginAccountRef.value) {
      loginAccountRef.value.accountBtnClick()
    }
  } else {
    if (loginRegisterRef.value) {
      loginRegisterRef.value.registerBtnClick()
    }
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 350px;
  margin-top: -200px;

  .title {
    text-align: center;
    padding-bottom: 20px;
  }

  .custom-tabs-label {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      padding-left: 5px;
    }
  }

  .login-btn {
    width: 350px;
    margin-top: 20px;
  }
}
</style>
