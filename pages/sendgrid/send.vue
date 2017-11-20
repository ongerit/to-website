<template>
<section class="container">
  <div>
    <navigation />
    <marquee title="Contact" />
  </div>
</section>
</template>

<script>
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'

// [TO] Prevent XSS hacking
export default {
  components: {
    Navigation,
    Marquee
  },
  middleware: 'send'
}
</script>

<style lang="scss">
  // @import "~/assets/styles/index";
  // @import "../../assets/styles/index";
  body {
    background: #999;
  }
</style>
