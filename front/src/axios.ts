import axios from 'axios'

const { REACT_APP_SERVER_URI } = process.env

function instance() {
  const instance = axios.create({
    baseURL: REACT_APP_SERVER_URI,
  })

  instance.interceptors.request.use(
    (request) => {
      request.headers['Authorization'] =
        `Bearer ${localStorage.getItem('accessToken')}`
      return request
    },
    (error) => {
      console.log(error)
      return Promise.reject(error)
    }
  )
  return instance
}

export const http = instance()
