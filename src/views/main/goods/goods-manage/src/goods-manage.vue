<template>
  <div class="goods-manage">
    <search></search>
    <el-button class="new" type="primary" @click="newUserClick"
      >新建用户</el-button
    >
    <result @edit-btn-click="editBtnClick"></result>
    <modal ref="modalRef" :is-new="isNew" :form-data="formData"></modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

import Search from '../cpns/search'
import Result from '../cpns/result'
import Modal from '../cpns/modal'

const store = useStore()
store.dispatch('getUserListAction')

const modalRef = ref<InstanceType<typeof Modal>>()
const isNew = ref(false)
const formData: any = ref({})
const newUserClick = () => {
  modalRef.value!.dialogVisible = true
  isNew.value = true
}

const editBtnClick = (item: any) => {
  modalRef.value!.dialogVisible = true
  isNew.value = false
  const formData: any = modalRef.value?.formdata
  for (const key in item) {
    formData[key] = item[key]
  }
}
</script>

<style scoped lang="less">
.goods-manage {
  padding: 20px;
  background-color: #fff;

  .new {
    width: 300px;
    margin-top: 30px;
  }
}
</style>
