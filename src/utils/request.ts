import axios from 'axios'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    timeout: 5000,
    validateStatus(status: number): boolean { // 因为axios 过滤了 非200 的请求，导致不好判断
        return true
    }
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        if (getToken()) {
            // 让每个请求携带 token
            config.headers['Authorization'] = 'Bearer ' + getToken()
        }
        // 判断是否 显示Loading
        if (config.headers['showLogin']) {
            // login 代码
        }

        return config
    },
    error => {
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 注意，由于 validateStatus ,不会判断status， 所有请求不管http状态，都会进入本回调

        let reqErr: string = ''

        // 判断是否 隐藏Loading
        if (response.headers['showLogin']) {
            // 关闭 loading 代码
        }

        if(response.status >= 200 && response.status < 300 ) {
            const res: ApiType.ResData = response.data
            if (res.code !== '0000') { // 这里的0000 是与后台 约定
                reqErr = res.errMessage || '服务器错误！'
            }
        } else {
            switch (response.status) {
                case 500:
                    reqErr = '服务器错误(500)'
                    break
                case 502:
                    reqErr = '网关错误'
                    break
                case 503:
                    reqErr = '服务器繁忙'
                    break
                case 404:
                    reqErr = '请求地址不存在'
                    break
                case 405:
                    reqErr = '请求方法错误'
                    break
                default:
                    reqErr = '服务器错误'
            }
        }

        if (reqErr) {
            if (!response.headers['hideErrInfo']) {
                // 提示错误信息
            }
            // 向后台 提交错误信息 s
            // 待接口
            // 向后台 提交错误信息 e
            return  Promise.reject(reqErr)
        } else {
            return response.data
        }

    },
    error => {
        // 按理来说，这里应该是不会进入了
        console.log(error, 'axios-err')
        return Promise.reject(error)
    }
)


export default service
