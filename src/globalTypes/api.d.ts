declare namespace ApiType {
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
