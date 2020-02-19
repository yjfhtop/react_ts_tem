import { RouteConfig } from "react-router-config";
import baseRouter, { notFoundRouter } from './base'


const allRouter: RouteConfig[] = [
    ...baseRouter,
    // 注意， notFoundRouter 必须放在最后面s
    notFoundRouter
]


export default allRouter
