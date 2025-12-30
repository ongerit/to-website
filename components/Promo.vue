<template>
  <div class="promo">
    <h1>{{desc}}</h1>
  </div>
</template>
<script>
export default {
  props: ['route'],
  data () {
    return {
      desc:
        "👋 SONY, If you're looking to purchase spidermanfarfromhome.com please shoot me a message."
    }
  }
}
</script>

<style lang='scss'>
@use "../assets/styles/utils/colors" as *;
@use "../assets/styles/utils/when-than" as *;
@use "../assets/styles/globals/grid" as *;

.promo {
  @extend %grid;
  background: $pink;
  padding: 40px;
  opacity: 0;

  .loaded & {
    opacity: 1;
    transition: 2s all;
  }

  h1 {
    text-align: center;
    color: $white;
    word-break: break-word;
  }
}
</style>
