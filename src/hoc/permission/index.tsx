import React, {useEffect, useState, ComponentType} from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getUserInfoAct } from '@/stores/user/actions'

// 1：处理手动刷新
// 2: 处理权限

export default function (Com: ComponentType<any>) {
    return function (props: RouteConfigComponentProps) {

        const [ajaxOver, setAjaxOver] = useState(false)

        const state = useSelector<StoreType.State, StoreType.StateTwo>( state => {
            return {
                userInfo: state.user.userInfo,
                whitelist: state.permission.whitelist, // 白名单
                token: state.user.token, // token
                permissionRoutes: state.permission.permissionRoutes // 权限路由
            }
        })
        const dispatch = useDispatch()
        const nowPath = props.location.pathname + props.location.search
        const nowKey: string = props.route?.key as string // 作为路由唯一标识
        let toPathOver = `/login?redirectTo=${encodeURIComponent(nowPath)}`


        useEffect(() => {
            if (state.token) {
                // 用户信息已经获取完毕
                if (state.userInfo?.id) {
                    setAjaxOver(true)
                } else {
                    // 相当于 用户手动 刷新
                    // 获取用户相关信息
                    const p = (dispatch(getUserInfoAct({ showLogin: true, hideErrInfo: false })) as any) as Promise<ApiType.ResData>
                    p.then(() => {
                        setAjaxOver(true)
                    }).catch(() => {
                        setAjaxOver(true)
                    })
                }
            } else {
                setAjaxOver(true)
            }

        }, [dispatch, state.userInfo, state.token])


        if (ajaxOver) {
            // 如果在白名单 或者 在权限路由
            if(state.whitelist?.includes(nowKey) || state.permissionRoutes![nowKey]) {
                return (
                    <Com {...props} />
                )
            } else {
                // 去登录
                return (
                    <Redirect to={toPathOver} />
                )
            }
        } else {
            return (
                <div>
                    加载中
                </div>
            )
        }

    }
}
