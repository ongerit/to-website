<template>
  <section class="container">
    <navigation />

    <div class="home">
        <span><p>good</p><marquee title='News' link='news'/></span>
        <!-- <span><p>I surf the web for</p><marquee title='Links' link='links'/></span> -->
        <span><p>then i make cool suff for my</p><marquee title='Clients' link='clients'/></span>
        <span><p>check out my</p><marquee title='Work' link='work'/></span>
        <span><p> and here's my</p><marquee title='Contact' link='contact'/></span>
    </div>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'

export default {
  components: {
    Navigation,
    Marquee
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
