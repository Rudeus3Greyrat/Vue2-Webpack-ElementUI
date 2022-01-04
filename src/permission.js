import router, { localAdminRoutes } from '@/router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Message } from 'element-ui'
import { checkUrlHasCodeState } from './utils/e2'


NProgress.configure({ showSpinner: false })
const whiteList = ['/login', '/hint']
router.beforeEach(async (to, from, next) => {
  NProgress.start()

  // !u2登录返回code state
  const U2Params = checkUrlHasCodeState()
  if (U2Params) {
    window.location.href = location.origin
  }

  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    // 检查是否登录
    if (store.getters.token) {
      if (to.path === '/login') {
        // 重定向
        next({ path: '/' })
        NProgress.done()
      } else {
        // *valid 重新用token刷用户数据（刷新页面）
        if (!store.getters.valid) {
          try {
            await store.dispatch('user/getUserMainInfo')
            if (store.getters.dynamicRoutes.length === 0) {
              // *获取用户该系统菜单
              await store.dispatch('permission/getAsyncRoutes')
              if (store.getters.dynamicRoutes.length > 0) {
                router.addRoutes(store.getters.dynamicRoutes)
                router.options.routes = store.getters.routes
                next({ ...to, replace: true })
              }
              // !无菜单需特殊处理
              else {
                Message.error('无该系统权限')
                next('/hint?type=auth')
                NProgress.done()
              }
            } else {
              next()
            }
          } catch (err) {
            Message.error(err || '调取用户信息失败，可点击返回首页重试')
            next(`/hint`)
            NProgress.done()
          }
        } else {
          next()
        }
      }
    } else {
      next(`/login`)
      NProgress.done()
    }
  }
})

router.afterEach((to) => {
  // Finish progress bar
  NProgress.done()

  // set page title
  document.title = to.meta.title || '管理系统'
})
