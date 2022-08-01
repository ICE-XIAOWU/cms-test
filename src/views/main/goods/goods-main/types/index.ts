export interface IContentConfig {
  name: string
  label: string
  isLine?: boolean
}

export interface IDataConfig {
  id: string
  isLine?: boolean
  imgUrl: string
  name: string
  other?: string
  price: number
  count: number
  total: number
  cstatus: number
  sstatus?: number
  otherOptions?: {
    oname: string
    oprice: number
    ocount: number
    ototal: number
  }
  tips?: string
  clink?: string
  oerate?: boolean
}
