/**
 * Created by huhai on 17/3/28.
 */
/**
 * Mocking client-server processing
 */
import axios from "axios"
axios.defaults.baseURL = '/api';
var loding=document.getElementById("loading")
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    loding.style.display="block"
    return config;
}, function (error) {
    loding.style.display="none"
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    loding.style.display="none"

    // Do something with response data
    return response;
}, function (error) {
    loding.style.display="none"
    // Do something with response error
    return Promise.reject(error);
});

export default axios;