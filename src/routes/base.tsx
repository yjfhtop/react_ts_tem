import {lazy} from "react";
import { RouteConfig } from './types'

const home = lazy(() => import("../view/home/home"));
const login = lazy(() => import("../view/login/login"));
const notFound = lazy(() => import("../view/errPage/404/404"));

const routers: RouteConfig[] = [
    {
        key: 'home',
        path: '/',
        exact: true,
        // component: baseRouterHOC(suspenseComponentHOC(home)),
        component: home,
        meta: {
            title: '首页'
        }
    },
    {
        key: 'login',
        path: '/',
        exact: true,
        // component: baseRouterHOC(suspenseComponentHOC(login)),
        component: login,
        meta: {
            title: '首页'
        }
    }
]

export default routers

const notFoundRouter: RouteConfig = {
    key: '404',
    path: '*',
    // component: baseRouterHOC(suspenseComponentHOC(notFound)),
    component: notFound,
    meta: {
        title: '404'
    }
}

export { notFoundRouter }
