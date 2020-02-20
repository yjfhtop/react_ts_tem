import React from "react";
import { useDispatch } from 'react-redux'
import { RouteConfigComponentProps } from 'react-router-config'
import { userLoginAct } from '@/stores/user/actions'
import { queryUrlToObj } from '@/utils'

export default function (prop: RouteConfigComponentProps) {

    const dispatch = useDispatch();

    function login() {
        const loginPromise = (dispatch(userLoginAct({ username: '', password: '' })) as any ) as Promise<ApiType.ResData>
        loginPromise.then(res => {
            console.log(prop.location.search, 'prop');
            let queryObj = queryUrlToObj(prop.location.search)
            if (queryObj['redirectTo']) {
                prop.history.push(queryObj['redirectTo'])
            } else {
                prop.history.push('/')
            }
        })
    }

    return (
        <div>
            <button onClick={login}>login</button>
        </div>
    )
}
