<template>
  <div class="brand-item">
    <a :href='link' :alt='name' target="_blank">
    <img :src='logo' :title='name'/>
    </a>
  </div>
</template>

<script>
export default {
  props: ['name', 'link', 'logo']
}
</script>

<style lang='scss'>
.brand-item {

}
</style>
