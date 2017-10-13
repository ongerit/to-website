<template>
  <div class="marquee">
    <h2><span>{{title}}</span></h2>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang='scss'>
@import "../assets/styles/components/marquee";
</style>
