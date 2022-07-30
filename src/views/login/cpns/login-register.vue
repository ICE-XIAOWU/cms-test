<template>
  <div class="login-register">
    <el-form
      label-width="70px"
      label-position="left"
      ref="elFormRef"
      :model="registerData"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="registerData.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerData.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineExpose, ref } from 'vue'
import rules from '../config/formRules'
import { registerApi } from '@/service/login'
import { useStore } from 'vuex'

const elFormRef = ref(null)
const store = useStore()
const registerData = ref({
  name: '',
  password: ''
})

const registerBtnClick = () => {
  elFormRef?.value.validate(async (isValid: boolean) => {
    if (isValid) {
      store.dispatch('registerUserAction', registerData.value)
      registerData.value.name = ''
      registerData.value.password = ''
      // const res = await registerApi({
      //   username: registerData.value.name,
      //   password: registerData.value.password
      // })
      // console.log(res)
    }
  })
}

defineExpose({
  registerBtnClick
})
</script>

<style scoped></style>
