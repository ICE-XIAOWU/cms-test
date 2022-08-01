import { IDataConfig } from '../../../types'

const dataConfig: IDataConfig[] = [
  {
    id: 'lh1300002',
    name: '简约餐桌椅子',
    imgUrl:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    other: '材质：樟木；长50cm*高165cm',
    price: 100,
    count: 2,
    total: 200,
    cstatus: 3,
    isLine: true
  },
  {
    id: 'lh1300001',
    name: '日系书柜',
    imgUrl:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    other: '长：0.9cm，层数：3层',
    price: 480,
    count: 1,
    total: 480,
    cstatus: 3,
    otherOptions: {
      oname: '书柜安装',
      oprice: 0,
      ocount: 1,
      ototal: 0
    },
    tips: '请快快发货，如果好看还会继续下单，谢谢！',
    isLine: true
  },
  {
    id: 'lh1991001',
    name: '拆除服务',
    imgUrl:
      'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    price: 70,
    count: 1,
    total: 70,
    cstatus: 3
  }
]

export default dataConfig
