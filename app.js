import Server from './server.js'

// Create a new server instance
const App = new Server()

// Set middleware
App.setMiddleware()

// Set routes
App.setRoutes()

// Set subscriptions
App.setSubscriptions()

// Listen to port
App.listen()
