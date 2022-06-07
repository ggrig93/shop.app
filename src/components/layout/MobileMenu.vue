<template>
  <transition-group name="slide">
    <div class="ysera-menu-clone-wrap open" v-if="open" key="slide" style="overflow: hidden">
      <div class="ysera-menu-panels-actions-wrap">
        <a v-if="historyMenu.length" class="ysera-menu-prev-panel" href="javascript:void(0)" @click="goBack"></a>
        <span class="ysera-menu-current-panel-title">{{titleMenu}}</span>
        <a class="ysera-menu-close-btn ysera-menu-close-panels" href="javascript:void(0)" @click="open = false">x</a>
      </div>
      <transition name="slide-fade">
        <div class="ysera-menu-panels" :key="key">
          <div class="ysera-menu-panel">
            <ul class="depth-01">
              <li
                  :class="['menu-item clone-menu-item', item.children.length ? 'menu-item-has-children' : '']"
                  v-for="item in menu" :key="item.id*Math.random()"
              >
                <a
                    class="ysera-menu-item-title"
                    :title="item.name"
                    @click="selectPage(item)"
                >{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </transition-group>
</template>

<script>
import {bus} from '@/main'
import header from '@/customdata/menu'

export default {
  name: "MobileMenu",
  data() {
    return {
      open: false,
      key: 1,
      menu: header.mobileMenu,
      historyMenu: [],
      titleMenu: 'BeMine'
    }
  },
  mounted() {
    bus.$on('open-menu', this.openMenu)
  },
  methods: {
    selectPage(item) {
      this.$router.push({name: item.view})
      this.open = false
    },
    openMenu() {
      this.open = true
    },
    goBack() {
      const obj = this.historyMenu.pop()
      this.titleMenu = obj.title
      // this.menu = obj.child
      this.key = !this.key
    }
  }
}
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: transform .5s;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}

.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
}
</style>
