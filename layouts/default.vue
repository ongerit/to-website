<template>
  <div>
    <nuxt/>
    <foot />
  </div>
</template>
<script>
import Foot from '~/components/Foot'

export default {
  components: {
    Foot
  }
}
</script>
<style>
html {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

html {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

h1,
h2,
h3,
h4,
h5 {
    margin: 0;
    padding: 0;
}

p {
    margin: 0 0 20px;
}

ul,
ol,
li,
dl,
dt,
dd, {
    margin: 0;
    padding: 0;
    list-style-type: none;
    color: #fff;
}

picture {
    display: block;
}

img {
    display: block;
    width: 100%;
    height: auto;
}

a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

input::-ms-clear {
    display: none;
}

</style>
