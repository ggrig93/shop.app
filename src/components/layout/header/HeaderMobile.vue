<template>
  <div class="header-device-mobile">
    <div class="wapper">
      <div class="item mobile-logo">
        <div class="logo">
          <router-link :to="{name: 'Home'}">
            <img src="http://ledthanhdat.vn/html/ysera/assets/images/logo.png" alt="img">
          </router-link>
        </div>
      </div>
      <div class="item item mobile-search-box has-sub" :class="{'open': openSearchBar}">
        <a href="javascript:void(0)" @click="openSearchBar = true; openLangMenu = false">
						<span class="icon">
							<i class="fa fa-search" aria-hidden="true"></i>
						</span>
        </a>
        <div class="block-sub">
          <a href="#" class="close" @click="openSearchBar = false">
            <i class="fa fa-times" aria-hidden="true"></i>
          </a>
          <div class="header-searchform-box">
            <form class="header-searchform">
              <div class="searchform-wrap">
                <input type="text" class="search-input" placeholder="Enter keywords to search...">
                <input type="submit" class="submit button" value="Search">
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="item mobile-settings-box has-sub" :class="{'open': openLangMenu}">
        <a href="javascript:void(0)" @click="openLangMenu = true; openSearchBar = false">
						<span class="icon">
							<i class="fa fa-cog" aria-hidden="true"></i>
						</span>
        </a>
        <div class="block-sub">
          <a href="javascript:void(0)" class="close" @click="openLangMenu = false">
            <i class="fa fa-times" aria-hidden="true"></i>
          </a>
          <div class="block-sub-item">
            <h5 class="block-item-title">Currency</h5>
            <form class="currency-form ysera-language">
              <ul class="ysera-language-wrap">
                <li class="active">
                  <a href="#">
											<span>
												English (USD)
											</span>
                  </a>
                </li>
                <li>
                  <a href="#">
											<span>
												French (EUR)
											</span>
                  </a>
                </li>
                <li>
                  <a href="#">
											<span>
												Japanese (JPY)
											</span>
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div class="item menu-bar">
        <a class=" mobile-navigation  menu-toggle" href="javascript:void(0)" @click="openMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import headerMixin from "@/mixins/header.mixin";
export default {
  name: "HeaderMobile",
  mixins: [headerMixin]
}
</script>