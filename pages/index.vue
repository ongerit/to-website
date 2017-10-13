<template>
  <section class="container">
    <div>
      <navigation />
      <marquee />
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
  }
}
</script>

<style lang="scss">
  // @import "~/assets/styles/index";
  @import "../assets/styles/index";
</style>
