// JavaScript Document

/////// banner slider ////////	
$(function(){
$('.milestone-year').slick({
		dots: false,
		dotsClass: 'banner-dots5',
	   customPaging: function(slider, i) {
    return '<span data-role="none">' + (i + 1) + '</span>';
	},
		autoplay: false,
		arrows:true ,
		prevArrow: '<span href="" data-role="none" class="pr_prev5">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="pr_next5">Next</span>',
		infinite: true,
		speed:500,
		cssEase: 'linear',
		pauseOnHover: false,
		//pauseOnDotsHover: true,
		slide: 'li',
		autoplaySpeed:5000,
		slidesToShow:1,
		slidesToScroll:1,
	
	});	
	
	
	
	
	$(window).load(function(){
			
			$(".scroll3").mCustomScrollbar({
				scrollButtons:{
					enable:false
				},
				theme:"light-3",
				autoHideScrollbar:true
			});
		});
	
	
	
	
	
	
	
	
	
});//ready function end


