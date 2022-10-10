import Pool from '../../config/Pool.js'

const UserService = {
    /**
     * This creates new pool and opens a connection.
     * This pool will then query the database with a given id
     * to get the user by id.
     */
    getById: async (id) => {
        const pool = await Pool.connect()

        try {
            const res = await pool.query(
                'SELECT * FROM contributor WHERE id = $1',
                [id]
            )
            return res
        } catch (err) {
            return err.stack
        } finally {
            pool.release()
        }
    },

    /**
     * This creates a new pool and opens a connection.
     * This pool will then query te database to get all users.
     */
    getAll: async () => {
        const pool = await Pool.connect()

        try {
            const res = await pool.query('SELECT * FROM contributor')
            return res
        } catch (err) {
            return err.stack
        } finally {
            pool.release()
        }
    },
}

export default UserService
