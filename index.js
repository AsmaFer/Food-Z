$("#open-find").click(function(){
	$("#open-find, #information").fadeOut();
	$("#menu, #close-find").fadeIn();
})
$("#close-find").click(function() {
	$("#open-find, #information").fadeIn();
	$("#menu, #close-find").fadeOut();
})