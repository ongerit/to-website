<template>
  <div class="navigation">
    <div class="navigation__title">{{title}} <span><a :href='version.link'>v.{{version.current}}</a></span></div>
    <ul class="navigation__links">
      <li v-for='item in nav'><a :title='item.name' :href='item.link'>{{item.name}}</a></li>
      <!-- <li>THOMAS ONGERI</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [{
        'name': 'news.',
        'link': '/'
      },
      {
        'name': 'clients.',
        'link': '/clients'
      },
      {
        'name': 'work.',
        'link': '/work'
      },
      {
        'name': 'links.',
        'link': '/links'
      },
      {
        'name': 'contact.',
        'link': '/contact'
      }
      ],
      title: 'Thomas Ongeri',
      version: {
        link: 'versions',
        current: 3
      }
    }
  }
}
</script>

<style lang='scss'>
  @import "../assets/styles/components/navigation";
</style>
