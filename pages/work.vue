<template>
  <section class="container">
      <navigation />
      <marquee title="Featured"/>
    <div class="work">
      <work-item title="National Geographic" work="1" :tech="['scss', 'vue', 'es6', 'grunt', 'node', 'webpack']"/>
      <work-item title="College Fashionista" work="2"  :tech="['scss', 'wordpress',  'jquery', 'grunt', 'node', 'bower', 'php']"/>
      <work-item title="NBC"  work="1" :tech="['scss', 'jquery', 'lodash', 'ramen', 'node', 'bower', 'react', 'underscore']"/>
      <work-item title="Juilliard"  work="1" :tech="['drupal', 'php', 'mysql', 'bash', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="Tough Mudder"  work="1" :tech="['drupal', 'php', 'mysql', 'bash', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="College Fashionista"  work="1" :tech="['wordpress', 'php', 'mysql', 'bash', 'rackspace','scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="Plotly"  work="1" :tech="['scss', 'jquery', 'react', 'node', 'nextjs']"/>
      <work-item title="Savage Bureau"  work="1" :tech="['ejs', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="American Express"  work="1" :tech="['scss', 'jquery', 'vue', 'node']"/>
      <work-item title="Xfinity Mobile"  work="1" :tech="['angular', 'lodash', 'scss', 'jquery', 'grunt', 'node']"/>
      <work-item title="NBC"  work="1" :tech="['ramen', 'react', 'underscore', 'lodash', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="Dow Jones"  work="1" :tech="['css', 'jquery', 'drupal']"/>
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
    flex-wrap: wrap;
    justify-content: space-between;

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
