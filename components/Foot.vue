<template>
  <footer class="footer">
    <div class="social">
        <social-item class="icon-github" name='github' link="//www.bitly.com/GITOngeri"/>
        <social-item class="icon-linkedin" name="linkedin" link="//www.bit.ly/thomas_ongeri"/>
        <social-item class="icon-twitter" name='twitter' link="//www.bitly.com/TwitOngeri"/>
        <social-item class="icon-instagram" name="instagram" link='//www.instagram.com/tomkins__'/>
        <social-item class="icon-paypal" name="Palypal" link='//paypal.me/Ongeri'/>
    </div>
  </footer>
</template>
<script>
import SocialItem from '~/components/SocialItem'

export default {
  components: {
    SocialItem
  }
}
</script>

<style lang='scss'>
@import "../assets/styles/utils/colors";
@import "../assets/styles/globals/grid";

  .footer {
    @extend %grid;
    margin-bottom: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    @include when-wider-than(tablet) {
      position: relative;
    }
  }

  .social {
    padding: 50px 0;
    float: right;
    width: 300px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    justify-items: right;
  
    a {
      color: $grey;
      font-size: 20px;
      padding: 0;
      text-decoration: none;
    }
  }
</style>
