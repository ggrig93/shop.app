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
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";
import BackToTop from "@/components/BackToTop";
import ProductModal from "@/components/ProductModal";
import MobileMenu from "@/components/layout/MobileMenu"
export default {
  name: "App",
  components: {
    ProductModal,
    BackToTop,
    TheHeader,
    TheFooter,
    MobileMenu
  },
  created() {
    this.$store.dispatch('getPageSettings')
    this.$store.dispatch('getCategories')
  },

}
</script>
