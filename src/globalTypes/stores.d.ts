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
        path: string,
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

    type StateKey = keyof State

    type Reducers<T = any> = {
        [K in StoreType.StateKey]: any
    }

    // 算是工具 交叉类型
    type Intersection<TUnion> = (TUnion extends any
        ? (_: TUnion) => void
        : never) extends (_: infer T) => void
        ? T
        : never;

    // 用于 useSelector
    type StateTwo = Partial<Intersection<State[keyof State]>>

}
