<template>
  <div class="navigation">
    <div class="navigation__title"><a href="/">{{title}}</a><span><a :href='`/${version.link}`'> v.{{version.current}}</a></span></div>
    <ul v-show="$route.name !='index'" class="navigation__links">
      <li v-for='item in nav'><a :title='item.name' :href='item.link'>{{item.name}}</a></li>
      <!-- <li>THOMAS ONGERI</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: ['route'],
  data () {
    return {
      nav: [{
        'name': 'news.',
        'link': '/news'
      },
      {
        'name': 'work.',
        'link': '/work'
      },
      {
        'name': 'clients.',
        'link': '/clients'
      },
      {
        'name': 'contact.',
        'link': '/contact'
      }
      ],
      title: 'Thomas Ongeri',
      version: {
        link: 'version',
        current: 3
      }
    }
  }
}
</script>

<style lang='scss'>
  @import "../assets/styles/components/navigation";
</style>
