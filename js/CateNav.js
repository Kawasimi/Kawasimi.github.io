jQuery.CateNav=function(elem1){
		
		var addPoint=function(){
			var i1=i2=0;
			$(elem1).find('h2').each(function(){
				$(this).prepend('<a name="'+h2List[i1]+'"></a>');
				i1++;
			});
			
		};
		//点击锚点，跳转制定位置
		var clickPoint=function(){
			$(elem2+' a').click(function(e){
				e.preventDefault();
				$(elem2+' dd').removeClass('active');
				$(this).parent('dd').addClass('active');
				currObj=$("[name='"+$(this).attr('href').replace(/#/,'')+"']");
				offsetTop=currObj.offset().top;
				$('html,body').animate({
					scrollTop:offsetTop
				},500,'swing');
			});
		};
		//屏幕滚动，显示并选中锚点
		var scrollWin=function(){
		var windowTop=0;
			$(window).scroll(function(){
				windowTop=$(window).scrollTop();
				if(windowTop>=$(elem1).offset().top){
					$(elem2+' dl').slideDown(750);
				}else{
					$(elem2+' dl').slideUp(750);
				}
				$(elem2+' a').each(function(){
					currObj=$("[name='"+$(this).attr('href').replace(/#/,'')+"']");
					offsetTop=currObj.offset().top;
					if(windowTop>offsetTop){
						$(elem2+' dd').removeClass('active');
						$(this).parent('dd').addClass('active');
						return;
					}
				});
			});
		};
		var init=function(){
			addNav();
			addPoint();
			clickPoint();
			scrollWin();
		}
		init();
	}