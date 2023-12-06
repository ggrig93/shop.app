<template>
  <div>
    <ul>
      <li v-for="item in categories" :key="item.id" class="menu-item" @click="handleItemClick(item.id)">
          {{ item.name }}
        <template v-if="item.sub_sections">
          <HeaderCategories :categories="item.sub_sections"  :key="`key-${item.id}`" ></HeaderCategories>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations} from "vuex";

export default {
  name: 'HeaderCategories',
  props: {
    categories: {
      type: Array,
      default: () => null,
    },
  },
  methods: {
    ...mapMutations(["setCategoryFromMenu"]),
    handleItemClick(itemId) {
      this.setCategoryFromMenu(itemId)
    },
  },
};
</script>