<template>
  <section class="container">
      <navigation />
      <marquee title="Versions"/>
    <div class="version">
      <version-item title="Catlett" version="3" v-bind:tech="['scss', 'vue', 'es6', 'nuxt', 'node', 'webpack', 'eslint', 'sendgrid', 'axios']"></version-item>
      <version-item title="Basquiat" version="2"  v-bind:tech="['scss', 'vue',  'jquery', 'grunt', 'node', 'bower']"></version-item>
      <version-item title="Alston" version="1"  v-bind:tech="['scss', 'jquery', 'grunt', 'node', 'bower']"></version-item>
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

  .container {
    .marquee {
      @extend %spacer;
    }
  }

  .version {
    @extend %grid;
    opacity: 0;
    .loaded & {
      opacity: 1;
      transition: 2s opacity;
    }

    @include when-wider-than(tablet) {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
