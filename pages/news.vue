<template>
  <section class="container" ref="containerRef">
    <div>
      <navigation />
      <marquee title='News' />

      <link-single
      date='03.01.2018'
      link='\/\/newsapp.thomasongeri.com/'
      title='PROJECT: News Application'
      desc='Welcome to Newsapp. Aggregate news articles from various news sources. Built on react.js.'
      author='Thomas Ongeri'/>

      <link-single
      date='02.01.2018'
      link='\/\/www.thomasongeri.com/workout/'
      title='PROJECT: Daily Workouts of the day'
      desc='Personal project, Using Spartan race api to generate weekly workouts.'
      author='Thomas Ongeri'/>

      <link-single
      date='01.01.2018'
      link='\/\/www.ind-distribution.com/'
      title='CLIENT: IND Distribution'
      desc='Client project managing their aws server, magento 2.x cms, and react frontend.'
      author='Thomas Ongeri'/>

      <link-single
      date='11.23.2017'
      link='\/\/ala.thomasongeri.com/'
      title='PROJECT: Intro to JS to African Leadership Academy'
      desc='Gave 40 min lecture to students at the African Leadership Academy.'
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
export default {
  methods: {
    animateElement () {
      const element = this.$refs.containerRef;
      if (element) {
        element.classList.add('animated')
        this.$nextTick(() => {
          setTimeout(() => {
            const $body = document.querySelector('body')
            if ($body) {
              $body.classList.add('loaded')
            }
          }, 1000)
        })
      }
    }
  },
  mounted () {
    this.animateElement()
  }
}
</script>

<style lang="scss">
  // @use '~/assets/styles/index' as *;
  @use '../assets/styles/index' as *;
</style>
