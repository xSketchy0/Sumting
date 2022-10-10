import { dev as env } from '../config/env/dev.js'
import { ApiClient } from 'klaviyo-sdk'

const klaviyoClient = ApiClient.instance

const ApiKeyAuth = klaviyoClient.authentications['ApiKeyAuth']

ApiKeyAuth.apiKey = env.klaviyo.apiKey

export default klaviyoClient