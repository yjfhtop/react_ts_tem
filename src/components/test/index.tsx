import React from "react";
import { useSelector } from 'react-redux'

export default function () {

    const aaa = useSelector<StoreType.State>( state => {
        console.log(state);
        return {
            whitelist: state.permission.whitelist
        }
    })

    console.log(aaa, 'aaa');

    return (
        <div>

        </div>
    )
}
