import Pool from '../../config/Pool.js'

const UserSubscription = {
    /**
     * This function listens to incoming messages from PostgreSQL
     * using the LISTEN/NOTIFY commands
     * Pool.connect() opens the connection and fires a console.log
     * whenever Pool reads the trigger 'event'.
     */
    listen: async () => {
        Pool.connect((err, client, done) => {
            if (err) {
                console.log('Error')
            } else {
                client.on('notification', async (data) => {
                    const values = JSON.parse(data.payload)
                    console.log(`Name: ${values.name}\nEmail: ${values.email}`)
                })
                client.query('LISTEN event')
            }
        })
    },
}

export default UserSubscription
