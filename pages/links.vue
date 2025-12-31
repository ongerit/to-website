<template>
  <section class="container" ref="containerRef">
    <div>
      <navigation />
      <marquee title="Links"/>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    animateElement () {
      const element = this.$refs.containerRef;
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
    }
  },
  mounted () {
    this.animateElement()
  }
}
</script>

<style lang="scss">
  @use "../assets/styles/index" as *;

  .container {
    .marquee {
      @extend %spacer;
    }
  }
</style>
