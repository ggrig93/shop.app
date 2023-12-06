<template>
  <div :class="className">
    <input type="checkbox" :id="label + $attrs.id" :value="inputValue" v-model="model">
    <label class="label-text" :for="label + $attrs.id">{{ label }}</label>
  </div>

</template>

<script>
export default {
  name: "Checkbox",
  props: {
    label: String,
    className: String,
    value: Array,
    inputValue: [String, Number]
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
  },
}
</script>

<style scoped>
.bold-label label {
  font-weight: 700;
}
</style>