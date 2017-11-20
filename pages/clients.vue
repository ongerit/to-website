<template>
  <section class="container">
    <div>
      <navigation />
      <marquee title="Clients"/>
      <brand/>
    </div>
  </section>
</template>

<script>
import Brand from '~/components/Brand'
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'

export default {
  components: {
    Navigation,
    Marquee,
    Brand
  },
  methods: {
    animateElement () {
      this.$el.classList.add('animated')
      this.$nextTick(() => {
        setTimeout(() => {
          const $body = document.querySelector('body')
          $body.classList.add('loaded')
        }, 1000)
      })
    }
  },
  mounted () {
    this.animateElement()
  }
}
</script>

<style lang="scss">
  // @import "~/assets/styles/index";
  @import "../assets/styles/globals/icons";
  @import "../assets/styles/index";
</style>
