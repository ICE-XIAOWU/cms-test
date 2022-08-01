export interface IUserList {
  id: number
  name: string
  avatar: string
}

export interface IRootState {
  userList: IUserList[]
  total: number
}
