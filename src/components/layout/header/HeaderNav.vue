<template>
  <div class="header-nav-container">
    <div class="container">
      <div class="header-nav-wapper main-menu-wapper">
        <div class="vertical-wapper block-nav-categori">
          <div class="block-title" @click="toggleCategories">
                <span class="icon-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
            <span class="text">Բոլոր տեսակները</span>
          </div>
          <div class="block-content verticalmenu-content" :class="{'show-up': openCategories}">
            <ul class="ysera-nav-vertical vertical-menu ysera-clone-mobile-menu">
              <li
                  v-for="item in categories" :key="item.id"
                  class="menu-item"
                  @click="openCategories = false"
              >
                <a
                    class="ysera-menu-item-title"
                    :title="item.name"
                    @click="selectCategory(item.id)"
                >
                  {{item.name}}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="header-nav">
          <div class="container-wapper">
            <ul class="ysera-clone-mobile-menu ysera-nav main-menu " id="menu-main-menu">
              <li :class="['menu-item', item.children.length ? 'menu-item-has-children' : '']" v-for="item in nav" :key="item.id">
                <template>
                  <router-link :to="{name: item.view}" class="ysera-menu-item-title" :title="item.name">{{item.name}}</router-link>
                </template>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerMixin from "@/mixins/header.mixin";
import header from '@/customdata/menu'
import {mapMutations} from "vuex";

export default {
  name: "HeaderNav",
  mixins: [headerMixin],
  data() {
    return {
      nav: header.nav
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    }
  },
  methods: {
    ...mapMutations(["setCategory"]),
    selectCategory(id) {
      this.setCategory([id])
      if(this.$route.name !== 'Products') {
        this.$router.replace({name: 'Products', query: {'filter[categories]': [id]}})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ysera-menu-item-title {
  cursor: pointer;
  &:hover {
    color: #c09578;
  }
}
</style>