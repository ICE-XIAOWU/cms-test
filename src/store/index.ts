import { createStore } from 'vuex'
import { IRootState } from './types'
import { registerApi } from '@/service/login'

export default createStore<IRootState>({
  state: {
    name: '',
    password: ''
  },
  getters: {},
  mutations: {
    changeName(state, payload: any) {
      state.name = payload
    }
  },
  actions: {
    async registerUserAction({ commit }, payload: any) {
      const { name: username, password } = payload
      const res = await registerApi({ username, password })
      console.log(res)
    }
  },
  modules: {}
})
