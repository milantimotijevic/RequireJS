define([], function() {
	var methods = {};
	
	methods.catchThemLittleBastards = function() {
		console.log("all mice got caught! GG!");
	};
	
	methods.produceSqueakySound = function(factor) {
		console.log("SQUEEEAAAK!*" + factor);
	};
	
	methods.getMousePattern = function() {
		return "<><><><><><><>";
	};
	
	return methods;
});