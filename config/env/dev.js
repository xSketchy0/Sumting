import dotenv from 'dotenv'
dotenv.config()

/**
 * Using dotenv, we get all the values from the
 * .env file to then use in an object that returns
 * the port for express and database credentials.
 */
export const dev = {
    express: {
        port: process.env.EXPRESS_PORT,
    },
    db: {
        user: process.env.PGSQL_USERNAME,
        host: process.env.PGSQL_HOST,
        database: process.env.PGSQL_DB,
        password: process.env.PGSQL_PASSWORD,
        port: process.env.PGSQL_PORT,
    },
    klaviyo: {
        apiKey: process.env.KLAVIYO_API
    }
}
