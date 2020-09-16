export const BASE = process.env.BASE
export const IS_DEBUG = process.env.IS_DEBUG
export const DEV_TOOL = process.env.DEV_TOOL
export const WS_BASE = process.env.WS_BASE
export const API_SERIES = process.env.API_SERIES
export const API_VERSION = process.env.API_VERSION
export const API_PATH = process.env.API_PATH === undefined ? 'api/' : process.env.API_PATH
export const API_BASE = IS_DEBUG ? process.env.API_BASE : BASE
export const URI_BASE = API_BASE + (API_PATH === '/' ? '' : API_PATH)
export const ACCEPT = `application/json;${API_SERIES}, version=${API_VERSION}`
export const CONTENT_TYPE = 'application/x-www-form-urlencoded'

export const NODE_ENV = process.env.NODE_ENV
export const API_TOKEN = process.env.API_TOKEN
