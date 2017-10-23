<template>
  <div class="brand-item">
    <a :href='link' :alt='name' target="_blank">
    <img :src='logo' :title='name'/>
    </a>
  </div>
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

  img {
    filter: invert(60%) grayscale(100%);
    transition: .5s filter;

    &:hover {
      filter: invert(0) grayscale(0);
      transition: .5s filter;
    }
  }

  @include when-wider-than(tablet) {
    width: 20%;
    padding: 20px;
  }

  @include when-wider-than(small_desktop) {
    padding: 25px;
  }
}
</style>
