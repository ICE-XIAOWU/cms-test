import { IContentConfig } from '../../../types'

const contentConfig: IContentConfig[] = [
  {
    name: 'name',
    label: '商品',
    isLine: true
  },
  {
    name: 'price',
    label: '单价'
  },
  {
    name: 'count',
    label: '数量'
  },
  {
    name: 'total',
    label: '小计',
    isLine: true
  },
  {
    name: 'cstatus',
    label: '采购单状态'
  },
  {
    name: 'sstatus',
    label: '售后状态'
  }
]

export default contentConfig
