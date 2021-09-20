$(function(){
	var	gnbA =$(".gnb > ul > li > a");
	var sub = $(".gnb > ul > li > ul");
	gnbA.on("mouseenter focus",function(){
			sub.hide().prev().removeClass('on');
			$(this).addClass("on").next().show();
	});

	$(".gnb > ul > li > ul").on("mouseleave focus",function(){
		sub.hide().prev().removeClass("on");
	});



	$(function(){

	 $('.btn').click(function(){
		  $('.m_menu').slideToggle();
	 });

	 $('.mgnb').click(function(){
	   $(this).children('.sub2').stop().slideToggle(); 
	   $(this).siblings().children('.sub2').stop().slideUp();	
	 });
	});
	
});