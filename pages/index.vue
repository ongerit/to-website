<template>
  <section class="container">
    <navigation />

    <div class="home">
        <p>good</p><marquee title='News' link='news'/>
        <p>I surf the web looking interesting</p><marquee title='Links' link='links'/>
        <p>then i build cool things for my</p><marquee title='Clients' link='clients'/>
        <p>I try to build this for them that jus</p><marquee title='Work' link='work'/></p>
        <p>remote work? here is my </p><marquee title='Contact' link='contact'/>
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
