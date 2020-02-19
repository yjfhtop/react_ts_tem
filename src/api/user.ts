import request from '@/utils/request'

export function userLogin(loginData: ApiType.User.UserLogin): Promise<ApiType.ResData> {
    return request.post('/userLogin', loginData)
}
