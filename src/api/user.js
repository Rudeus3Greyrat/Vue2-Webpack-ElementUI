import request from '@/request'
import qs from 'qs'

const baseURL = process.env.VUE_APP_BASE_API
const authURL = process.env.VUE_APP_AUTH_API

const api = {
    getE2Token: baseURL + 'dukeLogin/e2login',
    getUserMainInfo: authURL + 'user/api/getUserAuthByEmail',
    getUserMenuBySysId: authURL + 'user/api/getUserMenuTreeBySysIdAndEmail',
    logoutSystem: authURL + 'dukeLogin/e2logout'
}



// E2 登录获取 token
export const getE2Token = (data) =>
    request({
        url: api.getE2Token,
        method: 'post',
        data: qs.stringify(data)
    })


// token 获取用户信息
export const getUserMainInfo = (params) =>
    request({
        url: api.getUserMainInfo,
        method: 'get',
        params
    })


// 获取菜单数据
export const getUserMenuBySysId = (params) =>
    request({
        url: api.getUserMenuBySysId,
        method: 'get',
        params
    })


// 登出
export const logoutSystem = (data) =>
    request({
        url: api.logoutSystem,
        method: 'post',
        data: qs.stringify(data)
    })

