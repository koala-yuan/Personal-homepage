'use strict'

module.exports = {
  NODE_ENV: '"production"',
  IS_DEBUG: JSON.stringify(process.env.IS_DEBUG),
  POLL: JSON.stringify(process.env.POLL),
  BASE: JSON.stringify(process.env.BASE || '/'),
  PORT: JSON.stringify(process.env.PORT || 19998),
  HOST: JSON.stringify(process.env.HOST || '127.0.0.1'),
  WS_BASE: JSON.stringify(process.env.WS_BASE || process.env.API_BASE || '/'),
  API_BASE: JSON.stringify(process.env.API_BASE || '/'),
  API_PATH: JSON.stringify(process.env.API_PATH),
  API_SERIES: JSON.stringify(process.env.API_SERIES || 'vnd.api.linktime'),
  API_TOKEN: JSON.stringify(process.env.API_TOKEN || ''),
  API_VERSION: JSON.stringify(process.env.API_VERSION || 'latest')
}
