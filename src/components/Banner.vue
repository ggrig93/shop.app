<template>
  <div class="banner">
    <div :class="['item-banner', imgClass]" >
      <div class="inner">
        <div class="banner-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ['imgClass']
}
</script>