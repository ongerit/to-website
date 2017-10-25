<template>
  <div class="version-item">
    <a :href='`//v${version}.thomasongeri.com`' :alt='title' target="_blank">
      <img :src='`/ver/v${version}.png`' :title='title'/>
    </a>
    <div class="version-item__wrapper">
      <a :href='`//thomasongeri.com/v${version}`' :alt='title' target="_blank">
        <h3>{{title}}</h3>
      </a>
      <ul>
        <li v-if="techSize > 5" v-for="(n,index) in techlimit">
            {{tech[index]}}
        </li>

        <li v-if="techSize <= 5" v-for="item in tech">
            {{item}}
        </li>
        <li v-if="techSize > 5 && limit" v-on:click='addMoreTech'>+</li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'version', 'tech', 'whatever'],
  data () {
    return {
      techSize: this.tech.length,
      techlimit: 4,
      limit: true
    }
  },
  methods: {
    addMoreTech () {
      this.limit = !this.limit
      this.techlimit = this.techSize
    }
  }
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
    width: calc(33% - 20px);
    margin-right: 20px;
    margin-bottom: 30px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @include when-wider-than(small_desktop) {
    width: calc(33% - 30px);
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
    width: calc(33% - 50px);
    margin-bottom: 55px;
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
}
</style>
