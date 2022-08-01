<template>
  <div class="search">
    <el-form :model="formdata">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="formdata.username" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="btns">
      <el-button type="primary" class="search-btn" @click="searchBtnClick"
        >搜索</el-button
      >
      <el-button type="primary" class="search-btn" @click="resetBtnClick"
        >重置</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

const formdata = ref({
  username: ''
})
const store = useStore()

const searchBtnClick = () => {
  store.dispatch('getUserListAction', formdata.value)
}

const resetBtnClick = () => {
  formdata.value.username = ''
  store.dispatch('getUserListAction', formdata.value)
}
</script>

<style scoped lang="less">
.search-btn {
  width: 300px;
}
</style>
