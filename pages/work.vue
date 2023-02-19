<template>
  <section class="container">
      <navigation />
      <marquee title='Featured' link='featured'/>
    <div class="work">
      <work-item url="https://www.nationalgeographic.com/" title="National Geographic"  cover="nat-geo.png" :tech="['lodash', 'scss', 'react', 'es6', 'nodejs', 'drupal','webpack']"/>
      <work-item url="https://www.nbcnews.com/better" title="NBC"  cover="nbc.png" :tech="['scss', 'es6', 'lodash', 'ramen', 'node', 'react', 'underscore']"/>
      <work-item url="https://www.juilliard.edu/" title="Juilliard"  cover="juilliard.png" :tech="['drupal', 'php', 'mysql', 'bash', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item url="https://toughmudder.com/" title="Tough Mudder"  cover="toughmudder.png" :tech="['drupal', 'php', 'mysql', 'bash', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item url="http://collegefashionista.com/" title="College Fashionista"  cover="cf.png" :tech="['wordpress', 'php', 'mysql', 'bash', 'rackspace','scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item url="https://plot.ly/" title="Plotly"  cover="plotly.png" :tech="['scss', 'es6', 'react', 'node', 'nextjs']"/>
      <work-item url="http://savagebureau.com/" title="Savage Bureau"  cover="savage.png" :tech="['ejs', 'scss', 'jquery', 'grunt', 'node', 'bower']"/>
      <work-item url="https://www.americanexpress.com/" title="American Express"  cover="american.png" :tech="['scss', 'jquery', 'vue', 'node']"/>
      <work-item url="https://www.xfinity.com/mobile/" title="Xfinity Mobile"  cover="xfinity.png" :tech="['angular', 'lodash', 'scss', 'jquery', 'grunt', 'node']"/>
      <work-item url="https://www.dowjones.com/" title="Dow Jones"  cover="dow-jones.png" :tech="['css', 'jquery', 'drupal']"/>
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
@import "../assets/styles/utils/when-than";
.container {
  .marquee {
    @extend %spacer;
  }
}

.work {
  @extend %grid;
  grid-template-columns: repeat(3, 1fr);
  opacity: 0;
  grid-gap: 50px;


  @include when-wider-than(tablet){
   display: grid
  } 
  
  .loaded & {
    opacity: 1;
    transition: 2s opacity;
  }

}
</style>
