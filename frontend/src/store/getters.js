import { cloneDeep } from 'lodash'

export const currentUser = (state) => {
  return cloneDeep(state.currentUser)
}

export const isAdmin = (state) => {
  return state.isAdmin
}

export const isRoot = (state) => {
  return state.isRoot
}

export const loadingOptions = (state) => {
  return cloneDeep(state.loadingOptions)
}
