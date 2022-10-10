import User from '../models/User.js'
import UserService from '../services/UserService.js'

const UserController = {
    /**
     * Find a user by Id using the UserService.getById(@param id).
     * If the data returned from UserService is
     * empty, return a message with nothing found.
     * Else create a new User and return that as value.
     * @param req
     * @param res
     */
    find: async (req, res) => {
        try {
            const id = req.params.id || {}
            const data = await (await UserService.getById(id)).rows[0]

            if (data === undefined)
                return res.json({ message: 'Nothing found.' })

            const user = new User(data?.id, data?.name, data?.email, data?.age)
            res.json(user)
        } catch (e) {
            res.status(500).json({
                message: `${e}`,
            })
        }
    },
    /**
     * Find all users using the UserService.getAll().
     * If the data returned from UserService is
     * empty, return a message with nothing found.
     * Else create a new User and return that as value.
     * @param req
     * @param res
     */
    findAll: async (req, res) => {
        try {
            const data = (await UserService.getAll()).rows

            if (data === undefined)
                return res.json({ message: 'Nothing found.' })
            res.json(data)
        } catch (e) {
            res.status(500).json({
                message: `${e}`,
            })
        }
    },
}

export default UserController
