<template>
  <a class="social-item__link" :href='link' :alt='name' target="_blank">
  </a>
</template>

<script>
export default {
  props: ['name', 'link']
}
</script>

<style lang='scss'>
@import "../assets/styles/utils/when-than";
@import "../assets/styles/utils/colors";
@import "../assets/styles/globals/icons";

.social-item {
  a {
    text-decoration: none;
  }

  &__link {
    display: inline-block;
    color: $white;
    padding: 0 15px;
    font-size: 60px;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: $pink;
    }
  }

  @include when-wider-than(tablet) {
    border-left: 1px solid $pink;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__link {
      display: block;
    }
  }
}

</style>
