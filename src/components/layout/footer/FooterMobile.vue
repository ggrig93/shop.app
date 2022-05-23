<template>
  <div class="footer-device-mobile">
    <div class="wapper">
      <div class="footer-device-mobile-item device-home">
        <router-link :to="{name: 'Home'}">
					<span class="icon">
						<i class="fa fa-home" aria-hidden="true"></i>
					</span>
          Home
        </router-link>
      </div>
      <div class="footer-device-mobile-item device-home device-cart device-wishlist">
        <router-link :to="{name: 'WishList'}">
					<span class="icon">
						<i class="fa fa-heart" aria-hidden="true"></i>
            <span class="count-icon">
							{{wishListCount}}
						</span>
					</span>
          Wishlist
        </router-link>
      </div>
      <div class="footer-device-mobile-item device-home device-cart">
        <router-link :to="{name: 'ShoppingCart'}">
					<span class="icon">
						<i class="fa fa-shopping-basket" aria-hidden="true"></i>
						<span class="count-icon">
							{{shopCartCount}}
						</span>
					</span>
          <span class="text">Cart</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMobile",
  computed: {
    shopCartCount() {
      return this.$store.state.shopProducts?.length ?
          this.$store.state.shopProducts.length :
          JSON.parse(localStorage.getItem("shopProducts")) ?
              JSON.parse(localStorage.getItem("shopProducts")).length : 0
    },
    wishListCount() {
      return this.$store.state.wishList?.length ?
          this.$store.state.wishList.length :
          JSON.parse(localStorage.getItem("wishList")) ?
              JSON.parse(localStorage.getItem("wishList")).length : 0
    },
  }
}
</script>