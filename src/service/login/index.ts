import IuceRuequest from '../index'
import { IDateType } from '../types'
import { IRegisterLogin } from './types'

export function registerApi(parmas: IRegisterLogin) {
  return IuceRuequest.post<IDateType>({
    url: '/register',
    data: parmas,
    showloading: true
  })
}

export function LoginApi(parmas: IRegisterLogin) {
  return IuceRuequest.post<IDateType>({
    url: '/login',
    data: parmas
  })
}
