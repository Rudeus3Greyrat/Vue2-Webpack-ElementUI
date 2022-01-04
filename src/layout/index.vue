<template>
  <div :class="classObj" class="app-wrapper">
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
    <sidebar class="sidebar-container" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import { Sidebar, Navbar, AppMain } from "./components";
export default {
  data() {
    return {};
  },
  components: { Sidebar, Navbar, AppMain },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 0 24px 24px;
  .main-container {
    overflow: auto;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 12px 24px 55px;
    background: #fff;
    border-radius: 2px;
  }
}
</style>