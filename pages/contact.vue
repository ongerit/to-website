<template>
<section class="container">
  <div>
    <navigation />
    <marquee class="spacer" title="Contact" />
    <p class="contact__thank-you"></p>
    <div class="contact">
      <form class="contact__form" action="">
        <input class="contact__name contact__first" name="first_name" placeholder="First Name">
        <input class="contact__name contact__last" name="last_name" placeholder="Last Name">
        <input class="contact__email" name="email" placeholder="Email">
        <textarea class="contact__message" name="message" cols="40" rows="5" placeholder="Message"></textarea>
        <p class="contact__error"></p>
        <div 
          @click.prevent='validateForm' 
          class="contact__submit">Send Message</div>
      </form>
      <div class="contact__social social-item">
        <social-item class="icon-github" name='github' link="//www.bitly.com/GITOngeri"/>
        <social-item class="icon-linkedin" name="linkedin" link="//www.bit.ly/thomas_ongeri"/>
        <social-item class="icon-twitter" name='twitter' link="//www.bitly.com/TwitOngeri"/>
        <social-item class="icon-instagram" name="instagram" link='//www.instagram.com/tomkins__'/>
        <social-item class="icon-paypal" name="Palypal" link='//paypal.me/Ongeri'/>
        <br />
        <a class="contact__link" href="mailto:tom@thomasongeri.com?Subject=Hey%20thomas%20amazing%20website" target="_top">tom@thomasongeri.com</a>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios from 'axios'
// import $ from 'jquery'
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'
import SocialItem from '~/components/SocialItem'

// [TO] Prevent XSS hacking
// import mail from '~/assets/scripts/helpers'
const DOMPurify = require('dompurify')

export default {
  components: {
    Navigation,
    Marquee,
    SocialItem
  },
  methods: {
    animateElement () {
      this.$el.classList.add('animated')
      this.$nextTick(() => {
        setTimeout(() => {
          const BODY = document.querySelector('body')
          BODY.classList.add('loaded')
        }, 1000)
      })
    },
    validateEmail (email) {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validateForm () {
      const EMAIL = document.querySelector('input[name*="email"]')
      const FNAME = document.querySelector('input[name*="first_name"]')
      const LNAME = document.querySelector('input[name*="last_name"]')
      const MESSAGE = document.querySelector('textarea[name*="message"]')

      const EMAIL_VALUE = EMAIL.value
      const FNAME_VALUE = FNAME.value
      const LNAME_VALUE = LNAME.value
      const MESSAGE_VALUE = MESSAGE.value

      const NOTE = document.querySelector('.contact__error')
      const THANK_YOU = document.querySelector('.contact__thank-you')
      const FORM = document.querySelector('form')
      // Rest form
      EMAIL.classList.remove('contact__error')
      FNAME.classList.remove('contact__error')
      LNAME.classList.remove('contact__error')
      MESSAGE.classList.remove('contact__error--border')

      NOTE.textContent = ''

      if (EMAIL_VALUE === null && LNAME_VALUE === null && EMAIL_VALUE === null && MESSAGE_VALUE === null) {
        FNAME.classList.add('contact__error')
        EMAIL.classList.add('contact__error')
        MESSAGE.classList.add('contact__error--border')
        NOTE.textContent = 'Please enter missing fields'
        return
      }

      if (FNAME_VALUE === null) {
        NOTE.textContent = 'Please enter your first name'
        FNAME.classList.add('contact__error--border')
        return
      }

      if (LNAME_VALUE === null) {
        NOTE.textContent = 'Please enter your last name'
        LNAME.classList.add('contact__error--border')
        return
      }

      if (this.validateEmail(EMAIL_VALUE) && FNAME_VALUE && LNAME_VALUE && MESSAGE_VALUE) {
        this.sendFormData(EMAIL_VALUE, FNAME_VALUE, LNAME_VALUE, MESSAGE_VALUE)
        FORM.textContent = ''
        THANK_YOU.textContent = `Thank you for your message, ${FNAME_VALUE}. I will respond to you shortly!`
      } else {
        NOTE.textContent = 'Please enter a valid email.'
      }
    },
    sendFormData (EMAIL, FNAME, LNAME, MESSAGE) {
      const VARS_OBJ = DOMPurify.sanitize(`{"email": "${EMAIL}", "message": "${MESSAGE}", "fname": "${FNAME}", "lname": "${LNAME}"}`)

      const params = new URLSearchParams()
      params.append('email', `${EMAIL}`)
      params.append('message', `${MESSAGE}`)
      params.append('fname', `${FNAME}`)
      params.append('lname', `${LNAME}`)

      axios.post('/sendgrid/p.php', params.toString())
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) }) 
    }

  },
  mounted () {
    this.animateElement()
  }
}
</script>

<style lang="scss">
  // @import "~/assets/styles/index";
  @import "../assets/styles/index";
  @import "../assets/styles/utils/colors";
  @import "../assets/styles/globals/grid";

.spacer {
  @extend %spacer;
}
.contact {
  @extend %grid;
  position: relative;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @include when-wider-than(tablet) {
    flex-direction: row;
  }

  h3 {
    text-align: center;
    margin-bottom: 30px;
    font-family: 'Poppins', sans-serif;
  }

  p {
    text-align: center;
  }

  &__form {
    width: 100%;
    max-width: 300px;
    text-align: center;
    align-content: center;
    opacity: 0;
    margin-bottom: 20px;

    @include when-wider-than(tablet) {
      padding-right: 15px;
      width: 50%;
    }
  }


  &__email,
  &__message,
  &__name {
    padding-left: 15px;
    width: 100%;
    line-height: 18px;
    font-size: 14px;
    margin-bottom: 15px;
    border: 1px solid $black;
    line-height: 40px;
  }

  &__message {
    padding-top: 15px;
    line-height: 20px;
    margin-bottom: 0;
  }

  &__name {
    
    @include when-wider-than(tablet) {
      width: calc(49% - 7.5px);
      display: inline-block;
      margin-right: 15px;
    }

    &:nth-child(2n) {
      margin-right: 0px;
    }
  }

  &__submit {
    color: $white;
    background: $pink;
    font-size: 14px;
    border: none;
    width: 100%;
    line-height: 32px;
    border: 1px solid $pink;
    line-height: 42px;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      color: $pink;
      background: $white;
      border: 1px solid $pink;
      cursor: pointer;
    }
  }

  &__error {
    color: $pink;
    padding: 0;
    line-height: 20px;

    &--border {
      border: 2px solid red;
    }
  }

  &__thank-you {
    @extend %grid;
    color: $white;
  }

  &__link {
  padding: 0 15px;
  color: $white;

    &:hover {
      color: $pink;
    }
  }

  &__success {
    color: $black-2;
  }
}

.loaded {
  .contact {
    opacity: 1;
    transition: 2s opacity;
  }

  form {
    opacity: 1;
    transition: 2s opacity;
  }
}
</style>
