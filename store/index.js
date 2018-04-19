import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import state from './state'

const store = () => new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
});

export default store
