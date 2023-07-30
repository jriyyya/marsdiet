import axios from "axios"
import { backendUrl } from "./config"

function getServerUrl(path: string) {
    return `${backendUrl}${path}`
}

const api = {
    user: {
        async new(auth0_uid: string, picture: string) {
            await axios.post(getServerUrl('/user/new')), { auth0_uid, picture }
        },

        async update(auth0_uid: string, data: { picture?: string, name?: string, age?: number, gender?: string, weight?: number, height?: number }) {
            await axios.put(getServerUrl(`/user/${auth0_uid}/update`), data)
        },

        registration: {
            async status(auth0_uid: string) {
                const response = await axios.get(`/user/${auth0_uid}/registration/status`)
                return response.data
            }
        }
    }
}

export default api