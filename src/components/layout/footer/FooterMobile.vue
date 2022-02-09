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
      <div class="footer-device-mobile-item device-home device-wishlist">
        <a href="#">
					<span class="icon">
						<i class="fa fa-heart" aria-hidden="true"></i>
					</span>
          Wishlist
        </a>
      </div>
      <div class="footer-device-mobile-item device-home device-cart">
        <router-link :to="{name: 'ShoppingCart'}">
					<span class="icon">
						<i class="fa fa-shopping-basket" aria-hidden="true"></i>
						<span class="count-icon">
							0
						</span>
					</span>
          <span class="text">Cart</span>
        </router-link>
      </div>
      <div class="footer-device-mobile-item device-home device-user">
        <a href="login.html">
					<span class="icon">
						<i class="fa fa-user" aria-hidden="true"></i>
					</span>
          Account
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterMobile"
}
</script>