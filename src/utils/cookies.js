import Cookies from 'js-cookie'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus) => Cookies.set(sidebarStatusKey, sidebarStatus)

// SysId
const U2AT = 'U2AT'
export const getU2AT = () => Cookies.get(U2AT)
export const setU2AT = (id) => Cookies.set(U2AT, id)
export const removeU2AT = () => Cookies.remove(U2AT)

// SysId
const U2Email = 'U2Email'
export const getU2Email = () => Cookies.get(U2Email)
export const setU2Email = (id) => Cookies.set(U2Email, id)
export const removeU2Email = () => Cookies.remove(U2Email)


// User
const tokenKey = 'access_token'
export const getToken = () => Cookies.get(tokenKey)
export const setToken = (token) => Cookies.set(tokenKey, token)
export const removeToken = () => Cookies.remove(tokenKey)


// UserInfo
const userInfo = 'userInfo'
export const getUserInfo = () => Cookies.get(userInfo)
export const setUserInfo = (info) => Cookies.set(userInfo, info)
export const removeUserInfo = () => Cookies.remove(userInfo)


// email
const email = 'email'
export const getEmail = () => Cookies.get(email)
export const setEmail = (data) => Cookies.set(email, data)
export const removeEmail = () => Cookies.remove(email)

// userId
const userId = 'userId'
export const getUserId = () => Cookies.get(userId)
export const setUserId = (data) => Cookies.set(userId, data)
export const removeUserId = () => Cookies.remove(userId)


// SysId
const sysId = 'sys_id'
export const getSysId = () => Cookies.get(sysId)
export const setSysId = (id) => Cookies.set(sysId, id)
export const removeSysId = () => Cookies.remove(sysId)



// 清除所有cookie
export const clearAllCookie = () => {
    let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (let i = keys.length; i--;)
            Cookies.remove(keys[i])
    }
}