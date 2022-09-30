import cookieParser from 'cookie-parser'
import express from 'express'
import morgan from 'morgan'
import UserRouter from './app/routes/UserRouter.js'
import UserSubscription from './app/subscriptions/UserSubscription.js'
import { dev as env } from './config/env/dev.js'
import cors from 'cors'
import path from 'path'
import { expressCspHeader, NONE, SELF } from 'express-csp-header'

class Server {
    constructor() {
        this.init()
    }

    init() {
        this.app = express()
    }

    setMiddleware() {
        this.app.use(morgan('dev'))
        this.app.use(cookieParser())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(express.static('public'))
        this.app.use(cors({
            origin: 'http://localhost:3000'
        }))
        this.app.use(expressCspHeader({
            policies: {
                'default-src': [NONE],
                'img-src': [SELF],
            }
        }))
    }

    setRoutes() {

        /**
         * Setting the routes relative to the route
         * given.
         */
        this.app.use('/users', UserRouter)

        /**
         * Setting the home route and returning an image
         * for testing purposes.
         */
        this.app.get('/', async (req, res) => {
            res.sendFile(path.resolve('public', 'shiina.png'))
        })
    }

    setSubscriptions() {

        // Setting the listen subscription.
        UserSubscription.listen()
    }

    listen() {

        // Listen to port.
        this.app.listen(env.express.port, () => {
            console.log(`Example app listening on port ${env.express.port}`)
        })
    }
}

export default Server
