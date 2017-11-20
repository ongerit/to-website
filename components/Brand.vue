<template>
  <div class="brand">
    <BrandItem class="icon-national-geographic" name="National Geographic" link="//www.nationalgeographic.com" logo="/brands/national-geographic.png"/>
    <BrandItem class="icon-dow-jones" name="Dow Jones" link="//www.dowjones.com" logo="/brands/dow-jones.png"/>
    <!-- <BrandItem class="icon-nbc-news" name="NBC News" link="//www.nbcnews.com/mach" logo="/brands/nbc.png"/> -->
    <BrandItem class="icon-xfinity-mobile" name="Xfinity Mobile" link="//www.xfinity.com" logo="/brands/xfinity.png"/>
    <!-- <BrandItem class="icon-americamerican-express" name="American Express" link="//www.americanexpress.com" logo="/brands/american-express.png"/> -->
    <BrandItem class="icon-maybelline" name="Maybelline" link="//www.Maybelline.com/" logo="/brands/maybelline.png"/>
    <BrandItem class="icon-juilliard" name="Juillard" link="//www.juilliard.edu" logo="/brands/juilliard.png"/>
    <!-- <BrandItem class="icon-new-york-life-1" name="New York Life" link="//www.savagebureau.com/" logo="/brands/new-york-life.png"/> -->
    <BrandItem class="icon-aba" name="American Bar Association" link="//www.americanbar.org/" logo="/brands/aba.svg"/>
    <!-- <BrandItem class="icon-" name="Tough Mudder" link="//www.toughmudder.com" logo="/brands/toughmudder.png"/> -->
    <BrandItem class="icon-plotly" name="Plotly" link="//www.plot.ly" logo="/brands/plotly.png"/>
    <BrandItem class="icon-cf" name="Collegefashionsta" link="//www.collegefashionista.com" logo="/brands/cf.svg"/>
    <BrandItem class="icon-savage-bureau" name="Savage Bureau " link="//www.savagebureau.com/" logo="/brands/savage-bureau.svg"/>
  </div>
</template>

<script>
import BrandItem from './BrandItem'

export default {
  components: {
    BrandItem
  }
}
</script>

<style lang='scss'>
@import "../assets/styles/globals/grid";

.brand {
  @extend %grid;
  display: flex;
  flex-wrap: wrap;
  opacity: 0;
  justify-content: space-around;
  align-items: center;

  .loaded & {
    opacity: 1;
    transition: 2s opacity;
  }

}
</style>
