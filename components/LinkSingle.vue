<template>
  <div class="link-single">
      <div class="link-single__content">
        <p class="link-single__date">{{date}}</p>
        <div class="link-single__desc">
          <a :href='link' :title='title' target="_blank">
            <div class="link-single__copy">
              <p>{{title}}</p>
              <h3>{{desc}}</h3>
              <p>{{author}}</p>
            </div>
          </a>
        </div>

        <!-- <div class="link-single__cta"> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'link', 'desc', 'author', 'date'],
  data () {
    return {
      nav: [
        {id: 0, name: 'prev'},
        {id: 1, name: 'next'},
        {id: 2, name: 'all'}
      ]
    }
  }
}
</script>

<style lang='scss'>
@use "../assets/styles/components/link-single" as *;
</style>
