$(document).ready(function(){
      $('.slider').bxSlider({
				mode:'horizontal',
				moveSliders:1,
				sliderMargin:40,
				infiniteLoop:true,
				minSliders:4,
				maxSliders:4,
				speed:500,
				auto:true,
				controls:false,
				responsive:true,
				pager:false
	  });//main

	   $('.m_main').bxSlider({
				mode:'horizontal',
				moveSliders:1,
				sliderMargin:40,
				infiniteLoop:true,
				minSliders:4,
				maxSliders:4,
				speed:500,
				auto:true,
				controls:false,
				responsive:true,
				pager:false
	  });//mobile main
	
	  $('.slider2').bxSlider({
				mode: 'horizontal',
				moveSlides: 1,
				slideMargin:30,
				infiniteLoop: true,
				slideWidth: 220,
				minSlides: 3,
				maxSlides: 5,
				speed:500,
				auto:true,
				controls:true,
				pager:false,
				responsive:true
	  });//제품 slide

		$('.s_slider').bxSlider({
				mode: 'horizontal',
				moveSlides: 2,
				slideMargin:25,
				infiniteLoop: true,
				slideWidth: 210,
				minSlides: 2,
				maxSlides: 4,
				speed:500,
				auto:true,
				controls:false,
				pager:false,
				responsive:true
	  });//sns slide
	
    });