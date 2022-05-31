<template>
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <div class="header-message">
          Բարի գալուստ մեր online խանութ
        </div>
      </div>
<!--      <div class="top-bar-right">-->
<!--        <div class="header-language">-->
<!--          <div class="ysera-language ysera-dropdown"-->
<!--               :class="{'open': openLangMenu}"-->
<!--               v-click-outside="hideLangMenu"-->
<!--          >-->
<!--            <a href="javascript:void(0);"-->
<!--               class="active language-toggle"-->
<!--               data-ysera="ysera-dropdown"-->
<!--               @click.prevent="toggleLangMenu"-->
<!--            >-->
<!--              <span>English (USD)</span>-->
<!--            </a>-->
<!--            <ul class="ysera-submenu">-->
<!--              <li class="switcher-option">-->
<!--                <a href="javascript:void(0)">-->
<!--                  <span>French (EUR)</span>-->
<!--                </a>-->
<!--              </li>-->
<!--              <li class="switcher-option">-->
<!--                <a href="javascript:void(0)">-->
<!--                  <span>Japanese (JPY)</span>-->
<!--                </a>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--        </div>-->
<!--        <ul class="header-user-links">-->
<!--          <li>-->
<!--            <router-link :to="{name: 'Authentication'}">Login or Register</router-link>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import headerMixin from "@/mixins/header.mixin";

export default {
  name: "TopBar",
  mixins: [headerMixin]
}
</script>