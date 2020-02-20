import React ,{lazy} from "react";
import { RouteConfig } from "react-router-config";
import {Redirect} from 'react-router-dom'
import baseHOC from '@/hoc/base'
import permissionHOC from '@/hoc/permission'

const home = lazy(() => import("../view/home/home"));
const login = lazy(() => import("../view/login/login"));
const notFound = lazy(() => import("../view/errPage/404/404"));

const routers: RouteConfig[] = [
    {
        key: 'home',
        path: '/',
        exact: true,
        // component: baseRouterHOC(suspenseComponentHOC(home)),
        component: permissionHOC(baseHOC(home)),
        meta: {
            title: '首页'
        }
    },
    {
        key: 'login',
        path: '/login',
        exact: true,
        component: permissionHOC(baseHOC(login)),
        // component: login,
        meta: {
            title: '首页'
        }
    },
    {
        key: '404',
        path: '/404',
        component: notFound,
        meta: {
            title: '404'
        }
    }
]

export default routers

const notFoundRouter: RouteConfig = {
    key: 'notFind',
    path: '*',
    render: () => <Redirect to={"/404"}/>,
    meta: {
        title: '404'
    }
}

export { notFoundRouter }
