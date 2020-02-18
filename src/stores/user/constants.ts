const constant = {
    userInfo: 'USER_INFO',
    token: 'TOKEN'
} as const


export type ConstantValue<T = typeof constant> = {
    [K in keyof T]: T[K]
}[keyof T]


export default constant
