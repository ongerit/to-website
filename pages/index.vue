<template>
  <section class="container" v-on:mouseover="displayBodyText">
    <promo  v-if="displayPromo" />
    <p style="display:none">{{displayPromo}}</p>
    <navigation />
    <div class="home">
      <p class="home__blurb">Hi! I’m Thomas Ongeri. I’m a web developer currently residing in Brooklyn, New York.</p>
        <span><p>catch up on my</p><marquee title='News' link='news'/></span>
        <span><p>view some of my</p><marquee title='Clients' link='clients'/></span>
        <span><p>check out my</p><marquee title='Work' link='work'/></span>
        <span><p> and here's my</p><marquee title='Contact' link='contact'/></span>
    </div>
  </section>
</template>
<script>
import Marquee from '~/components/Marquee'
import Navigation from '~/components/Navigation'
import Promo from '~/components/Promo'

export default {
  components: {
    Marquee,
    Navigation,
    Promo
  },
  data () {
    return {
      displayPromo: false
    }
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
    },
    isPromo () {
      const urlParams = new URLSearchParams(window.location.search)
      const promo = urlParams.get('p')
      this.displayPromo = promo ? true : ''
    },
    displayBodyText () {
      const ELEMENT = this.$el.classList
      ELEMENT.add('illuminate')
      this.$nextTick(() => {
        setTimeout(() => {
          ELEMENT.remove('illuminate')
        }, 5000)
      })
    }
  },
  mounted () {
    this.animateElement()
    this.isPromo()
  }
}
</script>

<style lang="scss">
  @import '../assets/styles/index';
</style>
