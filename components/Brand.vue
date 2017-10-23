<template>
  <div class="brand">
    <BrandItem name="Collegefashionsta" link="//www.collegefashionista.com" logo="/brands/cf.png"/>
    <BrandItem name="Collegefashionsta" link="//www.collegefashionista.com" logo="/brands/cf.png"/>
    <BrandItem name="Collegefashionsta" link="//www.collegefashionista.com" logo="/brands/cf.png"/>
    <BrandItem name="Collegefashionsta" link="//www.collegefashionista.com" logo="/brands/cf.png"/>
    <BrandItem name="Collegefashionsta" link="//www.collegefashionista.com" logo="/brands/cf.png"/>
    <BrandItem name="Collegefashionsta" link="//www.collegefashionista.com" logo="/brands/cf.png"/>

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
  opacity: 0;

  .loaded & {
    opacity: 1;
    transition: 2s opacity;
  }

}
</style>
