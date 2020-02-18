import constant from './constants'


const defaultState: StoreType.User = {
    userInfo: {},
    token: ''
}


export default function (state = defaultState, action: StoreType.Action): StoreType.User {
    switch (action.type) {
        case constant.userInfo:
            return {...state, userInfo: action.value}
        case constant.token:
            return {...state, token: action.value}
        default:
            return state
    }
}
