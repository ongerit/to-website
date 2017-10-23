<template>
  <div class="marquee">
    <h2><span>{{title}}</span></h2>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    animateElement () {
      this.$nextTick(() => {
        setTimeout(() => {
          const $domElement = this.$el
          const domElementName = $domElement.classList[0]
          this.$el.classList.add(`${domElementName}--animated`)
        }, 2000)
      })
    }
  },
  mounted () {
    this.animateElement()
  }
}
</script>

<style lang='scss'>
  @import "../assets/styles/components/marquee";
</style>
