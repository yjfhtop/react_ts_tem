import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { userLoginAct } from '@/stores/user/actions'


export default function () {

    const aaa = useSelector<StoreType.State, StoreType.StateTwo>( state => {
        return {
            whitelist: state.permission.whitelist,
            token: state.user.token
        }
    })
    console.log(aaa, 'aaa');

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userLoginAct({ username: 'xx', password: 'xsdfsssdx' }))
    }, [dispatch])

    return (
        <div>
            token:
        </div>
    )
}
