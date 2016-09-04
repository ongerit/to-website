// jquery
$(window).load(function() {
    'use strict';

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
                android: 'fa-android'
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
                })
            }
        }
    });
    console.log(vm);
});

