import { createStore } from 'vuex'
import { IRootState, IUserList } from './types'
import { getUserList, patchUser, createUser, deleteUser } from '@/service/user'
import { ElMessage } from 'element-plus'

export default createStore<IRootState>({
  state: {
    userList: [],
    total: 0
  },
  getters: {},
  mutations: {
    changeUserList(state, payload: IUserList[]) {
      state.userList = payload
    },
    changeTotal(state, payload: number) {
      state.total = payload
    }
  },
  actions: {
    async getUserListAction({ commit }, payload: any) {
      const { data } = await getUserList(payload)
      commit('changeUserList', data.data)
      commit('changeTotal', data.total)
    },

    async createUserAction({ dispatch }, payload: any) {
      const { username, password } = payload
      await createUser({ username, password })
      dispatch('getUserListAction')
    },

    async patchUserAction({ dispatch }, payload: any) {
      const { username, id } = payload
      await patchUser({ username, id })
      dispatch('getUserListAction')
    },

    async deleteUserAction({ dispatch }, payload: any) {
      const res = await deleteUser({ id: payload })
      dispatch('getUserListAction')
    }
  },
  modules: {}
})
