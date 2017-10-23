<template>
  <section class="container">
    <div>
      <navigation />
      <marquee title="news"/>
      <link-single />
      <marquee title="brands"/>
      <brand/>
      <marquee title="work"/>
      <marquee title="contact"/>
    </div>
  </section>
</template>

<script>
import Brand from '~/components/Brand'
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'
import LinkSingle from '~/components/LinkSingle'

export default {
  components: {
    Navigation,
    Marquee,
    LinkSingle,
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
  @import "../assets/styles/index";
</style>
