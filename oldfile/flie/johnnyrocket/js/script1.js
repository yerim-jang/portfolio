$(function(){

	$('.gnb_btn').click(function(){
		$('.gnb_list').show();
	});
    $('.close').click(function(){
		$('.gnb_list').hide();
	});//gnb

	$('.bxslider').bxSlider({
		adaptiveHeight: true,
		auto: true,
		speed: 300,
		controls: false
		});//slider

	$('.top_search').click(function(){
		$('.searchbar').stop().slideToggle();
		return false
	});//searchbar 

});