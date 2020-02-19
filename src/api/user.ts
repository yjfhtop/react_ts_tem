import request from '@/utils/request'

export function userLogin(loginData: ApiType.User.UserLogin, reqConfig?: ApiType.ReqConfig): Promise<ApiType.ResData> {
    return request.post('/userLogin', loginData, {
        headers: {...reqConfig}
    })
}
