$(document).ready(function(){
	$('.slider').bxSlider({
				mode:'horizontal',
				moveSliders:1,
				infiniteLoop:true,
				minSliders:4,
				maxSliders:4,
				speed:500,
				auto:true,
				controls:true,
				responsive:true,
				pager:false
	});//banner
	
	$('.site_slide').bxSlider({
				mode: 'horizontal',
				moveSlides: 2,
				slideMargin:0,
				infiniteLoop: true,
				slideWidth: 200,
				minSlides: 6,
				maxSlides: 6,
				speed:1000,
				auto:true,
				controls:true,
				pager:false,
				responsive:true
	});//site_slide
	
	$('.Search').click(function(){
		$('#searchwrap').stop().slideToggle();
		return false
	});//search_bar
	
	$(window).scroll(function(){
		if($(this).scrollTop() > 500){
			$('.top').fadeIn();
		}else{
			$('.top').fadeOut();
		}
	});

	$('.top').click(function(){
		$('html, body').animate({
			scrollTop:0
		},400);
		return false;
	});

});//script end
 