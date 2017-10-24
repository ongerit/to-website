<template>
  <section class="container">
      <navigation />
      <marquee title="Versions"/>
    <div class="version">
      <version-item title="Versions" version="1"/>
    </div>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'
import VersionItem from '~/components/VersionItem'

export default {
  components: {
    Navigation,
    Marquee,
    VersionItem
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
  @import "../assets/styles/index";
  @import "../assets/styles/globals/grid";

  .version {
    @extend %grid;
  }
</style>
