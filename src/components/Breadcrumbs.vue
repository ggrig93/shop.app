<template>
  <div class="breadcrumb-trail breadcrumbs">
    <ul class="trail-items breadcrumb">
      <li class="trail-item trail-begin">
        <router-link :to="{name: 'Home'}">Գլխավոր էջ</router-link>
      </li>
      <li class="trail-item trail-end active">
        {{currentRouteName}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  computed: {
    currentRouteName() {
      switch (this.$route.name) {
        case 'About':
          return 'Մեր մասին';
        case 'Checkout':
          return 'Պատվերի էջ';
        case 'WishList':
          return 'Հավանումներ';
        case 'ShoppingCart':
          return 'Իմ զամբյուղը';
        default:
          return this.$route.name
      }
    }
  }
}
</script>

<style scoped>

</style>