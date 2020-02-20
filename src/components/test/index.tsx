import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { userLoginAct } from '@/stores/user/actions'

export default function () {

    const state = useSelector<StoreType.State, StoreType.StateTwo>( state => {
        return {
            whitelist: state.permission.whitelist,
            token: state.user.token
        }
    })

    // 可能要存储路由元信息  如果需要的话

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userLoginAct({ username: 'xx', password: 'xsdfsssdx' }))
    }, [dispatch])

    return (
        <div>
            token: {state.token}
        </div>
    )
}
