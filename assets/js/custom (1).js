/* ----- Custom Scripts for Kaline template ----- */

jQuery(function($) {
    "use strict";


/*----- Preloader ----- */

    $(window).load(function() {
    		setTimeout(function() {
            $('#loading').fadeOut('slow', function() {
            });
        }, 700);
    });


/* --------- Wow Init -------*/

new WOW().init();


/* ---------- Justified Gallery ------ */

$('#basicExample').justifiedGallery({
rowHeight : 320,
lastRow : 'nojustify',
captions: false,
margins : 15
});
/*----------------------------
------- Owl Carousel -------
-----------------------------*/

$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
  	items:1,
	nav:false,
  	dots: true,
	singleItem: true,
	autoHeight:true
})
/*----------------------------
------- Isotope Init -------
-----------------------------*/

$( window ).load(function() {

var $container = $('.portfolio-container');
$container.isotope({
	filter: '*',
});

$('.portfolio-filter a').on('click', function () {
	$('.portfolio-filter .active').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$container.isotope({
			filter: selector,
			animationOptions: {
					duration: 500,
					animationEngine: "jquery"
			}
	});
	return false;
});

});


});
