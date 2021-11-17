$(document).ready(function(){
    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items:1

    });
    $("#sale .owl-carousel").owlCarousel({
        dots:true,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }

    });

});