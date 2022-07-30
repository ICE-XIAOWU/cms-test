<template>
  <div>
    <el-form
      label-width="70px"
      label-position="left"
      ref="elFromRef"
      :model="formData"
      :rules="formRules"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'
import formRules from '../config/formRules'
import { ElForm } from 'element-plus'
import 'element-plus/es/components/message/style/css'

const elFromRef = ref(null)
const formData = ref({
  name: '',
  password: ''
})

const accountBtnClick = () => {
  elFromRef.value?.validate((isVaild: boolean) => {
    if (isVaild) {
      console.log(formData.value.name)
      console.log(formData.value.password)
    }
  })
}
// 暴露属性方法
defineExpose({
  accountBtnClick
})
</script>

<style scoped></style>
