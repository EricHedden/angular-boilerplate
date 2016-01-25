(function() {

  'use strict';

    // Pass the usersMock to the app
	angular
	    .module('app')
	    .run(usersMock);


    // Inject dependecies in the usersMock
	usersMock.$inject = ['mockHelper'];


	// Define the usersMock
    function usersMock(mockHelper) {

    	// Intercept all the states and add them to the routing
    	mockHelper.configureMocks(getMocks());
    }


    // Define the getMocks
    function getMocks() {

		return [{
			
		    method: 'GET',
		    url: '/api/v1/users/',
		    respond: function(data){ console.log('al'); return data; }
		}]
	}




})();
