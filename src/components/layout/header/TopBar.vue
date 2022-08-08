<template>
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-left">
        <div class="header-message">
          Բարի գալուստ մեր online խանութ
        </div>
      </div>
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