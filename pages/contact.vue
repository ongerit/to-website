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
          <div @click.prevent='validateForm' class="contact__submit">Send Message</div>
        </form>
        <div class="contact__social social-item">
          <social-item class="icon-github" name='github' link="//www.bitly.com/GITOngeri" />
          <social-item class="icon-linkedin" name="linkedin" link="//www.bit.ly/thomas_ongeri" />
          <social-item class="icon-twitter" name='twitter' link="//www.bitly.com/TwitOngeri" />
          <social-item class="icon-instagram" name="instagram" link='//www.instagram.com/tomkins__' />
          <social-item class="icon-paypal" name="Palypal" link='//paypal.me/Ongeri' />
          <br />
          <a class="contact__link" href="mailto:tom@thomasongeri.com?Subject=Hey%20thomas%20amazing%20website"
            target="_top">tom@thomasongeri.com</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Navigation from '~/components/Navigation'
import Marquee from '~/components/Marquee'
import SocialItem from '~/components/SocialItem'
import DOMPurify from 'dompurify'

export default {
  components: {
    Navigation,
    Marquee,
    SocialItem
  },
  data() {
    return {
      error: null
    }
  },
  methods: {
    animateElement() {
      this.$el.classList.add('animated')
      this.$nextTick(() => {
        setTimeout(() => {
          const body = document.querySelector('body')
          body.classList.add('loaded')
        }, 1000)
      })
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    validateForm() {
      const email = document.querySelector('input[name*="email"]')
      const fname = document.querySelector('input[name*="first_name"]')
      const lname = document.querySelector('input[name*="last_name"]')
      const message = document.querySelector('textarea[name*="message"]')

      const emailValue = email.value
      const fnameValue = fname.value
      const lnameValue = lname.value
      const messageValue = message.value

      const note = document.querySelector('.contact__error')
      const thankYou = document.querySelector('.contact__thank-you')
      const form = document.querySelector('form')
      // Reset form
      email.classList.remove('contact__error')
      fname.classList.remove('contact__error')
      lname.classList.remove('contact__error')
      message.classList.remove('contact__error--border')
      note.textContent = ''

      if (!emailValue || !fnameValue || !lnameValue || !messageValue) {
        fname.classList.add('contact__error')
        email.classList.add('contact__error')
        message.classList.add('contact__error--border')
        note.textContent = 'Please enter missing fields'
        return
      }

      if (!fnameValue) {
        note.textContent = 'Please enter your first name'
        fname.classList.add('contact__error--border')
        return
      }

      if (!lnameValue) {
        note.textContent = 'Please enter your last name'
        lname.classList.add('contact__error--border')
        return
      }

      if (this.validateEmail(emailValue)) {
        this.sendFormData(emailValue, fnameValue, lnameValue, messageValue)
      } else {
        note.textContent = 'Please enter a valid email.'
      }
    },
    sendFormData(EMAIL, FNAME, LNAME, MESSAGE) {
      const VARS_OBJ = DOMPurify.sanitize(`{"email": "${EMAIL}", "message": "${MESSAGE}", "fname": "${FNAME}", "lname": "${LNAME}"}`)

      const params = new URLSearchParams()
      params.append('email', `${EMAIL}`)
      params.append('message', `${MESSAGE}`)
      params.append('fname', `${FNAME}`)
      params.append('lname', `${LNAME}`)

      axios.post('/sg', params.toString())
        .then((res) => {
          if (res.status === 200) {
            const THANK_YOU = document.querySelector('.contact__thank-you')
            const FORM = document.querySelector('form')
            FORM.textContent = ''
            THANK_YOU.textContent = `Thank you for your message, ${FNAME_VALUE}. I will respond to you shortly!`
          }
        })
        .catch((err) => {
          const NOTE = document.querySelector('.contact__error')
          this.$set(this, 'error', 'There seems to have been an error, your message was not sent')
          NOTE.textContent = this.error
        })
    }

  },

  mounted() {
    this.animateElement()
  },
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

  &__social {
    display: none;

    @include when-wider-than(tablet) {
      display: block;
    }
  }

  &__form {
    width: 100%;
    text-align: center;
    align-content: center;
    opacity: 0;
    margin-bottom: 20px;

    @include when-wider-than(tablet) {
      max-width: 300px;
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
    @include when-wider-than(small_desktop) {
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
