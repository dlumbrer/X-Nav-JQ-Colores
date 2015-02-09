// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
	$('#orderedlist').css("background-color","green");
	$('#orderedlist > li').css("color","#FFA500");
	$('#orderedlist > li:last').hover(function(){$(this).css("color","rgb(255,255,255)")}, function(){$(this).css("color","#FFA500")});
});
