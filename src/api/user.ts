import request from '@/utils/request'

// 用户登录
export function userLogin(loginData: ApiType.User.UserLogin, reqConfig?: ApiType.ReqConfig): Promise<ApiType.ResData> {
    return request.post('/userLogin', loginData, {
        headers: {...reqConfig}
    })
}

// 获取用户信息
export function getUserInfo(reqConfig?: ApiType.ReqConfig): Promise<ApiType.ResData> {
    return request.get('/get/userInfo', {
        headers: {...reqConfig}
    })
}
