$(document).ready(function(){


 $('#cause__slider').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    mouseDrag:false
	});


$('.header__mouse').on('click', function(){
$('body,html').animate({scrollTop:$('.service').offset().top - 69},800);
return false; 
});



var iheight=$(window).height()-129;
$(window).scroll(function(){
        if ( $('body').scrollTop() > 0) {
            $('.header__top').addClass('fixed');
            $('.header__bottom').addClass('fixed');
        }
        else {
            $('.header__top').removeClass('fixed');
            $('.header__bottom').removeClass('fixed');
        }
    });

	 $('#partners_slider').owlCarousel({
    loop:true,
    margin:50,
    responsiveClass:true,
    dots: true,
    items: 6,
    nav:false,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:3
           
        },
        1000:{
            items:6,
            dots: true
            
        }
    }
});
  });



 








