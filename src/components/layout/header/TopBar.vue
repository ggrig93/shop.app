<template>
  <div class="top-bar" :style="{'background-color': settings ? settings.main_color : 'white'}">
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
import {mapGetters} from "vuex";

export default {
  name: "TopBar",
  mixins: [headerMixin],
  computed:{
    ...mapGetters(["settings"]),
  }
}
</script>
