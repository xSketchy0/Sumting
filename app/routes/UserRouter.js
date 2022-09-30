import express from 'express'
import UserController from '../controllers/UserController.js'

// Create a new express router.
const UserRouter = express.Router()

/**
 * Use that router to add any paths, and what to do using
 * callbacks from the controllers
 */
UserRouter.get('/:id', UserController.find)
UserRouter.get('/', UserController.findAll)

export default UserRouter
