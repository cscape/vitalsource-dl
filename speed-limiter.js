const axios = require('axios')

const MAX_REQUESTS_COUNT = 10
const INTERVAL_MS = 10
let PENDING_REQUESTS = 0

// create new axios instance
const api = axios.create({})

/**
 * Axios Request Interceptor
 */
api.interceptors.request.use(config => new Promise(resolve => {
  let interval = setInterval(() => {
    if (PENDING_REQUESTS < MAX_REQUESTS_COUNT) {
      PENDING_REQUESTS += 1
      clearInterval(interval)
      resolve(config)
    }
  }, INTERVAL_MS)
}))

/**
 * Axios Response Interceptor
 */
api.interceptors.response.use(response => {
  PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1)
  return Promise.resolve(response)
}, error => {
  PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1)
  return Promise.reject(error)
})

module.exports = api
