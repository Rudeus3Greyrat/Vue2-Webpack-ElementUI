
import { getU2AT, getU2Email, getUserId } from '@/utils/cookies'
import { getUserMainInfo } from '@/api/user'

const state = {
  valid: false,
  token: getU2AT() || '',
  // token: getU2AT() || 'b765f601-ce39-4094-89cd-9d97d9f40e81',
  userId: getUserId() || '',
  sysId: '',
  superUser: false,
  email: getU2Email() || '',
  authInfo: {}
}

const mutations = {
  SET_VALID(state, valid) {
    state.valid = valid;
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER_ID(state, userId) {
    state.userId = userId;
  },
  SET_AUTH_INFO(state, obj) {
    state.authInfo = obj;
  },
  SET_EMAIL(state, email) {
    state.email = email;
  },
  SET_SYS_ID(state, sysId) {
    state.sysId = sysId;
  },
  SET_SUPER_USER(state, superUser) {
    state.superUser = superUser;
  }
}

const actions = {
  // *token 获取用户信息
  async getUserMainInfo({ state, commit }) {
    const params = { userEmail: state.email }
    const { data } = await getUserMainInfo(params)

    if (!data) {
      throw Error('GetUserMainInfo fail!')
    }
    commit('SET_USER_ID', data.userId)
    commit('SET_AUTH_INFO', data);
    commit('SET_VALID', true);
  },
  // *登出
  async LogOut({ state }) {
    if (state.token === '') {
      console.log('LogOut: token is undefined!')
    }
    const logout_url = process.env.VUE_APP_E2_LOGOUT_URL;
    const redirect_url = location.origin;
    window.location.href = `${logout_url}?returnUrl=${redirect_url}`;
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
