import IuceRuequest from '../index'
import { IDateType } from '../types'

export function getUserList(payload: any) {
  return IuceRuequest.post<IDateType>({
    url: '/user',
    data: payload,
    showloading: true
  })
}

export function patchUser(payload: any) {
  return IuceRuequest.patch<IDateType>({
    url: '/user',
    data: payload,
    showloading: true
  })
}

export function createUser(payload: any) {
  return IuceRuequest.post<IDateType>({
    url: '/user/create',
    data: payload,
    showloading: true
  })
}

export function deleteUser(payload: any) {
  console.log(payload)
  return IuceRuequest.delete<IDateType>({
    url: '/user',
    data: payload,
    showloading: true
  })
}
