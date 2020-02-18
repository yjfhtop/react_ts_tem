const constant = {
    whitelist: 'WHITELIST', // whitelist
    permissionRoute: 'PERMISSION_ROUTE' // permissionRoute
} as const


export type ConstantValue<T = typeof constant> = {
    [K in keyof T]: T[K]
}[keyof T]


export default constant
