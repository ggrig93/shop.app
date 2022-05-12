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
            <span class="text">All Categories</span>
          </div>
          <div class="block-content verticalmenu-content" :class="{'show-up': openCategories}">
            <ul class="ysera-nav-vertical vertical-menu ysera-clone-mobile-menu">
<!--              :class="[item.children.length ? 'menu-item-has-children' : '']"-->
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
<!--                <template v-if="item.children.length">-->
<!--                  <SubMenu :children="item.children"/>-->
<!--                </template>-->
              </li>
            </ul>
          </div>
        </div>
        <div class="header-nav">
          <div class="container-wapper">
            <ul class="ysera-clone-mobile-menu ysera-nav main-menu " id="menu-main-menu">
              <li :class="['menu-item', item.children.length ? 'menu-item-has-children' : '']" v-for="item in nav" :key="item.id">
<!--                <template v-if="item.name === 'Pages'">-->
<!--                  <a href="javascript:void(0)" class="ysera-menu-item-title" :title="item.name">{{item.name}}</a>-->
<!--                  <div class="submenu mega-menu menu-page container" style="left: -483px">-->
<!--                    <div class="row">-->
<!--                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item" v-for="child in item.children" :key="child.id">-->
<!--                        <div class="ysera-custommenu default">-->
<!--                          <h2 class="widgettitle">{{child.name}}</h2>-->
<!--                          <ul class="menu">-->
<!--                            <li class="menu-item" v-for="i in child.children" :key="i.id">-->
<!--                              <a href="javascript:void(0)">{{i.name}}</a>-->
<!--                            </li>-->
<!--                          </ul>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </template>-->
                <template>
                  <router-link :to="{name: item.view}" class="ysera-menu-item-title" :title="item.name">{{item.name}}</router-link>
                  <template v-if="item.children.length">
                    <span class="toggle-submenu"></span>
                    <SubMenu :children="item.children"/>
                  </template>
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
import SubMenu from "@/components/SubMenu";
import {mapMutations} from "vuex";

export default {
  name: "HeaderNav",
  components: {SubMenu},
  mixins: [headerMixin],
  data() {
    return {
      menu: header.menu,
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

<style scoped>
.ysera-menu-item-title {
  cursor: pointer;
}
</style>