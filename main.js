require(['config'], function() { 
	require(['cat', 'mouse', 'shapeshifter'], function(cat) {
		var methods = {};
		console.log("hey there! this is the main script. logging cat below:");
		console.log(cat);
		cat.initializeHunter("Gric");
	})
});