<template>
  <section class="container" ref="containerRef">
    <Navigation />
    <Marquee title="Versions" />
    <div class="version">
      <VersionItem
        title="Catlett"
        version="3"
        :tech="['scss', 'vue', 'es6', 'nuxt', 'node', 'webpack', 'eslint', 'sendgrid', 'axios']"
      />
      <VersionItem
        title="Basquiat"
        version="2"
        :tech="['scss', 'vue', 'jquery', 'grunt', 'node', 'bower']"
      />
      <VersionItem
        title="Alston"
        version="1"
        :tech="['scss', 'jquery', 'grunt', 'node', 'bower']"
      />
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
      }
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
  mounted () {
    this.animateElement()
  }
}
</script>

<style lang="scss">
@use "../assets/styles/index" as *;
@use "../assets/styles/utils/when-than" as *;
@use "../assets/styles/globals/grid" as *;

.container {
  .marquee {
    @extend %spacer;
  }
}

.version {
  @extend %grid;
  opacity: 0;
  transition: 2s opacity;
  &.loaded, .loaded & {
    opacity: 1;
  }

  @include when-wider-than(tablet) {
    display: flex;
    justify-content: space-between;
  }
}
</style>
