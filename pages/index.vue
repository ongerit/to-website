<template>
  <section class="container" ref="containerRef" v-on:mouseover="displayBodyText">
    <promo  v-if="displayPromo" />
    <p style="display:none">{{displayPromo}}</p>
    <navigation />
    <div class="home">
      <p class="home__blurb">Hi! I'm Thomas. An engineering leader, I help teams build ✨ exceptional products.</p>
        <span><p></p><marquee title='News' link='news' text='catch up on my'/></span>
        <span><p></p><marquee title='Clients' link='clients' text='view some of my'/></span>
        <span><p></p><marquee title='Work' link='work' text='check out my'/></span>
        <span><p></p><marquee title='Contact' link='contact' text="and here's my"/></span>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      displayPromo: false
    }
  },
  methods: {
    animateElement () {
      const element = this.$refs.containerRef
      if (element) {
        element.classList.add('animated')
        this.$nextTick(() => {
          setTimeout(() => {
            const $body = document.querySelector('body')
            if ($body) {
              $body.classList.add('loaded')
            }
          }, 1000)
        })
      }
    },
    isPromo () {
      if (import.meta.client) {
        const urlParams = new URLSearchParams(window.location.search)
        const promo = urlParams.get('p')
        this.displayPromo = promo ? true : ''
      }
    },
  displayBodyText () {
      const element = this.$refs.containerRef
      if (element) {
        element.classList.add('illuminate')
        this.$nextTick(() => {
          setTimeout(() => {
            element.classList.remove('illuminate')
          }, 5000)
        })
      }
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
