declare namespace StoreType {

    interface Action<P = any> {
        type: string,
        value: P
    }

    interface UserInfo {
        name?: string,
        headPortrait?: string
    }

    // 权限路由， 可能 有其他参数
    interface PermissionRoute {
        path: string
    }


    interface User {
        userInfo: UserInfo,
        token: string
    }

    interface Permission {
        whitelist: string[],
        permissionRoutes: PermissionRoute[]
    }

    // 总store 的 state
    interface State {
        user: User,
        permission: Permission
    }

}
