define(['mouse'], function(mouse) {
		var methods = {};
		
        methods.countCats = function(input) {
            console.log("there are too many cats lololololol!");
            console.log("nvm. actually the number of cats is: " + input);
        }

        methods.countCatsByColor = function(color) {
            console.log("eeeh, whatever... The color is " + color + " but I don't care!");
        }
		
		methods.initializeHunter = function(name) {
			console.log("Initializing: " + name);
			console.log("Obtained mouse pattern: " + mouse.getMousePattern());
		};
		
		return methods;
    });