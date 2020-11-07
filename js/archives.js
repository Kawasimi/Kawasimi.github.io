// JavaScript Document

$(function(){
	
	
	$("#fork").click(function(){
		$("#menu").addClass("hide").removeClass("show");
		$("main").css("padding-left","0%");
		$("#nav").show();
		$("#fork").hide();
	});
	
	$("#nav").click(function(){
		$("#menu").addClass("show").removeClass("hide");
		$("main").css("padding-left","12%");
		$("#nav").hide();
		$("#fork").show();
	});
	
	
	if($(window).width()<=1230){
		$("#nav").click(function(){
			$("#Mask").css({"opacity":"1","z-index":"100"});
			
		});
		$("#fork").click(function(){
			$("#Mask").css({"opacity":"0","z-index":"0"});
			
		});
	}
	
	
	
	setInterval(function(){
		var height2 = $("#archives").height();
		$("#container").height(height2);
		$(window).resize(function(){
			var height2 = $("#archives").height();
			$("#container").height(height2);
		});
	});
	
	
	
	$(window).scroll(function(){
		var width2 = $("#archives-nav").width();
		if($(window).scrollTop()>=200){
			
			$("#archives-nav").addClass("toc");
			$("#archives-nav").width(width2);
		}else{
			$("#archives-nav").removeClass("toc");
		}
	});
	
	
	$("#archives-nav ol li").eq(0).addClass('toc-click');
	$(window).scroll(function(){
		var h2count = $(".archive-text h2").length;
		for(var i = 0;i<h2count;i++){
			if($(window).scrollTop()>=$(".archive-text h2").eq(i).offset().top-100){
				$("#archives-nav ol li").eq(i).addClass('toc-click').siblings().removeClass('toc-click');
			}
			
		}
	});
	
	
});