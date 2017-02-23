// console.log("nextprev");
var owl = $('.owl-carousel');
owl.owlCarousel({
	loop:true,
	margin:10,
	items : 4
});
$('.next_button').click(function() {
    owl.trigger('next.owl.carousel');
});
$('.prev_button').click(function() {
    
    owl.trigger('prev.owl.carousel');
});