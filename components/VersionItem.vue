<template>
  <div class="version-item">
    <a :href='`//v${version}.thomasongeri.com`' :alt='title' target="_blank">
      <img
        :src='`/ver/v${version}.png`'
        :title='title'
        class="version-item__image"
        style="width: 100%; height: auto; max-width: 400px;"
      />
    </a>
    <div class="version-item__wrapper">
      <a :href='`//thomasongeri.com/v${version}`' :alt='title' target="_blank">
        <h3>{{title}} | v {{version}}.0</h3>
      </a>
      <ul>
        <li v-for="item in tech" :key="item">{{item}}</li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'version', 'tech']
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

  .version-item__image {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: contain;
    margin: 0 auto;
    background: $black-2;
    border-radius: 4px;
  }

  &__wrapper {
    padding: 15px;
  }

  a {
    color: $white;
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
    cursor: pointer;
    transition: 1s background;

    &:hover {
      background: $pink;
      font-weight: bold;
      transition: .5s background;
    }
  }

  @include when-wider-than(tablet) {
    width: 30%;
    margin-bottom: 30px;
    &:not(:last-child) {
      margin-right: 20px;
    }
    .version-item__image {
      max-width: 100%;
      height: auto;
    }
  }

  @include when-wider-than(small_desktop) {
    img,
    .version-item__image {
      filter: invert(60%) grayscale(100%);
      transition: .5s filter;

      &:hover {
        filter: invert(0) grayscale(0);
        transition: .5s filter;
      }
      max-width: 100%;
      height: auto;
    }

    margin-bottom: 40px;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  @include when-wider-than(large_desktop) {
    margin-bottom: 55px;
    &:not(:last-child) {
      margin-right: 50px;
    }
    .version-item__image {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
