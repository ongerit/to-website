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
@use "../assets/styles/utils/when-than" as *;
@use "../assets/styles/utils/colors" as *;
@use "../assets/styles/globals/icons" as *;

.social-item {
  a {
    text-decoration: none;
  }

  &__link {
    display: inline-block;
    color: $white;
    padding: 0 15px;
    font-size: 50px;
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
