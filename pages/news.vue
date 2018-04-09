<template>
  <section class="container">
    <div>
      <navigation />
      <marquee title='News' link='news'/>
      <link-single
      date='02.01.2018'
      link='\/\/thomasongeri.com/workout/'
      title='PROJECT: Daily Workouts of the day'
      desc='Personal project, Using Spartan race api to generate weekly workouts.'
      author='Thomas Ongeri'/>

      <link-single
      date='01.01.2018'
      link='\/\/ind-distribution.com/'
      title='CLIENT: IND Distribution'
      desc='Client project managing their aws server, magento 2.x cms, and react frontend.'
      author='Thomas Ongeri'/>

      <link-single
      date='11.21.2017'
      link='http:\/\/www.thomasongeri.com'
      title='WORK: New portfolio launch'
      desc='Launching the 3rd version of my personal portfolio. Stay tuned for more...'
      author='Thomas Ongeri'/>
    </div>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'
import LinkSingle from '~/components/LinkSingle'

export default {
  components: {
    Navigation,
    Marquee,
    LinkSingle
  },
  methods: {
    animateElement () {
      this.$el.classList.add('animated')
      this.$nextTick(() => {
        setTimeout(() => {
          const $body = document.querySelector('body')
          $body.classList.add('loaded')
        }, 1000)
      })
    }
  },
  mounted () {
    this.animateElement()
  }
}
</script>

<style lang="scss">
  // @import '~/assets/styles/index';
  @import '../assets/styles/index';
</style>
