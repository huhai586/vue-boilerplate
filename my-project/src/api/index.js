/**
 * Created by huhai on 17/3/28.
 */
/**
 * Mocking client-server processing
 */
import axios from "axios"
export default axios.create({
    baseURL:"/api"
})