<template>
  <div class="captcha-wrapper">
    <form>
      <vue-recaptcha :sitekey="captchaKey" @verify="onCaptchaVerify" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'captcha-component',
  components: {
    VueRecaptcha: () => import('vue-recaptcha')
  },
  props: ['form'],
  data: () => ({
    captchaKey: process.env.VUE_APP_CAPTCHA
  }),

  methods: {
    onCaptchaVerify(token) {
      this.form.token = token;
    },
  }
}
</script>

<style lang="scss" scoped>
.captcha-wrapper{

}
</style>