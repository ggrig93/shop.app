<template>
  <div>
    <header class="header style7">
      <TopBar/>
      <div class="container">
        <HeaderMain/>
      </div>
      <HeaderNav class="rows-space-20"/>
    </header>
    <HeaderMobile/>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  components: {
    HeaderNav: () => import("@/components/layout/header/HeaderNav"),
    HeaderMain: () => import("@/components/layout/header/HeaderMain"),
    TopBar: () => import("@/components/layout/header/TopBar"),
    HeaderMobile: () => import("@/components/layout/header/HeaderMobile")
  },
}
</script>