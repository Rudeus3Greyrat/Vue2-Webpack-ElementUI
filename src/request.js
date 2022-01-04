import axios from 'axios'
import router from './router'
import { Message } from 'element-ui'
import { getU2AT } from './utils/cookies'

const http = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})


// 发起请求
http.interceptors.request.use(function (config) {
    const token = getU2AT()
    // const token = 'b765f601-ce39-4094-89cd-9d97d9f40e81'
    if (token) {
        config.headers['token'] = token
    }
    return config;
}, function (error) {
    console.log(error) // for debug
    return Promise.reject(error)
})



// 响应请求
http.interceptors.response.use(response => {
    const res = response.data

    if (res.code !== 200 || !res.success) { 
        if (res.message === '权限校验失败') {
            Message.error('权限校验失败，请重新登录')
            router.push('/hint')
            return
        }

        Message({
            message: res.message || 'Error',
            type: 'warning',
            duration: 5 * 1000
        })


        return Promise.reject(new Error(res.message || 'Error'))
    } else {
        return response.data
    }
}, error => {
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})


export default http