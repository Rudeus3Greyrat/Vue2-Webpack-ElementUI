const getters = {
    sidebar: state => state.app.sidebar,

    valid: state => state.user.valid,
    token: state => state.user.token,
    sysId: state => state.user.sysId,
    superUser: state => state.user.superUser,
    email: state => state.user.email,
    authInfo: state => state.user.authInfo,

    routes: state => state.permission.routes,
    dynamicRoutes: state => state.permission.dynamicRoutes,
}


export default getters