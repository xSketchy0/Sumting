import klaviyoClient from "../../config/Klaviyo.js"
import { ListsSegments } from "klaviyo-sdk"

const klaviyoService = {
    getLists: async () => {
        try {
            // const data = await Profiles.getProfile('01GDGBQKDG9YT4S2TJW2EQ3X1M')
            const data = await ListsSegments.getLists()
            
            return data
        } catch (err) {
            return err.stack
        }
    }
}

export default klaviyoService