import express from 'express'
import KlaviyoController from '../controllers/KlaviyoController.js'

const KlaviyoRouter = express.Router()

KlaviyoRouter.get('/lists', KlaviyoController.getAll)

export default KlaviyoRouter