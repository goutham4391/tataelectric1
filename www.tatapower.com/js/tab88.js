// JavaScript Document
(function($) {
  $.fn.kristab = function(options) {
	  
	   var settings = $.extend({
            activeClass:"tabActive",
			mobDestroyTab:false,
			breakpoint:765,
			tabNavToDropMenu:false,
			tabNavDropMenuClass:"tabNavDropMenu",
			selectText:"Select",
			mobTabHeadShow:true,
			mobTabHeadClass:"",
			callback:function(){}
            }, options);
			
			
    return this.each(function() {
		
		var $this = $(this);
		var kid = $this.children();
		
		var $z = [];
		kid.each(function(){
			$z.push($(this).text())
			})
		
		if(settings.mobDestroyTab==false){
		$this.children(':first').addClass(settings.activeClass);
		$this.next().children().hide();
		$this.next().children(':first').show();
		}else{
			if($(window).width()>settings.breakpoint){
				$this.children(':first').addClass(settings.activeClass);
		$this.next().children().hide();
		$this.next().children(':first').show();
			}else{
				
				if(settings.tabNavToDropMenu==false){
				$this.hide();
				$this.next().children().each(function(i){
					  if(settings.mobTabHeadShow==true){
					  $(this).prepend("<h2 class='"+settings.mobTabHeadClass+"'>"+$z[i]+"</h2>");
					  }
					})
				}else{
					$this.hide();
					$this.next().children().each(function(i){
						if(settings.mobTabHeadShow==true){
					    $(this).prepend("<h2 class='"+settings.mobTabHeadClass+"'>"+$z[i]+"</h2>");
						}
					})
					$this.before("<div class='"+settings.tabNavDropMenuClass+"'><Strong>"+settings.selectText+"</strong><ul style='display:none'></ul></div>")
					for(var i=0; i<$z.length; i++ ){
						$this.prev().find('ul').append("<li>"+$z[i]+"</li>")
						}
					$this.next().children().hide();
		$this.next().children(':first').show();
					
					}
					
				}
			
			}
				
		kid.click(function(){
			 var findtabcont = $(this).index()+1;
			 if($this.next().children(':nth-child('+findtabcont+')').is(':visible')==false){
		$this.next().children().hide();
		kid.removeClass(settings.activeClass);
		  }
		 $this.next().children(':nth-child('+findtabcont+')').fadeIn(function(){
			setTimeout(function(){settings.callback()},100);
			 }); 
			$(this).addClass(settings.activeClass);
			
		})
		
		$this.prev().find('strong').on('click',function(){
			$(this).next().slideToggle();
			})
			
		$this.prev().find('li').on('click',function(){
			var findtabcont = $(this).index()+1;
			if($(this).parent().parent().next().next().children(':nth-child('+findtabcont+')').is(':visible')==false){
		$(this).parent().parent().next().next().children().hide();
		
		  }
		 $(this).parent().parent().next().next().children(':nth-child('+findtabcont+')').fadeIn(function(){
			setTimeout(function(){settings.callback()},100);
			 }); 
			$(this).parent().slideUp();
			
			
			})
		
    });
	
     }
})(jQuery);