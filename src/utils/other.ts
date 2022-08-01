import { ElMessage } from 'element-plus'

export function messageCpn(code: number) {
  if (code === 200) {
    ElMessage({
      message: '操作成功',
      type: 'success',
      duration: 1000
    })
  } else {
    ElMessage({
      message: '操作失败',
      type: 'error',
      duration: 1000
    })
  }
}
