<template>
  <a class="brand-item" :href='link' :alt='name' target="_blank">
      <!-- <img :src='logo' :title='name'/> -->
      <span class="path1"></span>
      <span class="path2"></span>
      <span class="path3"></span>
      <span class="path4"></span>
      <span class="path5"></span>
      <span class="path6"></span>
      <span class="path7"></span>
      <span class="path8"></span>

  </a>
</template>

<script>
export default {
  props: ['name', 'link', 'logo']
}
</script>

<style lang='scss'>
@import "../assets/styles/utils/when-than";
@import "../assets/styles/utils/colors";

.brand-item {
  width: 50%;
  padding: 15px;
  color: $white;
  font-size: 120px;
  text-align: center;

  a & {
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  &:hover {
    color: $pink;
    text-decoration: none;
  }

  img {
    filter: invert(60%) grayscale(100%);
    transition: .5s filter;

    &:hover {
      filter: invert(0) grayscale(0);
      transition: .5s filter;
    }
  }

  @include when-wider-than(tablet) {
    width: 25%;
    padding-right: 20px;
    padding-bottom: 60px;
  }

  @include when-wider-than(small_desktop) {
    padding-right: 30px;
    font-size: 105px;
  }

  @include when-wider-than(large_desktop) {
    padding-right: 50px;
    font-size: 200px;
  }
}
</style>
