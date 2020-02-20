import constant from './constants'



const defaultState: StoreType.Permission = {
    whitelist: ['login', '404'],
    permissionRoutes: {}
}


export default function (state = defaultState, action: StoreType.Action): StoreType.Permission {
    switch (action.type) {
        case constant.whitelist:
            return {...state, whitelist: action.value}
        case constant.permissionRoute:
            return {...state, permissionRoutes: action.value}
        default:
            return state
    }
}
