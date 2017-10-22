<template>
  <div class="link-single">
    <div class="link-single__nav">
      <ul>
        <li v-for="items in nav">{{items.name}}.</li>
      </ul>
    </div>
      <div class="link-single__content">
        <p class="link-single__date">04.16.2017</p>
        <div class="link-single__copy">
          <p>NEW SITE LAUNCH</p>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h3>
          <p>THOMAS ONGERI</p>
        </div>
        <div class="link-single__cta">
          <p>like</p>
          <p>bookmark</p>
          <p>+ submit reviews</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {id: 0, name: 'prev'},
        {id: 1, name: 'next'},
        {id: 2, name: 'all'}
      ]
    }
  }
}
</script>

<style lang='scss'>
@import "../assets/styles/components/link-single";
</style>
