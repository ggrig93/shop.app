<template>
  <ul class="submenu" v-if="children.length">
    <li
        :class="['menu-item', child.children.length ? 'menu-item-has-children' : '']"
        v-for="child in children" :key="child.id"
    >
      <a href="javascript:void(0)" class="ysera-menu-item-title" :title="child.name">{{child.name}}</a>
      <template v-if="children && child.children.length">
        <Menu :children="child.children" />
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Menu",
  props: {
    children: Array,
    default: () => null
  }
}
</script>
