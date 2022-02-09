<template>
  <a href="javascript:void(0)" class="backtotop" :class="{'show': backToTop}" @click.prevent="scrollToTop">
    <i class="fa fa-angle-double-up"></i>
  </a>
</template>

<script>
export default {
  name: "BackToTop",
  data() {
    return {
      backToTop: false
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      window.scrollY > 1000 ? this.backToTop = true : this.backToTop = false
    })
  },
  methods: {
    scrollToTop() {
      this.$smoothScroll({scrollTo: document.body})
    }
  }
}
</script>
