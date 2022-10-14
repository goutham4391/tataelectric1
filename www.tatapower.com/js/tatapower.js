//

//	function openSearch() {
//	  document.getElementById("myOverlay").style.display = "block";
//	}
//
//	function closeSearch() {
//	  document.getElementById("myOverlay").style.display = "none";
//	}

// mail	
	$(".mail ul").on("click", ".init", function() {
    $(this).closest(".mail ul").children('li:not(.init)').toggle();
	});

	var allOptions = $("ul").children('li:not(.init)');
	$(".mail ul").on("click", "li:not(.init)", function() {
		allOptions.removeClass('selected');
		$(this).addClass('selected');
		$(".mail ul").children('.init').html($(this).html());
		allOptions.toggle();
	});


// dark-mode 

	if (localStorage.getItem('alto_dark') == 'true') {
		document.documentElement.classList.add('dark-mode');
	}

// Quick link 
$(function(){

$('.quick-link-btn').click(function(){
	//if ($(window).width() <= 1366) {
	$(this).toggleClass('open-close');
	 if($(this).parent().css('right')=='-240px'){
     $(this).parent().animate({'right':'0px'});
	  //$(this).text('Close');
         }else{
			 $(this).parent().animate({'right':'-240px'}); 
			 //$(this).text('Open');     
       }
	//}
	})


	  $(".slide-toggle").hover(function(){
		$(".box").stop().animate({
		  width: "toggle"
		});
	  });

	

	  $(".slide-toggle2").hover(function(){
		$(".box2").stop().animate({
		  width: "toggle"
		});
	  });


	  $(".slide-toggle3").hover(function(){
		$(".box3").stop().animate({
		  width: "toggle"
		});
	  });

	

	  $(".slide-toggle4").hover(function(){
		$(".box4").stop().animate({
		  width: "toggle"
		});
	  });


	
$('.Count, .Count2').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});	


	
// Service slider
	
$("select").change(function(){
	$(this).find("option:selected").each(function(){
		var optionValue = $(this).attr("value");
		if(optionValue){
			$(".sec-box").not("." + optionValue).hide();
			$("." + optionValue).show();
		} else{
			$(".sec-box").hide();
		}
	});
});
	
	
})

