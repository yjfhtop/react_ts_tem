import React, {useEffect, ComponentType} from 'react'
import { RouteConfigComponentProp } from '@/routes/types'
import { RouteConfigComponentProps } from 'react-router-config'

export default function (Com: ComponentType<any>) {
    return function (prop: RouteConfigComponentProps) {
        let p: RouteConfigComponentProp = prop as RouteConfigComponentProp

        useEffect(() => {})
        return (
            <Com {...prop}></Com>
        )
    }
}
