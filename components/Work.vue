<template>
  <div class="work">
  </div>
</template>

<script>
import WorkItem from './WorkItem'

export default {
  components: {
    WorkItem
  }
}
</script>

<style lang='scss'>
@use "../assets/styles/globals/grid" as *;

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
