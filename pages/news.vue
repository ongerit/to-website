<template>
  <section class="container">
    <div>
      <navigation />
      <marquee title='News' link='news'/>
      <link-single />
    </div>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'
import LinkSingle from '~/components/LinkSingle'

export default {
  components: {
    Navigation,
    Marquee,
    LinkSingle
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
  // @import '~/assets/styles/index';
  @import '../assets/styles/index';
</style>
