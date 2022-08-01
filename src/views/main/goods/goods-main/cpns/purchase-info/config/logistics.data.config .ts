import { IDataConfig } from '../../../types'
const logisticsDataConfig: IDataConfig[] = [
  {
    id: 'C20191109115538084800003',
    name: '简约餐桌椅子',
    imgUrl:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    other: '材质：樟木；长50cm*高165cm',
    price: 70,
    count: 2,
    total: 140,
    cstatus: 3,
    isLine: true,
    clink: '采购链接',
    oerate: true
  },
  {
    id: 'C20191109115538084800004',
    name: '日系书柜',
    imgUrl:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    other: '长：0.9cm，层数：3层',
    price: 400,
    count: 1,
    total: 400,
    cstatus: 3,
    otherOptions: {
      oname: '书柜安装',
      oprice: 0,
      ocount: 1,
      ototal: 0
    },
    isLine: true,
    clink: '采购链接',
    oerate: true
  }
]

export default logisticsDataConfig
