$(function(){
	var gnbA =$(".gnb>li");
	var sub =$(".gnb>li>ul");

	var headerMin =$(".header").height();//90px

	var headerMax = sub.innerHeight() + headerMin;

	var state =false;
	var speed = 100;
	gnbA.mouseenter(function(){
		if(!state){
			$(".header").stop().animate({height:headerMax},speed,function(){
				sub.stop().fadeIn(speed);
			});		
			state = true;
		}
		$(this).find("sub").addClass("on");
	});//gnbA.mouseenter
	
	gnbA.mouseleave(function(){
		$(this).find("sub").removeClass("on");
	});

	$(".maingnb").mouseleave(function(){
		sub.stop().fadeOut(speed,function(){
			$(".header").stop().animate({height:headerMin},speed);
		});
		state = false;
	});

	$(".gnb li a").focus(function(){
		$(".header").stop().animate({height:headerMax},speed);
		sub.stop().fadeIn(speed);
	});blur(function(){
		$(".header").stop().animate({height:headerMin},speed);
		sub.stop().fadeOut(speed);
	});//gnb


	$('ul.tab-menu li').click(function() {
		var activeTab = $(this).attr('data-tab');
		$('ul.tab-menu li').removeClass('current');
		$('.tabPage').removeClass('current');
		$(this).addClass('current');
		$('#' + activeTab).addClass('current');
	});//tabmenu

});//script end