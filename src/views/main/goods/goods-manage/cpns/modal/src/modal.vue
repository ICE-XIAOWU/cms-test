<template>
  <div class="modal">
    <el-dialog width="30%" v-model="dialogVisible" destroy-on-close>
      <h2 class="title">新建用户</h2>
      <el-form label-width="60px" :model="formdata">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formdata.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="isNew">
          <el-input v-model="formdata.password" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="modalBtnClick('cancel')">取消</el-button>
          <el-button type="primary" @click="modalBtnClick('confrim')"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { ref, defineExpose, defineProps } from 'vue'

const store = useStore()

const props = defineProps({
  isNew: {
    type: Boolean,
    default: false
  }
})

const dialogVisible = ref(false)
const formdata: any = ref({
  username: '',
  password: ''
})

const modalBtnClick = (payload: string) => {
  dialogVisible.value = false

  if (payload === 'confrim') {
    if (props.isNew) {
      store.dispatch('createUserAction', formdata.value)
    } else {
      store.dispatch('patchUserAction', formdata.value)
    }
  }

  for (let key in formdata.value) {
    formdata.value[key] = ''
  }
}

defineExpose({
  dialogVisible,
  formdata
})
</script>

<style scoped lang="less">
.modal {
  .title {
    margin-bottom: 20px;
    text-align: center;
  }
}
</style>
