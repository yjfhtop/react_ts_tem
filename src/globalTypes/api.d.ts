declare namespace ApiType {

    interface ReqConfig {
        showLogin?: boolean, // 在请求过程中是否 显示 Loading
        hideErrInfo?: boolean // 如果请求错误，是否隐藏提示
    }

    interface ResData<T = any> {
        data: T,
        code: string,
        errMessage: string
    }


    declare namespace User {
        interface UserLogin {
            username: string,
            password: string
        }
    }
}
