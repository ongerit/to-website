<template>
  <div class="version-item">
    <a :href='link' :alt='title' target="_blank">
      <img :src='`/ver/v${version}.png`' :title='title'/>
    </a>
    <div class="version-item__wrapper">
      <a :href='`//thomasongeri.com/v${version}`' :alt='title' target="_blank">
        <h3>v {{version}}.0 | {{title}}</h3>
      </a>
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>AMP</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'version']
}
</script>

<style lang='scss'>
@import "../assets/styles/utils/when-than";
@import "../assets/styles/utils/colors";

.version-item {
  width: 100%;
  color: $white;
  background: $black-3;
  border-radius: 1.5%;
  margin-bottom: 15px;
  display: inline-block;

  &__wrapper {
    padding: 15px;
  }

  a {
    color: $white;
  }

  img {
    filter: invert(60%) grayscale(100%);
    transition: .5s filter;

    &:hover {
      filter: invert(0) grayscale(0);
      transition: .5s filter;
    }
  }

  ul {
    list-style: none;
    padding: 10px 0;
  }

  li {
    background: $black-2;
    padding: 8px 8px;
    border-radius: 2%;
    margin: 0 5px 5px 0;
    min-width: 20px;
    display: inline-block;
  }

  @include when-wider-than(tablet) {
    width: 31%;
    margin-right: 20px;
    margin-bottom: 30px;
  }

  @include when-wider-than(small_desktop) {
    margin-right: 30px;
    margin-bottom: 40px;
  }

  @include when-wider-than(large_desktop) {
    margin-right: 50px;
    margin-bottom: 55px;
  }
}
</style>
