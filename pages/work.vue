<template>
  <section class="container">
      <navigation />
      <marquee title="Featured"/>
    <div class="work">
      <work-item title="National Geographic" cover="nat-geo.png" :tech="['scss', 'vue', 'es6', 'grunt', 'node', 'webpack']"/>
      <!-- <work-item title="College Fashionista" cover="cf.png"  :tech="['scss', 'wordpress',  'jquery', 'grunt', 'node', 'bower', 'php']"/> -->
      <work-item title="NBC"  cover="nbc.png" :tech="['scss', 'jquery', 'lodash', 'ramen', 'node', 'bower', 'react', 'underscore']"/>
      <work-item title="Juilliard"  cover="juilliard.png" :tech="['drupal', 'php', 'mysql', 'bash', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="Tough Mudder"  cover="toughmudder.png" :tech="['drupal', 'php', 'mysql', 'bash', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="College Fashionista"  cover="cf.png" :tech="['wordpress', 'php', 'mysql', 'bash', 'rackspace','scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="Plotly"  cover="plotly.png" :tech="['scss', 'jquery', 'react', 'node', 'nextjs']"/>
      <work-item title="Savage Bureau"  cover="savage.png" :tech="['ejs', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item title="American Express"  cover="american.png" :tech="['scss', 'jquery', 'vue', 'node']"/>
      <work-item title="Xfinity Mobile"  cover="xfinity.png" :tech="['angular', 'lodash', 'scss', 'jquery', 'grunt', 'node']"/>
      <work-item title="Dow Jones"  cover="dow-jones.png" :tech="['css', 'jquery', 'drupal']"/>
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

  .container {
    .marquee {
      @extend %spacer;
    }
  }

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
