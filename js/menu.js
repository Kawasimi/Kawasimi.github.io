// JavaScript Document

$(function(){
	$("#fork").click(function(){
		$("#menu").addClass("hide").removeClass("show");
		$("main").addClass("main-padding");
		$("#nav").show();
		$("#fork").hide();
	});
	
	$("#nav").click(function(){
		$("#menu").addClass("show").removeClass("hide");
		$("main").removeClass("main-padding");
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
	
});