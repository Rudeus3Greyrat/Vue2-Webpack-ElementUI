import store from '@/store'
import { constantRoutes, localAdminRoutes} from '@/router'
import { getUserMenuBySysId } from '@/api/user'

// *扁平处理本地设置路由
const getLocalFlatRoute = (routes) => {
    const arr = []
    routes.forEach((r) => {
        if (r.children && r.children.length > 0) {
            arr.push(getLocalFlatRoute(r.children))
        }
        arr.push(r)
    });
    return arr
}


// *生成动态顺序路由
const filterAsyncRoutes = (asyncMenu, flatLocalRoutes) => {
    const newMenu = asyncMenu
    newMenu.forEach((ar, ai) => {
        flatLocalRoutes.forEach((lr) => {
            if (!!lr.meta.code && (ar.menuCode === lr.meta.code)) {
                newMenu[ai] = lr
            }

            if (ar.children && ar.children.length > 0) {
                newMenu[ai].children = filterAsyncRoutes(ar.children, flatLocalRoutes)
            }
        });
    });
    return newMenu
}

const state = {
    routes: [],
    dynamicRoutes: []
}
const mutations = {
    SET_ROUTES(state,asyncRoutes) {
        state.routes = constantRoutes.concat(asyncRoutes)
        state.dynamicRoutes = asyncRoutes
    }
}
const actions = {
    async getAsyncRoutes({ commit }) {
        const authInfo = store.getters.authInfo;
        const sysName = process.env.VUE_APP_SYS_NAME
        // 权限系统Info
        const authSystem = authInfo.systems.filter((v) => v.sysName === sysName)[0]
        console.log(authInfo.systems)
        // 无该系统权限
        if (!authSystem) return;

        const params = {
            email: store.getters.email,
            sysId: authSystem.sysId,
        }

        store.commit('user/SET_SYS_ID', authSystem.sysId)

        const { data } = await getUserMenuBySysId(params)
        if (!data) {
            throw Error('Get routes fail , please request again.')
        }

        let asyncRoutes = []

        if (data.length > 0) {
            console.log('用户菜单：', data)
            const flatLocalRoutes = getLocalFlatRoute(localAdminRoutes).flat(Infinity)
            asyncRoutes = filterAsyncRoutes(data, flatLocalRoutes)
            console.log('过滤本地生成菜单：', asyncRoutes)
            commit('SET_ROUTES',asyncRoutes)
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}