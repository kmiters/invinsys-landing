$(window).resize(function(){

  var heroTypo = $(".hero__typography");

	heroTypo.css({
		position:'absolute',
		left: ($(window).width() - heroTypo.outerWidth())/2,
		top: ($(".hero").height() - heroTypo.outerHeight())/2
	});

});

// To initially run the function:
$(window).resize();
