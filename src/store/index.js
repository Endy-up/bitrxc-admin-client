import { createStore } from 'vuex'
import storage from '../utils/storage.js'
import getters from './getters.js'
import mutations from './mutations.js'

const state = {
  userInfo: '' || storage.getItem('userInfo')
}

export default createStore({
  state,
  mutations,
  getters
})
