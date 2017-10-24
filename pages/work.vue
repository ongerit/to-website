<template>
  <section class="container">
      <navigation />
      <marquee title="Featured Work"/>
    <div class="work">
      <work-item title="National Geographic" work="1" :tech="['scss', 'vue', 'es6', 'grunt', 'node', 'webpack']"/>
      <work-item title="College Fashionista" work="2"  :tech="['scss', 'vue',  'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="NBC"  work="1" :tech="['scss', 'jquery', 'grunt', 'node', 'bower']"/>
    </div>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'
import WorkItem from '~/components/WorkItem'

export default {
  components: {
    Navigation,
    Marquee,
    WorkItem
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
  .work {
    @extend %grid;
    display: flex;
    opacity: 0;
    .loaded & {
      opacity: 1;
      transition: 2s opacity;
    }

    &-item {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
