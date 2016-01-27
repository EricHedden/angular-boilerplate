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
        

        // Object for user's mock
    	var users = {};


        /*
        |--------------------------------------------------------------------------
        | Contrsucts function
        |--------------------------------------------------------------------------
        |
        | All functions that should be init when the controller start
        |
        */

    	
    	setArrayUsers();																// Set the list of user
    	mockHelper.configureMocks(getMocks()); 											// Intercept all the api and add them to the httpBackend



	    /*
	    |--------------------------------------------------------------------------
	    | Functions
	    |--------------------------------------------------------------------------
	    |
	    | Declaring all functions used in the usersMock
	    |
	    */


		// Function for destroy users API
		function destroyRespond(method, url, data, headers, params) {

			users.splice(0,1);
			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

				// Return the success header
				return [header, {data: 'yes'}];
			}

			// Return the error header
			return [header, {error:'error'}];
		}


		// Function for index users API
		function indexRespond(method, url, data, headers, params) {

			console.log(users);
			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

				// Return the success header
				return [header, {data: 'yes'}];
			}

			// Return the error header
			return [header, {error:'error'}];
		}


		// Function for show users API
		function showRespond(method, url, data, headers, params) {

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

				// Return the success header
				return [header, {data: 'yes'}];
			}

			// Return the error header
			return [header, {error:'error'}];
		}


		// Function for store users API
		function storeRespond(method, url, data, headers, params) {

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

				// Return the success header
				return [header, {data: 'yes'}];
			}

			// Return the error header
			return [header, {error:'error'}];
		}


		// Function for update users API
		function updateRespond(method, url, data, headers, params) {

			// Get a random header
			var header = randomHeader();

			// If the result will be 200, execute the operation
			if(header == 200) {

				// Return the success header
				return [header, {data: 'yes'}];
			}

			// Return the error header
			return [header, {error:'error'}];
		}


		// Basic algorithm for random headers 
		function randomHeader(){

			// Generate a random number from 1 to 10
			var random = Math.floor((Math.random() * 10) + 1);

			// Return 500 if random is 10
			if(random == 10) {

				return 500;
			}

			// Return 404 if random is 9
			if(random == 9) {

				return 404;
			}

			// Return 200
			return 200;
		}


		// Function that pass the array that will create the httpBackend
	    function getMocks() {

	    	// Object to pass for fake API
			return [{

				label: 'destroy',
			    method: 'DELETE',
			    url: /\/api\/v1\/users\/(d*)/, //  Why '/api/v1/users/:id' not works here!?
			    respond: destroyRespond
			
			},{

				label: 'index',
			    method: 'GET',
			    url: '/api/v1/users/',
			    respond: indexRespond
			
			},{

				label: 'show',
			    method: 'GET',
			    url: /\/api\/v1\/users\/(d*)/, //  Why '/api/v1/users/:id' not works here!?
			    respond: showRespond
			
			},{

				label: 'store',
			    method: 'POST',
			    url: '/api/v1/users/',
			    respond: storeRespond
			
			},{

				label: 'update',
			    method: 'PUT',
			    url: /\/api\/v1\/users\/(d*)/, //  Why '/api/v1/users/:id' not works here!?
			    respond: updateRespond
			}];
		}


		// Fucntion for set the array 
		function setArrayUsers() {

			return users = [{name: 'A'}, {name: 'B'}, {name: 'C'}];
		}
	}

})();
