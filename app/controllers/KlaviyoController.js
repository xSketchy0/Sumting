import klaviyoService from "../services/KlaviyoService.js"

const KlaviyoController = {
    getAll: async (req, res) => {
        try {
            const data = await klaviyoService.getLists()

            if (data === undefined )
                return res.json({
                    message: 'Nothing found.'
                })
            
                res.json(data)
        } catch (e) {
            res.status(500).json({
                message: `${e}`
            })
        }
    }
}

export default KlaviyoController