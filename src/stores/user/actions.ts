import { Dispatch } from 'redux';
import constants from './constants'
import { userLogin, getUserInfo } from '@/api/user'
import { updatePermissionRouteAct } from '../permission/actions'
import allRouter from '@/routes'


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

                // 暂时不使用后台 权限 s
                /*const routes = data.data.routers ? data.data.routers : {}*/
                // 暂时不使用后台 权限 e

                // 获取用户信息后 将所有路由添加至权限路由 暂时用法 s
                const routes: { [key: string]: StoreType.PermissionRoute } = {}
                allRouter.forEach(item => {
                    if (item.key) {
                        /*let citem: StoreType.PermissionRoute = {
                            'key': item.key!,
                            'path': item.path
                        }*/
                        routes[item.key] = {
                            key: item.key as string,
                            path: item.path as string
                        }
                    }
                })
                // 获取用户信息后 将所有路由添加至权限路由 暂时用法 e

                dispatch(updatePermissionRouteAct(routes))
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
