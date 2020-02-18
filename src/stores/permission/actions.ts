import constants from './constants'

export function updatePermissionRoute<T = StoreType.PermissionRoute[]>(newRouter: T): StoreType.Action<T> {
    return {
        type: constants.permissionRoute,
        value: newRouter
    }
}


