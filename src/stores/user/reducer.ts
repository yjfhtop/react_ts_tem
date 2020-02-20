import constant from './constants'
import { setToken, getToken, removeToken } from '@/utils/auth'


const defaultState: StoreType.User = {
    userInfo: {
        id: ''
    },
    token: getToken()!
}


export default function (state = defaultState, action: StoreType.Action): StoreType.User {
    switch (action.type) {
        case constant.userInfo:
            return {...state, userInfo: action.value}
        case constant.token:
            if (action.value) {
                setToken(action.value)
            } else {
                removeToken()
            }
            return {...state, token: action.value}
        default:
            return state
    }
}
