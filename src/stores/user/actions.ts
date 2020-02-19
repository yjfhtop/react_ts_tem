import { Dispatch } from 'redux';
import constants from './constants'
import { userLogin } from '@/api/user'


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



// 使用 redux-thunk
export function userLoginAct(loginData: ApiType.User.UserLogin) {
    return (dispatch: Dispatch) => {
        return new Promise((resolve, reject) => {
            userLogin(loginData).then(data => {
                dispatch(updateTokenAct(data.data.token))
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}


