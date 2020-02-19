import React, {useEffect, ComponentType} from 'react'
import { RouteConfigComponentProps } from 'react-router-config'

export default function (Com: ComponentType<any>) {
    return function (prop: RouteConfigComponentProps) {
        const title = prop.route?.meta?.title
        useEffect(() => {
            if (document) {
                document.title = title
            }
        }, [title])
        return (
            <Com {...prop}></Com>
        )
    }
}
