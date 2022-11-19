import { handleErrorNotification } from '@/util/handleResponses'
import https from 'https'

export default function (
  { app, store, $axios, error, route, redirect },
  inject
) {
  // $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  $axios.setHeader('Accept', '*/*')
  $axios.setHeader('Access-Control-Allow-Origin', '*')
  $axios.setHeader('Content-Type', 'application/json')

  $axios.onError(async (apiError) => {
    try {
      if (apiError.response.status === 403)
        if (apiError.response.data.errors['email or password']) {
          return handleErrorNotification('Email or password is invalid')
        }
      if (apiError.response.status === 422) {
        if (apiError.response.data.errors['email']) {
          return handleErrorNotification('Email has already been taken')
        }
        if (apiError.response.data.errors['username']) {
          return handleErrorNotification('Username has already been taken')
        }
        return handleErrorNotification('Request data is invalid')
      }
    } catch (error) {
      if (process.client)
        return handleErrorNotification('Server is not responding')
    }
  })
}
