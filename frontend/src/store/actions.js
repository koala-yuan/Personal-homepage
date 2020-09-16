
import * as types from './types'

export const setLoadingOptions = ({ commit }, { text, closable, show }) => {
  commit(types.SET_LOADING_OPTIONS, { text, closable, show })
}
