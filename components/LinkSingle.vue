<template>
  <div class="link-single">
    <!-- <div class="link-single__nav">
      <ul>
        <li v-for="items in nav">{{items.name}}.</li>
      </ul>
    </div> -->
      <div class="link-single__content">
        <p class="link-single__date">11.21.2017</p>
        <a href="http://www.thomasongeri.com" title="ThomasOngeri.com">
        <div class="link-single__copy">
          <p>NEW SITE LAUNCH</p>
          <h3>Launching the 3rd version of my personal portfolio. Stay tuned for more...</h3>
          <p>THOMAS ONGERI</p>
        </div>
      </a>
        <div class="link-single__cta">
          <!-- <p>like</p>
          <p>bookmark</p>
          <p>+ submit reviews</p> -->
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
