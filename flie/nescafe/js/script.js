//아코디언메뉴
$(document).ready(function(){
	$('.bar').click(function(){
		$('#gnb').stop().slideToggle();
	return false;
	});
	

	$('.main').click(function(){
		$(this).children('.sub').stop().slideToggle(); 
		$(this).siblings().children('.sub').stop().slideUp();
		
 });
	/*$('.main').click(function(){
		$(this).children('.sub').stop().slideDown();//slideToggle을 slideDown으로 바꿔놨음. 0522 9:32
		$(this).siblings().children('.sub').stop().slideUp();
		return false; //return false때문에 a태그가 안먹힘
	 });
*/
	$('.s').click(function(){
		$('#searchWrap').stop().slideToggle(); return false
	}
	);
	//qna 아코디언메뉴
	$("section .qnaContents dt").click(function(){
	$(this).next().toggleClass("on");
	$(this).next().siblings("dd").removeClass("on");/*다른항목누르면 닫히게됨*/
	});

	//dd클릭
	$("section .qnaContents dd li").click(function(){
	//alert("dd");
	$(this).find("ul.answer").toggleClass("on");
	$(this).siblings().find("ul.answer").removeClass("on");
	});
	




	$('.vslider').bxSlider({
	mode: 'horizontal',
	moveSlides: 1,
	slideMargin: 0,
	infiniteLoop: true,
	slideWidth: 500,
	minSlides: 1,
	maxSlides: 1,
	auto: true,
	controls: false,
	pager:true,
	speed: 300
	});

	$('.sslider').bxSlider({
		mode: 'horizontal',
		moveSlides: 1,
		slideMargin: 10,
		infiniteLoop: true,
		slideWidth: 400,
		minSlides: 2,
		maxSlides: 2,
		speed: 400,
		auto:true,
		controls:false,
		pager:false	    
	});
});
