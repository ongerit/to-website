<template>
  <div class="marquee">
    <h2><a :data-before='text' :title='title' :href='link'><span>{{title}}</span></a></h2>
  </div>
</template>

<script>
export default {
  props: ['title', 'link', 'text'],
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
@import "../assets/styles/utils/colors";
@import "../assets/styles/utils/animations";
@import "../assets/styles/utils/when-than";
@import "../assets/styles/globals/typography";
@import "../assets/styles/globals/grid";
@import "../assets/styles/globals/zindex";

.marquee {
  // @extend %grid;
  color: $white;
  opacity: 0;

  .loaded & {
    opacity: 1;
    transition: 1s all;
  }

  a {
    color: $white;
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      background-color: $pink;
      position: absolute;
      z-index: $z9;
      bottom: 16px;
      right: -10px;
      height: 10px;
      width: 10px;
      border-radius: 100%;
      opacity: 0;
      transform: scale(0);
      transition: 0.5s bottom .2s, 0.5s border-radius .5s, .3s height .8s, 0.3s scale 1s;
    }

    &:before {
      content: attr(data-before);
      font-family: $heading-font-family;
      z-index: $z-marquee;
      transition: all .5s;
      text-transform: initial;
      color: $off-white;
      font-weight: bold;
      font-size: 30px;
      box-sizing: border-box;
      text-decoration: none;
      width: 0;
      max-width: 0;
      display: inline-block;
      overflow: hidden;
      vertical-align: top;
      transition: all .5s ease-out;
      opacity: 0;
    }
  }

  h2 {
    font-family: $heading-font-family;
    color: $off-white;
    font-weight: bold;
    font-size: 50px;
    line-height: 40px;
    letter-spacing: 0;
    text-transform: uppercase;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    z-index: $z-marquee;
    text-align: right;

    span {
      display: inline-block;
      overflow: hidden;
      position: relative;
      opacity: 0;

      &:after {
        content: '';
        width: 100%;
        background-color: $pink;
        position: absolute;
        height: 80px;
      }
    }
  }
  &--animated {
    h2 span {
      opacity: 1;
      transition: .2s opactity;
      &:before {
        opacity: 1;
        transition: .2s opacity;
        animation: marquee-right 0.5s forwards;
      }
    }
    a:after {
      opacity: 1;
      transform: scale(1);
      transition: 1s transform;
    }
  }

  @include when-wider-than(small_desktop) {
    h2 {
      font-size: 85px;
      line-height: 75px;
      width: 1000px;
    }

    a {
      &:after {
        bottom: 24px;
        right: -20px;
        height: 20px;
        width: 20px;
        transition: all .5s;
      }

      &:hover {
        &:after {
          height: 20px;
          bottom: 20px;
          bottom: 10px;
          transition: 0.5s bottom .2s, 0.3s border-radius .5s, 0.3s height .8s;
        }

        &:before {
          padding-right: 10px;
          opacity: 1;
          width: 100%;
          max-width: 282px;
          transition: all .5s ease-in .25s;
        }
      }
    }
  }
}
</style>
