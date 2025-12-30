<template>
  <div class="work-item">
    <a :href='url' :alt='title'>
      <img :src='`/clients/${cover}`' :title='title'/>
    </a>
    <div class="work-item__wrapper">
      <a :href='url' :alt='title' target="_blank">
        <h3>{{title}}</h3>
      </a>
      <ul>
        <li v-for="item in tech">{{item}}</li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'cover', 'tech', 'url']
}
</script>

<style lang='scss'>
@use "../assets/styles/utils/when-than" as *;
@use "../assets/styles/utils/colors" as *;

.work-item {
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
      transition: .5s background;
    }
  }

  @include when-wider-than(tablet) {
    margin-right: 20px;
    margin-bottom: 30px;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @include when-wider-than(small_desktop) {
    margin-right: 30px;
    margin-bottom: 40px;

    img {
      filter: invert(60%) grayscale(100%);
      transition: .5s filter;

      &:hover {
        filter: invert(0) grayscale(0);
        transition: .5s filter;
      }
    }
  }

  @include when-wider-than(large_desktop) {
    margin-bottom: 55px;
  }
}
</style>
