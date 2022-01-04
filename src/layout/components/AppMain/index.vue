<template>
  <section class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
    <keep-alive :include="cachedViews">
      <router-view :key="key" />
    </keep-alive>
    <!-- </transition> -->
  </section>
</template>

<script>
export default {
  name: "AppMain",
  data() {
    return {
    };
  },
  computed: {
    cachedViews() {
      return []
    },
    key() {
      return this.$route.fullPath
    }
  }

};
</script>