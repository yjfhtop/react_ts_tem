import { RouteConfig } from "react-router-config";
import baseRouter, { notFoundRouter } from './base'
import accountRouter from './account'


const allRouter: RouteConfig[] = [
    ...baseRouter,
    ...accountRouter,
    // 注意， notFoundRouter 必须放在最后面s
    notFoundRouter
]


export default allRouter
