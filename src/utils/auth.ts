import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken(): string | undefined {
    return Cookies.get(TokenKey)
}

export function setToken(newToken: string): void {
    Cookies.set(TokenKey, newToken)
}

export function removeToken(): void {
    return Cookies.remove(TokenKey)
}
