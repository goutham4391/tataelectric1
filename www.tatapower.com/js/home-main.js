
	


$(function () {
    $('.social_slider').slick({
        slidesToShow: 4, // 3,
        slidesToScroll: 4,
		arrows: false,
        dots: true,
		dotsClass: 'socail-dots',
        centerMode: false,
        focusOnSelect: true,
		responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
	{
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
		//dots: false,
		autoplay: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });


    var filtered = false;
    $('.filterer').on('click', function(){
      var whichID = $(this).attr('id');
      console.log(whichID);
      if(whichID != 'js-filter-all'){
        if( $('.slider').hasClass('filtered') ){
          // $('.slider').removeClass('filtered');
          $('.slider-for').slick('slickUnfilter');
          $('.slider-nav').slick('slickUnfilter');
          $('.slider-for').slick('slickGoTo',0);
          $('.slider-nav').slick('slickGoTo',0);
          filtered = false;
        } else{
          $('.slider').addClass('filtered');
        }
        if(whichID === 'js-filter-facebook'){
          if (filtered === false) {
            $('.social_slider').slick('slickFilter','.facebook');
            $('.social_slider').slick('slickGoTo',0);
			 
            filtered = true;
          } else {
            $('.social_slider').slick('slickUnfilter');
            $('.social_slider').slick('slickGoTo',0);
            filtered = false;
          }
        } else if(whichID === 'js-filter-twitter'){
          if (filtered === false) {
            $('.social_slider').slick('slickFilter','.twitter');
            $('.social_slider').slick('slickGoTo',0);
            filtered = true;
          } else {
            $('.social_slider').slick('slickUnfilter');
            $('.social_slider').slick('slickGoTo',0);
            filtered = false;
          }
        } else if(whichID === 'js-filter-youTube'){
            if (filtered === false) {
              $('.social_slider').slick('slickFilter','.youTube');
              $('.social_slider').slick('slickGoTo',0);
              filtered = true;
            } else {
              $('.social_slider').slick('slickUnfilter');
              $('.social_slider').slick('slickGoTo',0);
              filtered = false;
            }
        }
		else if(whichID === 'js-filter-instagram'){
            if (filtered === false) {
              $('.social_slider').slick('slickFilter','.instagram');
              $('.social_slider').slick('slickGoTo',0);
              filtered = true;
            } else {
              $('.social_slider').slick('slickUnfilter');
              $('.social_slider').slick('slickGoTo',0);
              filtered = false;
            }
        }
		else if(whichID === 'js-filter-linkedin'){
            if (filtered === false) {
              $('.social_slider').slick('slickFilter','.linkedin');
              $('.social_slider').slick('slickGoTo',0);
              filtered = true;
            } else {
              $('.social_slider').slick('slickUnfilter');
              $('.social_slider').slick('slickGoTo',0);
              filtered = false;
            }
        }
      } else{
          $('.slider').removeClass('filtered');
          $('.social_slider').slick('slickUnfilter');
          $('.social_slider').slick('slickGoTo',0);
      }

    });
	$('.filter_list li:first-child a').addClass('active');
	$('.filter_list li a').on('click', function(){
		$('.filter_list li a').removeClass('active');
		$(this).addClass('active');
		});
});

$(function(e) {
    	if($(window).width()>1024){
	
            $('#fullpage').fullpage({
                verticalCentered: false,
				lockAnchors: true,
                sectionsColor: ['', '', ''],
				scrollOverflow: true,
				//scrollBar: true, this section is change 5 april for jarking in chrome
				//scrollOverflowOptions: {
//					scrollBar: true,
//			        //mouseWheel: true,
//			        //hideScrollbars: true,
//			        //fadeScrollbars: false,
//			       // disableMouse: true
//				},

onLeave: function(index, newIndex, direction){
					
				
					if(index == 2 && direction == 'down'){
						//if($(window).width()<1370){
							//alert(0);
						$('.center_video').css('display','block');
						$('.video').slick('setPosition');
						$('.video_thumb').slick('setPosition');
						$('.change_src').each(function(){
							$(this).attr("src",$(this).attr("data-src"));
							})
						//}
					}
					
					if(index == 4 && direction == 'down'){
						//if($(window).width()<1370){
							//alert(0);
						$('.center_feeds_slide').css('display','block');
						$('.social_slider').slick('setPosition');
						//$('.video_thumb').slick('setPosition');
						//$('.change_src').each(function(){
//							$(this).attr("src",$(this).attr("data-src"));
//							})
						//}
					}
					
										
					
				},
				
afterLoad: function() {
	 if($('.section').eq(0).nextAll().hasClass('active')){
		$('.cd-main-header').removeClass("active");		

	   }else{
	  $('.cd-main-header').addClass("active");			
	 }			
},
				

});
}
		
		
			
$('.moveSectionDown_new').click(function(e){
	e.preventDefault();
	$.fn.fullpage.moveSectionDown();
});

$('.moveSectionUp_new').click(function(e){
	e.preventDefault();
	$.fn.fullpage.moveTo(1);
});


if($(window).width()<1024){
    // jQuery plug-in
    $(window).scroll(function(){
  
					//if($(window).width()<1370){
						//alert(0);
					$('.center_video').css('display','block');
					$('.video').slick('setPosition');
					$('.video_thumb').slick('setPosition');
					$('.change_src').each(function(){
						$(this).attr("src",$(this).attr("data-src"));
						})

					$('.center_feeds_slide').css('display','block');
					$('.social_slider').slick('setPosition');

					
					
});
   };
	
		

});

$(function(){

//var bannerHeight = function(){
//	$('.bannerPanel').height($(window).height()-120);
//	}
//bannerHeight();
//$(window).on('resize',function(){
//	bannerHeight();
//	})

$('.letestSlider').slick({
		dots: true,
		dotsClass: 'banner-dots',		
	     customPaging: function(slider, i) {
    return '<span data-role="none">0' + (i + 1) + '</span>';
	},
		autoplay: true,
		arrows: false,
		infinite: true,
		speed:500,
		slide: 'li'
	});	



$( '#homeBannerSlider' ).on('init', function (event, slick, currentSlide, nextSlide) {
    $( '#homeBannerSlider' ).css( 'visibility', 'visible' );
	$('#homeBannerSlider li:first-child').find('*').each(function(){
$(this).addClass($(this).attr('deta-class'));
	})
	
	
	/* $('.gallery_paging').remove();
	 $('#homeBannerSlider').parent().append("<span class='gallery_paging'>01/</span>");
	 var $status = $('.gallery_paging');

        var i = (currentSlide ? currentSlide : 0) + 1,
		totalslide = slick.slideCount>=10 ? slick.slideCount : '0'+slick.slideCount;
		if(i>=10){
        $status.html('<b>'+i+'</b><em>'+totalslide+'</em>');
		}else{
			$status.html('<b>0'+i+'</b><em>'+totalslide+'</em>');
			} */
			
});//for loading smooth home banner 
	
	
	
	
	
$('.slide-news').slick({
	lazyLoad: 'ondemand',
		dots: false,
		dotsClass: 'banner-dots',
	    autoplay: true,
		arrows: true,
		prevArrow: '<span href="" data-role="none" class="hs_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="hs_next">Next</span>',
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		pauseOnHover: false,
		//pauseOnDotsHover: true,
		slide: 'li',
		autoplaySpeed:7000
	});
	
	
	
	
	
	
	
	
	
	
	
	
	

$('#homeBannerSlider').slick({
	lazyLoad: 'ondemand',
		dots: true,
	dotsClass: 'nation-dots',
		autoplay: true,
		arrows: false,
		//prevArrow: '<span href="" data-role="none" class="hs_prev22">Previous</span>',
		//nextArrow: '<span href="" data-role="none" class="hs_next22">Next</span>',
		//infinite: true,
		speed: 500,
		fade: true,
		//cssEase: 'linear',
		pauseOnHover: false,
		//pauseOnDotsHover: true,
		//slide: 'li',
		autoplaySpeed:7000
	});

	  
$('#homeBannerSlider').on('afterChange', function(event, slick, currentSlide, nextSlide){
$('#homeBannerSlider li.slick-active').find('*').each(function(){
$(this).addClass($(this).attr('deta-class'));
	})
	
	
	/* $('.gallery_paging').remove();
	 $('#homeBannerSlider').parent().append("<span class='gallery_paging'>01/</span>");
	 var $status = $('.gallery_paging');

        var i = (currentSlide ? currentSlide : 0) + 1,
		totalslide = slick.slideCount>=10 ? slick.slideCount : '0'+slick.slideCount;
		if(i>=10){
        $status.html('<b>'+i+'</b><em>'+totalslide+'</em>');
		}else{
			$status.html('<b>0'+i+'</b><em>'+totalslide+'</em>');
			} */
	
	
});

$('#homeBannerSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
$('#homeBannerSlider li.slick-active').find('*').each(function(){
$(this).addClass($(this).attr('deta-classL')).delay(500).queue(function(){/*### speed: 500, and .delay(500) should be same ###*/
    $('#homeBannerSlider li').not('.slick-active').find('*').removeClass($(this).attr('deta-classL')).dequeue();
});
$('#homeBannerSlider li').find('*').removeClass($(this).attr('deta-class'))
})
});

if($(window).width()>1300){
$('.banner_block').height($(window).height()-$(".top_sec_nav").height());
}

      $(".service_slider").slick({
       arrows: false,
         dots: true,
		dotsClass: 'banner-dots',
        infinite: false,
		   slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
			{
			  breakpoint: 1030,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				//dots: false,
				autoplay: false,
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
		  
		  
      });
	
	 $(".group_companies").slick({
         dots: true,
		dotsClass: 'nation-dots',
		 arrows: false,
		prevArrow: '<span href="" data-role="none" class="event_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="event_next">Next</span>',
        infinite: false,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1030,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				//dots: false,
				autoplay: false,
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
      });
	
	
	
	
$('.newsSlider').slick({
		dots: true,
		dotsClass: 'news2-dots',		
	     customPaging: function(slider, i) {
    return '<span data-role="none">0' + (i + 1) + '</span>';
	},
		autoplay: true,
		arrows: false,
		infinite: true,
		 slidesToShow: 1,
  slidesToScroll: 1,
		speed:500,
		slide: 'li',
		  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});	
$('.latestSlider').slick({
		dots: true,
		dotsClass: 'news-dots',		
	     customPaging: function(slider, i) {
    return '<span data-role="none">0' + (i + 1) + '</span>';
	},
		autoplay: true,
		arrows: false,
		infinite: true,
		 slidesToShow: 1,
  slidesToScroll: 1,
		speed:500,
		slide: 'li',
		  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});	
	  
$(".event_slider").slick({
       arrows: true,
		prevArrow: '<span href="" data-role="none" class="event_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="event_next">Next</span>',
         dots: false,
		dotsClass: 'nation-dots',
        infinite: false,
  autoplay: false,
  autoplaySpeed: 2000,
  vertical: true,
  slidesToShow: 2,
  slidesToScroll: 1
		  
		  
      });	
	
	
$(".investor_events").slick({
       arrows: true,
		prevArrow: '<span href="" data-role="none" class="event_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="event_next">Next</span>',
      	dots: false,
		autoplay: true,
		infinite: true,
		 slidesToShow: 1,
  		slidesToScroll: 1,
		speed:500,
		slide: 'li',
		  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		  
		  
      });	
	  
$(".latest-news").slick({
       arrows: true,
		prevArrow: '<span href="" data-role="none" class="event_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="event_next">Next</span>',
      	dots: false,
		autoplay: true,
		infinite: true,
		 slidesToShow: 1,
  		slidesToScroll: 1,
		speed:500,
		slide: 'li',
		  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		  
		  
      });
	
$(".latest-blogs").slick({
       arrows: true,
		prevArrow: '<span href="" data-role="none" class="blogs_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="blogs_next">Next</span>',
      	dots: false,
		autoplay: true,
		infinite: true,
		 slidesToShow: 1,
  		slidesToScroll: 1,
		speed:500,
		slide: 'li',
		  responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
		  
		  
      });
	
$('.video').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.video_thumb'
});
$('.video_thumb').slick({
	arrows: true,
		prevArrow: '<span href="" data-role="none" class="video_prev">Previous</span>',
		nextArrow: '<span href="" data-role="none" class="video_next">Next</span>',
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.video',
  dots: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


var cboxOptions2 = {
  width: '90%',
height: '60%',
maxWidth: '600px',
maxHeight: '400px',
 iframe: true 
}

$('.youtube_banner').colorbox(cboxOptions2);
$(".youtube_banner").colorbox();
$(window).resize(function(){
  $.colorbox.resize({
    width: window.innerWidth > parseInt(cboxOptions2.maxWidth) ? cboxOptions2.maxWidth : cboxOptions2.width,
    height: window.innerHeight > parseInt(cboxOptions2.maxHeight) ? cboxOptions2.maxHeight : cboxOptions2.height
  });
}); 

if($(window).width()<1080){
$('.mob_others').prependTo(".mobothers_link");
}

})//readyfunction end




$(function (){
		$(window).on("load",function(){

			$("#content-1").mCustomScrollbar({
				theme:"minimal"
			});

		});
})(jQuery);
	