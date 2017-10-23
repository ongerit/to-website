<template>
  <div class="work">
  </div>
</template>

<script>
import BrandItem from './WorkItem'

export default {
  components: {
    WorkItem
  }
}
</script>

<style lang='scss'>
@import "../assets/styles/globals/grid";

.work {
  @extend %grid;
  display: flex;
  opacity: 0;

  .loaded & {
    opacity: 1;
    transition: 2s opacity;
  }
}
</style>
