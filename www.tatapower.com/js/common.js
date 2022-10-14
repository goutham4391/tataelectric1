// JavaScript Document	

$(function(){
	
	$('.navWraper').parent('div').prepend('<a href="#" class="menu-toggle"></a>');
	
	$('#main-nav').find('li  a').each(function() {
				if ($(this).next().length > 0) {
					$(this).parent('li').addClass('has-sub');
				}
			});
			
			
		$('.has-sub').children('ul.second-level').each(function(){
			$(this).attr('deta-height',$(this).outerHeight());
			})	
			
		
		var calHeight = function(a){
				a.find('ul.third-level').each(function(){
				 var totalHeight = 0;
				  $(this).children().each(function(){
					  totalHeight += $(this).outerHeight();
				  });
				 var parentHeight = a.find('ul.second-level').attr('deta-height');
				 $(this).parent().attr('deta-parentheight',parentHeight);
				 $(this).parent().attr('deta-height',totalHeight);
				})
			} 
			
  			var resetTriggers = function() {
				$('#main-nav').find('li').unbind('mouseenter');
				$('#main-nav').find('li').unbind('mouseleave');				
				$('#main-nav .second-level').find('li').unbind('mouseenter');
				$('#main-nav .second-level').find('li').unbind('mouseleave');
			}
			
			var setTriggers = function() {
				$('#main-nav').children('li').on('mouseenter', function(){
					$(this).addClass('hover');
					$(this).children('ul').stop(true, true).slideDown(250);
					calHeight($(this));				
				});
				
				$('#main-nav').children('li').on('mouseleave', function(){
					$(this).removeClass('hover');
					$(this).children('ul').stop(true, true).slideUp(250);
				});
				
				$('#main-nav .second-level').children('li').on('mouseenter', function(){
					$(this).addClass('hover');
					$(this).children('ul').addClass('tlShow');
					/* if($(this).attr('deta-height')-10>$(this).attr('deta-parentheight')){
						$(this).parent().height($(this).attr('deta-height'));
						}else{
							$(this).parent().css('height','auto');
							} */
				});
				
				$('#main-nav .second-level').children('li').on('mouseleave', function(){
					$(this).removeClass('hover');
					$(this).children('ul').removeClass('tlShow');
					$(this).parent().css('height','auto');
				});
			}	
			
			
			$('.menu-toggle').on('click', function() {
				//e.preventDefault();
				$(this).next().stop(true, true).slideToggle(250);
				//nav.toggleClass('active');
			});
						
			windowCheck();
			
			$('.subnavTrigger').on('click', function(e) {
				e.preventDefault();
				$(this).next('ul').stop(true, true).slideToggle(250);
				$(this).toggleClass('open');
				return false
			});
			
			
			function windowCheck() {				
				
				if($(window).width()<1300){
					
					resetTriggers();
					$('#main-nav').addClass('mob');
					$('#main-nav').removeClass('dextop');
					
					$('#main-nav > li > a').each(function() {
						if ($(this).next().length > 0) {
							$(this).addClass('subnavTrigger');
							$(this).append('<i class="mob-nab-toggle"></i>');
						}
					});
					$('.navWraper').hide();
					
					}else{
					$('#main-nav').addClass('dextop');
						$('#main-nav').removeClass('mob');
						
						$('#main-nav').find('li  a').each(function() {
						$(this).removeClass('subnavTrigger');
						});
						$('.navWraper').show();
					
						resetTriggers();
					setTriggers();
						}
				
			}//windowCheck
			

			$(window).on('resize', function() {
				//windowCheck();
			});	
			
			
			/* mobile footer sitemap show hide start */
			  $(".sitemap-cont").clone().appendTo(".sitemap-cont2");
			  $(".customer-centres p").clone().appendTo(".customer-centres2");
			  $(".sm4").clone().appendTo(".customer-centres2");
			  $(".footer-link a").clone().appendTo(".footer-link2");
			  
			  $('#sitemapbutton').click(function() {
			  if ($("#sitemapview").is(":hidden")) {
			  $("#sitemapview").slideDown("slow");
			  $(".copyright aside .sitemap a span").removeClass("opt-icon");
			  $(".copyright aside .sitemap a span").addClass("opt-icon2");
			  } else {
			  $("#sitemapview").slideUp("slow");
			  $(".copyright aside .sitemap a span").removeClass("opt-icon2");
			  $(".copyright aside .sitemap a span").addClass("opt-icon");
			  }
			  $("html, body").animate({ scrollTop: $(document).height() }, 1000);
			  return false;
			  });
			/* mobile footer sitemap show hide end */	
			
			$('#groupSites').click(function(){
				$(this).next().slideToggle();
				})	

})

 $(window).on("load",function(){
            $(".third-level").mCustomScrollbar();
        });




$(function(){
	
 var pageName = (function() {
		  var a = window.location.href,
		  b = a.lastIndexOf("/");
		  return a.substr(b + 1);
	  } ());
	
	
var pageLink = []; 
$('.desktop').find("a").each(function() {
			var $a = $(this).attr('href');
	      var $b = $a.lastIndexOf("/");
		  var $c = $a.substr($b + 1);	
            pageLink.push($c);
        });
        for (i = 0; i < pageLink.length; i++) {
            if (pageName == pageLink[i]) {
				$(".desktop > li:nth-child("+(i+1)+")").addClass('navActive');
            }
        }
		
	
	
$('.menu50 >  strong').click(function(){
	$(this).next().slideToggle();
	})
})



