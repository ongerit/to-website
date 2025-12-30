<template>
  <section class="container" v-on:mouseover="displayBodyText">
    <promo  v-if="displayPromo" />
    <p style="display:none">{{displayPromo}}</p>
    <navigation />
    <div class="home">
      <p class="home__blurb">Hi! I’m Thomas Ongeri. I’m an engineering leader</p>
        <span><p></p><marquee title='News' link='news' text='catch up on my'/></span>
        <span><p></p><marquee title='Clients' link='clients' text='view some of my'/></span>
        <span><p></p><marquee title='Work' link='work' text='check out my'/></span>
        <span><p></p><marquee title='Contact' link='contact' text="and here's my"/></span>
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
  @use '../assets/styles/index' as *;
</style>
