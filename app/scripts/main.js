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

var vm = new Vue({
        el: '#app',
        data: {
            copyright: ' Thomas Ongeri',
            year: ''
        },
        methods: {
            getYear: function () {
                var getYear = new Date;
                this.$set('year',getFullYear(getYear));
            }
        }
    })


});


