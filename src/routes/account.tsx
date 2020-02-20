import React ,{lazy} from "react";
import { RouteConfig } from "react-router-config";
import {Redirect} from 'react-router-dom'
import baseHOC from '@/hoc/base'
import permissionHOC from '@/hoc/permission'

import NullLayout from '@/layouts/Null'

const my = lazy(() => import("../view/account/my/my"));
const updatePassword = lazy(() => import("../view/account/updatePassword/updatePassword"));

const routers: RouteConfig[] = [
    {
        component: NullLayout,
        routes: [
            {
                key: 'my',
                path: '/my/index',
                component: permissionHOC(baseHOC(my)),
                meta: {
                    title: '我的'
                }
            },
            {
                key: 'updatePassword',
                path: '/my/updatePassword',
                component: permissionHOC(baseHOC(updatePassword)),
                meta: {
                    title: '修改密码'
                }
            }
        ]
    },
]

export default routers
