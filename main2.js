require(['config'], function() {
	require(['cat'], function(cat) {
		console.log("loaded main2. about to log cat:");
		console.log(cat);
	});
});