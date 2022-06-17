<template>
  <div id="app">
    <MobileMenu/>
    <TheHeader/>
    <router-view :key="$route.fullPath"/>
    <TheFooter/>
    <BackToTop/>
    <ProductModal/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    ProductModal: () => import("@/components/ProductModal"),
    BackToTop: () => import("@/components/BackToTop"),
    TheHeader: () => import("@/components/layout/TheHeader"),
    TheFooter: () => import("@/components/layout/TheFooter"),
    MobileMenu: () => import("@/components/layout/MobileMenu")
  },
  created() {
    this.$store.dispatch('getCategories')
  },
}
</script>
