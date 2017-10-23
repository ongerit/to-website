<template>
  <div class="brand">
    <BrandItem name="National Geographic" link="//www.nationalgeographic.com" logo="/brands/national-geographic.png"/>
    <BrandItem name="Dow Jones" link="//www.dowjones.com" logo="/brands/dow-jones.png"/>
    <BrandItem name="NBC News" link="//www.nbcnews.com/mach" logo="/brands/nbc.png"/>
    <BrandItem name="Xfinity Mobile" link="//www.xfinity.com" logo="/brands/xfinity.png"/>
    <BrandItem name="American Express" link="//www.americanexpress.com" logo="/brands/american-express.png"/>
    <BrandItem name="Maybelline" link="//www.Maybelline.com/" logo="/brands/maybelline.png"/>
    <BrandItem name="Juillard" link="//www.juilliard.edu" logo="/brands/juilliard.png"/>
    <BrandItem name="New York Life" link="//www.savagebureau.com/" logo="/brands/new-york-life.png"/>
    <BrandItem name="American Bar Association" link="//www.americanbar.org/" logo="/brands/aba.png"/>
    <BrandItem name="Tough Mudder" link="//www.toughmudder.com" logo="/brands/toughmudder.png"/>
    <BrandItem name="Plotly" link="//www.collegefashionista.com" logo="/brands/plotly.png"/>
    <BrandItem name="Collegefashionsta" link="//www.collegefashionista.com" logo="/brands/cf.png"/>
    <BrandItem name="Savage Bureau " link="//www.savagebureau.com/" logo="/brands/savage-bureau.svg"/>
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
