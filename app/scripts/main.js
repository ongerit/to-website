// jquery
$(window).load(function() {
    'use strict';


    // Material menu button
    var circle = document.querySelector('.material-btn');
    var link = document.querySelector('.material-content').querySelectorAll('li');
    var ham = document.querySelector('.material-hamburger');
    // var main = document.querySelector('main');
    var win = window;
    function openMenu(event) {
      circle.classList.toggle('active');
      ham.classList.toggle('material-close');
      // main.classList.toggle('active');
      for (var i = 0; i < link.length; i++) {
        link[i].classList.toggle('active');
      }

      event.stopImmediatePropagation();
    }

    function closeMenu() {
      if (circle.classList.contains('active')) {
        circle.classList.remove('active');
        for (var i = 0; i < link.length; i++) {
          link[i].classList.toggle('active');
        }
        ham.classList.remove('material-close');
        // main.classList.remove('active');
      }
    }

    circle.addEventListener('click', openMenu, false);

    win.addEventListener('click', closeMenu, false);

    // Scroll to hash
    // Add smooth scrolling to all links
    $('a.anchor').on('click', function(event) {
        //set hash
        var hash = window.location.hash;
        // Make sure this.hash has a value before overriding default behavior
        if (hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
             hash = this.hash;
            // Offset the the title
             var titleOffset = 60;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html,body').animate({
                scrollTop: $(hash).offset().top + titleOffset //offset top by 60px
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // Validate email
    function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    // SendGrid Code
    function sendFormData() {

      var EMAIL= $('input[name*="email"]').val();
      var FNAME= $('input[name*="first_name"]').val();
      var LNAME= $('input[name*="last_name"]').val();
      var MESSAGE= $('textarea[name*="message"]').val();
      var VARS = 'email='+EMAIL+'&message='+MESSAGE+'&fname='+FNAME+'&lname='+LNAME;

      //stop the form from submitting normally
      event.preventDefault();

      //send the data using post with element values

      $.ajax({
        type: 'POST',
        url: 'sendgrid/p.php',
        data: VARS,
        cache: false,
        success: function() {
          return;
        }
      })
      .done(function(data){
        console.log(data);
      });
    }

    function validate() {
      var EMAIL= $('input[name*="email"]').val();
      var FNAME= $('input[name*="first_name"]').val();
      var LNAME= $('input[name*="last_name"]').val();
      var MESSAGE= $('textarea[name*="message"]').val();
      $('.og__contact__error').text('');
      $('.og__contact__success').text('');
      event.preventDefault();

      if( FNAME === null && LNAME === null && EMAIL === null  && MESSAGE === null) {
        return false;
      }

      if( FNAME === null) {
        $('.og__contact__error').text('Please enter your first name').fadeIn();
        return false;
      }

      if( FNAME === null) {
        $('.og__contact__error').text('Please enter your last name').fadeIn();
        return false;
      }

      if(validateEmail(EMAIL) && FNAME && LNAME && MESSAGE) {
        sendFormData();
        $('form').text('');
        $('.og__contact__success').text('Email sent, thank you!').fadeIn();
        return false;
      } else {
        $('.og__contact__error').text('Please enter a valid email.').fadeIn();
        return false;
      }
    }

    $('form').bind('submit', validate);

    //Headhesive
    // Options
    var options = {

        offset: '.og__recommendations', // OR — offset: '.classToActivateAt',

        // Custom classes
        classes: {
            // Cloned elem class
            clone: 'banner--clone',
            // Stick class
            stick: 'banner--stick',
            // Unstick class
            unstick: 'banner--unstick'
        }
    };

    // Create a new instance of Headhesive.js and pass in some options
    var header = new Headhesive('.banner', options );  // jshint ignore:line
    var url = Math.floor((Math.random() * 33) + 1);
    var links = 'images/' + url + '.jpg';

    $('#splash-background').append('<div id="splash-back" style="background-image:url('+links+')"></div>')
    .hide()
    .fadeIn(5000);

    $('.social img, .avatar img, .title').hide();

    function animateCss() {
    	$('.header').addClass('animated flipInX')
    		.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    			$('.social img, .avatar img, .title')
    				.show()
    				.addClass('animated bounceIn');
    		});
    }

    animateCss();


    // Vue.js
    var vm = new Vue({  // jshint ignore:line

        el: '#app',
        data: {
            year: '',
            icons: {
                code: 'fa-heart',
                git: 'fa-github',
                snapchat: 'fa-snapchat-ghost',
                drupal: 'fa-drupal',
                wordpress: 'fa-wordpress'
            },
            favorites: ''
        },

        ready: function() {
            this.getYear();
            this.getIcon();
            this.setTheInterval();
            this.typeInit();
        },

        methods: {
            getYear: function () {
                var getYear = new Date();
                this.$set('year',getYear.getFullYear());
            },
            getIcon: function () {

                var arr = [];

                for (var i in this.icons) {
                    arr.push(i);
                }
                this.$set('favorites',_.sample(arr));  // jshint ignore:line
            },
            setTheInterval: function () {

                this.$nextTick(function () {
                    setInterval(function() {
                        vm.getIcon();
                    }, 2000);
                });
            },
            typeInit: function() {
              window.setTimeout(function(){
                console.log('wt');
                $('#typed').typed({
                  stringsElement: $('#typed-strings'),
                   loop: true,
                   cursorChar: '_',
                   backDelay: 800,
                   startDelay: 200,
                });
              },1000);
            }
        }
    });
    //Scroll reaveal
    window.sr = ScrollReveal().reveal('section, .og__recommendations__item, .og__profile , .og__contact ');  // jshint ignore:line
});
