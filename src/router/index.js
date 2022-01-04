import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout/index'


/*

  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  hiddenChild:true               子路由隐藏
  alwaysShow:true                强制显示（默认规则有子路由）
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    redirect:noredirect          禁止面包屑点击跳转
    sidebar:'parentURL'          解决隐藏的子菜单在菜单中不显示父级选中
    nested: true                 提供外部内嵌使用
  }
*/

export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    name:'xx',
    hidden: true,
    meta: {
        title: '登录'
    },
}, {
    path: '/hint',
    component: () => import('@/views/hint/index'),
    hidden: true,
    meta: {
        title: '提示'
    },
}]

export const localAdminRoutes = [ {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
        title: 'dash',
        icon: 'documentation'
    },
    children: [{
        path: '/home',
        name: 'home1',
        component: () => import('@/views/home/index'),
        meta: {
            title: 'page1',
            icon: 'documentation'
        }
    }, {
        path: '/time',
        name: 'time2',
        component: () => import('@/views/home/index'),
        meta: {
            title: 'page2',
            icon: 'documentation'
        }
    }, {
        path: '/go',
        name: 'go3',
        component: () => import('@/views/home/index'),
        meta: {
            title: 'page3',
            icon: 'documentation'
        }
    }]
}]



const createRouter = () => new Router({
    mode: 'hash',
    base: process.env.VUE_APP_ROUTER_BASE,
    routes: constantRoutes,
    scrollBehavior: () => ({ y: 0 }), //解决路由跳转后scrollTop
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}


export default router