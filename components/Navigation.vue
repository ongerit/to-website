<template>
  <div class="navigation">
    <div class="navigation__title">{{title}}</div>
    <ul class="navigation__links">
      <li v-for='items in nav'>{{items}}</li>
      <!-- <li>THOMAS ONGERI</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        'news.',
        'meetings.',
        'links.'
      ],
      title: 'Thomas Ongeri'
    }
  }
}
</script>

<style lang='scss'>
  @import "../assets/styles/components/navigation";
</style>
