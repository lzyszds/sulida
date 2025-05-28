import axios from 'axios'
import { useStorage } from '@vueuse/core'

// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
import router from '../router'

import { baseurl } from "@/config/config"
import { message } from 'ant-design-vue'

const token = useStorage('token', '')

// create an axios instance
const service = axios.create({

    baseURL: baseurl,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 20000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {

        //console.log('请求中...')
        // do something before request is sent
        // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改

        // if(user.username){
        //     config.headers['Authori-Zation'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxMDEuMzUuMTYzLjE5NDo5OTk4IiwiYXVkIjoiMTAxLjM1LjE2My4xOTQ6OTk5OCIsImlhdCI6MTcxNDAyMjAxMiwibmJmIjoxNzE0MDIyMDEyLCJleHAiOjE3MTY2MTQwMTIsImp0aSI6eyJpZCI6NDI1LCJ0eXBlIjoiYXBpIn19.o9NjP0GBth393B7zXADE__yllUgU7YDCK3gRmC6aMWc"//user.token
        // }else{
        //     config.headers['Authori-Zation'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxMDEuMzUuMTYzLjE5NDo5OTk4IiwiYXVkIjoiMTAxLjM1LjE2My4xOTQ6OTk5OCIsImlhdCI6MTcxNDAyMjAxMiwibmJmIjoxNzE0MDIyMDEyLCJleHAiOjE3MTY2MTQwMTIsImp0aSI6eyJpZCI6NDI1LCJ0eXBlIjoiYXBpIn19.o9NjP0GBth393B7zXADE__yllUgU7YDCK3gRmC6aMWc"
        // }
        if (token.value) {
            config.headers['Authori-Zation'] = token.value
        } else {
            config.headers['Authori-Zation'] = ""
        }
        // if (getToken() == "" || typeof(getToken()) == "undefined") {
        //     config.headers['X-Token'] = ""
        // } else {
        //     config.headers['X-Token'] = getToken()
        // }

        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        if (response.data.status == 410000) {


            //清除token 重要
            token.value = ""
            router.push({
                path: '/login',
                query: {}
            })
            // store.dispatch('user/resetToken').then(() => {
            //     router.push({
            //         path: '/login',
            //         query: {
            //             //redirect: router.apps[0]._route.fullPath //获取当前的路由
            //         }
            //     })
            // })

        } else {

            return response
        }

    },
    error => {
        console.log('err' + error) // for debug
        message.error('网络错误，请稍后重试')
        return Promise.reject(error)
    }
)

export default service
