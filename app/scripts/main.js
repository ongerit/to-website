// jquery
$(window).load(function() {
    'use strict';
    //Scroll to hash

    // Add smooth scrolling to all links
    $('a').on('click', function(event) {

        //set hash
        var hash = window.location.hash;

        // Make sure this.hash has a value before overriding default behavior
        if (hash !== '') {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
             hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html,body').animate({
                scrollTop: $(hash).offset().top + 60 //offset top by 60px
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if
    });

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
    var link = 'images/' + url + '.jpg';

    $('#splash-background').append('<div id="splash-back" style="background-image:url('+link+')"></div>')
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
            }
        }
    });

    //Scroll reaveal

    window.sr = ScrollReveal().reveal('section, .og__recommendations__item, .og__profile , .og__contact ');  // jshint ignore:line


});
