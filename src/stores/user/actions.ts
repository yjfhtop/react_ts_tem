import constants from './constants'

export function updateUserInfo<T = StoreType.UserInfo>(userInfo: T): StoreType.Action<T> {
    return {
        type: constants.userInfo,
        value: userInfo
    }
}

export function updateToken<T = string>(token: T): StoreType.Action<T> {
    return {
        type: constants.userInfo,
        value: token
    }
}


