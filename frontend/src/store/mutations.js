
import * as types from './types'

const mutations = {
  [types.SET_CURRENT_USER] (state, { data }) {
    const d = data || {}
    state.isRoot = d.isRoot
    state.isAdmin = d.isAdmin
    state.isDev = d.isDev
    state.currentUser = data
  },
  [types.SET_LOADING_OPTIONS] (state, { text, closable, show }) {
    state.loadingOptions = Object.assign({}, state.loadingOptions, {
      text,
      closable,
      show
    })
  }
}

export default mutations
