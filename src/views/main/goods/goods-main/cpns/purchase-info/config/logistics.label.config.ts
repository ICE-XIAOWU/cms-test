import { IContentConfig } from '../../../types'

const logisticsLabelConfig: IContentConfig[] = [
  {
    name: 'name',
    label: '商品',
    isLine: true
  },
  {
    name: 'price',
    label: '供应价'
  },
  {
    name: 'count',
    label: '数量'
  },
  {
    name: 'total',
    label: '供应价总计',
    isLine: true
  },
  {
    name: 'cstatus',
    label: '采购单状态'
  },
  {
    name: 'clink',
    label: '采购单链接'
  },
  {
    name: 'sstatus',
    label: '售后状态'
  },
  {
    name: 'operat',
    label: '操作'
  }
]

export default logisticsLabelConfig
