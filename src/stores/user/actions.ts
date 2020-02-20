import { Dispatch } from 'redux';
import constants from './constants'
import { userLogin, getUserInfo } from '@/api/user'
import { updatePermissionRouteAct } from '../permission/actions'


export function updateUserInfoAct<T = StoreType.UserInfo>(userInfo: T): StoreType.Action<T> {
    return {
        type: constants.userInfo,
        value: userInfo
    }
}

export function updateTokenAct<T = string>(token: T): StoreType.Action<T> {
    return {
        type: constants.token,
        value: token
    }
}



// 使用 redux-thunk， 用户注册
export function userLoginAct(loginData: ApiType.User.UserLogin, reqConfig?: ApiType.ReqConfig) {
    return (dispatch: Dispatch) => {
        return new Promise((resolve, reject) => {
            userLogin(loginData, reqConfig).then(data => {
                dispatch(updateTokenAct(data.data.token))
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

// 获取用户信息 和 用户权限路由
export function getUserInfoAct(reqConfig?: ApiType.ReqConfig) {
    return (dispatch: Dispatch) => {
        return new Promise((resolve, reject) => {
            getUserInfo(reqConfig).then(data => {
                dispatch(updateUserInfoAct(data.data.userInfo))
                const routes = data.data.routers ? data.data.routers : {}
                dispatch(updatePermissionRouteAct(routes))
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
