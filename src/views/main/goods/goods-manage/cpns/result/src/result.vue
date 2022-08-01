<template>
  <div class="result">
    <h2>用户数据</h2>
    <el-table style="width: 100%" center :data="userList" border fit>
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="username" label="姓名" />
      <el-table-column prop="avatar" label="头像" />
      <el-table-column prop="operate" label="操作">
        <template #default="scope">
          <el-button type="primary" plain @click="editBtnClick(scope.row)"
            >修改</el-button
          >
          <el-button type="danger" plain @click="deleteBtnClick(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { useStore } from 'vuex'
import { IUserList } from '@/store/types.js'
const store = useStore()
const userList = computed(() => store.state.userList as IUserList[])

const emits = defineEmits(['editBtnClick'])

const editBtnClick = (item: any) => {
  emits('editBtnClick', item)
}

const deleteBtnClick = (item: any) => {
  store.dispatch('deleteUserAction', item.id)
}
</script>

<style scoped>
h2 {
  margin: 50px 0 20px;
}
</style>
