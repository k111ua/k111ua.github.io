(function($){
	$.fn.anchor = function(options){
		var defaults = {
			ieFreshFix: true,
			anchorSmooth: true,
			anchortag: "anchor",
			animateTime: 1000
		};
		var sets = $.extend({}, defaults, options || {});
		if(sets.ieFreshFix){
			var url = window.location.toString();
			var id = url.split("#")[1];
			if(id){
				var t = $("#"+id).offset().top;
				$(window).scrollTop(t);
			}	
		}
		$(this).each(function(){
			$(this).click(function(){
				var aim = $(this).attr(sets.anchortag).replace(/#/g,"");
				var pos = $("#"+aim).offset().top;
				if(sets.anchorSmooth){
					$("html,body").animate({scrollTop: pos}, sets.animateTime);	
				}else{
					$(window).scrollTop(pos);
				}
				return false;				   
			});	
		});
	};
})(jQuery);