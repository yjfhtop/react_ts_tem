import constants from './constants'

export function updatePermissionRouteAct<T = StoreType.PermissionRoute[]>(newRouter: T): StoreType.Action<T> {
    return {
        type: constants.permissionRoute,
        value: newRouter
    }
}


