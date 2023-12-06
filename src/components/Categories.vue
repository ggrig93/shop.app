<template>
<ul>
  <li v-for="cat in categories" :key="cat.id">
    <Checkbox
        id="category"
        :label="cat.name"
        :className="cat.parent_id ? '' : 'bold-label' "
        :input-value="cat.id"
        v-model="model"
    />
    <template v-if="cat.sub_sections">
      <Categories :categories="cat.sub_sections" v-model="model">
      </Categories>
    </template>
  </li>

</ul>

</template>

<script>
import Checkbox from "@/components/custom-input/Checkbox";

export default {
  name: "Categories",
  components: {Checkbox},
  props: {
    value:{
      type: Array,
      default: () => null
    },
    categories: {
      type: Array,
      default: () => null
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  }
}
</script>
