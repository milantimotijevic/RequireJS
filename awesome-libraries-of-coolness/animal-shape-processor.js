define([], function() {
	var methods = {};
	
	methods.shapeshift = function (input){
	console.log("you have shapeshifted into a");
	switch(input){
		case 1: console.log("RABBIT!"); break;
		case 2: console.log("DEER!"); break;
		case 3: console.log("MOOSE ON THE LOOSE!"); break;
		case 4: console.log("MOSIC!");
	}
}
	
	return methods;
});