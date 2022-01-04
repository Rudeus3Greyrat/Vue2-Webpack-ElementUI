<template>
  <div class="navbar-container">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container"
               @toggleClick="toggleSideBar" />

    <div class="nav-handle-block fr d-flex ai-center pr-5">
      <p class="pr-6">test</p>
      <el-dropdown>
        <i class="el-icon-setting mr-3 pointer"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'

export default {
  components: { Hamburger },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['sidebar']),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
.nav-handle-block {
  height: 100%;
}
</style>
