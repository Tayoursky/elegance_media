$(document).ready(function() {


$(".nav_button").click(function() {
        $(".header_nav ul").slideToggle();
    });


// console.log("nextprev");
var owl = $('.owl-carousel');
owl.owlCarousel({
	loop:true,
	margin:10,
	items : 4,
	responsive:{
        800:{
            items:4
        },
        650:{
            items:3
        },
        480:{
            items:2
        },
        0:{
            items:1
        },
   }
});
$('.next_button').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.prev_button').click(function() {
    
    owl.trigger('prev.owl.carousel');
});


});//end begin