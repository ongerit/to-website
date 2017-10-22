<template>
  <section class="container">
    <div>
      <navigation />
      <marquee title="news"/>
      <link-single />
      <marquee title="meetings"/>
      <marquee title="links"/>
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
  }
}
</script>

<style lang="scss">
  // @import "~/assets/styles/index";
  @import "../assets/styles/index";
</style>
