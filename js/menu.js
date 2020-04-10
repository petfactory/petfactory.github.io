$(document).ready(function(){

    // $('#menu-wrap').toggleClass('closed');
    
    $('.mobile-menu-trigger').click(function(){
        $('#menu-wrap').toggleClass('closed');
        // console.log(12);
    });


    /*
    $(window).scroll(function(){
    	
    	var fade_height = 470;
    	var offset = 0;
    	// var alpha = Math.min(.75, (($(window).scrollTop()-offset) / fade_height));
        var alpha = Math.min(1.0, (($(window).scrollTop()-offset) / fade_height));
    	console.log(alpha, $(window).scrollTop())
    	$("#header-bg-fade").css("opacity", alpha);
  	});
    */

});

