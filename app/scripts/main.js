$(window).load(function() {



    $('#splash-background').delay('3000',function(){
        var url = Math.floor((Math.random() * 33) + 1);
        var link = 'images/' + url +'.jpg';
        $('#splash-background').css('background-image', 'url('+ link +')');
    });





});