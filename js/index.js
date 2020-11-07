$(function(){
	setInterval(function(){
		var height = $("#brand-bg>img").height();
		$("#brand").height(height);
		$(window).resize(function(){
			var height = $("#brand-bg>img").height();
			$("#brand").height(height);
		})
	})
	
	$("#search>em").click(function(){
		/*$("#search").toggleClass("search");*/
		$("#top-header>div").toggleClass("div-padding");
		$("#search>input").toggleClass("input-click");
		$("#search>span").toggleClass("search-span");
		
	});
	
	
	$(window).scroll(function(){
		if($(window).scrollTop()>=100){
			$("#top-header").addClass("top-header");
			$("#header-title span").css("opacity","1");
		}else{
			$("#top-header").removeClass("top-header");
			$("#header-title span").css("opacity","0");
		}
	});
	
	
	$(window).scroll(function(){
		if($(window).scrollTop()>=300){
			$("#return-Top").stop().animate({right:"20px"},200);
		}else{
			$("#return-Top").stop().animate({right:"-100px"},200);
		}
	});
	$("#return-Top").click(function(){
		$("html,body").animate({scrollTop:'0px'},800);
	});
	
});